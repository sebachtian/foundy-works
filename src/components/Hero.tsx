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

          {/* RIGHT COLUMN - Network Graphic */}
          <div className="flex justify-center md:justify-end">
            <NetworkGraphic />
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

function NetworkGraphic() {
  return (
    <div className="relative w-full max-w-[460px] aspect-square">
      <svg viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* === FLOWING CURVED PATHS === */}
        {/* Main flowing path from upper-left to center */}
        <path d="M60 80C120 60, 180 120, 200 180C210 210, 200 230, 210 250C220 270, 240 260, 250 240" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
        <polygon points="247,246 255,240 252,234" fill="#6B46C1" opacity="0.7" />

        {/* Path from center branching right and down */}
        <path d="M250 240C280 230, 310 250, 340 280C360 300, 370 330, 380 360" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        <polygon points="376,358 384,364 382,355" fill="#6B46C1" opacity="0.6" />

        {/* Path branching left from center */}
        <path d="M210 250C180 260, 150 290, 130 320C115 343, 120 370, 130 390" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
        <polygon points="126,386 130,394 134,387" fill="#E2E8F0" />

        {/* Upper sweeping arc */}
        <path d="M200 180C140 130, 90 100, 60 120" stroke="#6B46C1" strokeWidth="1.8" strokeDasharray="5 4" strokeLinecap="round" opacity="0.5" />
        <polygon points="64,116 56,118 62,124" fill="#6B46C1" opacity="0.5" />

        {/* Lower sweeping arc */}
        <path d="M130 320C100 340, 80 370, 90 400" stroke="#E2E8F0" strokeWidth="1.8" strokeDasharray="5 4" strokeLinecap="round" opacity="0.6" />
        <polygon points="86,396 92,404 94,396" fill="#E2E8F0" opacity="0.6" />

        {/* Right upward sweep */}
        <path d="M340 280C350 240, 370 200, 390 180" stroke="#6B46C1" strokeWidth="1.8" strokeDasharray="5 4" strokeLinecap="round" opacity="0.5" />
        <polygon points="386,184 394,178 392,176" fill="#6B46C1" opacity="0.5" />

        {/* Secondary connecting line */}
        <path d="M60 120C90 160, 120 180, 130 200C140 220, 130 240, 120 260" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="3 5" strokeLinecap="round" opacity="0.5" />

        {/* === CENTRAL HUB === */}
        <circle cx="230" cy="240" r="55" stroke="#6B46C1" strokeWidth="2" strokeDasharray="6 5" />
        <circle cx="230" cy="240" r="8" fill="#6B46C1" />
        {/* Arrow inside hub */}
        <path d="M222 245L230 232L238 245" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M230 232V252" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" />

        {/* === CONCENTRIC RINGS === */}
        <circle cx="230" cy="240" r="100" stroke="#6B46C1" strokeWidth="1" strokeDasharray="3 7" opacity="0.25" />
        <circle cx="230" cy="240" r="145" stroke="#6B46C1" strokeWidth="0.8" strokeDasharray="2 10" opacity="0.15" />

        {/* === NODES === */}
        <circle cx="60" cy="80" r="6" fill="#6B46C1" />
        <circle cx="60" cy="120" r="4" fill="#6B46C1" opacity="0.7" />
        <circle cx="130" cy="200" r="5" fill="#6B46C1" />
        <circle cx="120" cy="260" r="4" fill="#6B46C1" opacity="0.6" />
        <circle cx="130" cy="390" r="5" fill="#6B46C1" opacity="0.5" />
        <circle cx="90" cy="400" r="4" fill="#E2E8F0" />
        <circle cx="380" cy="180" r="5" fill="#6B46C1" opacity="0.6" />
        <circle cx="340" cy="280" r="5" fill="#6B46C1" opacity="0.7" />
        <circle cx="380" cy="360" r="6" fill="#6B46C1" />

        {/* Decorative small dots */}
        <circle cx="100" cy="100" r="2.5" fill="#E2E8F0" />
        <circle cx="170" cy="150" r="2" fill="#E2E8F0" />
        <circle cx="300" cy="180" r="2.5" fill="#E2E8F0" />
        <circle cx="350" cy="310" r="2" fill="#E2E8F0" />
        <circle cx="180" cy="340" r="2.5" fill="#E2E8F0" />
        <circle cx="280" cy="370" r="2" fill="#E2E8F0" />
        <circle cx="150" cy="300" r="2" fill="#E2E8F0" />
        <circle cx="310" cy="200" r="2" fill="#E2E8F0" />
      </svg>
    </div>
  );
}
