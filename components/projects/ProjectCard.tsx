import type { Project } from "@/lib/content/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isUpcoming = project.status === "upcoming";

  return (
    <article
      className={`bg-white rounded-lg shadow p-6 flex flex-col gap-3 relative ${
        isUpcoming ? "grayscale opacity-75" : ""
      }`}
    >
      {isUpcoming && (
        <span className="absolute top-4 right-4 bg-amber-accent text-white text-xs font-semibold px-2 py-1 rounded">
          Coming Soon
        </span>
      )}
      <h3 className="font-semibold text-gray-900 text-lg pr-24">
        {project.title}
      </h3>
      <p className="text-gray-600 text-sm">{project.description}</p>
    </article>
  );
}
