import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { 
  Leaf, 
  Flower2, 
  TreeDeciduous, 
  PanelTop, 
  Warehouse, 
  Dumbbell 
} from 'lucide-react'

const services = [
  {
    icon: Leaf,
    title: 'Yard Cleanup & Debris Removal',
    description: 'Leaves, branches, and clutter — gone. Your yard, spotless.',
    price: 'From $50',
    size: 'large'
  },
  {
    icon: Flower2,
    title: 'Weeding & Garden Prep',
    description: 'Pull weeds, prep soil. Ready for planting.',
    price: 'From $40',
    size: 'normal'
  },
  {
    icon: TreeDeciduous,
    title: 'Mulching',
    description: 'You supply, I spread. Easy.',
    price: 'From $35',
    size: 'normal'
  },
  {
    icon: PanelTop,
    title: 'Window Washing',
    description: 'Streak-free shine inside and out.',
    price: 'From $30',
    size: 'normal'
  },
  {
    icon: Warehouse,
    title: 'Garage & Shed Cleaning',
    description: 'Clear the cobwebs, reclaim space.',
    price: 'From $50',
    size: 'normal'
  },
  {
    icon: Dumbbell,
    title: 'Moving, Lifting & Odd Jobs',
    description: 'Heavy lifting? Random tasks? Mike\'s got it.',
    price: '$25/hour',
    size: 'wide'
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xl text-primary">What I Do</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-2 mb-4">Services</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            No job too small, no task too tall
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card 
                key={index}
                className={`group relative overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl ${
                  service.size === 'large' ? 'lg:col-span-2 lg:grid lg:grid-cols-2 lg:gap-6' : ''
                } ${
                  service.size === 'wide' ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Gradient line on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-forest-400 via-primary to-forest-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                
                <CardHeader className={service.size === 'large' ? 'lg:justify-center' : ''}>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{service.description}</CardDescription>
                  <span className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                    {service.price}
                  </span>
                </CardContent>

                {/* Decorative blob */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
