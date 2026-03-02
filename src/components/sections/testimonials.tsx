import { Card, CardContent } from '@/components/ui/card'

const testimonials = [
  {
    stars: 5,
    text: "Mike showed up exactly when he said he would. My yard has never looked better!",
    author: 'Sarah M.',
    location: 'Adams, WI'
  },
  {
    stars: 5,
    text: "Fair prices, honest work. Mike even fixed a loose board on my porch without asking!",
    author: 'Tom R.',
    location: 'Friendship, WI'
  },
  {
    stars: 5,
    text: "Finally found someone reliable for all those little jobs I can't do myself anymore.",
    author: 'Dorothy K.',
    location: 'Wisconsin Dells, WI'
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xl text-primary">Reviews</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-2 mb-4">What Neighbors Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              {/* Quote mark */}
              <div className="absolute top-4 left-6 text-6xl text-primary/20 font-serif leading-none">
                &ldquo;
              </div>
              
              <CardContent className="pt-16 pb-6 px-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <span key={i} className="text-yellow-500 text-xl">⭐</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg italic mb-6 relative z-10">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex flex-col">
                  <span className="font-semibold">{testimonial.author}</span>
                  <span className="text-sm text-muted-foreground">{testimonial.location}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
