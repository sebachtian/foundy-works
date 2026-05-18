const STEPS = [
  {
    number: "01",
    title: "Define the Problem",
    description:
      "Deep understanding through research, stakeholder interviews, and systems thinking. We uncover constraints and opportunities before writing a single line of code.",
  },
  {
    number: "02",
    title: "Design the System",
    description:
      "Architecture, data flow, and user experience designed for clarity and scale. Every decision traces back to the core why.",
  },
  {
    number: "03",
    title: "Build the Product",
    description:
      "Iterative development with continuous feedback. We ship fast, measure impact, and refine based on real-world use.",
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-foundy-border">
      <div className="container">
        {/* Section label */}
        <div className="inline-flex items-center gap-2.5 mb-6">
          <span className="w-2.5 h-2.5 bg-foundy-purple rounded-sm shrink-0" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-foundy-purple">
            From Why to System
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foundy-heading mb-4">
          Our Process
        </h2>
        <p className="text-foundy-body text-lg leading-relaxed max-w-2xl mb-16">
          A repeatable framework that turns ambiguity into action, insight into
          architecture.
        </p>

        {/* Three-step horizontal flow */}
        <div className="grid md:grid-cols-3 gap-0 relative">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-start md:items-center md:text-center">
              {/* Connector with arrow */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:flex absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] items-center">
                  <div className="flex-1 border-t-2 border-dashed border-foundy-border" />
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="shrink-0 -ml-px">
                    <path
                      d="M8 2L14 6L8 10"
                      stroke="#6B46C1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              {/* Mobile connector (vertical) */}
              {i < STEPS.length - 1 && (
                <div className="md:hidden flex flex-col items-center w-2 ml-7 my-2">
                  <div className="w-px h-10 border-l-2 border-dashed border-foundy-border" />
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" className="-mt-px">
                    <path
                      d="M2 5L6 9L10 5"
                      stroke="#6B46C1"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              {/* Numbered circle */}
              <div className="flex-shrink-0 w-20 h-20 rounded-full border-2 border-foundy-purple flex items-center justify-center mb-6 bg-white">
                <span className="text-2xl font-bold text-foundy-purple">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foundy-heading mb-3">
                {step.title}
              </h3>
              <p className="text-foundy-body leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
