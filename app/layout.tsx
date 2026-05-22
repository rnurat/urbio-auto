import { Geist, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  metadataBase: new URL("https://auto.urbio.tech"),
  title: {
    default: "Автосервис в Черкесске | Ремонт авто, диагностика и обслуживание | URBIO.AUTO",
    template: "%s | URBIO.AUTO",
  },
  description:
    "URBIO.AUTO — автосервис в Черкесске. Диагностика, ремонт авто, обслуживание двигателя, иномарок и АвтоВАЗ. Понятный сервис, согласование работ и удобная запись по телефону.",
  keywords: [
    "автосервис Черкесск",
    "ремонт авто Черкесск",
    "ремонт автомобиля Черкесск",
    "диагностика авто Черкесск",
    "диагностика автомобиля Черкесск",
    "диагностика двигателя Черкесск",
    "обслуживание авто Черкесск",
    "обслуживание автомобиля Черкесск",
    "СТО Черкесск",
    "ремонт двигателя Черкесск",
    "ремонт двигателя автомобиля Черкесск",
    "ремонт иномарок Черкесск",
    "ремонт АвтоВАЗ Черкесск",
    "автосервис двигатель Черкесск",
    "техобслуживание авто Черкесск",
    "сервис авто Черкесск",
    "ремонт машины Черкесск",
    "сто по ремонту авто Черкесск",
    "автосервис URBIO.AUTO",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://auto.urbio.tech",
    siteName: "URBIO.AUTO",
    title: "Автосервис в Черкесске | Ремонт авто, диагностика и обслуживание | URBIO.AUTO",
    description:
      "Диагностика, ремонт авто, обслуживание двигателя, иномарок и АвтоВАЗ в Черкесске. Понятный сервис и запись по телефону.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Автосервис в Черкесске | URBIO.AUTO",
    description:
      "Ремонт авто, диагностика двигателя и обслуживание автомобилей в Черкесске.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
