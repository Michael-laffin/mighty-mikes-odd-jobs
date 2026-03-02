'use client'

import { useEffect, useRef, useState } from 'react'

const services = [
  {
    title: "Yard Cleanup & Debris Removal",
    desc: "Leaves, branches, winter mess — gone. Your yard, restored.",
    price: "From $50",
    icon: "🍂",
    accent: "#4a7c59",
  },
  {
    title: "Weeding & Garden Bed Prep",
    desc: "Pull weeds, turn soil, get beds ready for the season.",
    price: "From $40",
    icon: "🌱",
    accent: "#5a8a3a",
  },
  {
    title: "Mulching",
    desc: "You supply it, I spread it. Perfectly even, every time.",
    price: "From $35",
    icon: "🪵",
    accent: "#7a5c3a",
  },
  {
    title: "Window Washing",
    desc: "Streak-free shine, inside and out. Let the light back in.",
    price: "From $30",
    icon: "✨",
    accent: "#3a6a8a",
  },
  {
    title: "Garage, Shed & Porch Cleaning",
    desc: "Clear the clutter, reclaim your space. No job too messy.",
    price: "From $50",
    icon: "🏡",
    accent: "#8a5a3a",
  },
  {
    title: "Moving, Lifting & Odd Jobs",
    desc: "Heavy lifting, random tasks, whatever needs doing. Just ask.",
    price: "$25/hr",
    icon: "💪",
    accent: "#6a4a7a",
  },
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

export function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-cream">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="mb-16 md:mb-20">
            <span className="font-body text-[11px] tracking-[4px] uppercase text-wood-light block mb-4">
              What I do
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-wood-dark leading-tight">
              Services
            </h2>
            <div className="w-16 h-[3px] bg-accent-green mt-5" />
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
          {services.map((s, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div 
                className="service-card bg-white border border-[#e8e0d0] p-8 md:p-10"
                style={{ '--accent': s.accent } as React.CSSProperties}
              >
                <div className="text-3xl mb-5">{s.icon}</div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-wood-dark mb-3 leading-snug">
                  {s.title}
                </h3>
                <p className="font-body text-[15px] text-wood leading-relaxed mb-6">
                  {s.desc}
                </p>
                <div className="font-body text-[13px] tracking-[2px] uppercase font-bold" style={{ color: s.accent }}>
                  {s.price}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
