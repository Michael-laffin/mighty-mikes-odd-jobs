import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

export const metadata: Metadata = {
  title: "Mighty Mike's Odd Jobs | Adams County, WI",
  description: 'One guy. Honest work. Mighty results. Yard cleanup, weeding, mulching, window washing, and more. Serving Adams County, Wisconsin.',
  keywords: ['yard work', 'odd jobs', 'Adams County', 'Wisconsin', 'landscaping', 'handyman'],
  authors: [{ name: 'Mighty Mike' }],
  openGraph: {
    title: "Mighty Mike's Odd Jobs",
    description: 'One guy. Honest work. Mighty results.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-cream text-wood-dark overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
