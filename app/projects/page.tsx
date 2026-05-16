import ProjectsList from "@/components/projects/ProjectsList";
import { projects } from "@/lib/content/data";

export default function ProjectsPage() {
  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-teal-primary mb-12">
          Projects
        </h1>
        <ProjectsList projects={projects} />
      </div>
    </main>
  );
}
