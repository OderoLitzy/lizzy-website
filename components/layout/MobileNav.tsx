"use client";

import Link from "next/link";
import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  links: { label: string; href: string }[];
}

export default function MobileNav({ open, onClose, links }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  return (
    <div
      className={[
        "fixed inset-0 z-50 md:hidden transition-opacity duration-300",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      ].join(" ")}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
      aria-hidden={!open}
    >
      <div
        className={[
          "absolute inset-0 bg-black/40 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onClick={onClose}
      />
      <div
        className={[
          "absolute right-0 top-0 h-full w-72 bg-white shadow-xl flex flex-col p-6",
          "transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <button
          aria-label="Close menu"
          className="self-end p-2 rounded-md text-stone-600 hover:bg-stone-100"
          onClick={onClose}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <nav className="mt-4 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-base font-medium text-stone-800 hover:text-teal-primary"
              onClick={onClose}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="mt-4 inline-flex justify-center px-4 py-2 rounded-full bg-amber-accent text-white font-semibold hover:bg-amber-light"
            onClick={onClose}
          >
            Donate
          </Link>
        </nav>
      </div>
    </div>
  );
}
