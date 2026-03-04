import type { Metadata } from "next"
import { LegalLayout } from "@/components/searle/legal-layout"

export const metadata: Metadata = {
  title: "License v1.0 | Searle Protocol",
  description: "Full text of the Searle Protocol License v1.0 — AI content rights framework with on-chain attestation.",
}

function Article({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="flex flex-col gap-4">
      <h2 className="text-lg font-bold uppercase tracking-wider" style={{ color: "white", fontFamily: "var(--font-mono)" }}>
        {title}
      </h2>
      <div className="flex flex-col gap-3 text-sm leading-relaxed">
        {children}
      </div>
    </section>
  )
}

function Clause({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <p id={id} className="pl-4 border-l" style={{ borderColor: "var(--border-dim)", color: "#94A3B8" }}>
      {children}
    </p>
  )
}

function Sub({ id, children }: { id?: string; children: React.ReactNode }) {
  return (
    <p id={id} className="pl-8 text-xs leading-relaxed" style={{ color: "#64748B" }}>
      {children}
    </p>
  )
}

function CodeBlock({ children }: { children: React.ReactNode }) {
  return (
    <pre className="text-xs leading-relaxed overflow-x-auto p-4 font-mono" style={{ backgroundColor: "#050505", border: "1px solid var(--border-dim)", color: "#94A3B8" }}>
      {children}
    </pre>
  )
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs font-mono" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ borderBottom: "1px solid var(--border-bright)" }}>
            {headers.map((h) => (
              <th key={h} className="text-left py-2 pr-6 uppercase" style={{ color: "white" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ borderBottom: "1px solid var(--border-dim)" }}>
              {row.map((cell, j) => (
                <td key={j} className="py-2 pr-6" style={{ color: "#94A3B8" }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function LicensePage() {
  return (
    <LegalLayout title="SEARLE PROTOCOL LICENSE" lastUpdated="FEBRUARY 2026 — VERSION 1.0">

      {/* Preamble */}
      <Article id="preamble" title="Preamble">
        <Clause>
          The Searle Protocol License is a family of open content licenses designed for the age of artificial intelligence. While traditional licenses (MIT, Apache, GPL, Creative Commons) address human use, redistribution, and modification of creative works, they were written before large-scale AI training became a dominant form of content consumption.
        </Clause>
        <Clause>
          This license fills that gap. It gives creators <strong style={{ color: "white" }}>explicit, machine-readable, legally grounded control</strong> over whether and how their work may be used for AI/ML training, while preserving traditional rights for human use.
        </Clause>
        <Clause>
          The license is named after philosopher <strong style={{ color: "white" }}>John Searle</strong>, whose Chinese Room argument illustrates that systems can process information without understanding it — a fitting metaphor for AI models that consume creative works without comprehending their value to their creators.
        </Clause>
      </Article>

      {/* License Variants */}
      <Article id="variants" title="License Variants">
        <Clause>The Searle Protocol License uses a modular permission system across three dimensions: Training, Reading (Inference), and Commerce.</Clause>
        <Table
          headers={["Identifier", "Name", "AI Training", "AI Reading", "Commercial"]}
          rows={[
            ["Searle-OS-1.0", "Open Searle", "✓ Allowed", "✓ Any model", "✓ Yes"],
            ["Searle-NT-1.0", "No Training", "✗ Prohibited", "✓ Any model", "✓ Yes"],
            ["Searle-NT-OW-1.0", "No Training, Open Weight", "✗ Prohibited", "⚠ Open-weight only", "✓ Yes"],
            ["Searle-NR-1.0", "No Reading", "✗ Prohibited", "✗ Prohibited", "✓ Yes"],
            ["Searle-NC-NT-1.0", "Non-Commercial, No Training", "✗ Prohibited", "✓ Any model", "✗ No"],
            ["Searle-NC-NT-OW-1.0", "Non-Commercial, No Training, Open Weight", "✗ Prohibited", "⚠ Open-weight only", "✗ No"],
            ["Searle-NC-NR-1.0", "Non-Commercial, No Reading", "✗ Prohibited", "✗ Prohibited", "✗ No"],
            ["Searle-FP-1.0", "Full Protection", "✗ Prohibited", "⚠ Per platform terms", "⚠ Per terms"],
          ]}
        />
        <Clause>
          <strong style={{ color: "white" }}>Optional Suffixes:</strong> Each variant may append <code style={{ color: "#94A3B8" }}>-OCA</code> (On-Chain Attribution) and/or <code style={{ color: "#94A3B8" }}>-WM</code> (Watermark). Example: <code style={{ color: "#94A3B8" }}>Searle-NT-OW-OCA-WM-1.0</code>.
        </Clause>
      </Article>

      {/* Article 1 */}
      <Article id="article-1" title="Article 1 — Definitions">
        <Clause id="article-1-1"><strong style={{ color: "white" }}>1.1 "Work"</strong> means the original creative content to which this license is attached, including but not limited to: software code, text documents, datasets, AI agent instructions, conversational memory, prompts, configuration files, images, audio, video, research data, and any derivative compilations thereof.</Clause>
        <Clause id="article-1-2"><strong style={{ color: "white" }}>1.2 "Creator"</strong> means the original author(s) or rights holder(s) of the Work who applies this license.</Clause>
        <Clause id="article-1-3"><strong style={{ color: "white" }}>1.3 "Recipient"</strong> means any person or entity that obtains, accesses, or receives a copy of the Work.</Clause>
        <Clause id="article-1-4"><strong style={{ color: "white" }}>1.4 "AI Training"</strong> means any process by which the Work, in whole or in part, is used as input for:</Clause>
        <Sub>(a) Training, fine-tuning, distilling, or reinforcing machine learning models, including but not limited to LLMs, diffusion models, embedding models, reward models, and reinforcement learning systems;</Sub>
        <Sub>(b) Constructing or augmenting training datasets, evaluation benchmarks, or retrieval corpora subsequently used for the purposes in (a);</Sub>
        <Sub>(c) Automated knowledge extraction, text/data mining, or feature learning where the output is incorporated into a model's parameters or retrieval index;</Sub>
        <Sub>(d) Synthetic data generation pipelines where the Work serves as a seed, template, or style reference.</Sub>
        <Clause id="article-1-5"><strong style={{ color: "white" }}>1.5 "AI Inference"</strong> (also "AI Reading") means the runtime use of an already-trained model to process, interpret, or respond based on the Work, without incorporating the Work into the model's persistent parameters. This includes RAG, prompt context injection, tool invocation, in-context learning, and chain-of-thought processing. AI Inference is not considered AI Training unless the inference pipeline feeds back into a training loop.</Clause>
        <Clause id="article-1-5-1"><strong style={{ color: "white" }}>1.5.1 "Open-Weight Model"</strong> means a machine learning model whose trained parameters (weights) are publicly available for download, inspection, and local execution, under a license that permits at minimum non-commercial research use. A model qualifies as open-weight if:</Clause>
        <Sub>(a) The complete model weights are published and freely downloadable;</Sub>
        <Sub>(b) The model can be executed locally without requiring API calls to a proprietary service;</Sub>
        <Sub>(c) The model's architecture is documented sufficiently for independent verification.</Sub>
        <Sub>(d) Authoritative Classification: The Searle Protocol maintainers will publish an Open-Weight Model Registry at <code>https://searleprotocol.org/registry/open-weight-models</code> (available upon protocol launch). This registry is advisory. In case of dispute, factual criteria (a)–(c) prevail.</Sub>
        <Clause>Models that are not open-weight include: models accessible only through proprietary APIs (e.g., OpenAI GPT, Anthropic Claude, Google Gemini Pro) even if their architecture is publicly known.</Clause>
        <Clause id="article-1-5-2"><strong style={{ color: "white" }}>1.5.2 "Closed-Weight Model"</strong> means any AI model that does not meet the definition of an Open-Weight Model in Article 1.5.1.</Clause>
        <Clause id="article-1-6"><strong style={{ color: "white" }}>1.6 "On-Chain Attribution"</strong> means a record on a public blockchain containing the Work's content hash, creator address, timestamp, and optional metadata, registered through the Searle Protocol smart contracts or any compatible attribution registry.</Clause>
        <Clause id="article-1-7"><strong style={{ color: "white" }}>1.7 "Watermark"</strong> means any visible, invisible, steganographic, or metadata-based identifier embedded in a distributed copy of the Work that uniquely identifies the Recipient, distribution timestamp, or distribution channel.</Clause>
        <Clause id="article-1-8"><strong style={{ color: "white" }}>1.8 "Commercial Use"</strong> means any use of the Work primarily intended for or directed toward commercial advantage or monetary compensation, including use within a product or service offered for sale, subscription, or advertising revenue.</Clause>
      </Article>

      {/* Article 2 */}
      <Article id="article-2" title="Article 2 — Grant of Rights (Human Use)">
        <Clause id="article-2-1"><strong style={{ color: "white" }}>2.1</strong> Subject to the terms of this license, the Creator grants the Recipient a worldwide, royalty-free, non-exclusive license to:</Clause>
        <Sub id="article-2-1-a">(a) <strong>Searle-OS, Searle-NT, Searle-NT-OW, and Searle-NR:</strong> Use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Work, and to permit persons to whom the Work is furnished to do so.</Sub>
        <Sub id="article-2-1-b">(b) <strong>Searle-NC-NT, Searle-NC-NT-OW, and Searle-NC-NR:</strong> Use, copy, modify, and distribute the Work for <strong>non-commercial purposes only</strong>. Commercial use requires separate written permission from the Creator.</Sub>
        <Sub id="article-2-1-c">(c) <strong>Searle-FP:</strong> Use the Work only as expressly permitted in an accompanying commercial license agreement or platform terms of service. In the absence of such agreement, only personal, non-commercial, non-redistributable use is permitted.</Sub>
        <Clause id="article-2-2"><strong style={{ color: "white" }}>2.2</strong> All grants under this Article are conditional upon compliance with Article 3 (AI Training Restrictions) and Article 4 (Attribution Requirements).</Clause>
      </Article>

      {/* Article 3 */}
      <Article id="article-3" title="Article 3 — AI Training Restrictions">
        <Clause id="article-3-1"><strong style={{ color: "white" }}>3.1 Searle-OS:</strong> AI Training is permitted without restriction.</Clause>
        <Clause id="article-3-2"><strong style={{ color: "white" }}>3.2 All variants except Searle-OS:</strong> AI Training is expressly prohibited without prior written consent from the Creator. This prohibition applies regardless of:</Clause>
        <Sub>(a) Whether the training is conducted by the Recipient or a third party;</Sub>
        <Sub>(b) Whether the training is commercial or non-commercial in nature;</Sub>
        <Sub>(c) Whether the Work constitutes a substantial or insubstantial portion of the training corpus;</Sub>
        <Sub>(d) The jurisdiction in which the training occurs;</Sub>
        <Sub>(e) Whether the trained model is publicly released or kept private.</Sub>
        <Clause id="article-3-3"><strong style={{ color: "white" }}>3.3 AI Reading / Inference Restrictions:</strong></Clause>
        <Sub id="article-3-3-a">(a) <strong>Searle-OS, Searle-NT, Searle-NC-NT (R+ variants):</strong> AI Inference is permitted with any model, provided that for NC variants the non-commercial restriction of Article 2.1(b) continues to apply. The Work must not be cached in a manner that constitutes a training dataset, and the inference system must not employ online learning or feedback loops that incorporate the Work into model parameters.</Sub>
        <Sub id="article-3-3-b">(b) <strong>Searle-NT-OW, Searle-NC-NT-OW (RO variants — Open-Weight Only):</strong> AI Inference is permitted only with Open-Weight Models (Article 1.5.1). For NC variants, the non-commercial restriction of Article 2.1(b) applies to all inference use. Processing by Closed-Weight Models (Article 1.5.2), including proprietary API services, is prohibited unless the Creator grants explicit written consent. A platform that routes content to a Closed-Weight Model without disclosure violates this license. Sublicenses must preserve the Open-Weight-Only restriction; any sublicense that fails to do so is void and constitutes a material breach.</Sub>
        <Sub id="article-3-3-c">(c) <strong>Searle-NR, Searle-NC-NR (R- variants — No Reading):</strong> AI Inference is prohibited entirely. The Work may not be submitted as input to any AI model, included in RAG retrieval indices, vector databases, or embedding stores, or processed by any automated system employing machine learning. Sublicenses must include the AI Training and AI Inference prohibitions; failure to do so is a material breach.</Sub>
        <Sub id="article-3-3-d">(d) <strong>Searle-FP (Full Protection):</strong> AI Inference is subject to the platform terms of service. The platform operator determines which models may access the Work. The default is Open-Weight Only unless the platform terms specify otherwise.</Sub>
        <Clause id="article-3-4"><strong style={{ color: "white" }}>3.4 Research Exception:</strong> For Searle-NT, Searle-NT-OW, and Searle-NR variants only, academic research institutions may use the Work for AI Training in non-commercial, peer-reviewed research, provided: (a) the resulting model is not deployed commercially; (b) the research publication cites the Work and this license; (c) the Creator is notified in writing at least 30 calendar days prior to publication; (d) the trained model is not released publicly without the Creator's consent. This exception does NOT apply to any NC variant or Searle-FP.</Clause>
        <Clause id="article-3-5"><strong style={{ color: "white" }}>3.5 Machine-Readable Opt-Out:</strong> Works licensed under any Training-prohibited variant SHOULD include machine-readable metadata. Recommended methods:</Clause>
        <CodeBlock>{`<!-- HTML meta tag -->
<meta name="searle-license" content="Searle-NT-1.0">
<meta name="ai-training" content="disallowed">

<!-- HTTP header -->
X-Searle-License: Searle-NT-1.0
X-AI-Training: disallowed`}</CodeBlock>
      </Article>

      {/* Article 4 */}
      <Article id="article-4" title="Article 4 — Attribution Requirements">
        <Clause id="article-4-1"><strong style={{ color: "white" }}>4.1 All Variants:</strong> The Recipient must retain all copyright notices, license notices, and attribution statements in all copies or substantial portions of the Work.</Clause>
        <Clause id="article-4-2"><strong style={{ color: "white" }}>4.2 Searle-FP (On-Chain Attribution Required):</strong></Clause>
        <Sub>(a) The Work must be registered on a public blockchain via the Searle Protocol smart contracts or a compatible registry before distribution;</Sub>
        <Sub>(b) The on-chain record (content hash, creator address, timestamp) constitutes the authoritative proof of authorship;</Sub>
        <Sub>(c) Distributed copies must include or reference the on-chain attribution identifier;</Sub>
        <Sub>(d) Tampering with on-chain attribution records constitutes a material breach.</Sub>
        <Clause id="article-4-3"><strong style={{ color: "white" }}>4.3 Optional On-Chain Attribution (-OCA suffix):</strong> When present, the on-chain record serves as supplementary evidence of authorship. In case of disputes, the earliest on-chain record with a matching content hash is prima facie evidence of prior creation.</Clause>
      </Article>

      {/* Article 5 */}
      <Article id="article-5" title="Article 5 — Watermark and Integrity Provisions">
        <Clause id="article-5-1"><strong style={{ color: "white" }}>5.1</strong> Works distributed under Searle-FP, or any variant with the -WM suffix, may contain Watermarks. Recipients shall not remove, alter, obscure, or attempt to reverse-engineer any Watermark, or distribute de-watermarked copies.</Clause>
        <Clause id="article-5-2"><strong style={{ color: "white" }}>5.2</strong> Watermark detection constitutes admissible evidence that a specific copy was distributed to a specific Recipient. Unauthorized redistribution of a watermarked copy may trigger license termination under Article 8, on-chain penalty proceedings, and civil liability under applicable copyright law.</Clause>
        <Clause id="article-5-3"><strong style={{ color: "white" }}>5.3</strong> The absence of a detectable Watermark does not imply the absence of restrictions. The license terms apply regardless of whether Watermarks are present.</Clause>
      </Article>

      {/* Article 6 */}
      <Article id="article-6" title="Article 6 — On-Chain Economic Mechanisms">
        <Clause id="article-6-1"><strong style={{ color: "white" }}>6.1 Applicability:</strong> This Article applies only when the Work is registered and distributed through a platform implementing the Searle Protocol smart contracts.</Clause>
        <Clause id="article-6-2"><strong style={{ color: "white" }}>6.2 Staking Requirement:</strong> Platforms implementing Searle-FP may require Creators to stake digital assets. The stake is subject to a lock period (default: 30 days) and may be partially forfeited (up to 50% per incident) if the Creator is found to have misrepresented authorship. Forfeiture requires an on-chain proposal, a cooldown period (minimum 48 hours), and is publicly auditable.</Clause>
        <Clause id="article-6-3"><strong style={{ color: "white" }}>6.3 Challenge and Dispute Resolution:</strong> Any party may challenge the authorship of a registered Work via the on-chain dispute mechanism. Successful challengers may receive a portion of the forfeited stake. On-chain dispute resolution supplements, but does not replace, legal remedies.</Clause>
        <Clause id="article-6-4"><strong style={{ color: "white" }}>6.4 Transparency:</strong> All on-chain economic operations (staking, forfeiture, challenge outcomes) are publicly auditable.</Clause>
      </Article>

      {/* Article 7 */}
      <Article id="article-7" title="Article 7 — Compatibility">
        <Clause id="article-7-1"><strong style={{ color: "white" }}>7.1</strong> The Searle Protocol License is designed to be compatible with existing license ecosystems:</Clause>
        <Table
          headers={["Base License", "Compatible Searle Extension", "Combined Effect"]}
          rows={[
            ["MIT", "+ Searle-NT", "MIT terms for code use; AI training prohibited"],
            ["Apache-2.0", "+ Searle-NT", "Apache terms + patent grant; AI training prohibited"],
            ["CC-BY-4.0", "+ Searle-NT", "CC attribution terms; AI training prohibited"],
            ["GPL-3.0", "+ Searle-NT", "Copyleft terms; AI training prohibited"],
            ["Proprietary", "+ Searle-FP", "Full commercial control + on-chain attribution"],
          ]}
        />
        <Clause id="article-7-2"><strong style={{ color: "white" }}>7.2 Dual Licensing:</strong> Creators may dual-license under a traditional license AND a Searle variant:</Clause>
        <CodeBlock>{`SPDX-License-Identifier: MIT AND Searle-NT-1.0`}</CodeBlock>
        <Clause id="article-7-3"><strong style={{ color: "white" }}>7.3 SPDX Compatibility:</strong> Searle Protocol License identifiers are designed for compatibility with SPDX naming conventions and may be submitted for inclusion in the SPDX License List in a future version.</Clause>
      </Article>

      {/* Article 8 */}
      <Article id="article-8" title="Article 8 — Termination">
        <Clause id="article-8-1"><strong style={{ color: "white" }}>8.1</strong> This license terminates automatically if the Recipient: (a) violates AI Training restrictions of Article 3; (b) removes or tampers with Watermarks; (c) falsifies on-chain attribution records; (d) otherwise materially breaches any term of this license.</Clause>
        <Clause id="article-8-2"><strong style={{ color: "white" }}>8.2</strong> Upon termination: (a) the Recipient must cease all use and destroy all copies; (b) termination does not extinguish the Creator's right to seek damages; (c) on-chain penalty mechanisms may be invoked independently.</Clause>
        <Clause id="article-8-3"><strong style={{ color: "white" }}>8.3 Reinstatement:</strong> A terminated license may be reinstated if the Recipient cures the violation within 30 days of becoming aware of it, and the Creator has not sent a written notice of permanent termination.</Clause>
      </Article>

      {/* Article 9 */}
      <Article id="article-9" title="Article 9 — Disclaimer and Limitation of Liability">
        <Clause id="article-9-1"><strong style={{ color: "white" }}>9.1</strong> THE WORK IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.</Clause>
        <Clause id="article-9-2"><strong style={{ color: "white" }}>9.2</strong> IN NO EVENT SHALL THE CREATOR BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE WORK.</Clause>
        <Clause id="article-9-3"><strong style={{ color: "white" }}>9.3</strong> On-chain registration constitutes timestamped evidence of authorship, NOT a legal determination of copyright ownership. Disputes regarding underlying copyright are subject to applicable law and jurisdiction.</Clause>
      </Article>

      {/* Article 10 */}
      <Article id="article-10" title="Article 10 — Governing Law and Jurisdiction">
        <Clause id="article-10-1"><strong style={{ color: "white" }}>10.1</strong> This license shall be interpreted in accordance with the copyright laws applicable in the jurisdiction of the Creator, unless otherwise specified.</Clause>
        <Clause id="article-10-1-1"><strong style={{ color: "white" }}>10.1.1 Anonymous or Pseudonymous Creators:</strong> Where the Creator is anonymous or identifiable only by a blockchain address, the governing law shall be: (a) the jurisdiction declared in machine-readable metadata; (b) the jurisdiction of the platform through which the Work was first published; (c) if neither is determinable, disputes shall be resolved under the UNCITRAL Arbitration Rules, with the SIAC as appointing authority.</Clause>
        <Clause id="article-10-2"><strong style={{ color: "white" }}>10.2</strong> This license does not constitute legal advice. Creators and Recipients are encouraged to seek independent legal counsel.</Clause>
        <Clause id="article-10-3"><strong style={{ color: "white" }}>10.3</strong> If any provision of this license is held to be unenforceable, the remaining provisions shall continue in full force and effect.</Clause>
      </Article>

      {/* Article 11 */}
      <Article id="article-11" title="Article 11 — Future Versions">
        <Clause id="article-11-1"><strong style={{ color: "white" }}>11.1</strong> Solrizon, as the current maintainer, may publish revised versions of this license. Maintenance authority may be transferred to a Searle Protocol Foundation if established. Each version will be given a distinguishing version number.</Clause>
        <Clause id="article-11-2"><strong style={{ color: "white" }}>11.2</strong> Works licensed under a specific version remain governed by that version. The Creator may, at their discretion, re-license under a later version.</Clause>
        <Clause id="article-11-3"><strong style={{ color: "white" }}>11.3</strong> No future version shall retroactively weaken the AI Training protections of prior versions without the Creator's explicit consent.</Clause>
        <Clause id="article-11-4"><strong style={{ color: "white" }}>11.4 Official Language:</strong> The English-language text is the authoritative version. Official translations will be published at <code style={{ color: "#94A3B8" }}>https://searleprotocol.org/license/v1.0/translations/</code> when available.</Clause>
      </Article>

      {/* How to Apply */}
      <Article id="how-to-apply" title="How to Apply This License">
        <Clause><strong style={{ color: "white" }}>Short Form (source files):</strong></Clause>
        <CodeBlock>{`// SPDX-License-Identifier: Searle-NT-1.0
// Copyright (c) [YEAR] [CREATOR NAME]
// Licensed under the Searle Protocol License v1.0 — No Training variant.
// AI Training is prohibited. See LICENSE for details.
// On-chain: [CHAIN:CONTRACT:ASSET_ID] (if registered)`}</CodeBlock>
        <Clause><strong style={{ color: "white" }}>Machine-Readable Metadata (searle.json):</strong></Clause>
        <CodeBlock>{`{
  "$schema": "https://searleprotocol.org/schema/license-v1.0.json",
  "license": "Searle-NT-1.0",
  "version": "1.0",
  "permissions": {
    "humanUse": true,
    "commercialUse": true,
    "aiTraining": false,
    "aiInference": "allowed"
  },
  "onChain": {
    "chain": "base",
    "contract": "0x...",
    "assetId": 42
  }
}`}</CodeBlock>
      </Article>

      {/* Footer note */}
      <p className="text-xs font-mono pt-8" style={{ color: "#334155", borderTop: "1px solid var(--border-dim)" }}>
        Searle Protocol License v1.0 — Published by Solrizon — February 2026
      </p>

    </LegalLayout>
  )
}
