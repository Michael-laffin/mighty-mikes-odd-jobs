'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = ['Services', 'Pricing', 'About', 'Contact']

export function Header() {
  const [scrollY, setScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navBg = scrollY > 60

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300 ${
        navBg 
          ? 'bg-cream/97 backdrop-blur-xl border-b border-wood-dark/10' 
          : 'bg-transparent'
      }`}
    >
      <a 
        href="#"
        className="font-heading font-black text-lg tracking-wide"
        style={{ color: navBg ? '#2c2416' : '#faf7f2' }}
      >
        Mighty Mike's
      </a>
      
      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-10">
        {navItems.map(item => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-body text-[13px] tracking-[2px] uppercase transition-colors hover:text-wood-light"
            style={{ color: navBg ? '#2c2416' : 'rgba(250,247,242,0.85)' }}
          >
            {item}
          </a>
        ))}
        <a 
          href="tel:608-403-2930"
          className="font-body text-[11px] tracking-[2px] uppercase px-6 py-3 border-2 transition-all hover:opacity-80"
          style={{
            background: navBg ? '#2c2416' : 'rgba(250,247,242,0.15)',
            color: '#faf7f2',
            borderColor: navBg ? '#2c2416' : 'rgba(250,247,242,0.5)'
          }}
        >
          608-403-2930
        </a>
      </div>
      
      {/* Mobile menu button */}
      <button 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden p-2"
        style={{ color: navBg ? '#2c2416' : '#faf7f2' }}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-cream border-b border-wood-dark/10 p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map(item => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="font-body text-[13px] tracking-[2px] uppercase text-wood-dark hover:text-wood-light transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="tel:608-403-2930"
              className="font-body text-[11px] tracking-[2px] uppercase px-6 py-3 bg-wood-dark text-cream border-2 border-wood-dark text-center mt-2"
            >
              608-403-2930
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
