const STATS = [
  {
    value: "100+",
    label: "Organizations advised",
    icon: "people",
  },
  {
    value: "20+",
    label: "Industries served",
    icon: "globe",
  },
  {
    value: "90%",
    label: "Client retention rate",
    icon: "target",
  },
];

function StatIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    people: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="9" r="3.5" stroke="#1A202C" strokeWidth="2" />
        <path d="M3 23C3 19.134 6.13401 16 10 16C13.866 16 17 19.134 17 23" stroke="#1A202C" strokeWidth="2" strokeLinecap="round" />
        <circle cx="21" cy="10" r="2.5" stroke="#1A202C" strokeWidth="1.5" />
        <path d="M17 22C17 20.3431 18.3431 19 20 19C20.8954 19 21 19 21 19" stroke="#1A202C" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    globe: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#1A202C" strokeWidth="2" />
        <ellipse cx="14" cy="14" rx="5" ry="10" stroke="#1A202C" strokeWidth="2" />
        <line x1="4" y1="14" x2="24" y2="14" stroke="#1A202C" strokeWidth="2" />
      </svg>
    ),
    target: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#1A202C" strokeWidth="2" />
        <circle cx="14" cy="14" r="6" stroke="#1A202C" strokeWidth="2" />
        <circle cx="14" cy="14" r="2" fill="#1A202C" />
      </svg>
    ),
  };
  return icons[type] || null;
}

export function Stats() {
  return (
    <section className="overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* LEFT - Dark background with value prop */}
        <div className="bg-foundy-dark py-20 md:py-28 px-8 md:px-16 flex items-center">
          <div>
            {/* Shield checkmark icon */}
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path
                  d="M24 4L6 12V26C6 35.2 14 43 24 45C34 43 42 35.2 42 26V12L24 4Z"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 24L21 29L32 18"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              We focus on clarity,
              <br />
              structure, and decisions
              <br />
              that last.
            </h2>
          </div>
        </div>

        {/* RIGHT - White background with stats */}
        <div className="bg-white py-20 md:py-28 px-8 md:px-16 flex items-center">
          <div className="w-full">
            <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex items-start sm:items-center gap-0 sm:gap-0 flex-row sm:flex-col sm:text-center">
                  {/* Icon */}
                  <div className="mb-0 sm:mb-4 mr-4 sm:mr-0">
                    <StatIcon type={stat.icon} />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-extrabold text-foundy-heading">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-foundy-body leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
