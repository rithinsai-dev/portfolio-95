'use client'
import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          inter.className,
          "min-h-screen bg-cover bg-center bg-no-repeat"
        )}
        style={{ backgroundImage: "url('/background.png')" }}
      >
        {children}
      </body>
    </html>
  )
}
