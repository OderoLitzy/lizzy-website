import { render, screen } from "@testing-library/react";
import AboutPage from "@/app/about/page";
import DonatePage from "@/app/donate/page";
import EnrollPage from "@/app/enroll/page";
import InitiativesPage from "@/app/initiatives/page";
import ProjectsPage from "@/app/projects/page";
import ServicesPage from "@/app/services/page";
import SkillsPage from "@/app/skills/page";
import VolunteerPage from "@/app/volunteer/page";

const pages = [
  { Page: AboutPage, heading: "About Us", eyebrow: "About CHAKE" },
  { Page: ServicesPage, heading: "Our Services", eyebrow: "What we offer" },
  { Page: ProjectsPage, heading: "Projects", eyebrow: "Community work" },
  { Page: SkillsPage, heading: "Skills Development", eyebrow: "Training pathways" },
  { Page: InitiativesPage, heading: "Our Initiatives", eyebrow: "Focus areas" },
  { Page: EnrollPage, heading: "Apply for Training", eyebrow: "Join a cohort" },
  { Page: DonatePage, heading: "Your Support Changes Lives", eyebrow: "Give with purpose" },
  { Page: VolunteerPage, heading: "Be the Change", eyebrow: "Get involved" },
] as const;

describe("non-home editorial heroes", () => {
  it.each(pages)("$heading uses the minimal services-style hero", ({ Page, heading, eyebrow }) => {
    render(<Page />);

    const hero = screen.getByRole("heading", { level: 1, name: heading }).closest("section");

    expect(hero).toHaveClass("bg-teal-dark");
    expect(hero).toHaveTextContent(eyebrow);
    expect(hero?.querySelectorAll("p")).toHaveLength(1);
    expect(hero?.querySelector("a")).not.toBeInTheDocument();
  });
});
