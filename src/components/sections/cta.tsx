import { Button } from '@/components/ui/button'
import { Phone, MessageSquare } from 'lucide-react'

export function CTASection() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-forest-600" />
      
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute w-[400px] h-[400px] -top-24 -right-24 bg-white/10" />
        <div className="blob absolute w-[300px] h-[300px] -bottom-16 -left-16 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
          Ready to Get It Done?
        </h2>
        <p className="text-xl md:text-2xl opacity-90 mb-8">
          Let Mike handle the hard work
        </p>

        {/* Phone Number */}
        <div className="mb-10">
          <a 
            href="tel:608-403-2930"
            className="inline-block relative group"
          >
            <span className="absolute inset-0 bg-white/10 rounded-2xl scale-110 group-hover:scale-125 transition-transform" />
            <span className="relative font-heading text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider">
              608-403-2930
            </span>
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl gap-2" asChild>
            <a href="tel:608-403-2930">
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </Button>
          <Button size="xl" variant="outline" className="border-2 border-white text-white hover:bg-white/10 gap-2" asChild>
            <a href="sms:608-403-2930">
              <MessageSquare className="w-5 h-5" />
              Send Text
            </a>
          </Button>
        </div>

        <p className="text-sm opacity-80">
          No forms, no hassle — just call or text Mike directly.
        </p>
      </div>
    </section>
  )
}
