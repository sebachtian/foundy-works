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

          {/* RIGHT COLUMN - Interconnected Network Graphic */}
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
    <div className="relative w-full max-w-[480px] aspect-square">
      <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Central hub circle - dashed */}
        <circle cx="240" cy="240" r="60" stroke="#6B46C1" strokeWidth="2" strokeDasharray="6 6" />

        {/* Center arrow */}
        <path d="M225 245L240 225L255 245" stroke="#6B46C1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M240 225V260" stroke="#6B46C1" strokeWidth="2.5" strokeLinecap="round" />

        {/* ---- NODES (connection points) ---- */}
        {/* Top node */}
        <circle cx="240" cy="90" r="6" fill="#6B46C1" />
        {/* Top-right node */}
        <circle cx="370" cy="130" r="5" fill="#6B46C1" />
        {/* Right node */}
        <circle cx="400" cy="240" r="6" fill="#6B46C1" />
        {/* Bottom-right node */}
        <circle cx="370" cy="350" r="5" fill="#6B46C1" />
        {/* Bottom node */}
        <circle cx="240" cy="400" r="6" fill="#6B46C1" />
        {/* Bottom-left node */}
        <circle cx="110" cy="350" r="5" fill="#6B46C1" />
        {/* Left node */}
        <circle cx="80" cy="240" r="6" fill="#6B46C1" />
        {/* Top-left node */}
        <circle cx="110" cy="130" r="5" fill="#6B46C1" />

        {/* ---- CONNECTING ARROWS (hub to nodes) ---- */}
        {/* Center to Top */}
        <path d="M240 180L240 96" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" />
        <polygon points="235,102 240,90 245,102" fill="#6B46C1" />

        {/* Center to Top-Right */}
        <path d="M280 200L362 138" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" />
        <polygon points="362,131 370,132 367,142" fill="#6B46C1" />

        {/* Center to Right */}
        <path d="M300 240L392 240" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" />
        <polygon points="390,235 402,240 390,245" fill="#6B46C1" />

        {/* Center to Bottom-Right */}
        <path d="M280 280L362 342" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" />
        <polygon points="362,338 370,348 367,348" fill="#6B46C1" transform="translate(-2,2)" />

        {/* Center to Bottom */}
        <path d="M240 300L240 392" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" />
        <polygon points="235,390 240,402 245,390" fill="#6B46C1" />

        {/* Center to Bottom-Left */}
        <path d="M200 280L118 342" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
        <polygon points="118,338 110,348 113,348" fill="#E2E8F0" transform="translate(2,2)" />

        {/* Center to Left */}
        <path d="M180 240L88 240" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
        <polygon points="90,235 78,240 90,245" fill="#E2E8F0" />

        {/* Center to Top-Left */}
        <path d="M200 200L118 138" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
        <polygon points="118,131 110,132 113,142" fill="#E2E8F0" />

        {/* ---- RECONNECTING ARCS (node to node, forming a network) ---- */}
        {/* Top to Top-Right */}
        <path d="M246 90C280 80, 320 100, 365 132" stroke="#6B46C1" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" opacity="0.6" />
        <polygon points="365,128 373,136 370,136" fill="#6B46C1" opacity="0.6" transform="translate(0,4)" />

        {/* Top-Right to Right */}
        <path d="M376 135C390 160, 395 200, 394 236" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" />
        <polygon points="398,234 400,246 390,238" fill="#E2E8F0" />

        {/* Right to Bottom-Right */}
        <path d="M394 246C390 280, 380 310, 366 344" stroke="#6B46C1" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" opacity="0.6" />
        <polygon points="370,344 368,352 362,344" fill="#6B46C1" opacity="0.6" />

        {/* Bottom to Left (crossing through center) */}
        <path d="M234 394C200 380, 160 360, 116 344" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" />
        <polygon points="118,340 108,342 114,348" fill="#E2E8F0" />

        {/* Left to Top-Left */}
        <path d="M86 234C100 200, 105 170, 115 136" stroke="#6B46C1" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" opacity="0.6" />
        <polygon points="111,138 113,128 119,134" fill="#6B46C1" opacity="0.6" />

        {/* Top-Left to Top */}
        <path d="M116 130C150 100, 190 92, 234 90" stroke="#E2E8F0" strokeWidth="1.5" strokeDasharray="4 3" strokeLinecap="round" />
        <polygon points="232,86 242,90 232,94" fill="#E2E8F0" />

        {/* ---- OUTER RING (dashed circle connecting all nodes) ---- */}
        <circle cx="240" cy="240" r="170" stroke="#6B46C1" strokeWidth="1" strokeDasharray="8 12" opacity="0.25" />

        {/* ---- DECORATIVE DOTS ---- */}
        <circle cx="160" cy="160" r="3" fill="#E2E8F0" />
        <circle cx="320" cy="160" r="3" fill="#E2E8F0" />
        <circle cx="320" cy="320" r="3" fill="#E2E8F0" />
        <circle cx="160" cy="320" r="3" fill="#E2E8F0" />
      </svg>
    </div>
  );
}
