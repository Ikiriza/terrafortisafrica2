import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google"
import { Navbar } from "@/components/site/navbar"
import { Footer } from "@/components/site/footer"
import { WhatsAppButton } from "@/components/site/whatsapp-button"
import { MotionProvider, ScrollProgress } from "@/components/site/motion"
import { site } from "@/lib/site"
import "./globals.css"

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans-real",
  display: "swap",
})

const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-display-real",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.terrafortisafrica.org"),
  title: {
    default: `${site.name} — Agricultural Consulting for Food, Agriculture & Environment`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Conservation Agriculture",
    "Sustainable Agricultural Mechanization",
    "agricultural consulting Uganda",
    "climate-smart agriculture",
    "sustainable land management",
    "agribusiness consulting Africa",
    "TerraFortis Africa",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — For Food, Agriculture and Environment`,
    description: site.description,
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0e3b2a",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body id="top" className="font-sans antialiased">
        <MotionProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-primary"
          >
            Skip to content
          </a>
          <ScrollProgress />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppButton />
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  )
}
