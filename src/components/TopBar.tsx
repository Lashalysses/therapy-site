export default function TopBar() {
  return (
    <div className="bg-navy text-white text-sm py-2.5 px-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6 text-xs">
          <a
            href="mailto:hello@yourpractice.com"
            className="hover:text-teal transition-colors"
          >
            hello@yourpractice.com
          </a>
          <a
            href="tel:+1234567890"
            className="hover:text-teal transition-colors hidden sm:inline"
          >
            +1 (234) 567-890
          </a>
        </div>
        <a
          href="#contact"
          className="text-xs font-medium bg-teal hover:bg-teal-dark text-white px-4 py-1.5 rounded transition-colors hidden sm:block"
        >
          Book a Free Consultation
        </a>
      </div>
    </div>
  );
}
