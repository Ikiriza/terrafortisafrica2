import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-sans-real" })
const serif = Playfair_Display({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-serif-real" })

export const metadata: Metadata = {
  title: "TerraFortis Africa - Sustainable Innovation",
  description: "Leading the way in eco-friendly solutions for a sustainable future",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${serif.variable}`}>
      <body className={`font-sans antialiased bg-[radial-gradient(circle_at_25%_20%,rgba(31,122,92,0.08),transparent_25%),radial-gradient(circle_at_80%_0%,rgba(212,175,55,0.08),transparent_22%),radial-gradient(circle_at_60%_80%,rgba(15,61,46,0.06),transparent_28%)]`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
