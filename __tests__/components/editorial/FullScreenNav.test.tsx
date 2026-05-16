import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FullScreenNav from "@/components/editorial/FullScreenNav";

const links = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Volunteer", href: "/volunteer" },
];

describe("FullScreenNav", () => {
  it("is not visible when closed", () => {
    render(<FullScreenNav open={false} onClose={() => {}} links={links} />);
    // Dialog element should be in DOM but hidden
    const dialog = screen.getByRole("dialog", { hidden: true });
    expect(dialog).toHaveAttribute("aria-hidden", "true");
  });

  it("is visible and accessible when open", () => {
    render(<FullScreenNav open={true} onClose={() => {}} links={links} />);
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(dialog).not.toHaveAttribute("aria-hidden", "true");
  });

  it("renders all navigation links when open", () => {
    render(<FullScreenNav open={true} onClose={() => {}} links={links} />);
    links.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("fires onClose when Escape key is pressed", () => {
    const onClose = jest.fn();
    render(<FullScreenNav open={true} onClose={onClose} links={links} />);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("fires onClose when close button is clicked", async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    render(<FullScreenNav open={true} onClose={onClose} links={links} />);
    await user.click(screen.getByRole("button", { name: /close/i }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("fires onClose when a nav link is clicked", async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    render(<FullScreenNav open={true} onClose={onClose} links={links} />);
    await user.click(screen.getByText("About Us"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("has aria-modal=true when open", () => {
    render(<FullScreenNav open={true} onClose={() => {}} links={links} />);
    expect(screen.getByRole("dialog")).toHaveAttribute("aria-modal", "true");
  });
});
