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
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8H15M15 8L9 2M15 8L9 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-foundy-border text-foundy-heading font-medium text-base rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Products
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8H15M15 8L9 2M15 8L9 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN - Abstract Strategy Graphic */}
          <div className="flex justify-center md:justify-end">
            <AbstractStrategyGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}

function AbstractStrategyGraphic() {
  return (
    <div className="relative w-full max-w-[480px] aspect-square">
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Central circle */}
        <circle cx="240" cy="240" r="56" stroke="#6B46C1" strokeWidth="3" />

        {/* Inner arrow in central circle */}
        <path
          d="M230 230L250 240L230 250"
          stroke="#6B46C1"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Concentric dashed rings */}
        <circle
          cx="240"
          cy="240"
          r="100"
          stroke="#6B46C1"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          opacity="0.5"
        />
        <circle
          cx="240"
          cy="240"
          r="150"
          stroke="#6B46C1"
          strokeWidth="1.2"
          strokeDasharray="6 8"
          opacity="0.3"
        />
        <circle
          cx="240"
          cy="240"
          r="200"
          stroke="#E0E0E0"
          strokeWidth="1"
          strokeDasharray="4 10"
          opacity="0.4"
        />

        {/* Flowing curved lines - purple */}
        <path
          d="M120 100C140 160, 100 200, 160 240C200 265, 180 300, 140 340"
          stroke="#6B46C1"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M360 140C340 190, 380 220, 320 240C280 255, 300 290, 340 320"
          stroke="#6B46C1"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Flowing curved lines - light gray */}
        <path
          d="M100 320C140 350, 120 380, 160 400"
          stroke="#E0E0E0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M380 100C340 140, 360 170, 320 200"
          stroke="#E0E0E0"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Abstract flowing shapes */}
        <path
          d="M80 160C100 130, 120 140, 130 170C140 200, 120 210, 100 200C80 190, 70 180, 80 160Z"
          stroke="#6B46C1"
          strokeWidth="2"
          opacity="0.6"
        />
        <path
          d="M370 300C390 270, 410 280, 400 310C390 340, 370 330, 370 300Z"
          stroke="#6B46C1"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* Small geometric accent marks */}
        <rect x="100" y="80" width="8" height="8" rx="2" fill="#6B46C1" opacity="0.5" />
        <rect x="360" y="380" width="8" height="8" rx="2" fill="#6B46C1" opacity="0.5" />
        <rect x="380" y="80" width="6" height="6" rx="1.5" fill="#E0E0E0" />
        <rect x="90" y="380" width="6" height="6" rx="1.5" fill="#E0E0E0" />

        {/* Nodes on paths */}
        <circle cx="140" cy="340" r="5" fill="#6B46C1" />
        <circle cx="320" cy="200" r="5" fill="#6B46C1" opacity="0.7" />
        <circle cx="100" cy="200" r="4" fill="#E0E0E0" />
        <circle cx="370" cy="300" r="4" fill="#E0E0E0" />

        {/* Connecting thin lines */}
        <line x1="140" y1="340" x2="180" y2="290" stroke="#E0E0E0" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="320" y1="200" x2="280" y2="250" stroke="#E0E0E0" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}
