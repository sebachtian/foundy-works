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
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <FoundyLogo />
        </Link>

        {/* Desktop nav + CTA */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foundy-body hover:text-foundy-heading transition-colors inline-flex items-center gap-1"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-foundy-body">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-foundy-dark text-white text-sm font-medium rounded-lg hover:bg-foundy-dark/90 transition-colors"
          >
            Contact Us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-foundy-heading transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-foundy-heading transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-0.5 bg-foundy-heading transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
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
                className="text-sm font-medium text-foundy-body hover:text-foundy-heading transition-colors inline-flex items-center gap-1"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-foundy-dark text-white text-sm font-medium rounded-lg hover:bg-foundy-dark/90 transition-colors mt-2"
            >
              Contact Us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
    <div className={`flex items-end gap-1 ${className ?? ""}`}>
      {/* Purple arrow/chevron icon */}
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <rect x="2" y="4" width="16" height="14" rx="3" stroke="#6B46C1" strokeWidth="2" />
        <path d="M14 2L20 8M20 8L14 14" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-lg font-bold tracking-tight text-foundy-heading">
          Foundy
        </span>
        <span className="text-[10px] font-medium text-foundy-body tracking-wide">
          foundy.works
        </span>
      </div>
    </div>
  );
}
