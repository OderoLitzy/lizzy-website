"use client";

import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileNav";

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

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif font-bold text-xl text-teal-primary tracking-tight">
            CHAKE
          </Link>

          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-stone-700 hover:text-teal-primary transition-colors"
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
              className="md:hidden p-2 rounded-md text-stone-600 hover:bg-stone-100"
              onClick={() => setOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <MobileNav open={open} onClose={() => setOpen(false)} links={navLinks} />
    </>
  );
}
