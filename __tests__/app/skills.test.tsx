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

  it("staggers each training program card by 80ms", () => {
    const programTitles = [
      "Youth Entrepreneurship",
      "Agribusiness",
      "Money Management",
      "Digital Literacy",
    ];

    programTitles.forEach((title, index) => {
      const wrapper = screen.getByText(title).closest("article")?.parentElement;
      if (index === 0) {
        expect(wrapper).not.toHaveStyle({ animationDelay: "80ms" });
      } else {
        expect(wrapper).toHaveStyle({ animationDelay: `${index * 80}ms` });
      }
    });
  });
});
