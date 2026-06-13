const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  // { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/60 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <p className="font-serif text-2xl text-white font-medium mb-3">
              NeuroVision International Institute
            </p>
            <p className="leading-relaxed text-white/50 text-sm">
              Compassionate, evidence-based therapy and psychological counseling.
              Serving clients in-person and online.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-medium text-xs uppercase tracking-widest mb-4 font-sans">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-medium text-xs uppercase tracking-widest mb-4 font-sans">
              Contact
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@yourpractice.com"
                  className="hover:text-white transition-colors"
                >
                  hello@yourpractice.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-white/40">
                [Your location]
              </li>
              <li className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center bg-teal hover:bg-teal-dark text-white text-xs font-semibold px-4 py-2 rounded transition-colors"
                >
                  Schedule a Therapy Consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} NeuroVision International Institute. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </a>
            <a href="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
