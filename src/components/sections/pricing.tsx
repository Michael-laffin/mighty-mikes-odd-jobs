'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

const pricing = [
  { service: "Yard Cleanup & Debris Removal", price: "$50" },
  { service: "Weeding & Garden Bed Prep", price: "$40" },
  { service: "Mulching (you supply)", price: "$35" },
  { service: "Window Washing", price: "$30" },
  { service: "Garage & Shed Cleaning", price: "$50" },
  { service: "Moving & Odd Jobs", price: "$25/hr" },
]

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

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 md:py-32 px-6 md:px-12 bg-[#f0ebe0]">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="font-body text-[11px] tracking-[4px] uppercase text-wood-light block mb-4">
              Transparent
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-wood-dark leading-tight">
              Simple Pricing
            </h2>
            <p className="font-body text-lg text-wood mt-4 font-light">
              No hidden fees. No surprises. Just honest work at honest prices.
            </p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <div className="bg-white border border-[#e0d8c8] px-6 md:px-10">
            {pricing.map((row, i) => (
              <div 
                key={i}
                className="pricing-row flex justify-between items-center py-5 border-b border-[#e8e0d0] last:border-0"
              >
                <span className="font-body text-base text-wood-dark">{row.service}</span>
                <span className="font-heading text-xl md:text-2xl font-bold text-forest">
                  {row.price}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="text-center mt-12">
            <p className="font-body text-[15px] text-wood-light italic mb-8">
              Every job is different — call for a free quote. No pressure, ever.
            </p>
            <Button 
              size="lg"
              className="bg-wood-dark text-cream hover:bg-wood-dark/90 font-body text-xs tracking-[2.5px] uppercase px-10 py-6"
              asChild
            >
              <a href="tel:608-403-2930">
                <Phone className="w-4 h-4 mr-2" />
                Get Your Free Quote
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
