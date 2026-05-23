import { render, screen } from "@testing-library/react";
import TeamGrid from "@/components/about/TeamGrid";
import { teamMembers } from "@/lib/content/data";

describe("TeamGrid", () => {
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
