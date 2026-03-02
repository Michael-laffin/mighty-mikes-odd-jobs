'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, MessageSquare, ChevronDown } from 'lucide-react'

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Layered gradient background */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(160deg, #1a2e1a 0%, #2d4a1e 30%, #4a7c3a 60%, #6aaa4a 100%)'
        }}
      />
      
      {/* Texture overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 30% 50%, rgba(100,160,60,0.4) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(200,160,80,0.2) 0%, transparent 50%)
          `
        }}
      />
      
      {/* Grain texture */}
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Bottom fade to cream */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: 'linear-gradient(to bottom, transparent, #faf7f2)'
        }}
      />
      
      {/* Parallax orbs */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full -top-24 -right-24"
        style={{
          background: 'radial-gradient(circle, rgba(120,200,80,0.15) 0%, transparent 70%)',
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      />
      <div 
        className="absolute w-[400px] h-[400px] rounded-full bottom-24 -left-12"
        style={{
          background: 'radial-gradient(circle, rgba(200,160,60,0.1) 0%, transparent 70%)',
          transform: `translateY(${scrollY * -0.2}px)`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div 
            className="inline-block font-body text-[11px] tracking-[4px] uppercase text-[rgba(200,220,160,0.9)] bg-white/[0.08] px-5 py-2 border border-[rgba(200,220,160,0.2)] mb-8"
          >
            Adams County, Wisconsin
          </div>
          
          {/* Headline */}
          <h1 
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-cream leading-none mb-6 tracking-tight"
            style={{ letterSpacing: '-1px' }}
          >
            Mighty<br />
            <span className="text-accent-green italic">Mike's</span><br />
            Odd Jobs
          </h1>
          
          {/* Subheadline */}
          <p className="font-body text-lg md:text-xl font-light text-[rgba(250,247,242,0.75)] leading-relaxed mb-12">
            One guy. Honest work. Mighty results.<br />
            Serving Adams County neighbors since 2025.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent-green text-forest-dark hover:bg-accent-green/90 font-body text-xs tracking-[2px] uppercase px-8 py-6"
              asChild
            >
              <a href="tel:608-403-2930">
                <Phone className="w-4 h-4 mr-2" />
                Call Mike — 608-403-2930
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-[rgba(250,247,242,0.6)] text-cream bg-transparent hover:bg-white/10 font-body text-xs tracking-[2px] uppercase px-8 py-6"
              asChild
            >
              <a href="sms:608-403-2930">
                <MessageSquare className="w-4 h-4 mr-2" />
                Send a Text
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[rgba(250,247,242,0.5)]">
        <span className="font-body text-[11px] tracking-[3px] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 scroll-indicator" />
      </div>
    </section>
  )
}
