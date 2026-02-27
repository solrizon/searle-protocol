"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navItems = [
  { id: "problem", label: "01. PROBLEM" },
  { id: "selector", label: "02. SELECTOR" },
  { id: "variants", label: "03. VARIANTS" },
  { id: "usage", label: "04. USAGE" },
]

const menuLinks = [
  { label: "HOME", href: "/" },
  { label: "PROTOCOL SELECTOR", href: "/#selector" },
  { label: "LICENSE VARIANTS", href: "/#variants" },
  { label: "IMPLEMENTATION", href: "/#usage" },
  { label: "FAQ", href: "/#faq" },
  { divider: true, label: "", href: "" },
  { label: "TERMS OF SERVICE", href: "/terms" },
  { label: "PRIVACY POLICY", href: "/privacy" },
  { divider: true, label: "", href: "" },
  { label: "TWITTER / X", href: "https://x.com/solrizon_", external: true },
  { label: "GITHUB", href: "https://github.com/solrizon/searle-protocol", external: true },
]

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClick)
    }
    return () => document.removeEventListener("mousedown", handleClick)
  }, [menuOpen])

  return (
    <nav
      className="fixed top-8 w-full z-40 backdrop-blur-md"
      style={{
        backgroundColor: "rgba(2,4,8,0.92)",
        borderBottom: "1px solid var(--border-dim)",
      }}
    >
      <div className="grid grid-cols-12 h-16">
        {/* Logo */}
        <div
          className="col-span-4 md:col-span-3 lg:col-span-2 flex items-center justify-center px-4"
          style={{ borderRight: "1px solid var(--border-dim)" }}
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
        </div>

        {/* Nav Links */}
        <div
          className="col-span-4 md:col-span-6 lg:col-span-8 items-center px-6 hidden md:flex"
          style={{ borderRight: "1px solid var(--border-dim)" }}
        >
          <div className="font-mono text-xs flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="hover:text-white transition-colors bg-transparent border-0 cursor-pointer font-mono text-xs uppercase"
                style={{ color: "#94A3B8" }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Button */}
        <div className="col-span-8 md:col-span-3 lg:col-span-2 relative" ref={menuRef}>
          <button
            className="w-full h-full flex items-center justify-center cursor-pointer transition-colors font-mono text-sm font-bold border-0"
            style={{
              backgroundColor: menuOpen ? "var(--border-bright)" : "white",
              color: menuOpen ? "white" : "black",
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : "MENU"}
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <div
              className="absolute right-0 top-full w-72 py-2"
              style={{
                backgroundColor: "var(--bg-panel)",
                border: "1px solid var(--border-dim)",
                borderTop: "none",
                animation: "fade-in 0.2s ease-out",
              }}
            >
              {menuLinks.map((link, i) =>
                link.divider ? (
                  <div
                    key={`divider-${i}`}
                    className="my-2 mx-4"
                    style={{ borderTop: "1px solid var(--border-dim)" }}
                  />
                ) : link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-6 py-3 font-mono text-xs transition-colors no-underline hover:bg-white/5"
                    style={{ color: "#94A3B8" }}
                    onClick={() => setMenuOpen(false)}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "white" }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#94A3B8" }}
                  >
                    {link.label}
                    <span className="ml-2 opacity-50">{'>'}</span>
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="block px-6 py-3 font-mono text-xs transition-colors no-underline hover:bg-white/5"
                    style={{ color: "#94A3B8" }}
                    onClick={() => setMenuOpen(false)}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "white" }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#94A3B8" }}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
