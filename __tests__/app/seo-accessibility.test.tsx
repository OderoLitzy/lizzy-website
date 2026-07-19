import { render, screen } from "@testing-library/react";
import type { Metadata } from "next";
import HomePage, { metadata as homeMetadata } from "@/app/page";
import AboutPage, { metadata as aboutMetadata } from "@/app/about/page";
import DonatePage, { metadata as donateMetadata } from "@/app/donate/page";
import EnrollPage, { metadata as enrollMetadata } from "@/app/enroll/page";
import InitiativesPage, {
  metadata as initiativesMetadata,
} from "@/app/initiatives/page";
import ProjectsPage, { metadata as projectsMetadata } from "@/app/projects/page";
import ServicesPage, { metadata as servicesMetadata } from "@/app/services/page";
import SkillsPage, { metadata as skillsMetadata } from "@/app/skills/page";
import VolunteerPage, {
  metadata as volunteerMetadata,
} from "@/app/volunteer/page";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { brandAssets } from "@/lib/brand-assets";

const siteUrl = "https://lizzy-website.vercel.app";
const titleSuffix = " | CHAKE — Change Ambassadors Kenya";
const sharedOgImage = `${siteUrl}${brandAssets.social.openGraph}`;
const sharedTwitterImage = `${siteUrl}${brandAssets.social.twitter}`;

const routes = [
  { path: "/", pageName: "Home", Component: HomePage, metadata: homeMetadata },
  {
    path: "/about",
    pageName: "About",
    Component: AboutPage,
    metadata: aboutMetadata,
  },
  {
    path: "/services",
    pageName: "Services",
    Component: ServicesPage,
    metadata: servicesMetadata,
  },
  {
    path: "/projects",
    pageName: "Projects",
    Component: ProjectsPage,
    metadata: projectsMetadata,
  },
  {
    path: "/skills",
    pageName: "Skills",
    Component: SkillsPage,
    metadata: skillsMetadata,
  },
  {
    path: "/initiatives",
    pageName: "Initiatives",
    Component: InitiativesPage,
    metadata: initiativesMetadata,
  },
  {
    path: "/enroll",
    pageName: "Apply for Training",
    Component: EnrollPage,
    metadata: enrollMetadata,
  },
  {
    path: "/volunteer",
    pageName: "Volunteer",
    Component: VolunteerPage,
    metadata: volunteerMetadata,
  },
  {
    path: "/donate",
    pageName: "Donate",
    Component: DonatePage,
    metadata: donateMetadata,
  },
];

function title(metadata: Metadata) {
  return metadata.title;
}

describe("public route SEO and accessibility contract", () => {
  it.each(routes)(
    "$path exports complete page metadata with canonical and shared Open Graph image",
    ({ path, pageName, metadata }) => {
      expect(title(metadata)).toBe(`${pageName}${titleSuffix}`);
      expect(metadata.description).toEqual(expect.any(String));
      expect(metadata.description).not.toHaveLength(0);
      expect(metadata.metadataBase).toEqual(new URL(siteUrl));
      expect(metadata.alternates?.canonical).toBe(`${siteUrl}${path === "/" ? "" : path}`);
      expect(metadata.openGraph?.url).toBe(`${siteUrl}${path === "/" ? "" : path}`);
      expect(metadata.openGraph?.title).toBe(`${pageName}${titleSuffix}`);
      expect(metadata.openGraph?.description).toBe(metadata.description);
      expect(metadata.openGraph?.images).toEqual([
        {
          url: sharedOgImage,
          width: 1200,
          height: 630,
          alt: "CHAKE — Change Ambassadors Kenya",
        },
      ]);
      expect(metadata.twitter).toEqual({
        card: "summary_large_image",
        title: `${pageName}${titleSuffix}`,
        description: metadata.description,
        images: [sharedTwitterImage],
      });
    }
  );

  it.each(routes)("$path renders exactly one h1", ({ Component }) => {
    render(<Component />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  });

  it("generates robots.txt rules that allow crawlers and point to the sitemap", () => {
    expect(robots()).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: `${siteUrl}/sitemap.xml`,
    });
  });

  it("generates a sitemap entry for every public route", () => {
    const entries = sitemap();

    expect(entries.map((entry) => entry.url)).toEqual(
      routes.map(({ path }) => `${siteUrl}${path === "/" ? "" : path}`)
    );
    for (const entry of entries) {
      expect(entry.lastModified).toEqual(expect.any(Date));
      expect(entry.changeFrequency).toBe("monthly");
      expect(entry.priority).toBeGreaterThan(0);
    }
  });
});
