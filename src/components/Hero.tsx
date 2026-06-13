export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center min-h-[88vh] overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1A3A5C 0%, #1D4F6B 50%, #2D7070 100%)",
      }}
    >
      {/* Subtle geometric texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 w-full">
        <div className="max-w-2xl">
          <p className="text-teal font-medium tracking-widest text-xs uppercase mb-5 font-sans">
            Therapy &amp; Psychological Counseling
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white font-light leading-tight mb-6">
            A Safe Space to Heal,{" "}
            <span className="italic">Grow,</span> and Learn
          </h1>
          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl font-sans">
            Access compassionate, evidence-based therapy and professional
            development designed for individuals and mental health
            specialists. Whether you&apos;re seeking personal healing or
            advanced skill-building, taking the first step is the hardest
            part — I&apos;m here to make it a little easier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-teal hover:bg-teal-dark text-white font-semibold px-8 py-4 rounded text-sm tracking-wide transition-colors"
            >
              Schedule a Therapy Consultation
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-white/40 text-white hover:bg-white/10 font-medium px-8 py-4 rounded text-sm tracking-wide transition-colors"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-xs tracking-widest uppercase font-sans">Scroll</span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 5v14M2 13l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
