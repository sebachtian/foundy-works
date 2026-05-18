export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container text-center">
        {/* Section label */}
        <div className="inline-flex items-center justify-center gap-2.5 mb-6">
          <span className="w-2.5 h-2.5 bg-foundy-purple rounded-sm shrink-0" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-foundy-purple">
            Start with Your Why
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foundy-heading">
          Partner with Foundy
        </h2>
        <p className="mt-6 text-foundy-body text-lg leading-relaxed max-w-xl mx-auto">
          Ready to define what matters and build something that lasts? Let&apos;s
          start with a conversation about the problems you&apos;re solving and the
          systems you need.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-foundy-purple text-white font-medium text-base rounded-lg hover:bg-foundy-purple-light transition-colors"
          >
            Work With Foundy
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 8H15M15 8L9 2M15 8L9 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-foundy-border text-foundy-heading font-medium text-base rounded-lg hover:bg-gray-50 transition-colors"
          >
            Explore Our Ecosystem
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1 8H15M15 8L9 2M15 8L9 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
