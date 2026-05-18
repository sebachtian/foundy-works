const STEPS = [
  {
    number: "01",
    title: "Define the Problem",
    description: "Deep understanding through research, stakeholder interviews, and systems thinking. We uncover constraints and opportunities before writing a single line of code.",
  },
  {
    number: "02",
    title: "Design the System",
    description: "Architecture, data flow, and user experience designed for clarity and scale. Every decision traces back to the core why.",
  },
  {
    number: "03",
    title: "Build the Product",
    description: "Iterative development with continuous feedback. We ship fast, measure impact, and refine based on real-world use.",
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-border">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-foundy-500">
            From Why to System
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Our Process
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            A repeatable framework that turns ambiguity into action, insight into architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(100%+0.5rem)] w-[calc(100%-2rem)] h-px bg-gradient-to-r from-foundy-300 to-transparent" />
              )}

              <div className="flex md:flex-col items-start md:items-center gap-4 md:text-center">
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-foundy-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foundy-600">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
