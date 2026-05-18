"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import FullScreenNav from "@/components/editorial/FullScreenNav";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Volunteer", href: "/volunteer" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = isHome && !scrolled;

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          onHero
            ? "bg-white/85 backdrop-blur-sm border-b border-white/50"
            : "bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-md",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            className={[
              "font-serif font-bold text-xl tracking-tight transition-colors duration-300",
              onHero ? "text-teal-dark" : "text-teal-primary",
            ].join(" ")}
          >
            CHAKE
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={[
                  "text-sm font-medium transition-colors duration-300",
                  onHero ? "text-stone-700 hover:text-teal-primary" : "text-stone-700 hover:text-teal-primary",
                ].join(" ")}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/donate"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-amber-accent text-white text-sm font-semibold hover:bg-amber-light transition-colors"
            >
              Donate
            </Link>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className={[
                "p-2 rounded-md transition-colors",
                onHero ? "text-stone-700 hover:bg-stone-100" : "text-stone-600 hover:bg-stone-100",
              ].join(" ")}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <FullScreenNav open={open} onClose={() => setOpen(false)} links={navLinks} />
    </>
  );
}
