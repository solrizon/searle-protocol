import Link from "next/link"

export function Footer() {
  return (
    <footer
      className="font-mono text-sm snap-section"
      style={{
        backgroundColor: "var(--bg-dark)",
        color: "var(--text-muted)",
        borderTop: "1px solid var(--border-dim)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4">
        {/* SOLRIZON */}
        <div
          className="p-8"
          style={{
            borderRight: "1px solid var(--border-dim)",
            borderBottom: "1px solid var(--border-dim)",
          }}
        >
          <span className="font-bold block mb-4" style={{ color: "white" }}>
            SOLRIZON
          </span>
          <p>Building the sovereign web.</p>
        </div>

        {/* SOCIAL */}
        <div
          className="p-8"
          style={{
            borderRight: "1px solid var(--border-dim)",
            borderBottom: "1px solid var(--border-dim)",
          }}
        >
          <span className="font-bold block mb-4" style={{ color: "white" }}>
            SOCIAL
          </span>
          <a
            href="https://x.com/solrizon_"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-2 hover:text-white transition-colors no-underline"
            style={{ color: "var(--text-muted)" }}
          >
            Twitter / X
          </a>
          <a
            href="https://github.com/solrizon/searle-protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-white transition-colors no-underline"
            style={{ color: "var(--text-muted)" }}
          >
            GitHub
          </a>
        </div>

        {/* LEGAL */}
        <div
          className="p-8"
          style={{
            borderRight: "1px solid var(--border-dim)",
            borderBottom: "1px solid var(--border-dim)",
          }}
        >
          <span className="font-bold block mb-4" style={{ color: "white" }}>
            LEGAL
          </span>
          <Link
            href="/terms"
            className="block mb-2 hover:text-white transition-colors no-underline"
            style={{ color: "var(--text-muted)" }}
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy"
            className="block hover:text-white transition-colors no-underline"
            style={{ color: "var(--text-muted)" }}
          >
            Privacy Policy
          </Link>
        </div>

        {/* VERSION */}
        <div
          className="p-8"
          style={{ borderBottom: "1px solid var(--border-dim)" }}
        >
          <span className="font-bold block mb-4" style={{ color: "white" }}>
            VERSION
          </span>
          <span>Protocol v1.0.4</span>
          <div className="mt-8 text-xs">
            {'© Solrizon'}
          </div>
        </div>
      </div>
    </footer>
  )
}
