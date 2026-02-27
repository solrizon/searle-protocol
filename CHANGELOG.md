# Changelog

## v1.0 — 2026-02-23

Initial release of the Searle Protocol License.

### Variants
- `Searle-OS` — Open Searle (training + inference permitted)
- `Searle-NT` — No Training (inference permitted, training prohibited)
- `Searle-NT-OW` — No Training, Open Weight (open-weight inference only)
- `Searle-NR` — No Reading (all AI access prohibited)
- `Searle-NC-NT` — Non-Commercial, No Training
- `Searle-NC-NT-OW` — Non-Commercial, No Training, Open Weight
- `Searle-NC-NR` — Non-Commercial, No Reading
- `Searle-FP` — Full Protection (on-chain attribution required)

### Features
- Three-dimensional permission system (Training × Reading × Commerce)
- Open-Weight Model distinction with clear definition
- Machine-readable metadata (HTML meta, robots.txt, HTTP headers, JSON)
- Compatibility with MIT, Apache, GPL, Creative Commons via dual licensing
- SPDX-compatible identifiers
- On-Chain Attribution (-OCA) and Watermark (-WM) suffixes
- Academic research exception for commercially-licensed (C+) variants: Searle-NT, Searle-NT-OW, and Searle-NR
- JSON Schema for automated license detection

### On-Chain
- SearleRegistry contract and IPFS anchoring prepared (to be deployed — see README for deployment sequence)
- Self-registration of license text planned as the first asset on SearleRegistry

---

*Published by Solrizon*
