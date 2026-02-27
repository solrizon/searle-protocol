import { Reveal } from "./reveal"

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="grid grid-cols-1 md:grid-cols-2 snap-section"
      style={{ borderBottom: "1px solid var(--border-dim)" }}
    >
      {/* Left - White panel */}
      <div
        className="p-12 md:p-24 flex flex-col justify-center"
        style={{
          borderRight: "1px solid var(--border-dim)",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Reveal variant="clip-left" delay={0} duration={0.7} easing="cubic-bezier(0.77, 0, 0.175, 1)">
          <span
            className="font-mono text-xs font-bold mb-6 block"
            style={{ color: "#1a1a1a" }}
          >
            01. THE PROBLEM
          </span>
        </Reveal>
        <Reveal variant="clip-up" delay={0.2} duration={0.9} easing="cubic-bezier(0.77, 0, 0.175, 1)">
          <h2
            className="text-6xl md:text-7xl lg:text-8xl leading-none uppercase"
            style={{
              fontFamily: "var(--font-anton), Anton, sans-serif",
              letterSpacing: "0.02em",
              color: "black",
            }}
          >
            THE GAP IN
            <br />
            THE CODE.
          </h2>
        </Reveal>
      </div>

      {/* Right - Dark panel */}
      <div
        className="p-12 md:p-24 flex items-center"
        style={{ backgroundColor: "var(--bg-dark)" }}
      >
        <div className="max-w-lg">
          <Reveal variant="blur" delay={0.3} duration={0.8}>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              Traditional open source licenses (MIT, Apache, CC) were written for
              humans. They do not account for the scale of ingestion by Large
              Language Models.
            </p>
          </Reveal>
          <Reveal variant="slide" direction="up" delay={0.5} duration={0.7}>
            <p className="text-lg leading-relaxed" style={{ color: "var(--text-main)" }}>
              <span style={{ color: "white", fontWeight: 500 }}>
                {"Robots.txt is a gentleman's agreement."}
              </span>{" "}
              <span style={{ color: "var(--text-muted)" }}>
                {`Creators need a cryptographically verifiable, machine-readable standard to declare "No Training" or "Open Weights Only" with legal force.`}
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
