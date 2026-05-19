"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { label: "Strategy", href: "#strategy" },
  { label: "Products", href: "#products", hasDropdown: true },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#careers" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-foundy-border">
      <div className="container flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <FoundyLogo />
        </Link>

        {/* Desktop nav + CTA */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium text-foundy-heading hover:text-foundy-purple transition-colors inline-flex items-center gap-1"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-base font-medium rounded-lg hover:bg-black/85 transition-colors"
          >
            Contact Us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 2.5V11.5M2.5 2.5H11.5M2.5 2.5L11.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-foundy-heading transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foundy-heading transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foundy-heading transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-foundy-border bg-white">
          <nav className="container py-4 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foundy-heading hover:text-foundy-purple transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-black text-white text-base font-medium rounded-lg hover:bg-black/85 transition-colors mt-2"
            >
              Contact Us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 2.5V11.5M2.5 2.5H11.5M2.5 2.5L11.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function FoundyLogo({ className }: { className?: string }) {
  return (
    <div className={`flex flex-col ${className ?? ""}`}>
      {/* Top row: Foundy + icon + line */}
      <div className="flex items-end gap-0.5">
        <span className="text-xl font-bold tracking-tight text-foundy-heading leading-none">
          Foundy
        </span>
        {/* Arrow/chevron icon to the right of Foundy */}
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" className="shrink-0 -ml-0.5 mb-0.5">
          <path d="M2 2L10 8L2 14" stroke="#6B46C1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 2L16 8L8 14" stroke="#6B46C1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
        </svg>
        {/* Horizontal line extending right */}
        <div className="h-px bg-foundy-heading flex-1 min-w-[40px] self-end mb-1.5 ml-1" />
      </div>
      {/* Bottom: works */}
      <span className="text-[11px] font-medium text-foundy-heading tracking-wide leading-none mt-0.5">
        works
      </span>
    </div>
  );
}
