import type { Metadata } from "next";

export const siteUrl = "https://lizzy-website.vercel.app";
export const siteName = "CHAKE — Change Ambassadors Kenya";
export const titleSuffix = ` | ${siteName}`;
export const sharedOgImage = `${siteUrl}/og-image.svg`;

export const publicRoutes = [
  { path: "/", pageName: "Home", priority: 1 },
  { path: "/about", pageName: "About", priority: 0.8 },
  { path: "/services", pageName: "Services", priority: 0.8 },
  { path: "/projects", pageName: "Projects", priority: 0.8 },
  { path: "/skills", pageName: "Skills", priority: 0.8 },
  { path: "/initiatives", pageName: "Initiatives", priority: 0.8 },
  { path: "/enroll", pageName: "Apply for Training", priority: 0.7 },
  { path: "/volunteer", pageName: "Volunteer", priority: 0.7 },
  { path: "/donate", pageName: "Donate", priority: 0.7 },
] as const;

export function routeUrl(path: string) {
  return `${siteUrl}${path === "/" ? "" : path}`;
}

export function pageMetadata({
  pageName,
  path,
  description,
}: {
  pageName: string;
  path: string;
  description: string;
}): Metadata {
  const title = `${pageName}${titleSuffix}`;
  const url = routeUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      locale: "en_KE",
      images: [
        {
          url: sharedOgImage,
          width: 1200,
          height: 630,
          alt: siteName,
        },
      ],
    },
  };
}
