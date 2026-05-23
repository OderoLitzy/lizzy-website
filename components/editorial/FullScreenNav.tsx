"use client";

import Link from "next/link";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function FullScreenNav({ open, onClose, links }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (!open) return;
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div
      id="site-navigation-dialog"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      aria-hidden={!open}
      className={[
        "fixed inset-0 z-50 bg-teal-dark flex flex-col px-8 py-8",
        "transition-opacity duration-300",
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
      ].join(" ")}
    >
      {/* Header row */}
      <div className="flex items-center justify-between mb-12">
        <span className="font-serif font-bold text-2xl text-white tracking-tight">CHAKE</span>
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="text-white/70 hover:text-white transition-colors p-2"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex-1 flex flex-col justify-center gap-2">
        {links.map(({ label, href }, i) => (
          <Link
            key={href}
            href={href}
            onClick={onClose}
            className="font-serif text-4xl sm:text-5xl font-bold text-white/80 hover:text-white hover:translate-x-2 transition-all duration-200 py-2"
            style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Donate CTA */}
      <div className="pt-8 border-t border-white/10">
        <Link
          href="/donate"
          onClick={onClose}
          className="inline-flex items-center px-8 py-4 rounded-full bg-amber-accent text-white font-bold text-base hover:bg-amber-light transition-colors shadow-lg"
        >
          Donate Now
        </Link>
      </div>
    </div>
  );
}
