'use client'

import { useEffect, useRef, useState } from 'react'

const features = [
  { label: "Always On Time", sub: "Reliability you can count on" },
  { label: "Fair Prices", sub: "Honest quotes, no surprises" },
  { label: "100% Local", sub: "Your neighbor, not a corporation" },
  { label: "Pay When Happy", sub: "Satisfaction guaranteed" },
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

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-wood-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <FadeIn>
            <div>
              <span className="font-body text-[11px] tracking-[4px] uppercase text-accent-green block mb-4">
                About
              </span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-cream leading-tight mb-8">
                Just One<br />
                <span className="text-accent-green italic">Hardworking</span><br />
                Guy
              </h2>
              <p className="font-body text-[17px] text-[rgba(250,247,242,0.7)] leading-relaxed mb-6 font-light">
                No crew, no overhead, no runaround. Just Mike showing up when he says he will and getting the job done right. I'm your neighbor in Adams County — I care about this community and the people in it.
              </p>
              <p className="font-body text-[17px] text-[rgba(250,247,242,0.7)] leading-relaxed font-light">
                You tell me what needs doing, I show up, and you pay when you're happy. Simple as that.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 gap-[2px]">
              {features.map((item, i) => (
                <div 
                  key={i}
                  className="bg-white/[0.04] border border-white/[0.06] p-6 md:p-8"
                >
                  <div className="font-heading text-base font-bold text-accent-green mb-2">
                    {item.label}
                  </div>
                  <div className="font-body text-[13px] text-[rgba(250,247,242,0.5)] leading-relaxed">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
