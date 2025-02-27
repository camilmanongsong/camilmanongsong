import type React from "react"
import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import "./globals.css"

// Using Outfit for a modern, futuristic look while maintaining professionalism
const outfit = Outfit({
  subsets: ["latin"],
  // Including multiple weights for better typography control
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Scale Your Business with Smart Systems | Camil Manongsong",
  description:
    "Transform your manual processes into automated success stories. Get back 20+ hours per week with custom automation solutions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-outfit`}>{children}</body>
    </html>
  )
}

