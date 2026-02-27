export interface LicenseMeta {
  id: string
  spdx: string
  fullName: string
  file: string
}

export const licenseMeta: Record<string, LicenseMeta> = {
  "Searle-OS": {
    id: "Searle-OS",
    spdx: "Searle-OS-1.0",
    fullName: "Open Searle",
    file: "/licenses/Searle-OS-1.0.txt",
  },
  "Searle-NT": {
    id: "Searle-NT",
    spdx: "Searle-NT-1.0",
    fullName: "No Training",
    file: "/licenses/Searle-NT-1.0.txt",
  },
  "Searle-NT-OW": {
    id: "Searle-NT-OW",
    spdx: "Searle-NT-OW-1.0",
    fullName: "No Training, Open Weight",
    file: "/licenses/Searle-NT-OW-1.0.txt",
  },
  "Searle-NR": {
    id: "Searle-NR",
    spdx: "Searle-NR-1.0",
    fullName: "No Reading",
    file: "/licenses/Searle-NR-1.0.txt",
  },
  "Searle-NC-NT": {
    id: "Searle-NC-NT",
    spdx: "Searle-NC-NT-1.0",
    fullName: "Non-Commercial, No Training",
    file: "/licenses/Searle-NC-NT-1.0.txt",
  },
  "Searle-NC-NT-OW": {
    id: "Searle-NC-NT-OW",
    spdx: "Searle-NC-NT-OW-1.0",
    fullName: "Non-Commercial, No Training, Open Weight",
    file: "/licenses/Searle-NC-NT-OW-1.0.txt",
  },
  "Searle-NC-NR": {
    id: "Searle-NC-NR",
    spdx: "Searle-NC-NR-1.0",
    fullName: "Non-Commercial, No Reading",
    file: "/licenses/Searle-NC-NR-1.0.txt",
  },
  "Searle-FP": {
    id: "Searle-FP",
    spdx: "Searle-FP-1.0",
    fullName: "Full Protection",
    file: "/licenses/Searle-FP-1.0.txt",
  },
}

export const suffixFiles = {
  OCA: { title: "On-Chain Attribution (-OCA)", file: "/licenses/OCA-1.0.txt" },
  WM: { title: "Watermark (-WM)", file: "/licenses/WM-1.0.txt" },
}

export const displayNameToLicenseKey: Record<string, string> = {
  "SEARLE-OS": "Searle-OS",
  "SEARLE-NT": "Searle-NT",
  "SEARLE-OW": "Searle-NT-OW",
  "SEARLE-NT-OW": "Searle-NT-OW",
  "SEARLE-NR": "Searle-NR",
  "SEARLE-NC": "Searle-NC-NT",
  "SEARLE-NC-NT": "Searle-NC-NT",
  "SEARLE-NC-OW": "Searle-NC-NT-OW",
  "SEARLE-NC-NT-OW": "Searle-NC-NT-OW",
  "SEARLE-STRICT": "Searle-NC-NR",
  "SEARLE-NC-NR": "Searle-NC-NR",
  "SEARLE-FP": "Searle-FP",
}

export async function fetchLicenseText(file: string): Promise<string> {
  const res = await fetch(file)
  if (!res.ok) return "Failed to load license text."
  return res.text()
}
