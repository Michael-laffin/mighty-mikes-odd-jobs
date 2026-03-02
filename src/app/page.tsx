import { HeroSection } from '@/components/sections/hero'
import { IntroBand } from '@/components/sections/intro-band'
import { ServicesSection } from '@/components/sections/services'
import { PricingSection } from '@/components/sections/pricing'
import { AboutSection } from '@/components/sections/about'
import { ProcessSection } from '@/components/sections/process'
import { CTASection } from '@/components/sections/cta'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroBand />
      <ServicesSection />
      <PricingSection />
      <AboutSection />
      <ProcessSection />
      <CTASection />
    </main>
  )
}
