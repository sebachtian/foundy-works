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

          {/* RIGHT COLUMN - SVG Graphic */}
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
    <div className="relative w-full max-w-[460px] aspect-[656/492]">
      <svg viewBox="0 0 656 492" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Background circles */}
        <circle cx="280" cy="240" r="120" stroke="#EFEFEF" strokeWidth="2" fill="none" />
        <circle cx="280" cy="240" r="70" stroke="#EFEFEF" strokeWidth="2" fill="none" />

        {/* Gray lines */}
        <line x1="335" y1="240" x2="625" y2="240" stroke="#D6D6D6" strokeWidth="3" strokeLinecap="round" />
        <polyline points="610,225 625,240 610,255" stroke="#D6D6D6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        <path
          d="M 335 240 C 360 240, 370 240, 390 260 L 500 370 C 515 385, 525 400, 540 400 L 620 400"
          stroke="#D6D6D6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"
        />
        <polyline points="605,385 625,400 605,415" stroke="#D6D6D6" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        {/* Purple path (on top) */}
        <line x1="40" y1="240" x2="220" y2="240" stroke="#7C4DFF" strokeWidth="4" strokeLinecap="round" />
        <circle cx="40" cy="240" r="8" fill="#7C4DFF" />

        <circle cx="280" cy="240" r="55" stroke="#7C4DFF" strokeWidth="4" fill="none" />

        <line x1="255" y1="240" x2="300" y2="240" stroke="#7C4DFF" strokeWidth="4" strokeLinecap="round" />
        <polyline points="285,225 300,240 285,255" stroke="#7C4DFF" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

        <path
          d="M 220 240 L 335 240 C 360 240, 370 240, 390 220 L 500 110 C 515 95, 525 80, 540 80 L 620 80"
          stroke="#7C4DFF" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"
        />
        <polyline points="605,65 625,80 605,95" stroke="#7C4DFF" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
