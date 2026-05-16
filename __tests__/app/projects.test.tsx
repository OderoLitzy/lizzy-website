import { render, screen } from "@testing-library/react";
import ProjectsPage from "@/app/projects/page";
import { projects } from "@/lib/content/data";

describe("Projects Page", () => {
  beforeEach(() => {
    render(<ProjectsPage />);
  });

  it("renders the Projects heading", () => {
    expect(screen.getByRole("heading", { level: 1, name: /projects/i })).toBeInTheDocument();
  });

  it("renders all 4 active project titles", () => {
    const active = projects.filter((p) => p.status === "active");
    expect(active).toHaveLength(4);
    for (const project of active) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });

  it("renders all 4 upcoming project titles", () => {
    const upcoming = projects.filter((p) => p.status === "upcoming");
    expect(upcoming).toHaveLength(4);
    for (const project of upcoming) {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    }
  });

  it("renders Coming Soon badge for upcoming projects", () => {
    const badges = screen.getAllByText(/coming soon/i);
    expect(badges).toHaveLength(4);
  });
});
