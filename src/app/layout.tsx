import type { Metadata } from 'next'
import { Inter, Newsreader, Caveat } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-heading',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-display',
})

export const metadata: Metadata = {
  title: "Mighty Mike's Odd Jobs | Adams County, WI",
  description: 'One Guy. Mighty Results. Local yard cleanup, weeding, mulching, window washing, and odd jobs in Adams County, Wisconsin.',
  keywords: ['odd jobs', 'yard work', 'lawn care', 'Adams County', 'Wisconsin', 'handyman'],
  authors: [{ name: "Mighty Mike's Odd Jobs" }],
  openGraph: {
    title: "Mighty Mike's Odd Jobs | Adams County, WI",
    description: 'One Guy. Mighty Results. Local yard work and odd jobs.',
    type: 'website',
    locale: 'en_US',
    url: 'https://mightymikesoddjobs.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${newsreader.variable} ${caveat.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="noise-overlay" aria-hidden="true" />
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
