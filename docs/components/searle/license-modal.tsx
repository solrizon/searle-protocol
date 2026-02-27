"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { X, Copy, Check, Download, Loader2 } from "lucide-react"
import { type LicenseMeta, suffixFiles, fetchLicenseText } from "@/lib/license-texts"

interface LicenseModalProps {
  license: LicenseMeta | null
  onClose: () => void
}

type TabKey = "license" | "oca" | "wm"

export function LicenseModal({ license, onClose }: LicenseModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<TabKey>("license")
  const [texts, setTexts] = useState<Record<TabKey, string>>({ license: "", oca: "", wm: "" })
  const [loading, setLoading] = useState(false)

  const loadText = useCallback(async (tab: TabKey, file: string) => {
    setLoading(true)
    const text = await fetchLicenseText(file)
    setTexts((prev) => ({ ...prev, [tab]: text }))
    setLoading(false)
  }, [])

  useEffect(() => {
    if (license) {
      document.body.style.overflow = "hidden"
      setCopied(false)
      setActiveTab("license")
      setTexts({ license: "", oca: "", wm: "" })
      loadText("license", license.file)
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [license, loadText])

  useEffect(() => {
    if (!license) return
    if (activeTab === "oca" && !texts.oca) {
      loadText("oca", suffixFiles.OCA.file)
    } else if (activeTab === "wm" && !texts.wm) {
      loadText("wm", suffixFiles.WM.file)
    }
  }, [activeTab, license, texts.oca, texts.wm, loadText])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  if (!license) return null

  const currentText = texts[activeTab]

  const handleCopyFull = () => {
    navigator.clipboard.writeText(currentText).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const filename =
      activeTab === "license"
        ? `${license.spdx}.txt`
        : activeTab === "oca"
        ? "OCA-1.0.txt"
        : "WM-1.0.txt"
    const blob = new Blob([currentText], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose()
  }

  const tabs: { key: TabKey; label: string }[] = [
    { key: "license", label: "License" },
    { key: "oca", label: "-OCA Addendum" },
    { key: "wm", label: "-WM Addendum" },
  ]

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.88)", backdropFilter: "blur(4px)" }}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`${license.id} License`}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] flex flex-col"
        style={{
          backgroundColor: "var(--bg-panel)",
          border: "1px solid var(--border-dim)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-6 shrink-0"
          style={{ borderBottom: "1px solid var(--border-dim)" }}
        >
          <div className="flex items-center gap-4">
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: "white" }}
            />
            <div>
              <h2
                className="text-2xl uppercase"
                style={{
                  fontFamily: "var(--font-anton), Anton, sans-serif",
                  letterSpacing: "0.02em",
                  color: "white",
                }}
              >
                {license.id}
              </h2>
              <span className="font-mono text-xs" style={{ color: "#94A3B8" }}>
                {license.fullName} | SPDX: {license.spdx}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 transition-colors hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-5 h-5" style={{ color: "#94A3B8" }} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex shrink-0" style={{ borderBottom: "1px solid var(--border-dim)" }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className="px-6 py-3 font-mono text-xs uppercase transition-colors"
              style={{
                color: activeTab === tab.key ? "white" : "#94A3B8",
                borderBottom: activeTab === tab.key ? "2px solid white" : "2px solid transparent",
                backgroundColor: activeTab === tab.key ? "rgba(255,255,255,0.03)" : "transparent",
              }}
              onClick={() => {
                setActiveTab(tab.key)
                setCopied(false)
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-6">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2
                className="w-6 h-6 animate-spin"
                style={{ color: "#94A3B8" }}
              />
              <span className="ml-3 font-mono text-xs" style={{ color: "#94A3B8" }}>
                Loading...
              </span>
            </div>
          ) : (
            <pre
              className="text-xs leading-relaxed font-mono whitespace-pre-wrap break-words"
              style={{ color: "#CBD5E1" }}
            >
              {currentText}
            </pre>
          )}
        </div>

        {/* Footer */}
        <div
          className="flex items-center justify-between p-6 shrink-0"
          style={{ borderTop: "1px solid var(--border-dim)" }}
        >
          <button
            onClick={handleDownload}
            className="font-mono text-xs uppercase px-4 py-2.5 transition-colors hover:bg-white/5 flex items-center gap-2"
            style={{ border: "1px solid var(--border-bright)", color: "var(--text-muted)" }}
          >
            <Download className="w-3.5 h-3.5" />
            Download .txt
          </button>
          <button
            onClick={handleCopyFull}
            className="font-mono text-xs uppercase px-6 py-2.5 flex items-center gap-2 transition-colors hover:bg-white hover:text-black"
            style={{
              border: copied ? "1px solid white" : "1px solid var(--border-bright)",
              backgroundColor: copied ? "rgba(255,255,255,0.1)" : "transparent",
              color: copied ? "white" : "white",
            }}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy Full Text
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
