import type { Metadata } from "next"
import { LegalLayout } from "@/components/searle/legal-layout"

export const metadata: Metadata = {
  title: "Terms of Service | Searle Protocol",
  description: "Terms of Service for the Searle Protocol website and license framework.",
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2
        className="text-xl font-bold mb-3"
        style={{ color: "white" }}
      >
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-sm leading-relaxed">
        {children}
      </div>
    </section>
  )
}

export default function TermsPage() {
  return (
    <LegalLayout title="TERMS OF SERVICE" lastUpdated="FEBRUARY 2026">
      <p className="text-sm leading-relaxed">
        These Terms of Service govern your use of the Searle Protocol website, license framework, and any associated tools or services. By accessing or using the Searle Protocol, you agree to be bound by these terms.
      </p>

      <Section title="1. Definitions">
        <p>
          {'"Protocol"'} refers to the Searle Protocol license framework, including all license variants (Searle-OS, Searle-NT, Searle-NR, Searle-FP, and all sub-variants), associated metadata schemas, and documentation.
        </p>
        <p>
          {'"Licensor"'} refers to any individual or entity that applies a Searle Protocol license to their content.
        </p>
        <p>
          {'"User"'} refers to any individual or entity that accesses or uses content licensed under the Searle Protocol.
        </p>
      </Section>

      <Section title="2. License Framework Usage">
        <p>
          The Searle Protocol license texts are themselves released under an open framework. You may freely adopt any Searle Protocol variant for your own content, provided you include the complete license text and do not modify the license terms.
        </p>
        <p>
          You may not create derivative licenses that use the {'"Searle"'} name or branding without explicit permission from the protocol maintainers.
        </p>
      </Section>

      <Section title="3. Website Use">
        <p>
          The Searle Protocol website is provided for informational purposes. The license selector tool generates recommendations based on your inputs, but you are responsible for reviewing and understanding the full license text before applying it.
        </p>
        <p>
          You agree not to scrape, crawl, or systematically access the website in a manner that degrades performance or availability for other users.
        </p>
      </Section>

      <Section title="4. No Legal Advice">
        <p>
          The Searle Protocol and this website do not constitute legal advice. The licenses are designed to express clear intent regarding AI content usage, but their enforceability may vary by jurisdiction. We recommend consulting a qualified legal professional for advice specific to your situation.
        </p>
      </Section>

      <Section title="5. Blockchain Attestation">
        <p>
          The optional on-chain attestation feature records a cryptographic hash of your content and license choice on the Base blockchain. Once recorded, this attestation is immutable and cannot be modified or deleted.
        </p>
        <p>
          You are solely responsible for the accuracy of the information you submit for attestation. The protocol maintainers bear no liability for incorrect or fraudulent attestations.
        </p>
      </Section>

      <Section title="6. Intellectual Property">
        <p>
          The Searle Protocol brand, logo, and website design are the intellectual property of the protocol maintainers. The protocol specification itself is an open standard.
        </p>
        <p>
          Content licensed under any Searle Protocol variant remains the intellectual property of its respective licensor.
        </p>
      </Section>

      <Section title="7. Limitation of Liability">
        <p>
          The Searle Protocol is provided {'"as is"'} without warranty of any kind, express or implied. The protocol maintainers shall not be liable for any damages arising from the use of the protocol, including but not limited to direct, indirect, incidental, or consequential damages.
        </p>
      </Section>

      <Section title="8. Modifications">
        <p>
          We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the protocol after changes constitutes acceptance of the new terms.
        </p>
      </Section>

      <Section title="9. Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with applicable international intellectual property law. Any disputes shall be resolved through binding arbitration.
        </p>
      </Section>

      <Section title="10. Contact">
        <p>
          For questions about these Terms, contact us via{" "}
          <a
            href="https://x.com/solrizon_"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-white"
            style={{ color: "#F1F5F9" }}
          >
            Twitter / X
          </a>{" "}
          or through our{" "}
          <a
            href="https://github.com/solrizon/searle-protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-white"
            style={{ color: "#F1F5F9" }}
          >
            GitHub repository
          </a>.
        </p>
      </Section>
    </LegalLayout>
  )
}
