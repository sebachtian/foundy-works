export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-foundy-border">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foundy-heading">
          Start with your Why
        </h2>
        <p className="mt-6 text-foundy-body text-lg leading-relaxed max-w-xl mx-auto">
          Partner with Foundy Strategy or explore our ecosystem of products
          built to solve real-world problems.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-foundy-purple text-white font-medium text-base rounded-lg hover:bg-foundy-purple-light transition-colors"
          >
            Work With Foundy Strategy
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4.5 4.5V11.5M4.5 4.5H11.5M4.5 4.5L11.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#products"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-foundy-border text-foundy-heading font-medium text-base rounded-lg hover:bg-gray-50 transition-colors"
          >
            Explore Products
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4.5 4.5V11.5M4.5 4.5H11.5M4.5 4.5L11.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
