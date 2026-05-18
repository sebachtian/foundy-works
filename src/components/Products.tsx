const FEATURED = [
  {
    name: "MedCore",
    tag: "Healthcare",
    description: "Clinic and hospital management with BPJS integration. Built for Indonesian healthcare providers.",
    color: "bg-foundy-100 text-foundy-700",
  },
  {
    name: "Mirai-e",
    tag: "Smart Living",
    description: "Future-ready home and lifestyle systems that adapt to how you live and work.",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    name: "LifeOS",
    tag: "Productivity",
    description: "Systems for tracking habits, budget, goals, and personal growth across every dimension of life.",
    color: "bg-blue-50 text-blue-700",
  },
  {
    name: "Games",
    tag: "Entertainment",
    description: "Interactive experiences built with purpose, blending fun with meaningful engagement.",
    color: "bg-amber-50 text-amber-700",
  },
  {
    name: "Mobile",
    tag: "Platform",
    description: "Cross-platform mobile solutions that bring Foundy's ecosystem to your pocket.",
    color: "bg-rose-50 text-rose-700",
  },
];

const ECOSYSTEM_LINKS = [
  { name: "Foundy Strategy", href: "#strategy" },
  { name: "Foundy MedCore", href: "#" },
  { name: "Foundy Mirai-e", href: "#" },
  { name: "Foundy LifeOS", href: "#" },
  { name: "Foundy Games", href: "#" },
  { name: "Foundy Mobile", href: "#" },
];

export function Products() {
  return (
    <section id="products" className="py-20 md:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-foundy-500">
              Our Ecosystem
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Featured Products
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Foundy builds scalable platforms across industries, from
              healthcare to smart living and AI experiences.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-foundy-600 hover:gap-2 transition-all"
            >
              Explore all products
              <span className="text-lg leading-none">&rarr;</span>
            </a>

            {/* Ecosystem nav */}
            <div className="mt-10 space-y-1">
              {ECOSYSTEM_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-sm text-muted hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Product cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {FEATURED.map((product) => (
              <a
                key={product.name}
                href="#"
                className="group rounded-2xl border border-border bg-white p-6 hover:border-foundy-200 hover:shadow-lg hover:shadow-foundy-50/50 transition-all"
              >
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider ${product.color}`}
                >
                  {product.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-foundy-600 transition-colors">
                  Foundy {product.name}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {product.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
