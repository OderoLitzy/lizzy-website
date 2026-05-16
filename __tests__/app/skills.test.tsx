import { render, screen } from "@testing-library/react";
import SkillsPage from "@/app/skills/page";

describe("Skills Page", () => {
  beforeEach(() => {
    render(<SkillsPage />);
  });

  it("renders 'Skills Development' heading", () => {
    expect(
      screen.getByRole("heading", { name: /skills development/i })
    ).toBeInTheDocument();
  });

  it("renders 'Apply for Training' link to /enroll", () => {
    const link = screen.getByRole("link", { name: /apply for training/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/enroll");
  });
});
