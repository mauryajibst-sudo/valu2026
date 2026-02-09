import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Happy Chocolate Day, My Love 🍫',
  description: 'A sweet Chocolate Day micro-experience 🍫❤️',
  generator: 'v0.app',
  themeColor: '#f472b6',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
      <Script src="https://tenor.com/embed.js" strategy="lazyOnload" />
    </html>
  )
}
