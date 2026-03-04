"use client"

import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { Reveal } from "./reveal"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="h-screen min-h-[600px] grid grid-cols-1 lg:grid-cols-12 relative snap-section"
      style={{ borderBottom: "1px solid var(--border-dim)" }}
    >
      {/* Left Content */}
      <div
        className="lg:col-span-8 p-6 md:p-12 lg:p-20 flex flex-col justify-between relative overflow-hidden"
        style={{ borderRight: "1px solid var(--border-dim)" }}
      >
        {/* Dot Pattern */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage: "radial-gradient(#334155 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.1,
          }}
        />

        <div className="relative z-10">
          <Reveal variant="blur" delay={0.1} duration={0.9}>
            <div
              className="inline-block px-3 py-1 font-mono text-xs mb-8 rounded-full"
              style={{ border: "1px solid var(--border-bright)", color: "var(--text-muted)" }}
            >
              OPEN STANDARD V1.0
            </div>
          </Reveal>
          <Reveal variant="clip-up" delay={0.25} duration={1} easing="cubic-bezier(0.77, 0, 0.175, 1)">
            <h1
              className="text-7xl md:text-9xl mb-8"
              style={{
                fontFamily: "var(--font-anton), Anton, sans-serif",
                letterSpacing: "0.02em",
                lineHeight: "0.85",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              SEARLE
              <br />
              PROTOCOL
            </h1>
          </Reveal>
          <Reveal variant="slide" direction="left" delay={0.6} duration={0.8}>
            <p
              className="font-mono max-w-xl text-sm md:text-base leading-relaxed pl-6"
              style={{
                color: "var(--text-muted)",
                borderLeft: "2px solid var(--border-bright)",
              }}
            >
              The Open License Standard for AI Content Rights. Define how machine
              intelligence interacts with your creative work. Training, reading,
              and commerce — your content, your rules.
            </p>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={0.85} duration={0.6} className="relative z-10 mt-12 md:mt-24 flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollToSection("variants")}
            className="px-8 py-4 font-bold font-mono text-center transition-colors border hover:bg-gray-200"
            style={{
              backgroundColor: "white",
              color: "black",
              borderColor: "white",
            }}
          >
            CHOOSE LICENSE →
          </button>
          <button
            onClick={() => scrollToSection("problem")}
            className="px-8 py-4 font-bold font-mono text-center transition-colors hover:bg-white/10"
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid var(--border-bright)",
            }}
          >
            READ THE MANIFESTO
          </button>
          <Link
            href="/license/v1.0"
            className="px-8 py-4 font-bold font-mono text-center transition-colors hover:bg-white/5 no-underline"
            style={{
              backgroundColor: "transparent",
              color: "var(--text-muted)",
              border: "1px solid var(--border-dim)",
            }}
          >
            FULL SPECIFICATION ↗
          </Link>
        </Reveal>
      </div>

      {/* Right Panel */}
      <div
        className="lg:col-span-4 flex flex-col justify-between border-t lg:border-t-0"
        style={{ backgroundColor: "var(--bg-panel)" }}
      >
        <div className="p-8" style={{ borderBottom: "1px solid var(--border-dim)" }}>
          <Reveal variant="scale" delay={0.5} duration={1.2} easing="cubic-bezier(0.34, 1.56, 0.64, 1)">
            <div
              className="w-full max-w-xs mx-auto aspect-square flex items-center justify-center relative group cursor-pointer"
              style={{ border: "1px solid var(--border-dim)", borderRadius: "50%" }}
              onClick={() => scrollToSection("problem")}
            >
              <div
                className="absolute inset-0"
                style={{
                  borderRadius: "50%",
                  border: "1px dashed var(--border-bright)",
                  animation: "spin-slow 10s linear infinite",
                }}
              />
              <ArrowDown className="w-12 h-12 group-hover:translate-y-2 transition-transform" style={{ color: "white" }} />
            </div>
          </Reveal>
          <Reveal variant="fade" delay={1.2} duration={0.8}>
            <div className="mt-8 text-center font-mono text-xs" style={{ color: "var(--text-muted)" }}>
              SCROLL TO EXPLORE
            </div>
          </Reveal>
        </div>

        <Reveal variant="slide" direction="right" delay={0.4} duration={0.9} className="p-8 flex-grow flex flex-col justify-end">
          <h3
            className="text-4xl mb-4 uppercase"
            style={{
              fontFamily: "var(--font-anton), Anton, sans-serif",
              letterSpacing: "0.02em",
              color: "white",
            }}
          >
            THE CHINESE ROOM
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {`Named after John Searle's argument demonstrating that a computer executing a program cannot be shown to have a "mind" or "understanding," regardless of how intelligently it may behave.`}
          </p>
        </Reveal>

        <div
          className="h-12 flex items-center justify-between px-6"
          style={{ backgroundColor: "var(--border-dim)" }}
        >
          <span className="font-mono text-xs font-bold" style={{ color: "white" }}>
            LATEST BUILD
          </span>
          <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
            FEB 2026
          </span>
        </div>
      </div>
    </section>
  )
}
