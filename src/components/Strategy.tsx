const OFFERINGS = [
  {
    title: "Foundy Strategy",
    description:
      "Define problems and design systems before execution. We help you map the landscape, identify what truly matters, and build a roadmap that aligns with your why.",
    tag: "Consulting",
    href: "#",
  },
  {
    title: "Foundy MedCore",
    description:
      "Healthcare systems for hospitals and clinics, integrated with BPJS and modern record-keeping. Built for Indonesian healthcare infrastructure.",
    tag: "Product",
    href: "#",
  },
];

export function Strategy() {
  return (
    <section id="strategy" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-foundy-500">
            What Foundy Is
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            From Why to System
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            We don&apos;t just build. We start with the question that matters most
            &mdash; <em>why</em>. Every product, every system, every decision flows
            from that foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {OFFERINGS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-border bg-white p-8 hover:border-foundy-200 hover:shadow-lg hover:shadow-foundy-100/50 transition-all"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-foundy-100 text-xs font-semibold text-foundy-700 uppercase tracking-wider">
                {item.tag}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:text-foundy-600 transition-colors">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {item.description}
              </p>
              <div className="mt-6 flex items-center gap-1 text-sm font-medium text-foundy-600 group-hover:gap-2 transition-all">
                Learn more
                <span className="text-lg leading-none">&rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
