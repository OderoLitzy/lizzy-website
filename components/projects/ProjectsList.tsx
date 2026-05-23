import type { Project } from "@/lib/content/types";
import AnimatedSection from "@/components/animation/AnimatedSection";
import ProjectCard from "./ProjectCard";

interface ProjectsListProps {
  projects: Project[];
}

export default function ProjectsList({ projects }: ProjectsListProps) {
  const active = projects.filter((p) => p.status === "active");
  const upcoming = projects.filter((p) => p.status === "upcoming");

  return (
    <div className="space-y-16">
      {active.length > 0 && (
        <section>
          <h2 className="font-serif text-2xl font-bold text-teal-primary mb-6">
            Active Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {active.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 80}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </section>
      )}

      {upcoming.length > 0 && (
        <section>
          <h2 className="font-serif text-2xl font-bold text-teal-primary mb-6">
            Upcoming Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {upcoming.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 80}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
