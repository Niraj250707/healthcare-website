import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { LanguageSelector } from "@/components/language-selector"

export const metadata: Metadata = {
  title: "Lifespan - Healthcare Solutions",
  description: "Comprehensive healthcare platform for humans, animals, and automotive health needs",
  generator: "v0.app",
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <div className="fixed top-4 right-4 z-50">
          <LanguageSelector />
        </div>
        <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
