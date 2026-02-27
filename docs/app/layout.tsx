import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono, Anton } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
})

export const metadata: Metadata = {
  title: 'Searle Protocol | On-Chain IP Protection & Human-AI Provenance for the AI Era',
  description: 'An on-chain intellectual property protection protocol for the AI era. Cryptographically verifiable, machine-readable licenses that safeguard creator rights, govern human-AI agent interactions, and ensure full content provenance and traceability.',
  metadataBase: new URL('https://searleprotocol.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Searle Protocol | On-Chain IP Protection & Human-AI Provenance for the AI Era',
    description: 'An on-chain intellectual property protection protocol for the AI era. Cryptographically verifiable, machine-readable licenses that safeguard creator rights, govern human-AI agent interactions, and ensure full content provenance and traceability.',
    url: 'https://searleprotocol.org',
    siteName: 'Searle Protocol',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Searle Protocol | On-Chain IP Protection for the AI Era',
    description: 'Cryptographically verifiable protocol that safeguards creator IP, governs human-AI agent interactions, and ensures content provenance on-chain.',
    creator: '@solrizon_',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${anton.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
