import { render, screen } from "@testing-library/react";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectsList from "@/components/projects/ProjectsList";
import { projects } from "@/lib/content/data";
import type { Project } from "@/lib/content/types";

describe("ProjectsList", () => {
  it("staggers project cards within each project section by 80ms", () => {
    render(<ProjectsList projects={projects} />);

    const activeProjects = projects.filter((project) => project.status === "active");
    activeProjects.forEach((project, index) => {
      const wrapper = screen.getByText(project.title).closest("article")?.parentElement;
      if (index === 0) {
        expect(wrapper).not.toHaveStyle({ animationDelay: "80ms" });
      } else {
        expect(wrapper).toHaveStyle({ animationDelay: `${index * 80}ms` });
      }
    });
  });

  it("keeps upcoming project cards credible with imagery and no disabled styling", () => {
    render(<ProjectsList projects={projects} />);

    const upcomingProjects = projects.filter((project) => project.status === "upcoming");
    for (const project of upcomingProjects) {
      const card = screen.getByText(project.title).closest("article");
      expect(screen.getByRole("img", { name: project.image?.alt })).toBeInTheDocument();
      expect(card).toHaveTextContent("Coming Soon");
      expect(card).not.toHaveClass("grayscale");
      expect(card).not.toHaveClass("opacity-70");
    }
  });

  it("keeps approved project photos cropped with object-cover", () => {
    const projectWithApprovedPhoto = projects.find((project) => project.image);

    expect(projectWithApprovedPhoto).toBeDefined();
    render(<ProjectCard project={projectWithApprovedPhoto as Project} />);

    expect(screen.getByRole("img", { name: projectWithApprovedPhoto?.image?.alt })).toHaveClass("object-cover");
  });

  it("renders the CHAKE logo in a stable image area when a project image is missing", () => {
    const projectWithoutImage: Project = {
      title: "Sponsor a Bag",
      description: "Provide school materials for a learner.",
      status: "active",
    };

    render(<ProjectCard project={projectWithoutImage} />);

    const image = screen.getByRole("img", {
      name: "CHAKE logo placeholder for Project image for Sponsor a Bag.",
    });
    expect(image).toHaveAttribute("src", expect.stringContaining("logo-primary.png"));
    expect(image).toHaveClass("object-contain");
    expect(image).not.toHaveClass("object-cover");

    const imageArea = image.parentElement;
    expect(imageArea).toHaveClass("relative");
    expect(imageArea).toHaveClass("aspect-[4/3]");
  });
});
