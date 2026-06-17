import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { I18nProvider } from "@/components/providers/i18n-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://erwannlesech.github.io"),
  title: {
    default: "Erwann Lesech — Data & AI Engineer",
    template: "%s — Erwann Lesech",
  },
  description:
    "Portfolio of Erwann Lesech, Data & AI Engineer. Data pipelines, machine learning systems, and production-grade AI — from ingestion to inference.",
  keywords: [
    "Data Engineer",
    "AI Engineer",
    "Machine Learning",
    "MLOps",
    "Erwann Lesech",
    "Portfolio",
  ],
  authors: [{ name: "Erwann Lesech" }],
  openGraph: {
    title: "Erwann Lesech — Data & AI Engineer",
    description:
      "Data pipelines, machine learning systems, and production-grade AI — from ingestion to inference.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Erwann Lesech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Erwann Lesech — Data & AI Engineer",
    description:
      "Data pipelines, machine learning systems, and production-grade AI.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0d1b2a" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning className={inter.variable}>
      <body className="bg-background font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <I18nProvider>
            {children}
            <Toaster />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
