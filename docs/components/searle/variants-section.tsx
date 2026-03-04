"use client"

import Link from "next/link"
import { useState, type ReactNode } from "react"
import {
  Globe,
  Shield,
  Cpu,
  EyeOff,
  Ban,
  Lock,
  XOctagon,
  FileText,
  Copy,
  Eye,
  Check,
} from "lucide-react"
import { Reveal } from "./reveal"

interface Recommendation {
  name: string
  displayName: string
  desc: string
  cardId: string
  licenseKey: string
}

interface LicenseData {
  id: string
  cardId: string
  licenseKey: string
  title: string
  icon: ReactNode
  training: string
  trainingColor: string
  reading: string
  readingColor: string
  commerce: string
  commerceColor: string
}

function LicenseCard({
  title,
  icon,
  training,
  trainingColor,
  reading,
  readingColor,
  commerce,
  commerceColor,
  cardId,
  onCopy,
  onView,
  isActive,
}: LicenseData & {
  onCopy: (licenseKey: string) => void
  onView: (name: string) => void
  isActive: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const [justCopied, setJustCopied] = useState(false)

  const handleCopy = () => {
    onCopy(title)
    setJustCopied(true)
    setTimeout(() => setJustCopied(false), 2000)
  }

  return (
    <div
      id={cardId}
      className="p-8 relative flex flex-col"
      style={{
        borderBottom: "1px solid var(--border-dim)",
        borderRight: "1px solid var(--border-dim)",
        borderColor: isActive ? "var(--border-bright)" : "var(--border-dim)",
        backgroundColor: isActive
          ? "#0d1522"
          : hovered
          ? "#0d1522"
          : "transparent",
        transform: hovered ? "translateY(-2px)" : "none",
        transition: "all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-between items-start mb-6">
        <h4
          className="text-2xl uppercase"
          style={{
            fontFamily: "var(--font-anton), Anton, sans-serif",
            letterSpacing: "0.02em",
            color: "white",
          }}
        >
          {title}
        </h4>
        {icon}
      </div>

      <div className="flex flex-col gap-3 mb-8 flex-1">
        <div className="flex items-center text-xs font-mono text-gray-400">
          <span className="w-24">TRAINING</span>
          <span className={trainingColor}>{training}</span>
        </div>
        <div className="flex items-center text-xs font-mono text-gray-400">
          <span className="w-24">READING</span>
          <span className={readingColor}>{reading}</span>
        </div>
        <div className="flex items-center text-xs font-mono text-gray-400">
          <span className="w-24">COMMERCE</span>
          <span className={commerceColor}>{commerce}</span>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          className="flex-1 py-2 font-mono text-xs uppercase transition-colors flex items-center justify-center gap-1.5 hover:bg-white/5"
          style={{
            border: "1px solid var(--border-bright)",
            backgroundColor: "transparent",
            color: "var(--text-muted)",
          }}
          onClick={() => onView(title)}
          aria-label={`View ${title} license`}
        >
          <Eye className="w-3.5 h-3.5" />
          View
        </button>
        <button
          className="flex-1 py-2 font-mono text-xs uppercase transition-colors flex items-center justify-center gap-1.5 hover:bg-white hover:text-black hover:border-white"
          style={{
            border: justCopied ? "1px solid white" : "1px solid var(--border-bright)",
            backgroundColor: justCopied ? "rgba(255,255,255,0.1)" : "transparent",
            color: justCopied ? "white" : "white",
          }}
          onClick={handleCopy}
          aria-label={`Copy ${title} license`}
        >
          {justCopied ? (
            <>
              <Check className="w-3.5 h-3.5" />
              Copied
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  )
}

const licenses: LicenseData[] = [
  { id: "os", cardId: "card-os", licenseKey: "Searle-OS", title: "SEARLE-OS", icon: <Globe className="w-5 h-5 text-green-500" />, training: "Allowed", trainingColor: "text-green-400", reading: "Any Model", readingColor: "text-green-400", commerce: "Allowed", commerceColor: "text-green-400" },
  { id: "nt", cardId: "card-nt", licenseKey: "Searle-NT", title: "SEARLE-NT", icon: <Shield className="w-5 h-5 text-gray-300" />, training: "Forbidden", trainingColor: "text-red-400", reading: "Any Model", readingColor: "text-green-400", commerce: "Allowed", commerceColor: "text-green-400" },
  { id: "nt-ow", cardId: "card-nt-ow", licenseKey: "Searle-NT-OW", title: "SEARLE-OW", icon: <Cpu className="w-5 h-5 text-yellow-400" />, training: "Forbidden", trainingColor: "text-red-400", reading: "Open Weights", readingColor: "text-yellow-400", commerce: "Allowed", commerceColor: "text-green-400" },
  { id: "nr", cardId: "card-nr", licenseKey: "Searle-NR", title: "SEARLE-NR", icon: <EyeOff className="w-5 h-5 text-red-500" />, training: "Forbidden", trainingColor: "text-red-400", reading: "Forbidden", readingColor: "text-red-400", commerce: "Allowed", commerceColor: "text-green-400" },
  { id: "nc-nt", cardId: "card-nc-nt", licenseKey: "Searle-NC-NT", title: "SEARLE-NC", icon: <Ban className="w-5 h-5 text-gray-400" />, training: "Forbidden", trainingColor: "text-red-400", reading: "Any Model", readingColor: "text-green-400", commerce: "Forbidden", commerceColor: "text-red-400" },
  { id: "nc-nt-ow", cardId: "card-nc-nt-ow", licenseKey: "Searle-NC-NT-OW", title: "SEARLE-NC-OW", icon: <Lock className="w-5 h-5 text-gray-400" />, training: "Forbidden", trainingColor: "text-red-400", reading: "Open Weights", readingColor: "text-yellow-400", commerce: "Forbidden", commerceColor: "text-red-400" },
  { id: "nc-nr", cardId: "card-nc-nr", licenseKey: "Searle-NC-NR", title: "SEARLE-STRICT", icon: <XOctagon className="w-5 h-5 text-red-600" />, training: "Forbidden", trainingColor: "text-red-400", reading: "Forbidden", readingColor: "text-red-400", commerce: "Forbidden", commerceColor: "text-red-400" },
  { id: "fp", cardId: "card-fp", licenseKey: "Searle-FP", title: "SEARLE-FP", icon: <FileText className="w-5 h-5 text-gray-400" />, training: "Forbidden", trainingColor: "text-red-400", reading: "Per Platform", readingColor: "text-yellow-400", commerce: "Per Terms", commerceColor: "text-yellow-400" },
]

const cardIdMap: Record<string, string> = {
  "SEARLE-OS": "card-os",
  "SEARLE-NT": "card-nt",
  "SEARLE-OW": "card-nt-ow",
  "SEARLE-NR": "card-nr",
  "SEARLE-NC": "card-nc-nt",
  "SEARLE-NC-OW": "card-nc-nt-ow",
  "SEARLE-STRICT": "card-nc-nr",
  "SEARLE-FP": "card-fp",
}

const revealVariants: Array<{ variant: "slide" | "scale" | "blur" | "fade"; direction?: "up" | "left" | "right"; delay: number }> = [
  { variant: "slide", direction: "up", delay: 0 },
  { variant: "blur", delay: 0.06 },
  { variant: "scale", delay: 0.12 },
  { variant: "slide", direction: "up", delay: 0.18 },
  { variant: "blur", delay: 0.08 },
  { variant: "slide", direction: "left", delay: 0.14 },
  { variant: "scale", delay: 0.2 },
  { variant: "fade", delay: 0.1 },
]

interface VariantsSectionProps {
  recommendation: Recommendation
  onCopy: (name: string) => void
  onView: (name: string) => void
}

export function VariantsSection({ recommendation, onCopy, onView }: VariantsSectionProps) {
  return (
    <section id="variants" className="snap-section" style={{ borderBottom: "1px solid var(--border-dim)" }}>
      <div
        className="p-8"
        style={{
          borderBottom: "1px solid var(--border-dim)",
          backgroundColor: "var(--bg-dark)",
        }}
      >
        <Reveal variant="clip-left" delay={0} duration={0.6} easing="cubic-bezier(0.77, 0, 0.175, 1)">
          <span className="font-mono text-xs font-bold" style={{ color: "#94A3B8" }}>
            03. PROTOCOL SUITE
          </span>
        </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {licenses.map((lic, i) => {
          const rv = revealVariants[i % revealVariants.length]
          return (
            <Reveal key={lic.id} variant={rv.variant} direction={rv.direction} delay={rv.delay} duration={0.55} threshold={0.05}>
              <LicenseCard
                {...lic}
                onCopy={onCopy}
                onView={onView}
                isActive={cardIdMap[recommendation.name] === lic.cardId}
              />
            </Reveal>
          )
        })}
      </div>
      <Reveal variant="fade" delay={0.2} duration={0.6}>
        <div
          className="flex items-center justify-between px-8 py-5"
          style={{ borderTop: "1px solid var(--border-dim)" }}
        >
          <span className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
            SEARLE PROTOCOL LICENSE v1.0 — 11 ARTICLES
          </span>
          <Link
            href="/license/v1.0"
            className="font-mono text-xs uppercase no-underline flex items-center gap-2 hover:text-white transition-colors"
            style={{
              color: "var(--text-muted)",
              border: "1px solid var(--border-dim)",
              padding: "8px 16px",
            }}
          >
            READ FULL SPECIFICATION ↗
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
