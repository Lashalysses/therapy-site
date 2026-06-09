const steps = [
  {
    number: "01",
    title: "Reach Out",
    description:
      "Fill in the contact form or call directly. There is no pressure, no commitment, and nothing is too big or too small to share. Your enquiry is completely confidential.",
  },
  {
    number: "02",
    title: "Free Consultation",
    description:
      "We will have a brief, no-obligation call to understand what brings you here, answer any questions you have, and explore whether we are a good fit for working together.",
  },
  {
    number: "03",
    title: "Begin Your Journey",
    description:
      "Together, we create a personalised plan that works for your life, schedule, and goals. Sessions are available in-person and online at a pace that suits you.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 py-20 lg:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-teal font-medium tracking-widest text-xs uppercase mb-4 font-sans">
            The Process
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy font-light leading-tight">
            How It Works
          </h2>
          <p className="text-ink-muted mt-4 max-w-lg mx-auto leading-relaxed">
            Getting started is simpler than you might think. Here is what to
            expect when you reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-10 left-1/4 right-1/4 h-px bg-warm-border" />

          {steps.map((step) => (
            <div key={step.number} className="text-center relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-navy text-white mb-6">
                <span className="font-serif text-2xl font-light">{step.number}</span>
              </div>
              <h3 className="font-serif text-2xl text-navy font-medium mb-3">
                {step.title}
              </h3>
              <p className="text-ink-muted leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded text-sm tracking-wide transition-colors gap-2"
          >
            Take the First Step
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
