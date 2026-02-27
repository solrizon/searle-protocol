import type { Metadata } from "next"
import { LegalLayout } from "@/components/searle/legal-layout"

export const metadata: Metadata = {
  title: "Privacy Policy | Searle Protocol",
  description: "Privacy Policy for the Searle Protocol website and services.",
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

export default function PrivacyPage() {
  return (
    <LegalLayout title="PRIVACY POLICY" lastUpdated="FEBRUARY 2026">
      <p className="text-sm leading-relaxed">
        This Privacy Policy describes how the Searle Protocol website collects, uses, and protects information when you visit our site or use our services.
      </p>

      <Section title="1. Information We Collect">
        <p>
          <strong style={{ color: "white" }}>Automatically Collected Information:</strong> When you visit our website, we may collect standard web analytics data including your IP address, browser type, operating system, referring URLs, pages visited, and timestamps. This data is collected through Vercel Analytics and is used solely to improve site performance and user experience.
        </p>
        <p>
          <strong style={{ color: "white" }}>Blockchain Data:</strong> If you use the on-chain attestation feature, the content hash and license identifier you submit will be permanently recorded on the Base blockchain. This data is public and immutable by design.
        </p>
        <p>
          <strong style={{ color: "white" }}>No Personal Data Collection:</strong> We do not require account creation. We do not collect names, email addresses, or other personally identifiable information through the website. The license selector tool operates entirely client-side.
        </p>
      </Section>

      <Section title="2. How We Use Information">
        <p>
          Analytics data is used to understand traffic patterns, identify technical issues, and improve the website experience. We do not use this data for advertising, profiling, or any purpose unrelated to site improvement.
        </p>
      </Section>

      <Section title="3. Cookies and Tracking">
        <p>
          We use minimal, essential cookies required for site functionality. We do not use third-party advertising cookies, tracking pixels, or social media tracking scripts.
        </p>
        <p>
          Vercel Analytics may use privacy-friendly, anonymized analytics that do not track individual users across sites.
        </p>
      </Section>

      <Section title="4. Third-Party Services">
        <p>
          <strong style={{ color: "white" }}>Vercel:</strong> Our website is hosted on Vercel. Vercel may process server logs as part of providing hosting services. See{" "}
          <a
            href="https://vercel.com/legal/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-white"
            style={{ color: "#F1F5F9" }}
          >
            {"Vercel's Privacy Policy"}
          </a>.
        </p>
        <p>
          <strong style={{ color: "white" }}>Base Blockchain:</strong> On-chain attestations are processed through the Base network. Blockchain data is inherently public and permanent.
        </p>
        <p>
          <strong style={{ color: "white" }}>GitHub:</strong> Our source code and documentation are hosted on GitHub. If you interact with our repository, {"GitHub's"} privacy policy applies.
        </p>
      </Section>

      <Section title="5. Data Retention">
        <p>
          Web analytics data is retained for a maximum of 12 months and then automatically purged. Blockchain attestations are permanent and cannot be deleted due to the immutable nature of the blockchain.
        </p>
      </Section>

      <Section title="6. Data Security">
        <p>
          We implement reasonable security measures to protect the information we process. All website traffic is encrypted via HTTPS. However, no method of transmission over the Internet is 100% secure.
        </p>
      </Section>

      <Section title="7. Your Rights">
        <p>
          Depending on your jurisdiction, you may have the right to access, correct, or delete personal data we hold about you. Since we collect minimal data and do not require accounts, most users will have no personally identifiable data stored in our systems.
        </p>
        <p>
          For any data-related requests, contact us through{" "}
          <a
            href="https://github.com/solrizon/searle-protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-colors hover:text-white"
            style={{ color: "#F1F5F9" }}
          >
            our GitHub repository
          </a>.
        </p>
      </Section>

      <Section title="8. Children">
        <p>
          Our website and services are not directed at children under the age of 13. We do not knowingly collect information from children.
        </p>
      </Section>

      <Section title="9. Changes to This Policy">
        <p>
          We may update this Privacy Policy periodically. Changes will be reflected on this page with an updated revision date. We encourage you to review this policy regularly.
        </p>
      </Section>

      <Section title="10. Contact">
        <p>
          For privacy-related inquiries, reach out via{" "}
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
