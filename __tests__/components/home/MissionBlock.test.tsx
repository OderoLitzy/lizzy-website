import { render, screen } from "@testing-library/react";
import MissionBlock from "@/components/home/MissionBlock";

describe("MissionBlock", () => {
  it("renders the 'Our Mission' heading", () => {
    render(<MissionBlock />);
    expect(screen.getByRole("heading", { name: /our mission/i })).toBeInTheDocument();
  });

  it("renders a substring of the mission statement text", () => {
    render(<MissionBlock />);
    expect(
      screen.getByText(/dignified and responsible community/i)
    ).toBeInTheDocument();
  });

  it("renders the 'Our Vision' heading", () => {
    render(<MissionBlock />);
    expect(screen.getByRole("heading", { name: /our vision/i })).toBeInTheDocument();
  });
});
