import { Geist, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "URBIO.AUTO",
  description:
    "Современный автосервис с прозрачным обслуживанием, гарантией и единым стандартом сервиса.",
}

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const heading = IBM_Plex_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading-source",
})

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-source",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={cn(
        "bg-background font-sans antialiased",
        sans.variable,
        heading.variable,
        fontMono.variable,
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
