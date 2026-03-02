const steps = [
  {
    number: '01',
    icon: '📱',
    title: 'Call or Text',
    description: 'Reach out at 608-403-2930',
    detail: 'Anytime between 7am-7pm'
  },
  {
    number: '02',
    icon: '🛠️',
    title: 'Mike Shows Up',
    description: 'On time, ready to work',
    detail: 'With all the right tools'
  },
  {
    number: '03',
    icon: '✨',
    title: 'Job Well Done',
    description: 'Pay when you\'re happy',
    detail: 'No surprises, ever'
  }
]

export function ProcessSection() {
  return (
    <section id="process" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-display text-xl text-primary">Simple</span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-2 mb-4">How It Works</h2>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 md:-translate-x-1/2" />

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-6"
                >
                  {/* Number circle */}
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading text-xl font-bold shadow-lg shadow-primary/30 md:mx-auto">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow ${
                    index % 2 === 0 ? 'md:text-right md:mr-auto md:ml-0 md:max-w-[calc(50%-3rem)]' : 'md:ml-auto md:mr-0 md:max-w-[calc(50%-3rem)]'
                  }`}>
                    <span className="text-3xl mb-2 block">{step.icon}</span>
                    <h3 className="font-heading text-xl font-semibold mb-1">{step.title}</h3>
                    <p className="text-foreground">{step.description}</p>
                    <p className="text-sm text-muted-foreground mt-1">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
