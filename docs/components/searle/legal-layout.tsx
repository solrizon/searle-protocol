import Link from "next/link"

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <div
      style={{
        backgroundColor: "var(--bg-dark)",
        color: "#F1F5F9",
        fontFamily: "var(--font-inter), Inter, sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <header
        className="flex items-center justify-between px-8 h-16"
        style={{ borderBottom: "1px solid var(--border-dim)" }}
      >
        <Link
          href="/"
          className="text-xl tracking-wider uppercase no-underline"
          style={{
            fontFamily: "var(--font-anton), Anton, sans-serif",
            letterSpacing: "0.02em",
            color: "white",
          }}
        >
          SEARLE.
        </Link>
        <Link
          href="/"
          className="font-mono text-xs no-underline transition-colors hover:text-white"
          style={{ color: "#94A3B8" }}
        >
          BACK TO HOME
        </Link>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-12">
          <span className="font-mono text-xs block mb-4" style={{ color: "#94A3B8" }}>
            LAST UPDATED: {lastUpdated}
          </span>
          <h1
            className="text-5xl md:text-6xl uppercase mb-4"
            style={{
              fontFamily: "var(--font-anton), Anton, sans-serif",
              letterSpacing: "0.02em",
              color: "white",
            }}
          >
            {title}
          </h1>
          <div
            className="w-16 h-px"
            style={{ backgroundColor: "var(--border-bright)" }}
          />
        </div>

        <article className="prose-legal flex flex-col gap-8" style={{ color: "#94A3B8" }}>
          {children}
        </article>
      </main>

      {/* Footer */}
      <footer
        className="px-8 py-6 font-mono text-xs flex items-center justify-between"
        style={{
          borderTop: "1px solid var(--border-dim)",
          color: "#94A3B8",
        }}
      >
        <span>{'© Solrizon'}</span>
        <div className="flex gap-6">
          <Link href="/terms" className="no-underline hover:text-white transition-colors" style={{ color: "#94A3B8" }}>
            Terms
          </Link>
          <Link href="/privacy" className="no-underline hover:text-white transition-colors" style={{ color: "#94A3B8" }}>
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  )
}
