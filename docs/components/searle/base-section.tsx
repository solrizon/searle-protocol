"use client"

import { Reveal } from "./reveal"

export function BaseSection() {
  return (
    <section
      className="py-24"
      style={{
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid var(--border-dim)",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes morph {
          0%   { transform: rotate(45deg) scale(1);    border-radius: 0%; }
          20%  { transform: rotate(105deg) scale(1.08); border-radius: 15% 50% 15% 50%; }
          40%  { transform: rotate(180deg) scale(0.95); border-radius: 50%; }
          60%  { transform: rotate(255deg) scale(1.05); border-radius: 50% 15% 50% 15%; }
          80%  { transform: rotate(330deg) scale(0.98); border-radius: 30% 0% 30% 0%; }
          100% { transform: rotate(405deg) scale(1);    border-radius: 0%; }
        }
        @keyframes morph-rev {
          0%   { transform: rotate(45deg) scale(1.15);  border-radius: 0%;              opacity: 0.4; }
          25%  { transform: rotate(-30deg) scale(1.25);  border-radius: 50%;             opacity: 0.25; }
          50%  { transform: rotate(-105deg) scale(1.1);  border-radius: 20% 50% 20% 50%; opacity: 0.35; }
          75%  { transform: rotate(-180deg) scale(1.2);  border-radius: 50% 20% 50% 20%; opacity: 0.2; }
          100% { transform: rotate(-255deg) scale(1.15); border-radius: 0%;              opacity: 0.4; }
        }
      `}} />
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal variant="clip-up" delay={0} duration={0.9} easing="cubic-bezier(0.77, 0, 0.175, 1)">
            <h2
              className="text-6xl mb-6 uppercase"
              style={{
                fontFamily: "var(--font-anton), Anton, sans-serif",
                letterSpacing: "0.02em",
                color: "black",
              }}
            >
              IMMUTABLE PROOF
              <br />
              ON BASE.
            </h2>
          </Reveal>
          <Reveal variant="blur" delay={0.2} duration={0.7}>
            <p className="font-mono text-lg mb-8 max-w-lg" style={{ color: "#555555" }}>
              {'"The protocol itself is the first asset protected by itself."'}
            </p>
          </Reveal>
          <Reveal variant="slide" direction="left" delay={0.35} duration={0.6}>
            <div
              className="p-6"
              style={{
                backgroundColor: "rgba(0,0,0,0.05)",
                border: "1px solid #DDDDDD",
              }}
            >
              <div className="text-xs font-mono uppercase mb-2" style={{ color: "#666666" }}>
                Contract Address (Base Mainnet)
              </div>
              <div className="font-mono text-sm break-all" style={{ color: "black" }}>
                0x7f2c...3a9B{" "}
                <span className="ml-2 px-2 py-0.5 text-xs" style={{ backgroundColor: "#E8F5E9", color: "#2E7D32" }}>
                  VERIFIED
                </span>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal variant="scale" delay={0.25} duration={1} easing="cubic-bezier(0.34, 1.56, 0.64, 1)">
          <div
            className="p-8 flex items-center justify-center aspect-square md:aspect-video relative"
            style={{ border: "1px solid #DDDDDD" }}
          >
            <div style={{
              width: 128,
              height: 128,
              position: "absolute",
              border: "2px solid #CCCCCC",
              animation: "morph-rev 10s ease-in-out infinite",
            }} />
            <div style={{
              width: 128,
              height: 128,
              position: "absolute",
              border: "4px solid black",
              animation: "morph 8s ease-in-out infinite",
            }} />
            <div className="absolute bottom-4 right-4 font-mono text-xs" style={{ color: "#555555" }}>BLOCK 1928374</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
