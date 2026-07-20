import { render, screen, within } from "@testing-library/react";
import TeamGrid from "@/components/about/TeamGrid";
import { teamMembers } from "@/lib/content/data";

describe("TeamGrid", () => {
  it("renders approved portraits for team members", () => {
    render(<TeamGrid members={teamMembers} />);

    for (const member of teamMembers) {
      expect(member.image).toBeDefined();
      expect(screen.getByRole("img", { name: member.image?.alt ?? "" })).toHaveClass("object-cover");
    }
  });

  it("renders the CHAKE logo instead of initials when a team member portrait is missing", () => {
    render(
      <TeamGrid
        members={[
          {
            name: "Grace Achieng",
            title: "Community Liaison",
          },
        ]}
      />,
    );

    const image = screen.getByRole("img", {
      name: "CHAKE logo placeholder for Team portrait for Grace Achieng.",
    });
    expect(image).toHaveAttribute("src", expect.stringContaining("logo-primary.png"));
    expect(image).toHaveClass("object-contain");
    expect(image).not.toHaveClass("object-cover");
    expect(screen.queryByText("G")).not.toBeInTheDocument();

    const imageArea = image.parentElement;
    expect(imageArea).toHaveClass("relative");
    expect(imageArea).toHaveClass("w-16");
    expect(imageArea).toHaveClass("h-16");
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
