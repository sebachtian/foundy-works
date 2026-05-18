const ECOSYSTEM_ITEMS = [
  {
    number: "01",
    title: "Foundy Strategy",
    description: "Problem definition and system design before execution.",
  },
  {
    number: "02",
    title: "Foundy MedCore",
    description: "Healthcare systems for Indonesian hospitals and clinics.",
  },
  {
    number: "03",
    title: "Foundy Mirai-e",
    description: "Future-ready smart living and home automation platforms.",
  },
  {
    number: "04",
    title: "Foundy LifeOS",
    description: "Productivity systems for habits, goals, and personal growth.",
  },
  {
    number: "05",
    title: "Foundy Games",
    description: "Interactive experiences built with purpose and engagement.",
  },
  {
    number: "06",
    title: "Foundy Mobile",
    description: "Cross-platform mobile solutions for the entire ecosystem.",
  },
];

export function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-white">
      <div className="container">
        {/* Section label */}
        <div className="inline-flex items-center gap-2.5 mb-6">
          <span className="w-2.5 h-2.5 bg-foundy-purple rounded-sm shrink-0" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-foundy-purple">
            Our Ecosystem
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foundy-heading mb-4">
          Products & Platforms
        </h2>
        <p className="text-foundy-body text-lg leading-relaxed max-w-2xl mb-12">
          Foundy builds scalable platforms across industries, from healthcare to
          smart living and interactive experiences.
        </p>

        {/* Six-card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {ECOSYSTEM_ITEMS.map((item) => (
            <a
              key={item.number}
              href="#"
              className="group rounded-xl border border-foundy-border bg-white p-6 shadow-sm hover:border-foundy-purple/30 hover:shadow-md transition-all"
            >
              <span className="text-4xl font-bold text-foundy-border group-hover:text-foundy-purple/30 transition-colors">
                {item.number}
              </span>
              <h3 className="mt-3 text-xl font-bold text-foundy-heading group-hover:text-foundy-purple transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-foundy-body leading-relaxed">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
