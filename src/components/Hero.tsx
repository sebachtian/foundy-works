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

          {/* RIGHT COLUMN - Abstract Graphic */}
          <div className="flex justify-center md:justify-end">
            <HeroGraphic />
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

function HeroGraphic() {
  return (
    <div className="relative w-full max-w-[440px] aspect-square">
      <svg viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Central dashed circle */}
        <circle cx="200" cy="220" r="70" stroke="#6B46C1" strokeWidth="2" strokeDasharray="6 6" />

        {/* Arrow inside central circle */}
        <path d="M180 230L200 210L220 230" stroke="#6B46C1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M200 210V250" stroke="#6B46C1" strokeWidth="2.5" strokeLinecap="round" />

        {/* Purple curved line top-right - with arrow and dot */}
        <circle cx="280" cy="140" r="4" fill="#6B46C1" />
        <path d="M280 140C300 160, 320 170, 330 180" stroke="#6B46C1" strokeWidth="2.5" strokeLinecap="round" />
        {/* Arrowhead at end */}
        <path d="M325 175L333 183L336 174" stroke="#6B46C1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#6B46C1" />

        {/* Gray curved line 1 - middle right */}
        <path d="M300 240C330 250, 350 260, 360 270" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
        <path d="M355 265L363 273L366 264" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#E2E8F0" />

        {/* Gray curved line 2 - bottom right */}
        <path d="M280 320C310 330, 330 340, 340 350" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" />
        <path d="M335 345L343 353L346 344" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#E2E8F0" />

        {/* Small decorative dots */}
        <circle cx="130" cy="120" r="3" fill="#E2E8F0" />
        <circle cx="350" cy="100" r="3" fill="#E2E8F0" />
        <circle cx="130" cy="340" r="3" fill="#E2E8F0" />
      </svg>
    </div>
  );
}
