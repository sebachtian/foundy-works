const ECOSYSTEM_ITEMS = [
  {
    number: "01",
    title: "Foundy Strategy",
    description: "Consulting focused on clarity, systems thinking, and long-term decisions.",
    icon: "strategy",
  },
  {
    number: "02",
    title: "Foundy MedCore",
    description: "Healthcare management system for hospitals and clinics with BPJS and Satu Sehat integration.",
    icon: "medcore",
  },
  {
    number: "03",
    title: "Foundy Mirai-e",
    description: "Smart home ecosystem for automation, security, and lifestyle integration.",
    icon: "home",
  },
  {
    number: "04",
    title: "Foundy LifeOS",
    description: "Personal life companion for planning, habits, finance, and daily decisions.",
    icon: "lifeos",
  },
  {
    number: "05",
    title: "Foundy Games",
    description: "AI-driven interactive experiences including narrative and progression-based systems.",
    icon: "games",
  },
  {
    number: "06",
    title: "Foundy Mobile",
    description: "Mobile-first applications designed for everyday scalability and seamless experiences.",
    icon: "mobile",
  },
];

function EcoIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    strategy: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 6V22M6 6H22M6 6L22 22" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    medcore: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 8V20M8 14H20" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" />
        <rect x="3" y="3" width="22" height="22" rx="5" stroke="#6B46C1" strokeWidth="2" />
      </svg>
    ),
    home: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 12L14 3L24 12V24H17V17H11V24H4V12Z" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    lifeos: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z" stroke="#6B46C1" strokeWidth="2" />
        <path d="M14 8V14L18 18" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    games: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="6" y="7" width="16" height="11" rx="3" stroke="#6B46C1" strokeWidth="2" />
        <path d="M12 15V19M8 17H16" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="14" r="1.5" fill="#6B46C1" />
        <circle cx="21" cy="17" r="1.5" fill="#6B46C1" />
      </svg>
    ),
    mobile: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="7" y="3" width="14" height="22" rx="3" stroke="#6B46C1" strokeWidth="2" />
        <line x1="11" y1="6" x2="17" y2="6" stroke="#6B46C1" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="21" r="1.5" fill="#6B46C1" />
      </svg>
    ),
  };
  return icons[type] || icons.strategy;
}

export function Products() {
  return (
    <section id="products" className="py-20 md:py-28 bg-white border-t border-foundy-border">
      <div className="container">
        {/* Section label */}
        <div className="inline-flex items-center gap-2.5 mb-6">
          <span className="w-2.5 h-2.5 bg-foundy-purple rounded-sm shrink-0" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-foundy-purple">
            Our Ecosystem
          </span>
        </div>

        {/* Six-card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ECOSYSTEM_ITEMS.map((item) => (
            <a
              key={item.number}
              href="#"
              className="group rounded-xl border border-foundy-border bg-white p-6 shadow-sm hover:border-foundy-purple/30 hover:shadow-md transition-all relative"
            >
              {/* Number top-left */}
              <span className="absolute top-5 left-5 text-4xl font-bold text-foundy-border group-hover:text-foundy-purple/20 transition-colors">
                {item.number}
              </span>

              {/* Icon centered top */}
              <div className="flex justify-center mb-4 mt-2">
                <div className="w-12 h-12 rounded-xl border-2 border-foundy-purple/20 flex items-center justify-center group-hover:border-foundy-purple/40 transition-colors">
                  <EcoIcon type={item.icon} />
                </div>
              </div>

              <h3 className="text-xl font-bold text-foundy-heading group-hover:text-foundy-purple transition-colors text-center">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-foundy-body leading-relaxed text-center">
                {item.description}
              </p>
              <div className="mt-4 flex justify-center">
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foundy-purple group-hover:gap-2.5 transition-all">
                  Learn more
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M3.5 3.5V8.5M3.5 3.5H8.5M3.5 3.5L8.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
