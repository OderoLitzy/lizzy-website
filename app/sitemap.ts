import type { MetadataRoute } from "next";
import { publicRoutes, routeUrl } from "@/lib/seo";

const lastModified = new Date("2026-05-23T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: routeUrl(route.path),
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
