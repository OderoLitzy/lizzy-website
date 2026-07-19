import { cva } from "class-variance-authority";
import Image from "next/image";
import { getOptionalContentImage } from "@/lib/content/images";
import type { Project } from "@/lib/content/types";

const card = cva("rounded-2xl overflow-hidden border transition-all bg-white p-6 flex flex-col gap-3 relative", {
  variants: {
    status: {
      active: "border-stone-200 hover:border-teal-primary hover:shadow-md",
      upcoming: "border-amber-200 hover:border-amber-accent hover:shadow-md",
    },
  },
});

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const image = getOptionalContentImage(project.image, `Project image for ${project.title}`);

  return (
    <article className={card({ status: project.status })}>
      <div className="-m-6 mb-3 relative aspect-[4/3] bg-stone-100">
        <Image
          src={image.image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className={image.objectFitClassName}
        />
      </div>
      {project.status === "upcoming" && (
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
