const OFFERINGS = [
  {
    title: "Consulting",
    description:
      "Foundy Strategy defines problems, direction, and systems before execution.",
    linkText: "Learn more",
    href: "#",
    icon: "consulting",
  },
  {
    title: "Products",
    description:
      "Foundy builds scalable platforms across industries, from healthcare to smart living and AI experiences.",
    linkText: "Explore products",
    href: "#products",
    icon: "products",
  },
];

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2.5 mb-6">
      <span className="w-2.5 h-2.5 bg-foundy-purple rounded-sm shrink-0" />
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-foundy-purple">
        {text}
      </span>
    </div>
  );
}

function IconConsulting() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      {/* Two person silhouettes */}
      <circle cx="12" cy="10" r="4" stroke="#6B46C1" strokeWidth="2" />
      <path d="M4 28C4 22.4772 7.58172 18 12 18C16.4183 18 20 22.4772 20 28" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="12" r="3" stroke="#6B46C1" strokeWidth="2" />
      <path d="M19 28C19 24.134 22.134 21 26 21C27.6569 21 28 21 28 21" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconProducts() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      {/* 3D cube/box */}
      <path d="M4 9L16 3L28 9L16 15L4 9Z" stroke="#6B46C1" strokeWidth="2" strokeLinejoin="round" />
      <path d="M4 9V23L16 29L28 23V9" stroke="#6B46C1" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 15V29" stroke="#6B46C1" strokeWidth="2" />
    </svg>
  );
}

const icons: Record<string, React.ReactNode> = {
  consulting: <IconConsulting />,
  products: <IconProducts />,
};

export function Strategy() {
  return (
    <section id="strategy" className="py-20 md:py-28 bg-white">
      <div className="container">
        <SectionLabel text="What Foundy Is" />

        <div className="grid md:grid-cols-2 gap-6">
          {OFFERINGS.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group rounded-xl border border-foundy-border bg-white p-8 shadow-sm hover:border-foundy-purple/30 hover:shadow-md transition-all"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl border-2 border-foundy-purple/20 flex items-center justify-center mb-5 group-hover:border-foundy-purple/40 transition-colors">
                {icons[item.icon]}
              </div>

              <h3 className="text-2xl font-bold text-foundy-heading">
                {item.title}
              </h3>
              <p className="mt-3 text-foundy-body leading-relaxed">
                {item.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-base font-medium text-foundy-purple group-hover:gap-2.5 transition-all">
                {item.linkText}
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
