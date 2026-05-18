export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-dark-surface text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute -top-40 -left-40 w-[40rem] h-[40rem] rounded-full bg-foundy-900/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-foundy-500/10 blur-2xl pointer-events-none" />

      <div className="container relative text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-foundy-300">
          Start with Your Why
        </span>
        <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight leading-[1.1]">
          Partner with Foundy
        </h2>
        <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
          Ready to define what matters and build something that lasts?
          Let&apos;s start with a conversation about the problems you&apos;re
          solving and the systems you need.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-white text-foreground font-medium text-sm hover:bg-white/90 transition-all hover:scale-[1.02]"
          >
            Work With Foundy
          </a>
          <a
            href="#strategy"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-all"
          >
            Explore Our Ecosystem
          </a>
        </div>
      </div>
    </section>
  );
}
