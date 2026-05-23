import { fireEvent, render, screen } from "@testing-library/react";
import SiteHeader from "@/components/layout/SiteHeader";

const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Volunteer", href: "/volunteer" },
];

describe("SiteHeader", () => {
  it("renders the CHAKE logo text", () => {
    render(<SiteHeader />);
    expect(screen.getAllByText(/CHAKE/i).length).toBeGreaterThan(0);
  });

  it("renders a Donate link as the primary CTA", () => {
    render(<SiteHeader />);
    const donateLink = screen.getByRole("link", { name: /donate/i });
    expect(donateLink).toBeInTheDocument();
    expect(donateLink).toHaveAttribute("href", "/donate");
  });

  it("renders all main navigation links", () => {
    render(<SiteHeader />);
    for (const { label, href } of NAV_LINKS) {
      const link = screen.getByRole("link", { name: label });
      expect(link).toHaveAttribute("href", href);
    }
  });

  it("renders a mobile menu button", () => {
    render(<SiteHeader />);
    expect(
      screen.getByRole("button", { name: /open menu|toggle menu/i })
    ).toBeInTheDocument();
  });

  it("closes the navigation dialog with Escape and returns focus to the trigger", () => {
    render(<SiteHeader />);

    const menuButton = screen.getByRole("button", { name: /open menu/i });
    menuButton.focus();
    fireEvent.click(menuButton);

    const dialog = screen.getByRole("dialog", { name: /site navigation/i });
    expect(dialog).toHaveClass("pointer-events-auto");

    fireEvent.keyDown(document, { key: "Escape" });

    expect(dialog).toHaveClass("pointer-events-none");
    expect(menuButton).toHaveFocus();
  });

  it("promotes the header shadow after scrolling past 10 pixels", () => {
    Object.defineProperty(window, "scrollY", {
      value: 0,
      writable: true,
      configurable: true,
    });

    render(<SiteHeader />);

    const header = screen.getByRole("banner");
    expect(header).toHaveClass("shadow-sm");
    expect(header).toHaveClass("transition-shadow");
    expect(header).toHaveClass("duration-200");
    expect(header).not.toHaveClass("shadow-md");

    window.scrollY = 11;
    fireEvent.scroll(window);

    expect(header).toHaveClass("shadow-md");
    expect(header).not.toHaveClass("shadow-sm");
  });
});
