'use client'

import { useEffect, useRef, useState } from 'react'

const steps = [
  { 
    num: "01", 
    title: "Call or Text Mike", 
    desc: "Reach out at 608-403-2930 anytime between 7am–7pm. Tell me what needs doing." 
  },
  { 
    num: "02", 
    title: "Mike Shows Up", 
    desc: "On time, ready to work. No drama, no excuses. Just results." 
  },
  { 
    num: "03", 
    title: "Pay When Happy", 
    desc: "Venmo, Cash App, or cash. You decide when the job is done right." 
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

export function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 md:px-12 bg-cream">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="font-body text-[11px] tracking-[4px] uppercase text-wood-light block mb-4">
              Simple
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-wood-dark">
              How It Works
            </h2>
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-[2px]">
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div 
                className={`p-10 md:p-14 border border-[#e8e0d0] ${
                  i === 1 ? 'bg-wood-dark' : 'bg-white'
                }`}
              >
                <div 
                  className="font-heading text-6xl md:text-7xl font-black leading-none mb-6"
                  style={{
                    color: i === 1 
                      ? 'rgba(168,216,120,0.2)' 
                      : 'rgba(44,36,22,0.06)'
                  }}
                >
                  {step.num}
                </div>
                <h3 
                  className={`font-heading text-xl md:text-2xl font-bold mb-4 ${
                    i === 1 ? 'text-cream' : 'text-wood-dark'
                  }`}
                >
                  {step.title}
                </h3>
                <p 
                  className={`font-body text-[15px] leading-relaxed font-light ${
                    i === 1 
                      ? 'text-[rgba(250,247,242,0.65)]' 
                      : 'text-wood'
                  }`}
                >
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
