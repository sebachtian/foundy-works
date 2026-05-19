export function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="container py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* LEFT COLUMN - Text Content */}
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-foundy-heading">
              Find the Why.
              <br />
              Build What Matters.
            </h1>

            <p className="mt-6 text-lg md:text-xl text-foundy-body leading-relaxed max-w-lg">
              Foundy helps organizations and individuals define what should be
              built and why, then turns that clarity into scalable systems and
              products.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#strategy"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-foundy-purple text-white font-medium text-base rounded-lg hover:bg-foundy-purple-light transition-colors"
              >
                Explore Foundy
                <ArrowUpRight />
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-foundy-border text-foundy-heading font-medium text-base rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Products
                <ArrowUpRight />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Process Flow Graphic */}
          <div className="flex justify-center md:justify-end">
            <ProcessFlowGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowUpRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4.5 4.5V11.5M4.5 4.5H11.5M4.5 4.5L11.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProcessFlowGraphic() {
  return (
    <div className="relative w-full max-w-[460px] aspect-square">
      <svg viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* === SOURCE LINE (from left to center) === */}
        <line x1="40" y1="230" x2="185" y2="230" stroke="#6B46C1" strokeWidth="2.5" strokeLinecap="round" />
        {/* Arrowhead on source line */}
        <polygon points="175,225 190,230 175,235" fill="#6B46C1" />

        {/* === CENTER PROCESS LOGO (circle inside circle, grey) === */}
        <circle cx="230" cy="230" r="50" stroke="#E2E8F0" strokeWidth="3" />
        <circle cx="230" cy="230" r="32" stroke="#E2E8F0" strokeWidth="2.5" />
        {/* Inner dot */}
        <circle cx="230" cy="230" r="6" fill="#6B46C1" />

        {/* === BRANCH 1 (top-right, HIGHLIGHTED - purple) === */}
        <line x1="275" y1="200" x2="390" y2="120" stroke="#6B46C1" strokeWidth="3" strokeLinecap="round" />
        <polygon points="380,128 392,118 384,112" fill="#6B46C1" />
        {/* Node at end */}
        <circle cx="392" cy="118" r="7" fill="#6B46C1" />
        {/* Highlight glow ring */}
        <circle cx="392" cy="118" r="14" stroke="#6B46C1" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.4" />

        {/* === BRANCH 2 (middle-right, dimmed) === */}
        <line x1="280" y1="230" x2="400" y2="230" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
        <polygon points="388,225 402,230 388,235" fill="#E2E8F0" />
        <circle cx="402" cy="230" r="5" fill="#E2E8F0" />

        {/* === BRANCH 3 (bottom-right, dimmed) === */}
        <line x1="275" y1="260" x2="390" y2="340" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
        <polygon points="378,335 392,342 382,348" fill="#E2E8F0" />
        <circle cx="392" cy="342" r="5" fill="#E2E8F0" />

        {/* === DECORATIVE DOTS === */}
        <circle cx="100" cy="150" r="2.5" fill="#E2E8F0" />
        <circle cx="160" cy="320" r="2.5" fill="#E2E8F0" />
        <circle cx="340" cy="380" r="2" fill="#E2E8F0" />
      </svg>
    </div>
  );
}
