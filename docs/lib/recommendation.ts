export interface Recommendation {
  name: string
  displayName: string
  desc: string
  cardId: string
  licenseKey: string
}

export function getRecommendation(
  training: string,
  reading: string,
  commerce: string
): Recommendation {
  if (training === "allow") {
    return {
      name: "SEARLE-OS",
      displayName: "Searle-OS-1.0",
      desc: "Open Source. Training, Reading, and Commerce Allowed.",
      cardId: "card-os",
      licenseKey: "Searle-OS",
    }
  }

  // training === "forbid"
  if (reading === "allow") {
    if (commerce === "allow") {
      return {
        name: "SEARLE-NT",
        displayName: "Searle-NT-1.0",
        desc: "No Training. Reading and Commerce Allowed.",
        cardId: "card-nt",
        licenseKey: "Searle-NT",
      }
    }
    return {
      name: "SEARLE-NC",
      displayName: "Searle-NC-NT-1.0",
      desc: "No Training. Reading Allowed. No Commerce.",
      cardId: "card-nc-nt",
      licenseKey: "Searle-NC-NT",
    }
  }

  if (reading === "open") {
    if (commerce === "allow") {
      return {
        name: "SEARLE-OW",
        displayName: "Searle-NT-OW-1.0",
        desc: "No Training. Open Weight Models Only.",
        cardId: "card-nt-ow",
        licenseKey: "Searle-NT-OW",
      }
    }
    return {
      name: "SEARLE-NC-OW",
      displayName: "Searle-NC-NT-OW-1.0",
      desc: "No Training. Open Weights Only. No Commerce.",
      cardId: "card-nc-nt-ow",
      licenseKey: "Searle-NC-NT-OW",
    }
  }

  // reading === "forbid"
  if (commerce === "allow") {
    return {
      name: "SEARLE-NR",
      displayName: "Searle-NR-1.0",
      desc: "No Training. No Reading. Commerce Allowed.",
      cardId: "card-nr",
      licenseKey: "Searle-NR",
    }
  }

  return {
    name: "SEARLE-STRICT",
    displayName: "Searle-NC-NR-1.0",
    desc: "Full Restriction. No Training, Reading, or Commerce.",
    cardId: "card-nc-nr",
    licenseKey: "Searle-NC-NR",
  }
}
