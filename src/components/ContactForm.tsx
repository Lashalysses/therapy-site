"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  contactMethod: string;
  message: string;
  referral: string;
  consent: boolean;
  website: string; // honeypot
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  contactMethod: "email",
  message: "",
  referral: "",
  consent: false,
  website: "",
};

const services = [
  "Family & Couple Therapy",
  "Integrative Counseling & Psychotherapy",
  "Schema Therapy",
  "Solution Focused Brief Therapy",
  "Sport Psychology",
  "Not sure yet",
];

const referralOptions = [
  "Internet search",
  "Professional referral",
  "Friend or family",
  "Social media",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email address.";
    if (!form.message.trim()) e.message = "Please tell us a little about what brings you here.";
    if (!form.consent) e.consent = "Please confirm you have read the privacy notice.";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (form.website) return; // honeypot triggered

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="contact" className="scroll-mt-16 py-20 lg:py-28 bg-navy">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal/20 mb-6">
            <svg width="32" height="32" fill="none" stroke="#3A8C8C" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="font-serif text-4xl text-white font-light mb-4">
            Thank You
          </h2>
          <p className="text-white/70 leading-relaxed">
            Your message has been received. I will be in touch within 24 hours.
            Taking this step takes courage — I look forward to speaking with you.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="scroll-mt-16 py-20 lg:py-28 bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div className="text-white">
            <p className="text-teal font-medium tracking-widest text-xs uppercase mb-4 font-sans">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl font-light leading-tight mb-6">
              Book Your Free Consultation
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              Reaching out is the first and often hardest step. Fill in the form
              and I will get back to you within 24 hours to arrange a brief,
              no-obligation call. No question is too small.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                hello@yourpractice.com
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +1 (234) 567-890
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                [Your location / Online sessions available]
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            {/* Honeypot */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1.5">
                  Full Name <span className="text-teal">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  className={`w-full bg-white/10 border text-white placeholder:text-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors ${
                    errors.name ? "border-red-400" : "border-white/20"
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1.5">
                  Email Address <span className="text-teal">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  className={`w-full bg-white/10 border text-white placeholder:text-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors ${
                    errors.email ? "border-red-400" : "border-white/20"
                  }`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1.5">
                  Phone Number
                  <span className="text-white/40 font-normal ml-1">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  className="w-full bg-white/10 border border-white/20 text-white placeholder:text-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors"
                  placeholder="+1 (234) 567-890"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-1.5">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full bg-navy border border-white/20 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors"
                >
                  <option value="">Select a service…</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-navy">
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <p className="block text-sm font-medium text-white/80 mb-2">
                Preferred Contact Method
              </p>
              <div className="flex gap-6">
                {(["email", "phone"] as const).map((method) => (
                  <label key={method} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={form.contactMethod === method}
                      onChange={handleChange}
                      className="accent-teal"
                    />
                    <span className="text-white/80 text-sm capitalize">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1.5">
                Your Message <span className="text-teal">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                className={`w-full bg-white/10 border text-white placeholder:text-white/30 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors resize-none ${
                  errors.message ? "border-red-400" : "border-white/20"
                }`}
                placeholder="Tell me a little about what brings you here… there is no pressure to share more than you feel comfortable with."
              />
              {errors.message && (
                <p className="text-red-400 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="referral" className="block text-sm font-medium text-white/80 mb-1.5">
                How did you hear about me?
              </label>
              <select
                id="referral"
                name="referral"
                value={form.referral}
                onChange={handleChange}
                className="w-full bg-navy border border-white/20 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal transition-colors"
              >
                <option value="">Select…</option>
                {referralOptions.map((r) => (
                  <option key={r} value={r} className="bg-navy">
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  className="mt-1 accent-teal shrink-0"
                />
                <span className={`text-xs leading-relaxed ${errors.consent ? "text-red-400" : "text-white/60"}`}>
                  I have read and agree to the{" "}
                  <a href="/privacy" className="underline hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  . I understand that my data will be used solely to respond to my enquiry and that all information I share is handled confidentially. <span className="text-teal">*</span>
                </span>
              </label>
              {errors.consent && (
                <p className="text-red-400 text-xs mt-1 ml-6">{errors.consent}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full bg-teal hover:bg-teal-dark disabled:opacity-60 text-white font-semibold py-4 rounded-lg text-sm tracking-wide transition-colors"
            >
              {status === "submitting" ? "Sending…" : "Send My Request"}
            </button>

            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong. Please try again or email us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
