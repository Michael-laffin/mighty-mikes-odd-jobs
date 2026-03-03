'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Phone, MessageSquare, Send } from 'lucide-react'

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
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus('success')
        setFormData({ name: '', phone: '', email: '', service: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id="contact" 
      className="relative py-32 md:py-40 px-6 md:px-12 overflow-hidden"
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
      
      <div className="relative max-w-4xl mx-auto">
        <FadeIn>
          <span className="font-body text-[11px] tracking-[4px] uppercase text-[rgba(168,216,120,0.8)] block mb-6 text-center">
            Ready?
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-cream leading-tight mb-6 text-center">
            Let's Get It<br />
            <span className="text-accent-green italic">Done.</span>
          </h2>
          <p className="font-body text-lg text-[rgba(250,247,242,0.65)] mb-12 font-light text-center">
            Fill out the form or call directly — either way, Mike will get back to you fast.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <FadeIn delay={0.1}>
            <div className="bg-white/5 backdrop-blur-sm border border-[rgba(168,216,120,0.2)] p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-[rgba(250,247,242,0.7)] mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1a2e1a] border border-[rgba(168,216,120,0.2)] text-cream focus:border-accent-green focus:outline-none transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-[rgba(250,247,242,0.7)] mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1a2e1a] border border-[rgba(168,216,120,0.2)] text-cream focus:border-accent-green focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[rgba(250,247,242,0.7)] mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1a2e1a] border border-[rgba(168,216,120,0.2)] text-cream focus:border-accent-green focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-[rgba(250,247,242,0.7)] mb-2">Service Needed</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1a2e1a] border border-[rgba(168,216,120,0.2)] text-cream focus:border-accent-green focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    <option value="Yard Cleanup">Yard Cleanup & Debris Removal</option>
                    <option value="Weeding">Weeding & Garden Bed Prep</option>
                    <option value="Mulching">Mulching</option>
                    <option value="Window Washing">Window Washing</option>
                    <option value="Garage Cleaning">Garage & Shed Cleaning</option>
                    <option value="Moving">Moving & Odd Jobs</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm text-[rgba(250,247,242,0.7)] mb-2">Message</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1a2e1a] border border-[rgba(168,216,120,0.2)] text-cream focus:border-accent-green focus:outline-none transition-colors resize-none"
                    placeholder="Tell Mike what you need done..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-accent-green/10 border border-accent-green/30 text-accent-green text-center text-sm">
                    ✓ Thanks! Mike will be in touch within 24 hours.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-center text-sm">
                    Something went wrong. Call Mike at 608-403-2930.
                  </div>
                )}

                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-accent-green text-forest-dark hover:bg-accent-green/90 font-body text-xs tracking-[2px] uppercase py-6"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </FadeIn>

          {/* Phone Contact */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col justify-center text-center md:text-left">
              <p className="font-body text-sm text-[rgba(250,247,242,0.5)] uppercase tracking-[2px] mb-4">
                Prefer to call?
              </p>
              
              {/* Phone number */}
              <a 
                href="tel:608-403-2930"
                className="font-heading text-3xl md:text-4xl font-bold text-accent-green mb-8 tracking-tight hover:opacity-80 transition-opacity"
              >
                608-403-2930
              </a>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-accent-green text-forest-dark hover:bg-accent-green/90 font-body text-xs tracking-[2.5px] uppercase px-8 py-6"
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
                  className="border-2 border-[rgba(250,247,242,0.6)] text-cream bg-transparent hover:bg-white/10 font-body text-xs tracking-[2.5px] uppercase px-8 py-6"
                  asChild
                >
                  <a href="sms:608-403-2930">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send a Text
                  </a>
                </Button>
              </div>

              <p className="font-body text-sm text-[rgba(250,247,242,0.4)] mt-8">
                Available 7 days a week<br />
                Serving Adams County & surrounding areas
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
