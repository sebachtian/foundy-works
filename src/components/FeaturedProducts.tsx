const FEATURED = [
  {
    name: "MedCore",
    tag: "Healthcare",
    tagColor: "bg-purple-50 text-foundy-purple",
    description:
      "Clinic and hospital management with BPJS integration. Built for Indonesian healthcare providers that need reliability, compliance, and scale.",
    href: "#",
  },
  {
    name: "Mirai-e",
    tag: "Smart Living",
    tagColor: "bg-emerald-50 text-emerald-700",
    description:
      "Future-ready home and lifestyle systems that adapt to how you live and work. Automation, energy management, and intelligent environments.",
    href: "#",
  },
  {
    name: "LifeOS",
    tag: "Productivity",
    tagColor: "bg-blue-50 text-blue-700",
    description:
      "Systems for tracking habits, budget, goals, and personal growth across every dimension of life. Your operating system for a better life.",
    href: "#",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Section label */}
        <div className="inline-flex items-center gap-2.5 mb-6">
          <span className="w-2.5 h-2.5 bg-foundy-purple rounded-sm shrink-0" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-foundy-purple">
            Featured Products
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foundy-heading mb-4">
          What We&apos;re Building
        </h2>
        <p className="text-foundy-body text-lg leading-relaxed max-w-2xl mb-12">
          Flagship products that demonstrate our approach — purposeful design,
          scalable architecture, and real-world impact.
        </p>

        {/* Three-column grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {FEATURED.map((product) => (
            <a
              key={product.name}
              href={product.href}
              className="group rounded-xl border border-foundy-border bg-white p-6 shadow-sm hover:border-foundy-purple/30 hover:shadow-md transition-all flex flex-col"
            >
              {/* Category badge */}
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold uppercase tracking-wider w-fit ${product.tagColor}`}
              >
                {product.tag}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-foundy-heading group-hover:text-foundy-purple transition-colors">
                Foundy {product.name}
              </h3>
              <p className="mt-3 text-foundy-body leading-relaxed flex-1">
                {product.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foundy-purple group-hover:gap-2.5 transition-all">
                Learn more
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
