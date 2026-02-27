# Searle Protocol License

> **Website: [searleprotocol.org](https://searleprotocol.org)**

**A modular license framework for AI content rights.**

Traditional licenses (MIT, Apache, GPL, Creative Commons) were written for a world where only humans consume content. The Searle Protocol License extends content rights into the age of AI — giving creators explicit, machine-readable, legally grounded control over how AI systems interact with their work.

Named after philosopher **John Searle**, whose [Chinese Room argument](https://en.wikipedia.org/wiki/Chinese_room) demonstrates that systems can process information without understanding it.

## The Problem

```
Your content is being used to train AI models.
You have no say in it.
You get nothing for it.
Current licenses don't address it.
```

## The Solution

Three dimensions of AI content rights:

| Dimension | Options | What it controls |
|---|---|---|
| **Training** | T+ / T- | Can AI models train on your content? |
| **Reading** | R+ / RO / R- | Can AI models read your content at inference? |
| **Commerce** | C+ / C- | Is commercial use allowed? |

## License Variants

| License | Training | AI Reading | Model Scope | Commercial |
|---|---|---|---|---|
| `Searle-OS` | ✅ Allowed | ✅ Any model | All | ✅ Yes |
| `Searle-NT` | ❌ No | ✅ Any model | All | ✅ Yes |
| `Searle-NT-OW` | ❌ No | ⚠️ Open-weight only | Open-weight | ✅ Yes |
| `Searle-NR` | ❌ No | ❌ No AI access | None | ✅ Yes |
| `Searle-NC-NT` | ❌ No | ✅ Any model | All | ❌ No |
| `Searle-NC-NT-OW` | ❌ No | ⚠️ Open-weight only | Open-weight | ❌ No |
| `Searle-NC-NR` | ❌ No | ❌ No AI access | None | ❌ No |
| `Searle-FP` | ❌ No | ⚠️ Per terms (default: OW) | Per terms | ⚠️ Per terms |

### Optional Suffixes

| Suffix | Meaning |
|---|---|
| `-OCA` | On-Chain Attribution (registered on blockchain) |
| `-WM` | Watermarked (traceable distribution) |

## Quick Start

### 1. Choose your variant

```
Can AI train on it?  → No
Can AI read it?      → Only open-weight models
Commercial use?      → Yes

Result: Searle-NT-OW
```

### 2. Add to your project

Create a `LICENSE` file:

```
Searle Protocol License v1.0 — No Training, Open Weight

Copyright (c) 2026 Your Name

This work is licensed under the Searle Protocol License v1.0 (Searle-NT-OW).

✅ Human use, modification, and redistribution: PERMITTED
✅ AI inference with open-weight models: PERMITTED
❌ AI inference with closed-weight models: PROHIBITED
❌ Use as AI/ML training data: PROHIBITED

Full license: https://searleprotocol.org/license/v1.0
```

### 3. Add machine-readable metadata (optional)

```json
{
  "$schema": "https://searleprotocol.org/schema/license-v1.0.json",
  "license": "Searle-NT-OW-1.0",
  "version": "1.0",
  "permissions": {
    "aiTraining": false,
    "aiInference": "open-weight-only"
  }
}
```

### 4. Register on-chain (optional)

Use the Searle Protocol smart contracts on Base to get immutable timestamped proof:

```
Contract: SearleRegistry on Base
Function: registerAsset(creator, contentHash, ipfsCID, licenseType, protectionLevel, assetType)
```

## Compatibility

Works with existing licenses via dual licensing:

```
SPDX-License-Identifier: MIT AND Searle-NT-OW-1.0
```

This means: MIT for human use, but AI training prohibited and only open-weight models may read.

## Files

| File | Description |
|---|---|
| `SEARLE-LICENSE-v1.0.md` | Full legal text (11 articles) |
| `variants/Searle-OS-1.0.txt` | Open Searle — full open |
| `variants/Searle-NT-1.0.txt` | No Training |
| `variants/Searle-NT-OW-1.0.txt` | No Training, Open Weight only |
| `variants/Searle-NR-1.0.txt` | No Reading (no AI access) |
| `variants/Searle-NC-NT-1.0.txt` | Non-Commercial, No Training |
| `variants/Searle-NC-NT-OW-1.0.txt` | Non-Commercial, No Training, Open Weight |
| `variants/Searle-NC-NR-1.0.txt` | Non-Commercial, No Reading |
| `variants/Searle-FP-1.0.txt` | Full Protection (on-chain required) |
| `searle.schema.json` | JSON Schema definition (validators use this to validate `searle.json`) |
| `suffixes/OCA-1.0.txt` | On-Chain Attribution addendum template |
| `suffixes/WM-1.0.txt` | Watermark addendum template |
| `CHANGELOG.md` | Version history |

## On-Chain Attribution

On-chain attribution is optional for most variants and required for `Searle-FP`.
When used, the attribution record should include at least:

- Chain name
- Contract or registry address
- Content hash
- Registration timestamp
- License variant identifier

## Links

- **Website:** https://searleprotocol.org
- **Full License:** https://searleprotocol.org/license/v1.0
- **GitHub:** https://github.com/solrizon/searle-protocol
- **Twitter/X:** https://x.com/solrizon

## FAQ

**Q: Is this legally enforceable?**
A: Enforceability depends on jurisdiction. In many jurisdictions, copyright holders can define how their work is used. The EU AI Act (effective 2026) recognizes creators' right to opt out of AI training; US courts are developing case law in this area (e.g., NYT v. OpenAI). This license codifies those rights in a standard, machine-readable format. **This is not legal advice — consult qualified counsel for your jurisdiction.**

**Q: What if someone ignores the license?**
A: Same as ignoring any other license — it's copyright infringement. The on-chain attribution provides timestamped evidence, watermarks provide tracing, and the staking/slashing mechanism provides economic deterrence.

**Q: Why distinguish open-weight vs closed-weight models?**
A: Auditability. Open-weight models can be inspected to verify they haven't trained on your content. Closed-weight models are black boxes — you have no way to verify compliance.

**Q: How realistic is enforcement against closed-source AI training?**
A: Honest answer: detecting unauthorized training use in closed-weight models is currently very difficult for individual creators. This license provides the **legal basis** for claims (you explicitly reserved the right), **on-chain evidence** of prior creation (timestamped proof), and **watermark tracing** for redistribution detection. However, proving a specific model trained on your specific content requires either model output analysis (as in NYT v. OpenAI), discovery in litigation, or regulatory audits (the EU AI Act requires training data transparency). The Searle Protocol reduces enforcement **friction** but does not eliminate enforcement **cost**. For individual creators, collective enforcement (class actions, creator unions, regulatory complaints) is likely more practical than solo litigation.

**Q: Can I change my license later?**
A: Yes. You can re-license under a different Searle variant or a different license entirely. Previously distributed copies remain under the original terms.

---

*Searle Protocol License v1.0 — Published by [Solrizon](https://github.com/solrizon)*
*February 2026*
