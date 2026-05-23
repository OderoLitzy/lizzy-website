import { render, screen } from "@testing-library/react";
import ProjectsList from "@/components/projects/ProjectsList";
import { projects } from "@/lib/content/data";

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
});
