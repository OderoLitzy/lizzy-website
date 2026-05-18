import { render, screen } from "@testing-library/react";
import MissionBlock from "@/components/home/MissionBlock";

describe("MissionBlock", () => {
  it("renders the mission heading", () => {
    render(<MissionBlock />);
    expect(screen.getByRole("heading", { name: /why we exist/i })).toBeInTheDocument();
  });

  it("renders a substring of the mission statement text", () => {
    render(<MissionBlock />);
    expect(
      screen.getByText(/young people in Kenya/i)
    ).toBeInTheDocument();
  });

  it("renders the vision heading", () => {
    render(<MissionBlock />);
    expect(screen.getByRole("heading", { name: /vision/i })).toBeInTheDocument();
  });
});
