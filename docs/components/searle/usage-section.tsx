import { Reveal } from "./reveal"

export function UsageSection() {
  const steps = [
    { n: 1, title: "Choose Variant", desc: "Select the license that matches your intent from the grid above.", active: true },
    { n: 2, title: "Add Metadata", desc: "Include JSON-LD or Meta tags in your document head.", active: false },
    { n: 3, title: "Chain Attestation (Optional)", desc: "Register your content hash on the Base registry for immutable proof.", active: false },
  ]

  const stepAnims: Array<"slide" | "blur" | "scale"> = ["slide", "blur", "scale"]

  return (
    <section
      id="usage"
      className="grid grid-cols-1 lg:grid-cols-2 snap-section"
      style={{ borderBottom: "1px solid var(--border-dim)" }}
    >
      {/* Left - Steps */}
      <div className="p-12 md:p-20" style={{ borderRight: "1px solid var(--border-dim)" }}>
        <Reveal variant="clip-left" delay={0} duration={0.6} easing="cubic-bezier(0.77, 0, 0.175, 1)">
          <span className="font-mono text-xs font-bold mb-8 block" style={{ color: "#94A3B8" }}>
            04. IMPLEMENTATION
          </span>
        </Reveal>
        <Reveal variant="clip-up" delay={0.15} duration={0.8} easing="cubic-bezier(0.77, 0, 0.175, 1)">
          <h2
            className="text-5xl mb-12 uppercase"
            style={{
              fontFamily: "var(--font-anton), Anton, sans-serif",
              letterSpacing: "0.02em",
              color: "white",
            }}
          >
            MACHINE READABLE
          </h2>
        </Reveal>
        <div className="flex flex-col gap-12">
          {steps.map((step, i) => (
            <Reveal key={step.n} variant={stepAnims[i]} direction="up" delay={0.3 + i * 0.15} duration={0.6}>
              <div className="flex gap-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-mono text-sm shrink-0"
                  style={{
                    border: `1px solid ${step.active ? "white" : "var(--border-bright)"}`,
                    color: step.active ? "white" : "var(--border-bright)",
                  }}
                >
                  {step.n}
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2" style={{ color: "white" }}>{step.title}</h4>
                  <p className="text-sm" style={{ color: "#94A3B8" }}>{step.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Right - Code Block */}
      <Reveal variant="slide" direction="right" delay={0.2} duration={0.9}>
        <div
          className="p-12 md:p-20 font-mono text-sm overflow-x-auto h-full"
          style={{ backgroundColor: "#050505" }}
        >
          <div className="flex items-center gap-2 mb-4" style={{ color: "#94A3B8" }}>
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs">index.html</span>
          </div>
          <pre className="text-gray-300 text-xs leading-relaxed overflow-x-auto whitespace-pre-wrap">
            <span className="text-blue-400">{'<head>'}</span>{'\n'}
            {'  '}<span className="text-gray-500">{'<!-- License Meta Tag -->'}</span>{'\n'}
            {'  '}<span className="text-blue-400">{'<meta'}</span>{' '}
            <span className="text-purple-400">name</span>=<span className="text-green-400">{'"searle:license"'}</span>{' '}
            <span className="text-purple-400">content</span>=<span className="text-green-400">{'"SEARLE-NT-v1.0"'}</span>
            <span className="text-blue-400">{'>'}</span>{'\n\n'}
            {'  '}<span className="text-gray-500">{'<!-- JSON-LD Structured Data -->'}</span>{'\n'}
            {'  '}<span className="text-blue-400">{'<script'}</span>{' '}
            <span className="text-purple-400">type</span>=<span className="text-green-400">{'"application/ld+json"'}</span>
            <span className="text-blue-400">{'>'}</span>{'\n'}
            {'  {'}{'\n'}
            {'    '}<span className="text-green-400">{'"@context"'}</span>{': '}<span className="text-green-400">{'"https://schema.org"'}</span>{','}{'\n'}
            {'    '}<span className="text-green-400">{'"@type"'}</span>{': '}<span className="text-green-400">{'"DigitalDocument"'}</span>{','}{'\n'}
            {'    '}<span className="text-green-400">{'"license"'}</span>{': '}<span className="text-green-400">{'"https://searleprotocol.org/licenses/NT"'}</span>{','}{'\n'}
            {'    '}<span className="text-green-400">{'"usageInfo"'}</span>{': {'}{'\n'}
            {'      '}<span className="text-green-400">{'"@type"'}</span>{': '}<span className="text-green-400">{'"RightsStatement"'}</span>{','}{'\n'}
            {'      '}<span className="text-green-400">{'"aiTraining"'}</span>{': '}<span className="text-red-400">false</span>{','}{'\n'}
            {'      '}<span className="text-green-400">{'"aiReading"'}</span>{': '}<span className="text-blue-400">true</span>{','}{'\n'}
            {'      '}<span className="text-green-400">{'"commercial"'}</span>{': '}<span className="text-blue-400">true</span>{'\n'}
            {'    }'}{'\n'}
            {'  }'}{'\n'}
            {'  '}<span className="text-blue-400">{'</script>'}</span>{'\n'}
            <span className="text-blue-400">{'</head>'}</span>
          </pre>
        </div>
      </Reveal>
    </section>
  )
}
