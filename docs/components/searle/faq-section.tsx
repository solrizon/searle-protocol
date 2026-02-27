"use client"

import { Reveal } from "./reveal"

const faqs = [
  { q: "Is this legally binding?", a: "Searle Protocol creates a standardized machine-readable declaration of intent. While untested in court specifically for AI training, it provides a clearer legal standing than silent copyright." },
  { q: "How does verification work?", a: "Scrapers verify the hash of your content against the signature on the Base blockchain to ensure the license hasn't been tampered with." },
  { q: "Does this stop scrapers?", a: "It stops compliant scrapers immediately. For non-compliant scrapers, it builds a massive class-action evidentiary trail." },
]

const faqAnims: Array<"slide" | "blur" | "scale"> = ["slide", "blur", "scale"]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 snap-section" style={{ borderBottom: "1px solid var(--border-dim)" }}>
      <div className="container mx-auto px-6 max-w-4xl">
        <Reveal variant="clip-up" delay={0} duration={0.8} easing="cubic-bezier(0.77, 0, 0.175, 1)">
          <h2
            className="text-5xl mb-16 text-center uppercase"
            style={{
              fontFamily: "var(--font-anton), Anton, sans-serif",
              letterSpacing: "0.02em",
              color: "white",
            }}
          >
            FAQ
          </h2>
        </Reveal>
        <div className="flex flex-col gap-6">
          {faqs.map((faq, i) => (
            <Reveal key={i} variant={faqAnims[i]} direction="up" delay={0.15 + i * 0.12} duration={0.6}>
              <div
                className="p-6 transition-colors"
                style={{
                  border: "1px solid var(--border-dim)",
                  backgroundColor: "var(--bg-panel)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-bright)" }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-dim)" }}
              >
                <h4 className="font-bold text-lg mb-2" style={{ color: "white" }}>{faq.q}</h4>
                <p className="text-sm" style={{ color: "#94A3B8" }}>{faq.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
