"use client"

import { Reveal } from "./reveal"

interface Recommendation {
  name: string
  displayName: string
  desc: string
}

interface SelectorSectionProps {
  training: string
  setTraining: (v: string) => void
  reading: string
  setReading: (v: string) => void
  commerce: string
  setCommerce: (v: string) => void
  recommendation: Recommendation
}

export function SelectorSection({
  training,
  setTraining,
  reading,
  setReading,
  commerce,
  setCommerce,
  recommendation,
}: SelectorSectionProps) {
  return (
    <section
      id="selector"
      className="py-24 snap-section"
      style={{
        borderBottom: "1px solid var(--border-dim)",
        backgroundColor: "var(--bg-panel)",
      }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <Reveal variant="fade" delay={0} duration={0.5}>
            <span className="font-mono text-xs mb-2 block" style={{ color: "#94A3B8" }}>
              02. CONFIGURE
            </span>
          </Reveal>
          <Reveal variant="clip-up" delay={0.1} duration={0.8} easing="cubic-bezier(0.77, 0, 0.175, 1)">
            <h2
              className="text-5xl mb-6 uppercase"
              style={{
                fontFamily: "var(--font-anton), Anton, sans-serif",
                letterSpacing: "0.02em",
                color: "white",
              }}
            >
              DEFINE YOUR BOUNDARIES
            </h2>
          </Reveal>
          <Reveal variant="blur" delay={0.3} duration={0.7}>
            <p className="font-mono" style={{ color: "#94A3B8" }}>
              Adjust the dimensions below to find your protocol.
            </p>
          </Reveal>
        </div>

        {/* Dimension Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Training */}
          <Reveal variant="scale" delay={0.1} duration={0.6} easing="cubic-bezier(0.34, 1.56, 0.64, 1)">
            <div
              className="p-8 relative"
              style={{
                border: "1px solid var(--border-dim)",
                backgroundColor: "var(--bg-dark)",
              }}
            >
              <div
                className="absolute top-0 right-0 p-2 opacity-30 font-mono text-xs"
                style={{ color: "#666" }}
              >
                DIM_01
              </div>
              <h3
                className="text-2xl mb-2 uppercase"
                style={{
                  fontFamily: "var(--font-anton), Anton, sans-serif",
                  letterSpacing: "0.02em",
                  color: "white",
                }}
              >
                AI TRAINING
              </h3>
              <p className="text-xs mb-6 h-10" style={{ color: "#94A3B8" }}>
                Can models use this data to update their weights?
              </p>
              <div className="flex flex-col gap-3 font-mono text-sm">
                <label className="flex items-center cursor-pointer gap-3">
                  <input
                    type="radio"
                    name="training"
                    checked={training === "allow"}
                    onChange={() => setTraining("allow")}
                    className="w-4 h-4"
                    style={{ accentColor: "white" }}
                  />
                  <span style={{ color: training === "allow" ? "white" : "#94A3B8" }}>
                    Allowed (T+)
                  </span>
                </label>
                <label className="flex items-center cursor-pointer gap-3">
                  <input
                    type="radio"
                    name="training"
                    checked={training === "forbid"}
                    onChange={() => setTraining("forbid")}
                    className="w-4 h-4"
                    style={{ accentColor: "white" }}
                  />
                  <span style={{ color: training === "forbid" ? "white" : "#94A3B8" }}>
                    Forbidden (T-)
                  </span>
                </label>
              </div>
            </div>
          </Reveal>

          {/* Reading */}
          <Reveal variant="slide" direction="up" delay={0.25} duration={0.7}>
            <div
              className="p-8 relative"
              style={{
                border: "1px solid var(--border-dim)",
                backgroundColor: "var(--bg-dark)",
              }}
            >
              <div
                className="absolute top-0 right-0 p-2 opacity-30 font-mono text-xs"
                style={{ color: "#666" }}
              >
                DIM_02
              </div>
              <h3
                className="text-2xl mb-2 uppercase"
                style={{
                  fontFamily: "var(--font-anton), Anton, sans-serif",
                  letterSpacing: "0.02em",
                  color: "white",
                }}
              >
                AI READING
              </h3>
              <p className="text-xs mb-6 h-10" style={{ color: "#94A3B8" }}>
                Can models read this content during inference (RAG)?
              </p>
              <div className="flex flex-col gap-3 font-mono text-sm">
                {[
                  { value: "allow", label: "Any Model (R+)" },
                  { value: "open", label: "Open Models Only (RO)" },
                  { value: "forbid", label: "Forbidden (R-)" },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center cursor-pointer gap-3">
                    <input
                      type="radio"
                      name="reading"
                      checked={reading === opt.value}
                      onChange={() => setReading(opt.value)}
                      className="w-4 h-4"
                      style={{ accentColor: "white" }}
                    />
                    <span style={{ color: reading === opt.value ? "white" : "#94A3B8" }}>
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Commerce */}
          <Reveal variant="blur" delay={0.4} duration={0.7}>
            <div
              className="p-8 relative"
              style={{
                border: "1px solid var(--border-dim)",
                backgroundColor: "var(--bg-dark)",
              }}
            >
              <div
                className="absolute top-0 right-0 p-2 opacity-30 font-mono text-xs"
                style={{ color: "#666" }}
              >
                DIM_03
              </div>
              <h3
                className="text-2xl mb-2 uppercase"
                style={{
                  fontFamily: "var(--font-anton), Anton, sans-serif",
                  letterSpacing: "0.02em",
                  color: "white",
                }}
              >
                COMMERCE
              </h3>
              <p className="text-xs mb-6 h-10" style={{ color: "#94A3B8" }}>
                Is commercial use allowed for the output?
              </p>
              <div className="flex flex-col gap-3 font-mono text-sm">
                {[
                  { value: "allow", label: "Allowed (C+)" },
                  { value: "forbid", label: "Forbidden (C-)" },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center cursor-pointer gap-3">
                    <input
                      type="radio"
                      name="commerce"
                      checked={commerce === opt.value}
                      onChange={() => setCommerce(opt.value)}
                      className="w-4 h-4"
                      style={{ accentColor: "white" }}
                    />
                    <span style={{ color: commerce === opt.value ? "white" : "#94A3B8" }}>
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Recommendation */}
        <Reveal variant="scale" delay={0.15} duration={0.7} className="mt-12 text-center">
          <div
            className="inline-block p-6"
            style={{
              border: "1px solid var(--border-bright)",
              backgroundColor: "rgba(255,255,255,0.02)",
            }}
          >
            <span className="block font-mono text-xs mb-2" style={{ color: "#94A3B8" }}>
              RECOMMENDED VARIANT
            </span>
            <h2
              className="text-4xl uppercase"
              style={{
                fontFamily: "var(--font-anton), Anton, sans-serif",
                letterSpacing: "0.02em",
                color: "white",
              }}
            >
              {recommendation.name}
            </h2>
            <span className="font-mono text-xs mt-1 block" style={{ color: "#666666" }}>
              SPDX: {recommendation.displayName}
            </span>
            <div className="font-mono text-sm mt-2" style={{ color: "#94A3B8" }}>
              {recommendation.desc}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
