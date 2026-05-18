const STATS = [
  { value: "100+", label: "Organizations advised" },
  { value: "90%", label: "Client retention" },
  { value: "12+", label: "Years experience" },
];

function ShieldCheckIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      {/* Shield shape */}
      <path
        d="M24 4L6 12V26C6 35.2 14 43 24 45C34 43 42 35.2 42 26V12L24 4Z"
        stroke="white"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Checkmark inside shield */}
      <path
        d="M16 24L21 29L32 18"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Stats() {
  return (
    <section className="py-20 md:py-28 bg-foundy-dark">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* LEFT - Value proposition */}
          <div>
            <div className="mb-6">
              <ShieldCheckIcon />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Strategy and systems
              <br />
              you can trust.
            </h2>
            <p className="mt-4 text-white/60 text-lg leading-relaxed max-w-md">
              We don&apos;t just deliver products &mdash; we build the foundation
              for lasting success. Every engagement starts with understanding your
              why.
            </p>
          </div>

          {/* RIGHT - Stats */}
          <div className="flex items-center justify-around md:justify-end gap-8 md:gap-12">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                {/* Vertical separator before (except first) */}
                {i > 0 && (
                  <div className="w-px h-14 bg-white/20 shrink-0" />
                )}
                <div className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-extrabold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-white/50">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
