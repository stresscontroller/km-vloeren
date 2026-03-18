import React from "react"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: 'KM Vloeren',
  description: 'De vloerenspecialist in Nederland - PVC vloeren, visgraatvloeren en vloerverwarming vakkundig gelegd',
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
