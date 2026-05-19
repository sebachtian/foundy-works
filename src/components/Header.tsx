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
          <a
            href="https://wa.me/6282258877977?text=Hello%2C%20I%27m%20interested%20in%20Foundy%20Works"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-base font-medium rounded-lg hover:bg-black/85 transition-colors"
          >
            Contact Us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2.5 2.5V11.5M2.5 2.5H11.5M2.5 2.5L11.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
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
            <a
              href="https://wa.me/6282258877977?text=Hello%2C%20I%27m%20interested%20in%20Foundy%20Works"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-black text-white text-base font-medium rounded-lg hover:bg-black/85 transition-colors mt-2"
            >
              Contact Us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 2.5V11.5M2.5 2.5H11.5M2.5 2.5L11.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function FoundyLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center ${className ?? ""}`}>
      <img
        src="/logo.png"
        alt="Foundy"
        className="h-8 md:h-10 w-auto"
      />
    </div>
  );
}
