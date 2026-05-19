const FEATURED = [
  {
    name: "MedCore",
    title: "Foundy MedCore",
    description:
      "Comprehensive hospital and clinic management system with BPJS and Satu Sehat integration.",
    icon: "medcore",
    href: "#",
  },
  {
    name: "Mirai-e",
    title: "Foundy Mirai-e",
    description:
      "Smart home ecosystem that brings convenience, security, and efficiency to your home.",
    icon: "home",
    href: "#",
  },
  {
    name: "LifeOS",
    title: "Foundy LifeOS",
    description:
      "All-in-one life companion for planning, habits, budgeting, and better daily decisions.",
    icon: "lifeos",
    href: "#",
  },
];

function FeaturedIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    medcore: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 9V23M9 16H23" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" />
        <rect x="4" y="4" width="24" height="24" rx="6" stroke="#6B46C1" strokeWidth="2" />
      </svg>
    ),
    home: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M5 14L16 4L27 14V27H20V19H12V27H5V14Z" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    lifeos: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="#6B46C1" strokeWidth="2" />
        <path d="M16 10V16L20 20" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  };
  return icons[type] || null;
}

export function FeaturedProducts() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-foundy-border">
      <div className="container">
        {/* Section label */}
        <div className="inline-flex items-center gap-2.5 mb-6">
          <span className="w-2.5 h-2.5 bg-foundy-purple rounded-sm shrink-0" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-foundy-purple">
            Featured Products
          </span>
        </div>

        {/* Three-column grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED.map((product) => (
            <a
              key={product.name}
              href={product.href}
              className="group rounded-xl border border-foundy-border bg-white p-6 shadow-sm hover:border-foundy-purple/30 hover:shadow-md transition-all flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl border-2 border-foundy-purple/20 flex items-center justify-center mb-4 group-hover:border-foundy-purple/40 transition-colors">
                <FeaturedIcon type={product.icon} />
              </div>

              <h3 className="text-2xl font-bold text-foundy-heading group-hover:text-foundy-purple transition-colors">
                {product.title}
              </h3>
              <p className="mt-3 text-foundy-body leading-relaxed flex-1">
                {product.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-base font-medium text-foundy-purple group-hover:gap-2.5 transition-all">
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M4 4V10M4 4H10M4 4L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
