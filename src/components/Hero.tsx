export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-foundy-50 via-white to-surface pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-foundy-200/30 blur-3xl pointer-events-none" />

      <div className="container relative py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-foundy-100 border border-foundy-200 text-sm text-foundy-700 font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-foundy-500 animate-pulse" />
            Strategy &amp; Systems
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] text-foreground">
            Find the Why.
            <br />
            <span className="text-foundy-500">Build What Matters.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted max-w-xl leading-relaxed">
            Foundy helps organizations and individuals define what should be
            built and why, then turns that clarity into scalable systems and
            products.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#strategy"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-foreground text-white font-medium text-sm hover:bg-foreground/90 transition-all hover:scale-[1.02]"
            >
              Explore Foundy
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center h-12 px-6 rounded-full border border-border text-foreground font-medium text-sm hover:bg-foundy-50 transition-all"
            >
              View Products
            </a>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="absolute right-8 bottom-8 md:right-20 md:bottom-20 grid grid-cols-4 gap-2 opacity-20">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-foundy-500"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
