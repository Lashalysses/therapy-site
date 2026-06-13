"use client";

import { useState } from "react";

const therapyServices = [
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
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "Cognitive Behavioral Therapy (CBT)",
    description:
      "A structured, evidence-based approach focused on identifying and modifying maladaptive thought patterns and behaviors to facilitate meaningful, lasting change.",
    who: "With Adults: Partnering with individuals to deconstruct rigid core beliefs, break free from chronic anxiety or depressive loops, and build robust coping mechanisms. With Children & Adolescents: Utilizing collaborative, age-appropriate protocols to help youth navigate emotional regulation, academic stress, behavioral difficulties, and social anxieties.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.994 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Art Therapy",
    description:
      "Integrates the therapeutic relationship with creative psychological expression, bypassing limitations of traditional verbal dialogue to access and resolve deep-seated emotional conflicts.",
    who: "With Adults: A somatic, creative space to process complex trauma, chronic stress, or identity transitions. With Children & Adolescents: Tailoring artistic modalities to match developmental stages, using non-verbal expression to safely uncover and heal emotional wounds.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: "Psychological Counseling",
    description:
      "Professional support for individuals navigating acute life stressors, transitional phases, or relational conflicts. Focuses on clarifying personal goals, uncovering internal strengths, and developing actionable problem-solving strategies.",
    who: "Individuals navigating acute stressors, transitions, or relational conflicts",
  },
];

const trainingPrograms = [
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347M4.26 10.147a59.872 59.872 0 0114.752 0M4.26 10.147L12 4.5l7.74 5.647" />
      </svg>
    ),
    title: "Integrative Couples & Family Therapy",
    duration: "100 Hours (50h Direct Learning | 50h Independent Study)",
    pillars: [
      "Gottman Method Interventions",
      "Emotionally Focused Therapy (EFT)",
      "Schema Coping Styles in Relationships",
      "Bowen Family Systems",
    ],
    bestFor:
      "Clinicians wanting a unified, practical roadmap to navigate complex relationship and family dynamics.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347M4.26 10.147a59.872 59.872 0 0114.752 0M4.26 10.147L12 4.5l7.74 5.647" />
      </svg>
    ),
    title: "Integrative Counseling and Psychotherapy",
    duration: "160 Hours (80h Direct Learning | 80h Independent Study)",
    pillars: [
      "Common Factors",
      "Cross-Cultural Competencies",
      "CBT Integration",
      "Gestalt/Existential Dimensions",
      "Cross-Diagnostic Psychopathology (DSM-5-TR/ICD-11)",
    ],
    bestFor:
      "Practitioners aiming to move beyond single-school silos into a flexible, client-centered framework.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347M4.26 10.147a59.872 59.872 0 0114.752 0M4.26 10.147L12 4.5l7.74 5.647" />
      </svg>
    ),
    title: "Advanced Diploma in Schema Therapy",
    duration: "100 Hours (50h Direct Learning | 50h Independent Study)",
    pillars: [
      "Core Emotional Needs",
      "Maladaptive Schema Domains",
      "4-Mode Model",
      "Imagery Rescripting",
      "Chair Work Mastery",
      "Limited Reparenting",
    ],
    bestFor:
      "Mental health specialists seeking deep clinical competency in treating longstanding personality pathology and complex trauma.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347M4.26 10.147a59.872 59.872 0 0114.752 0M4.26 10.147L12 4.5l7.74 5.647" />
      </svg>
    ),
    title: "Solution-Focused Brief Therapy (SFBT)",
    duration: "104 Hours (52h Direct Learning | 52h Independent Study)",
    pillars: [
      "Future-Focused Language",
      "The Miracle Question",
      "Scaling Activities",
      "SFBT for Children",
      "Solution-Focused Art Therapy",
    ],
    bestFor:
      "Professionals looking for rapid, strengths-based, and highly collaborative intervention skills.",
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347M4.26 10.147a59.872 59.872 0 0114.752 0M4.26 10.147L12 4.5l7.74 5.647" />
      </svg>
    ),
    title: "Certificate in Sport Psychology",
    duration: "80 Hours (40h Direct Learning | 40h Independent Study)",
    pillars: [
      "Psychological Skills Training (PST)",
      "Performance Profiling",
      "IZOF Theory",
      "Arousal Regulation",
      "Athlete Burnout/Injury Rehabilitation",
    ],
    bestFor:
      "Coaches, practitioners, and psychologists aiming to build mental toughness and master peak performance states.",
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<"therapy" | "training">("therapy");

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

          <div className="mt-8 inline-flex items-center bg-white border border-warm-border rounded-full p-1.5">
            <button
              type="button"
              onClick={() => setActiveTab("therapy")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                activeTab === "therapy"
                  ? "bg-teal text-white"
                  : "text-ink-muted hover:text-navy"
              }`}
            >
              Therapy Services
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("training")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                activeTab === "training"
                  ? "bg-teal text-white"
                  : "text-ink-muted hover:text-navy"
              }`}
            >
              Professional Training
            </button>
          </div>
        </div>

        {activeTab === "therapy" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {therapyServices.map((service) => (
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
                  {service.who && (
                    <p className="text-xs text-ink-muted mb-4">
                      <span className="font-medium text-ink">Good for:</span>{" "}
                      {service.who}
                    </p>
                  )}
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
        )}

        {activeTab === "training" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingPrograms.map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-2xl p-7 border border-warm-border hover:border-teal/30 hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <span className="text-teal mb-5 block">{program.icon}</span>
                <h3 className="font-serif text-xl text-navy font-medium mb-3 leading-snug">
                  {program.title}
                </h3>
                <p className="text-xs text-ink-muted mb-4">
                  <span className="font-medium text-ink">Duration:</span>{" "}
                  {program.duration}
                </p>
                <div className="mb-4 flex-1">
                  <p className="text-xs text-ink-muted leading-relaxed">
                    <span className="font-medium text-ink">Core Pillars:</span>{" "}
                    {program.pillars.join(", ")}
                  </p>
                </div>
                <div className="pt-4 border-t border-warm-border">
                  <p className="text-xs text-ink-muted mb-4">
                    <span className="font-medium text-ink">Best For:</span>{" "}
                    {program.bestFor}
                  </p>
                  <a
                    href="#contact"
                    className="text-teal text-sm font-semibold hover:text-teal-dark transition-colors flex items-center gap-1.5"
                  >
                    Enquire about this program
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
