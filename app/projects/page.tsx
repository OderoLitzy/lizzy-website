import type { Metadata } from "next";
import ProjectsList from "@/components/projects/ProjectsList";
import { projects } from "@/lib/content/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  pageName: "Projects",
  path: "/projects",
  description:
    "Browse CHAKE's active and upcoming community projects supporting education, health, leadership, and economic opportunity in Homa Bay County.",
});

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-teal-primary mb-12">
          Projects
        </h1>
        <ProjectsList projects={projects} />
      </div>
    </div>
  );
}
