export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-20 lg:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait placeholder */}
          <div className="relative order-last lg:order-first">
            <div
              className="rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0"
              style={{
                background: "linear-gradient(160deg, #1A3A5C 0%, #3A8C8C 100%)",
              }}
            >
              {/* Replace this div with: <Image src="/portrait.jpg" alt="[Your Name], Therapist" fill className="object-cover" /> */}
              <div className="flex items-end h-full p-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 w-full">
                  <p className="text-white font-serif text-xl">[Your Name]</p>
                  <p className="text-white/70 text-sm mt-1 font-sans">
                    [Qualifications] · Psychotherapist
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-cream-alt -z-10 hidden lg:block" />
          </div>

          {/* Text content */}
          <div>
            <p className="text-teal font-medium tracking-widest text-xs uppercase mb-4 font-sans">
              About Me
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl text-navy font-light leading-tight mb-6">
              Helping You Find Your Way Forward
            </h2>
            <div className="space-y-4 text-ink-muted leading-relaxed">
              <p>
                I believe that each person holds the capacity for growth and
                change. My role as a therapist is not to fix you — it is to walk
                alongside you as you discover your own strengths, process what
                has been difficult, and build the life you want.
              </p>
              <p>
                With over a decade of clinical experience, I draw on a range of
                evidence-based approaches to offer therapy that is genuinely
                tailored to you. Whether you are navigating a specific
                challenge or seeking deeper self-understanding, there is space
                for that here.
              </p>
              <p>
                I trained at [Training Institute] and hold qualifications in
                [Qualifications]. I am a registered member of [Professional
                Body] and adhere to their code of ethics and professional
                standards.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Qualifications", value: "[BSc, MSc, etc.]" },
                { label: "Registered with", value: "[Professional Body]" },
                { label: "Experience", value: "10+ years" },
                { label: "Session format", value: "In-person & online" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-4 border border-warm-border">
                  <p className="text-xs text-ink-muted uppercase tracking-wider font-medium mb-1">
                    {item.label}
                  </p>
                  <p className="text-navy font-semibold text-sm">{item.value}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center mt-8 text-teal font-semibold text-sm hover:text-teal-dark transition-colors gap-2"
            >
              Ready to take the first step?
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
