import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'

const pricing = [
  { service: 'Yard Cleanup & Debris Removal', price: '$50', icon: '🧹' },
  { service: 'Weeding & Garden Prep', price: '$40', icon: '🌱' },
  { service: 'Mulching (you supply)', price: '$35', icon: '🍂' },
  { service: 'Window Washing', price: '$30', icon: '🪟' },
  { service: 'Garage & Shed Cleaning', price: '$50', icon: '🏠' },
  { service: 'Moving, Lifting & Odd Jobs', price: '$25/hr', icon: '💪' },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xl text-primary">Transparent</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-2 mb-4">Simple Pricing</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            No hidden fees. No surprises. Just honest work.
          </p>
        </div>

        {/* Pricing Card */}
        <Card className="max-w-2xl mx-auto backdrop-blur-sm bg-card/50 border-2 border-primary/20">
          <CardContent className="p-8">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left py-4 font-heading text-lg text-primary">Service</th>
                  <th className="text-right py-4 font-heading text-lg text-primary">Starting At</th>
                </tr>
              </thead>
              <tbody>
                {pricing.map((item, index) => (
                  <tr 
                    key={index}
                    className="border-b border-border last:border-0 hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-4">
                      <span className="mr-3">{item.icon}</span>
                      {item.service}
                    </td>
                    <td className="py-4 text-right font-bold text-primary text-lg">
                      {item.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="text-center text-muted-foreground italic mt-6 pt-6 border-t border-border">
              Every job is different — call for a free quote!
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="xl" asChild>
            <a href="tel:608-403-2930" className="gap-2">
              <Phone className="w-5 h-5" />
              Get Free Quote — 608-403-2930
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
