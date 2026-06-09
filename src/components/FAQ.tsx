"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What happens in the first session?",
    a: "The first session is primarily a chance for us to get to know each other. I will ask about what has brought you to therapy, a little about your background, and what you are hoping for. There is no pressure to share more than you are comfortable with. It is also an opportunity for you to ask any questions and to see whether you feel comfortable working with me.",
  },
  {
    q: "How long does therapy typically last?",
    a: "This varies considerably depending on the approach and your goals. Solution Focused Brief Therapy may be just 6–12 sessions, while deeper work such as Schema Therapy can span several months or longer. We will discuss what is realistic and appropriate for your situation during the initial consultation.",
  },
  {
    q: "Do you offer online or video sessions?",
    a: "Yes. I offer both in-person and online sessions via secure video call. Many clients find online therapy just as effective and appreciate the flexibility it provides. We can discuss which format would suit you best.",
  },
  {
    q: "What is the cost per session?",
    a: "Session fees will be discussed during our initial consultation and may vary depending on the type and frequency of sessions. I am happy to discuss fees openly — please do not let cost be a barrier to reaching out.",
  },
  {
    q: "Is everything I share confidential?",
    a: "Yes, confidentiality is a cornerstone of the therapeutic relationship. Everything you share remains private, with very limited exceptions (for example, if there is a serious risk to your safety or others). I will explain these boundaries clearly at the start of our work together.",
  },
  {
    q: "I have never done therapy before — what should I expect?",
    a: "Many people feel nervous before their first session, and that is completely understandable. Therapy is simply a conversation in a safe, non-judgmental space. You do not need to have specific goals or know what to say — we will find our way together. Most people feel a sense of relief just from having reached out.",
  },
  {
    q: "Which service is right for me?",
    a: "If you are unsure, the free initial consultation is designed exactly for this. We will talk through what you are experiencing and I will recommend the approach I believe would be most helpful. You are never locked in — the plan can always be adjusted as we go.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-16 py-20 lg:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-teal font-medium tracking-widest text-xs uppercase mb-4 font-sans">
            Common Questions
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy font-light leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="divide-y divide-warm-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-center justify-between py-5 text-left gap-4 group"
              >
                <span className="font-medium text-navy group-hover:text-teal transition-colors pr-4">
                  {faq.q}
                </span>
                <span
                  className={`text-teal shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="pb-5 text-ink-muted leading-relaxed text-sm pr-8">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-cream-alt rounded-2xl p-8">
          <p className="text-ink-muted mb-4">
            Didn&apos;t find the answer you were looking for?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-teal font-semibold hover:text-teal-dark transition-colors gap-2"
          >
            Send me a message
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
