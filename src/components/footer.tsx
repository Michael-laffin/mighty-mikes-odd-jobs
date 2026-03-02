import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-wood-700 text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          {/* Logo */}
          <div className="space-y-2">
            <span className="text-4xl">🧹</span>
            <h3 className="font-display text-2xl font-bold">Mighty Mike&apos;s Odd Jobs</h3>
            <p className="text-cream/80">Adams County, WI</p>
          </div>

          {/* Phone */}
          <div>
            <a 
              href="tel:608-403-2930"
              className="text-2xl font-bold text-forest-400 hover:text-cream transition-colors"
            >
              608-403-2930
            </a>
            <p className="text-sm text-cream/70 mt-1">Mon-Sat 7AM-7PM</p>
          </div>

          {/* Tagline */}
          <div className="flex justify-center gap-3 text-sm tracking-widest uppercase">
            <span>Fast</span>
            <span className="text-cream/50">•</span>
            <span>Local</span>
            <span className="text-cream/50">•</span>
            <span>Affordable</span>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-cream/20">
            <p className="text-sm text-cream/60">
              © {new Date().getFullYear()} Mighty Mike&apos;s Odd Jobs. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
