import { render, screen } from "@testing-library/react";
import TeamGrid from "@/components/about/TeamGrid";
import { teamMembers } from "@/lib/content/data";

describe("TeamGrid", () => {
  it("renders approved portraits for team members", () => {
    render(<TeamGrid members={teamMembers} />);

    for (const member of teamMembers) {
      expect(member.image).toBeDefined();
      expect(screen.getByRole("img", { name: member.image?.alt ?? "" })).toBeInTheDocument();
    }
  });

  it("renders expertise summaries on collapsed profile cards", () => {
    render(<TeamGrid members={teamMembers} />);

    for (const member of teamMembers) {
      expect(member.expertise).toBeTruthy();
      expect(screen.getByText(member.expertise ?? "")).toBeInTheDocument();
    }
  });

  it("staggers each team member card by 80ms", () => {
    render(<TeamGrid members={teamMembers} />);

    teamMembers.forEach((member, index) => {
      const wrapper = screen.getByText(member.name).closest("article")?.parentElement;
      if (index === 0) {
        expect(wrapper).not.toHaveStyle({ animationDelay: "80ms" });
      } else {
        expect(wrapper).toHaveStyle({ animationDelay: `${index * 80}ms` });
      }
    });
  });
});
