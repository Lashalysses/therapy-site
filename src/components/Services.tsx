const services = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: "Family & Couple Therapy",
    description:
      "Strengthening bonds and rebuilding connection in relationships and family systems. Whether navigating conflict, communication difficulties, or major life transitions, therapy offers a supported space to grow together.",
    who: "Couples and families experiencing conflict, disconnection, or transitions",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "Integrative Counseling & Psychotherapy",
    description:
      "A personalised, whole-person approach drawing on multiple evidence-based modalities — tailored to your unique history, needs, and goals. No single framework defines you, and therapy shouldn't either.",
    who: "Individuals seeking flexible, humanistic support for a wide range of life challenges",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    title: "Schema Therapy",
    description:
      "Identifies and gently challenges deep-rooted patterns formed in early life that continue to shape how you think, feel, and relate. Particularly effective for longstanding difficulties that haven't responded to shorter-term approaches.",
    who: "Those experiencing persistent emotional patterns, relationship difficulties, or personality challenges",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: "Solution Focused Brief Therapy",
    description:
      "A goal-oriented, future-focused approach that builds on your existing strengths. Rather than dwelling on problems, SFBT helps you identify what's already working and amplify it — creating lasting change in a shorter timeframe.",
    who: "Individuals wanting practical, time-efficient support with specific goals",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Sport Psychology",
    description:
      "Applying psychological principles to enhance athletic performance, resilience, and wellbeing. From competition anxiety and motivation to injury recovery and team dynamics — the mind is the ultimate training ground.",
    who: "Competitive and recreational athletes seeking peak mental performance",
  },
];

export default function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-20 lg:py-28 bg-cream-alt">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-teal font-medium tracking-widest text-xs uppercase mb-4 font-sans">
            What I Offer
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy font-light leading-tight">
            How I Can Help
          </h2>
          <p className="text-ink-muted mt-4 max-w-xl mx-auto leading-relaxed">
            I offer a range of evidence-based therapeutic approaches, each
            tailored to the individual. Unsure which is right for you? That&apos;s
            exactly what we can explore together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl p-7 border border-warm-border hover:border-teal/30 hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <span className="text-teal mb-5 block">{service.icon}</span>
              <h3 className="font-serif text-xl text-navy font-medium mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-ink-muted text-sm leading-relaxed mb-4 flex-1">
                {service.description}
              </p>
              <div className="pt-4 border-t border-warm-border">
                <p className="text-xs text-ink-muted mb-4">
                  <span className="font-medium text-ink">Good for:</span>{" "}
                  {service.who}
                </p>
                <a
                  href="#contact"
                  className="text-teal text-sm font-semibold hover:text-teal-dark transition-colors flex items-center gap-1.5"
                >
                  Book a consultation
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
