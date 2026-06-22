import { render, screen, within } from "@testing-library/react";
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

  it("renders qualifications and background in native inline profile details", () => {
    render(<TeamGrid members={teamMembers} />);

    for (const member of teamMembers) {
      const card = screen.getByText(member.name).closest("article");
      expect(card).toBeInTheDocument();

      const details = card?.querySelector("details");
      expect(details).toBeInTheDocument();

      const summary = within(details as HTMLElement).getByText("Qualifications and background");
      expect(summary.tagName).toBe("SUMMARY");

      for (const qualification of member.qualifications ?? []) {
        expect(within(details as HTMLElement).getByText(qualification)).toBeInTheDocument();
      }

      for (const background of member.background ?? []) {
        expect(within(details as HTMLElement).getByText(background)).toBeInTheDocument();
      }
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
