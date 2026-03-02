'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, MessageSquare } from 'lucide-react'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return [ref, inView] as const
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, inView] = useInView()
  
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

export function CTASection() {
  return (
    <section 
      id="contact" 
      className="relative py-32 md:py-40 px-6 md:px-12 overflow-hidden text-center"
      style={{
        background: 'linear-gradient(135deg, #1a2e1a 0%, #2d4a1e 40%, #4a7c3a 100%)'
      }}
    >
      {/* Radial glow */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 50%, rgba(168,216,120,0.1) 0%, transparent 70%)'
        }}
      />
      
      <div className="relative max-w-3xl mx-auto">
        <FadeIn>
          <span className="font-body text-[11px] tracking-[4px] uppercase text-[rgba(168,216,120,0.8)] block mb-6">
            Ready?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-cream leading-tight mb-6">
            Let's Get It<br />
            <span className="text-accent-green italic">Done.</span>
          </h2>
          <p className="font-body text-lg text-[rgba(250,247,242,0.65)] mb-6 font-light">
            No forms. No waiting. Just call or text Mike directly.
          </p>
          
          {/* Phone number */}
          <a 
            href="tel:608-403-2930"
            className="block font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-accent-green mb-12 tracking-tight hover:opacity-80 transition-opacity"
          >
            608-403-2930
          </a>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-accent-green text-forest-dark hover:bg-accent-green/90 font-body text-xs tracking-[2.5px] uppercase px-12 py-6 font-bold"
              asChild
            >
              <a href="tel:608-403-2930">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-[rgba(250,247,242,0.6)] text-cream bg-transparent hover:bg-white/10 font-body text-xs tracking-[2.5px] uppercase px-12 py-6"
              asChild
            >
              <a href="sms:608-403-2930">
                <MessageSquare className="w-4 h-4 mr-2" />
                Send a Text
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
