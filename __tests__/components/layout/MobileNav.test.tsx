import { fireEvent, render, screen } from "@testing-library/react";
import MobileNav from "@/components/layout/MobileNav";

const links = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Volunteer", href: "/volunteer" },
];

describe("MobileNav", () => {
  it("stays mounted but hidden from assistive technology when closed", () => {
    render(<MobileNav open={false} onClose={() => {}} links={links} />);

    const dialog = screen.getByRole("dialog", { hidden: true });
    expect(dialog).toHaveAttribute("aria-hidden", "true");
    expect(dialog).toHaveClass("opacity-0", "pointer-events-none");
    expect(screen.getByRole("button", { name: /close menu/i, hidden: true }).parentElement).toHaveClass(
      "translate-x-full"
    );
  });

  it("exposes the drawer and slide-in state when open", () => {
    render(<MobileNav open={true} onClose={() => {}} links={links} />);

    const dialog = screen.getByRole("dialog", { name: /mobile navigation/i });
    expect(dialog).toHaveAttribute("aria-hidden", "false");
    expect(dialog).toHaveClass("opacity-100", "pointer-events-auto");
    expect(screen.getByRole("button", { name: /close menu/i }).parentElement).toHaveClass("translate-x-0");
  });

  it("fires onClose when Escape is pressed while open", () => {
    const onClose = jest.fn();
    render(<MobileNav open={true} onClose={onClose} links={links} />);

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("fires onClose when the backdrop is clicked", () => {
    const onClose = jest.fn();
    render(<MobileNav open={true} onClose={onClose} links={links} />);

    fireEvent.click(screen.getByRole("dialog").firstElementChild as Element);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
