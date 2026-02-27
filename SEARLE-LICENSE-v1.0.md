# Searle Protocol License v1.0

## Preamble

The Searle Protocol License is a family of open content licenses designed for the age of artificial intelligence. While traditional licenses (MIT, Apache, GPL, Creative Commons) address human use, redistribution, and modification of creative works, they were written before large-scale AI training became a dominant form of content consumption.

This license fills that gap. It gives creators **explicit, machine-readable, legally grounded control** over whether and how their work may be used for AI/ML training, while preserving traditional rights for human use.

The license is named after philosopher **John Searle**, whose Chinese Room argument illustrates that systems can process information without understanding it — a fitting metaphor for AI models that consume creative works without comprehending their value to their creators.

---

## License Variants

The Searle Protocol License uses a **modular permission system** across three dimensions:

### Three Dimensions of AI Content Rights

```
┌─────────────┬──────────────────────────────────────────────────┐
│ Dimension   │ What it controls                                 │
├─────────────┼──────────────────────────────────────────────────┤
│ Training    │ Can the content be used to train/fine-tune models?│
│ Reading     │ Can AI models process the content at inference?   │
│             │   ↳ Model Scope: all models, open-weight only,   │
│             │     or none (sub-attribute of Reading)            │
│ Commerce    │ Is commercial use allowed?                        │
└─────────────┴──────────────────────────────────────────────────┘
```

### Permission Matrix

| Permission | Meaning |
|---|---|
| **T+** | Training permitted |
| **T-** | Training prohibited |
| **R+** | AI reading/inference permitted (all models) |
| **R-** | AI reading/inference prohibited |
| **RO** | AI reading permitted, but **open-weight models only** |
| **C+** | Commercial use permitted |
| **C-** | Commercial use prohibited (non-commercial only) |

### License Variants

| Identifier | Name | Human Use | AI Reading | AI Training | Model Scope | On-chain |
|---|---|---|---|---|---|---|
| **Searle-OS** | Open Searle | ✅ Any | ✅ Any model | ✅ Permitted | All | Optional |
| **Searle-NT** | No Training | ✅ Any | ✅ Any model | ❌ Prohibited | All | Optional |
| **Searle-NT-OW** | No Training, Open Weight | ✅ Any | ⚠️ Open-weight only | ❌ Prohibited | Open-weight | Optional |
| **Searle-NR** | No Reading | ✅ Any | ❌ Prohibited | ❌ Prohibited | None | Optional |
| **Searle-NC-NT** | Non-Commercial, No Training | ⚠️ Non-commercial | ✅ Any model | ❌ Prohibited | All | Optional |
| **Searle-NC-NT-OW** | Non-Commercial, No Training, Open Weight | ⚠️ Non-commercial | ⚠️ Open-weight only | ❌ Prohibited | Open-weight | Optional |
| **Searle-NC-NR** | Non-Commercial, No Reading | ⚠️ Non-commercial | ❌ Prohibited | ❌ Prohibited | None | Optional |
| **Searle-FP** | Full Protection | ⚠️ Per license terms | ⚠️ Per terms (default: open-weight only) | ❌ Prohibited | Per terms | Required |

### Variant Selection Guide

```
Step 1: Can AI models train on your content?
├── Yes → Searle-OS (done — fully open, commercial allowed)
└── No → continue to Step 2

Step 2: Can AI models read your content at inference time?
├── Yes, any model → base = NT
├── Yes, but only open-weight models → base = NT-OW
└── No AI access at all → base = NR

Step 3: Is commercial use allowed?
├── Yes → use base as-is (Searle-NT / Searle-NT-OW / Searle-NR)
└── No → prepend NC- (Searle-NC-NT / Searle-NC-NT-OW / Searle-NC-NR)

Step 4 (optional): Need maximum protection with platform control?
└── On-chain required + platform terms + watermarks → Searle-FP
```

**Note:** A "Non-Commercial Open Searle" (NC + Training allowed) variant is intentionally omitted. The scenario of allowing free AI training while prohibiting commercial human use is extremely rare and logically inconsistent — if you allow training, you cannot practically prevent commercial use of the resulting model. Creators in this situation should use Searle-OS or a separate non-commercial license.

### Suffixes

Each variant may optionally append:

| Suffix | Meaning |
|---|---|
| **-OCA** | On-Chain Attribution — registered on a public blockchain |
| **-WM** | Watermarked — distributed copies contain traceable watermarks |

Example: `Searle-NT-OW-OCA-WM-1.0` = No Training + Open-Weight Models Only + On-Chain Attribution + Watermarked, version 1.0.

**Identifier Construction Rule:** Suffixes are inserted between the base variant name and the version number. The `license` field in machine-readable metadata always uses the base identifier (e.g., `Searle-NT-OW-1.0`); suffixes are declared separately in the `suffixes` array. The full display identifier is: `{base-variant}-{suffix1}-{suffix2}-{version}` (e.g., `Searle-NT-OW-OCA-WM-1.0`).

---

## Article 1 — Definitions

**1.1 "Work"** means the original creative content to which this license is attached, including but not limited to: software code, text documents, datasets, AI agent instructions ("Skills"), conversational memory, prompts, configuration files, images, audio, video, research data, and any derivative compilations thereof.

**1.2 "Creator"** means the original author(s) or rights holder(s) of the Work who applies this license.

**1.3 "Recipient"** means any person or entity that obtains, accesses, or receives a copy of the Work.

**1.4 "AI Training"** means any process by which the Work, in whole or in part, is used as input for:
  - (a) Training, fine-tuning, distilling, or reinforcing machine learning models, including but not limited to large language models (LLMs), diffusion models, embedding models, reward models, and reinforcement learning systems;
  - (b) Constructing or augmenting training datasets, evaluation benchmarks, or retrieval corpora that are subsequently used for the purposes described in (a);
  - (c) Automated knowledge extraction, text/data mining, or feature learning where the output is incorporated into a model's parameters or retrieval index;
  - (d) Synthetic data generation pipelines where the Work serves as a seed, template, or style reference.

**1.5 "AI Inference"** (also "AI Reading") means the runtime use of an already-trained model to process, interpret, or respond based on the Work, **without** incorporating the Work into the model's persistent parameters. This includes but is not limited to: RAG (Retrieval-Augmented Generation), prompt context injection, tool invocation, in-context learning, and chain-of-thought processing. AI Inference is **not** considered AI Training under this license unless the inference pipeline feeds back into a training loop.

**1.5.1 "Open-Weight Model"** means a machine learning model whose trained parameters (weights) are publicly available for download, inspection, and local execution, under a license that permits at minimum non-commercial research use. A model qualifies as open-weight if:
  - (a) The complete model weights are published and freely downloadable;
  - (b) The model can be executed locally without requiring API calls to a proprietary service;
  - (c) The model's architecture is documented sufficiently for independent verification.
  
  A model qualifies as open-weight **regardless of** downstream commercial use restrictions in its own license (e.g., user count thresholds, revenue caps), as long as criteria (a)–(c) are satisfied. A model that requires a separate commercial license above certain usage thresholds (such as Meta Llama's 700M MAU threshold) still qualifies as open-weight for the purposes of this license, because the relevant test is **weight availability and local executability**, not the breadth of the model's own commercial permissions.

  **(d) Authoritative Classification:** The Searle Protocol maintainers will publish and periodically update an **Open-Weight Model Registry** at `https://searleprotocol.org/registry/open-weight-models` (available upon protocol launch). This registry is advisory, not exhaustive. Models not listed may still qualify if they meet criteria (a)–(c). In case of dispute, the factual criteria (a)–(c) prevail over the registry listing.

  Examples of qualifying models include (but are not limited to): Meta Llama, Alibaba Qwen, Mistral, DeepSeek, Google Gemma, Stability AI models, and any model released under Apache-2.0, MIT, or comparable open licenses. *These examples are illustrative as of February 2026 and may change; consult each model's current license and distribution terms to determine eligibility.*

  Models that are **not** considered open-weight include: models accessible only through proprietary APIs (e.g., OpenAI GPT, Anthropic Claude, Google Gemini Pro) even if their name or architecture is publicly known, and models with published weights but licenses that prohibit inspection or local execution. *Classification may change if a model's distribution terms are updated.*

**1.5.2 "Closed-Weight Model"** means any AI model that does not meet the definition of an Open-Weight Model in Article 1.5.1. This includes models offered exclusively as a hosted API service where the weights are not available for download or local execution.

**1.6 "On-Chain Attribution"** means a record on a public blockchain containing the Work's content hash, creator address, timestamp, and optional metadata, registered through the Searle Protocol smart contracts or any compatible attribution registry.

**1.7 "Watermark"** means any visible, invisible, steganographic, or metadata-based identifier embedded in a distributed copy of the Work that uniquely identifies the Recipient, distribution timestamp, or distribution channel.

**1.8 "Commercial Use"** means any use of the Work primarily intended for or directed toward commercial advantage or monetary compensation, including use within a product or service offered for sale, subscription, or advertising revenue.

---

## Article 2 — Grant of Rights (Human Use)

**2.1** Subject to the terms of this license, the Creator grants the Recipient a worldwide, royalty-free, non-exclusive license to:

  - **(a) Searle-OS, Searle-NT, Searle-NT-OW, and Searle-NR:** Use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Work, and to permit persons to whom the Work is furnished to do so.
  
  - **(b) Searle-NC-NT, Searle-NC-NT-OW, and Searle-NC-NR:** Use, copy, modify, and distribute the Work for **non-commercial purposes only**. Commercial use requires separate written permission from the Creator.
  
  - **(c) Searle-FP:** Use the Work **only** as expressly permitted in an accompanying commercial license agreement or platform terms of service. In the absence of such agreement, only personal, non-commercial, non-redistributable use is permitted.

**2.2** All grants under this Article are conditional upon compliance with Article 3 (AI Training Restrictions) and Article 4 (Attribution Requirements).

---

## Article 3 — AI Training Restrictions

**3.1 Searle-OS:** AI Training is **permitted** without restriction. The Creator waives no rights but makes no claims against AI Training use.

**3.2 All variants except Searle-OS** (i.e., Searle-NT, Searle-NT-OW, Searle-NR, Searle-NC-NT, Searle-NC-NT-OW, Searle-NC-NR, and Searle-FP): AI Training, as defined in Article 1.4, is **expressly prohibited** without prior written consent from the Creator. This prohibition applies regardless of:

  - (a) Whether the training is conducted by the Recipient or a third party to whom the Recipient provides access;
  - (b) Whether the training is commercial or non-commercial in nature;
  - (c) Whether the Work constitutes a substantial or insubstantial portion of the total training corpus;
  - (d) The jurisdiction in which the training occurs;
  - (e) Whether the trained model is publicly released or kept private.

**3.3 AI Reading / Inference Restrictions:**

AI Inference (Reading) permissions vary by license variant:

  **(a) Searle-OS, Searle-NT, Searle-NC-NT (R+ variants):**
  AI Inference is **permitted with any model**, provided that for NC variants the overall non-commercial restriction of Article 2.1(b) continues to apply (i.e., inference must be in the context of non-commercial use). Additionally:
  - (i) The Work is not cached, indexed, or stored in a manner that constitutes a training dataset;
  - (ii) The inference system does not employ online learning, continuous fine-tuning, or feedback loops that would incorporate the Work into model parameters.

  **(b) Searle-NT-OW, Searle-NC-NT-OW (RO variants — Open-Weight Only):**
  AI Inference is **permitted only with Open-Weight Models** (Article 1.5.1). For NC variants, the overall non-commercial restriction of Article 2.1(b) continues to apply to all inference use. Specifically:
  - (i) The model processing the Work must have its weights publicly available and locally executable;
  - (ii) Processing by Closed-Weight Models (Article 1.5.2), including proprietary API services, is **prohibited** unless the Creator grants explicit written consent;
  - (iii) A platform or service that routes content to a Closed-Weight Model without disclosure violates this license even if the end user is unaware of the model choice;
  - (iv) The Recipient is responsible for verifying the model's open-weight status before processing;
  - (v) **Sublicense Pass-Through:** Any sublicense granted by the Recipient MUST preserve the Open-Weight-Only restriction. A sublicense that permits processing by Closed-Weight Models, or that fails to explicitly restrict AI inference to Open-Weight Models, is void and constitutes a material breach of this license.

  The rationale for this restriction is **auditability**: open-weight models can be inspected to verify they do not retain or retrain on the Work, while closed-weight models cannot be independently audited.

  **(c) Searle-NR, Searle-NC-NR (R- variants — No Reading):**
  AI Inference is **prohibited entirely**. The Work may not be:
  - (i) Submitted as input, context, or prompt content to any AI model;
  - (ii) Included in RAG retrieval indices, vector databases, or embedding stores accessed by AI models;
  - (iii) Processed by any automated system that employs machine learning for interpretation.
  
  This restriction is intended for highly sensitive content (e.g., proprietary research data, trade secrets, personal memory archives) where any AI processing poses an unacceptable risk.

  **(c.1) Sublicense AI Restriction Pass-Through:** For Searle-NR and Searle-NC-NR variants, any sublicense granted by the Recipient MUST include the AI Training and AI Inference prohibitions of this Article. A sublicense that permits AI access to the Work, or that fails to explicitly prohibit AI access, is void and constitutes a material breach of this license. The Recipient is responsible for ensuring downstream sublicensees comply with these restrictions. This obligation applies transitively to all further sublicenses.

  **(d) Searle-FP (Full Protection):**
  AI Inference is subject to the platform terms of service. The platform operator determines which models may access the Work and may require per-invocation payment. The default is Open-Weight Only unless the platform terms specify otherwise.

**3.4 Research Exception:** For Searle-NT, Searle-NT-OW, and Searle-NR variants only, academic research institutions may use the Work for AI Training in non-commercial, peer-reviewed research, provided:

  Note: This exception does NOT apply to any NC variant (Searle-NC-NT, Searle-NC-NT-OW, Searle-NC-NR) or Searle-FP. Non-commercial variants prohibit all use — including academic — without the Creator's explicit consent. The rationale: creators who restrict commercial use have expressed a clear intent to control all exploitation of their work; academic training that produces models potentially used in commercial downstream applications would undermine that intent. For Searle-NR, this exception applies only to the training process; the AI Inference prohibition of Article 3.3(c) remains in full effect for any resulting model.
  - (a) The resulting model is not deployed in any commercial product or service;
  - (b) The research publication cites the Work and this license;
  - (c) The Creator is notified in writing at least **30 calendar days** prior to publication. If the Creator does not respond within this 30-day period, the Recipient may proceed with publication under conditions (a), (b), and (d). If the Creator responds with an objection, the Recipient must negotiate in good faith or refrain from publication;
  - (d) The trained model is not released publicly without the Creator's consent.

**3.5 Machine-Readable Opt-Out:** Works licensed under any Training-prohibited variant (all variants except Searle-OS) SHOULD include machine-readable metadata indicating the AI training and/or inference restrictions. Recommended methods:

```html
<!-- HTML meta tag -->
<meta name="searle-license" content="Searle-NT-1.0">
<meta name="ai-training" content="disallowed">

<!-- robots.txt directive (Searle-specific + industry-standard) -->
User-agent: GPTBot
Disallow: /
User-agent: CCBot
Disallow: /
User-agent: Google-Extended
Disallow: /
User-agent: *
X-Disallow-Training: /
# Note: X-Disallow-Training is a Searle Protocol extension, not a standard
# robots.txt directive. Standard crawlers will ignore it. For broader opt-out,
# use User-agent + Disallow for known AI crawlers (GPTBot, CCBot, etc.).
# See also: TDMRep (W3C Text and Data Mining Reservation Protocol)

<!-- HTTP header -->
X-Searle-License: Searle-NT-1.0
X-AI-Training: disallowed
```

```json
// Package metadata (package.json, pyproject.toml, etc.)
// For the full schema, see searle.schema.json
{
  "license": "Searle-NT-1.0",
  "version": "1.0",
  "permissions": {
    "aiTraining": false,
    "aiInference": "allowed"
  },
  "onChain": {
    "chain": "base",
    "contract": "0x1234567890abcdef1234567890abcdef12345678",
    "assetId": 42
  }
}
```

Valid values for `aiInference` (primary field): `"allowed"` | `"open-weight-only"` | `"disallowed"`
Valid values for `aiModelScope` (deprecated, backward-compat): `"all"` | `"open-weight"` | `"none"`
Valid values for `aiTraining`: `true` (training allowed) | `false` (training prohibited)

**Note:** `aiInference` and `aiModelScope` encode the same dimension. Use `aiInference` as the canonical field. If both are present, `aiInference` takes precedence. Mapping: `allowed`↔`all`, `open-weight-only`↔`open-weight`, `disallowed`↔`none`.

---

## Article 4 — Attribution Requirements

**4.1 All Variants:** The Recipient must retain all copyright notices, license notices, and attribution statements in all copies or substantial portions of the Work.

**4.2 Searle-FP (On-Chain Attribution Required):**
  - (a) The Work MUST be registered on a public blockchain via the Searle Protocol smart contracts or a compatible registry before distribution;
  - (b) The on-chain record (content hash, creator address, timestamp) constitutes the authoritative proof of authorship;
  - (c) Distributed copies MUST include or reference the on-chain attribution identifier;
  - (d) Tampering with, removing, or falsifying on-chain attribution records constitutes a material breach of this license.

**4.3 Optional On-Chain Attribution (-OCA suffix):** Any variant may optionally include on-chain attribution. When present:
  - (a) The on-chain record serves as supplementary evidence of authorship and licensing terms;
  - (b) In case of disputes, the earliest on-chain record with a matching content hash is considered prima facie evidence of prior creation.

---

## Article 5 — Watermark and Integrity Provisions

**5.1** Works distributed under Searle-FP, or any variant with the -WM suffix, may contain Watermarks (Article 1.7). Recipients SHALL NOT:
  - (a) Remove, alter, obscure, or attempt to reverse-engineer any Watermark;
  - (b) Distribute de-watermarked copies of the Work;
  - (c) Use technical means to circumvent Watermark detection.

**5.2** Watermark detection constitutes admissible evidence that a specific copy of the Work was distributed to a specific Recipient. Unauthorized redistribution of a watermarked copy may trigger:
  - (a) License termination under Article 8;
  - (b) On-chain penalty proceedings under the Searle Protocol smart contracts, if applicable;
  - (c) Civil liability under applicable copyright law.

**5.3** The absence of a detectable Watermark does not imply the absence of restrictions. The license terms apply regardless of whether Watermarks are present.

---

## Article 6 — On-Chain Economic Mechanisms

**6.1 Applicability:** This Article applies only when the Work is registered and distributed through a platform implementing the Searle Protocol smart contracts.

**6.2 Staking Requirement:** Platforms implementing Searle-FP MAY require Creators to stake digital assets as a bond of good faith. The stake:
  - (a) Is subject to a lock period (default: 30 days) during which the Creator cannot withdraw. Forfeiture proposals expire if not executed within the challenge window (default: 7 days);
  - (b) May be partially forfeited (up to 50% per incident) if the Creator is found to have misrepresented authorship;
  - (c) Forfeiture requires an on-chain proposal, a cooldown period (minimum 48 hours), and is publicly auditable.

**6.3 Challenge and Dispute Resolution:**
  - (a) Any party may challenge the authorship or originality of a registered Work by submitting evidence through the on-chain dispute mechanism;
  - (b) Challenges are subject to the cooldown and maximum forfeiture constraints defined in the smart contract;
  - (c) Successful challengers may receive a portion of the forfeited stake as an incentive for good-faith enforcement;
  - (d) On-chain dispute resolution is supplementary to, and does not replace, legal remedies available under applicable law.

**6.4 Transparency:** All on-chain economic operations (staking, forfeiture, challenge outcomes) are publicly auditable. The Searle Protocol smart contracts are designed to ensure that Creators retain control over their staked assets and can withdraw them after the lock period, subject only to valid forfeiture proceedings.

---

## Article 7 — Compatibility

**7.1** The Searle Protocol License is designed to be compatible with existing license ecosystems:

| Base License | Compatible Searle Extension | Combined Effect |
|---|---|---|
| MIT | + Searle-NT | MIT terms for code use; AI training prohibited |
| Apache-2.0 | + Searle-NT | Apache terms + patent grant; AI training prohibited |
| CC-BY-4.0 | + Searle-NT | CC attribution terms; AI training prohibited |
| GPL-3.0 | + Searle-NT | Copyleft terms; AI training prohibited |
| Proprietary | + Searle-FP | Full commercial control + on-chain attribution |

**7.2 Dual Licensing:** Creators may dual-license their Work under a traditional license AND a Searle variant. Example:

```
SPDX-License-Identifier: MIT AND Searle-NT-1.0
```

This means: the code is MIT-licensed for human use, but AI Training is prohibited under the Searle-NT terms.

**7.3 SPDX Compatibility:** The Searle Protocol License identifiers are designed for compatibility with SPDX naming conventions and may be submitted for inclusion in the SPDX License List in a future version:
  - `Searle-OS-1.0`
  - `Searle-NT-1.0`
  - `Searle-NT-OW-1.0`
  - `Searle-NR-1.0`
  - `Searle-NC-NT-1.0`
  - `Searle-NC-NT-OW-1.0`
  - `Searle-NC-NR-1.0`
  - `Searle-FP-1.0`

---

## Article 8 — Termination

**8.1** This license and all rights granted hereunder terminate automatically if the Recipient:
  - (a) Violates the AI Training restrictions of Article 3;
  - (b) Removes or tampers with Watermarks in violation of Article 5;
  - (c) Falsifies or tampers with on-chain attribution records;
  - (d) Otherwise materially breaches any term of this license.

**8.2** Upon termination:
  - (a) The Recipient must cease all use and destroy all copies of the Work;
  - (b) Termination does not extinguish the Creator's right to seek damages or other legal remedies;
  - (c) On-chain penalty mechanisms, if applicable, may be invoked independently of license termination.

**8.3 Reinstatement:** A terminated license may be reinstated if:
  - (a) The Recipient cures the violation within 30 days of becoming aware of it; AND
  - (b) The Creator has not sent a written notice of permanent termination.

---

## Article 9 — Disclaimer and Limitation of Liability

**9.1** THE WORK IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.

**9.2** IN NO EVENT SHALL THE CREATOR BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT, OR OTHERWISE, ARISING FROM, OUT OF, OR IN CONNECTION WITH THE WORK.

**9.3** On-chain registration under the Searle Protocol constitutes timestamped evidence of authorship, NOT a legal determination of copyright ownership. Disputes regarding underlying copyright are subject to applicable law and jurisdiction.

---

## Article 10 — Governing Law and Jurisdiction

**10.1** This license shall be interpreted in accordance with the copyright laws applicable in the jurisdiction of the Creator, unless otherwise specified.

**10.1.1 Anonymous or Pseudonymous Creators:** Where the Creator is anonymous, pseudonymous, or identifiable only by a blockchain address, the governing law shall be determined in the following order of priority:
  - (a) The jurisdiction explicitly declared in the machine-readable license metadata (`searle.json` or on-chain metadata);
  - (b) The jurisdiction of the platform through which the Work was first published or registered;
  - (c) If neither (a) nor (b) is determinable, disputes shall be resolved under the UNCITRAL Arbitration Rules, with the appointing authority being the Singapore International Arbitration Centre (SIAC), and the arbitration conducted in English.

**10.2** The Searle Protocol License does not constitute legal advice. Creators and Recipients are encouraged to seek independent legal counsel regarding their rights and obligations.

**10.3** If any provision of this license is held to be unenforceable, the remaining provisions shall continue in full force and effect.

---

## Article 11 — Future Versions

**11.1** Solrizon, as the current maintainer and publisher of the Searle Protocol License, may publish revised versions of this license. Maintenance authority may be transferred to a Searle Protocol Foundation or successor organization if established in the future. Each version will be given a distinguishing version number (e.g., v1.0, v2.0).

**11.2** Works licensed under a specific version remain governed by that version. The Creator may, at their discretion, re-license under a later version.

**11.3** No future version shall retroactively weaken the AI Training protections of prior versions without the Creator's explicit consent.

**11.4 Official Language:** The English-language text of this license is the authoritative version. Translations into other languages may be published for convenience but are not legally binding. In case of conflict between the English text and any translation, the English text prevails. Official translations will be published at https://searleprotocol.org/license/v1.0/translations/ when available.

---

## How to Apply This License

To apply the Searle Protocol License to your work, attach the following notice:

### Short Form (for source files)

```
// SPDX-License-Identifier: Searle-NT-1.0
// Copyright (c) [YEAR] [CREATOR NAME]
// Licensed under the Searle Protocol License v1.0 — No Training variant.
// AI Training is prohibited. See LICENSE for details.
// On-chain: [CHAIN:CONTRACT:ASSET_ID] (if registered)
```

### Full Form (LICENSE file)

```
Searle Protocol License v1.0 — [VARIANT]

Copyright (c) [YEAR] [CREATOR NAME OR ORGANIZATION]

This work is licensed under the Searle Protocol License v1.0,
[VARIANT] variant.

[For Searle-NT:]
Permission is hereby granted, free of charge, to any person obtaining
a copy of this work, to use, copy, modify, merge, publish, distribute,
sublicense, and/or sell copies, subject to the following conditions:

1. The above copyright notice and this permission notice shall be
   included in all copies or substantial portions of the work.

2. This work SHALL NOT be used, in whole or in part, as training data
   for machine learning models, large language models, or any automated
   learning systems, as defined in Article 3 of the Searle Protocol
   License v1.0, without explicit written consent from the copyright
   holder.

3. AI inference use (runtime processing without parameter incorporation)
   is permitted.

THE WORK IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND.

Full license text: https://searleprotocol.org/license/v1.0
On-chain registry: https://basescan.org/address/[CONTRACT_ADDRESS]
```

---

## Machine-Readable License File

For automated license detection, include a `searle.json` in the project root. Note: `searle.json` is the metadata file you create in your project; `searle.schema.json` (hosted at `https://searleprotocol.org/schema/license-v1.0.json`) is the JSON Schema definition used to validate it.

```json
{
  "$schema": "https://searleprotocol.org/schema/license-v1.0.json",
  "license": "Searle-NT-1.0",
  "version": "1.0",
  "creator": {
    "name": "Creator Name",
    "address": "0x1234567890abcdef1234567890abcdef12345678",
    "verified": true
  },
  "permissions": {
    "humanUse": true,
    "commercialUse": true,
    "modification": true,
    "redistribution": true,
    "aiTraining": false,
    "aiInference": "allowed",
    "aiModelScope": "all",
    "academicResearch": true
  },
  "onChain": {
    "chain": "base",
    "contract": "0x1234567890abcdef1234567890abcdef12345678",
    "assetId": 42,
    "contentHash": "0xabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdefabcd",
    "registeredAt": "2026-02-23T00:00:00Z"
  },
  "watermark": {
    "enabled": true,
    "type": ["dynamic", "steganographic"]
  }
}
```

---

*Searle Protocol License v1.0*
*Published by Solrizon*
*https://searleprotocol.org/license*
*February 2026*
