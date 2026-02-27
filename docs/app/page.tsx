"use client"

import { useState, useCallback } from "react"
import { Marquee } from "@/components/searle/marquee"
import { Nav } from "@/components/searle/nav"
import { HeroSection } from "@/components/searle/hero-section"
import { ProblemSection } from "@/components/searle/problem-section"
import { SelectorSection } from "@/components/searle/selector-section"
import { VariantsSection } from "@/components/searle/variants-section"
import { UsageSection } from "@/components/searle/usage-section"
import { BaseSection } from "@/components/searle/base-section"
import { FAQSection } from "@/components/searle/faq-section"
import { Footer } from "@/components/searle/footer"
import { Toast } from "@/components/searle/toast"
import { LicenseModal } from "@/components/searle/license-modal"
import { getRecommendation } from "@/lib/recommendation"
import {
  licenseMeta,
  displayNameToLicenseKey,
  fetchLicenseText,
  type LicenseMeta,
} from "@/lib/license-texts"

export default function HomePage() {
  const [training, setTraining] = useState("forbid")
  const [reading, setReading] = useState("allow")
  const [commerce, setCommerce] = useState("allow")
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("LICENSE COPIED TO CLIPBOARD")
  const [modalLicense, setModalLicense] = useState<LicenseMeta | null>(null)

  const recommendation = getRecommendation(training, reading, commerce)

  const getLicenseKey = (displayName: string): string | undefined => {
    if (displayNameToLicenseKey[displayName]) return displayNameToLicenseKey[displayName]
    const upper = displayName.toUpperCase()
    for (const [key, value] of Object.entries(displayNameToLicenseKey)) {
      if (key.toUpperCase() === upper) return value
    }
    return undefined
  }

  const handleCopy = useCallback(async (name: string) => {
    const licenseKey = getLicenseKey(name)
    if (licenseKey && licenseMeta[licenseKey]) {
      const meta = licenseMeta[licenseKey]
      const text = await fetchLicenseText(meta.file)
      navigator.clipboard.writeText(text).catch(() => {})
      setToastMessage(`${meta.spdx} COPIED TO CLIPBOARD`)
    } else {
      navigator.clipboard
        .writeText(`License: ${name}-v1.0\nFull license: https://searleprotocol.org/license/v1.0`)
        .catch(() => {})
      setToastMessage("LICENSE COPIED TO CLIPBOARD")
    }
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }, [])

  const handleView = useCallback((name: string) => {
    const licenseKey = getLicenseKey(name)
    if (licenseKey && licenseMeta[licenseKey]) {
      setModalLicense(licenseMeta[licenseKey])
    }
  }, [])

  const handleCloseModal = useCallback(() => {
    setModalLicense(null)
  }, [])

  return (
    <div
      style={{
        backgroundColor: "var(--bg-dark)",
        color: "var(--text-main)",
        fontFamily: "var(--font-inter), Inter, sans-serif",
      }}
    >
      <Marquee />
      <Nav />
      <main className="pt-24 relative">
        <HeroSection />
        <ProblemSection />
        <SelectorSection
          training={training}
          setTraining={setTraining}
          reading={reading}
          setReading={setReading}
          commerce={commerce}
          setCommerce={setCommerce}
          recommendation={recommendation}
        />
        <VariantsSection
          recommendation={recommendation}
          onCopy={handleCopy}
          onView={handleView}
        />
        <UsageSection />
        <BaseSection />
        <FAQSection />
        <Footer />
      </main>
      <Toast show={showToast} message={toastMessage} />
      <LicenseModal license={modalLicense} onClose={handleCloseModal} />
    </div>
  )
}
