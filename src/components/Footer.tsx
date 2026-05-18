import { FoundyLogo } from "./Header";

const FOOTER_LINKS = {
  Products: [
    { label: "Foundy Strategy", href: "#strategy" },
    { label: "Foundy MedCore", href: "#" },
    { label: "Foundy Mirai-e", href: "#" },
    { label: "Foundy LifeOS", href: "#" },
    { label: "Foundy Games", href: "#" },
    { label: "Foundy Mobile", href: "#" },
  ],
  Insights: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Research", href: "#" },
    { label: "Guides", href: "#" },
  ],
  About: [
    { label: "Team", href: "#" },
    { label: "Mission", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-foundy-border bg-white">
      <div className="container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <FoundyLogo />
            <p className="mt-4 text-sm text-foundy-body leading-relaxed max-w-xs">
              Find the Why. Build What Matters. From strategy to systems, Foundy
              turns clarity into products that last.
            </p>
          </div>

          {/* Link groups */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-foundy-heading mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foundy-body hover:text-foundy-heading transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-foundy-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foundy-body">
          <span>
            &copy; {new Date().getFullYear()} Foundy Works. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foundy-heading transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foundy-heading transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
