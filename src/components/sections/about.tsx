'use client'

import { CheckCircle2 } from 'lucide-react'

const features = [
  {
    title: 'Reliable',
    description: 'Always on time, every time'
  },
  {
    title: 'Fair Prices',
    description: 'Honest quotes, no surprises'
  },
  {
    title: '100% Local',
    description: 'Your neighbor, not a corporation'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Illustration */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-card rounded-3xl p-8 shadow-lg border border-border">
              <svg viewBox="0 0 400 400" className="w-full h-auto">
                {/* Sun */}
                <g className="animate-pulse">
                  <circle cx="320" cy="80" r="40" className="fill-yellow-400" />
                  <g className="origin-center animate-spin [animation-duration:20s]">
                    <line x1="320" y1="20" x2="320" y2="0" stroke="#fbbf24" strokeWidth="3" />
                    <line x1="320" y1="140" x2="320" y2="160" stroke="#fbbf24" strokeWidth="3" />
                    <line x1="260" y1="80" x2="240" y2="80" stroke="#fbbf24" strokeWidth="3" />
                    <line x1="380" y1="80" x2="400" y2="80" stroke="#fbbf24" strokeWidth="3" />
                  </g>
                </g>

                {/* Hills */}
                <path 
                  d="M0 300 Q100 250 200 280 Q300 250 400 300 L400 400 L0 400 Z" 
                  className="fill-forest-200 dark:fill-forest-700"
                />
                <path 
                  d="M0 320 Q150 280 250 310 Q350 280 400 320 L400 400 L0 400 Z" 
                  className="fill-forest-300 dark:fill-forest-600"
                />

                {/* Mike */}
                <g transform="translate(160, 180)">
                  {/* Head */}
                  <circle cx="50" cy="30" r="25" className="fill-amber-200" />
                  <circle cx="42" cy="28" r="3" className="fill-neutral-800" />
                  <circle cx="58" cy="28" r="3" className="fill-neutral-800" />
                  <path d="M42 40 Q50 48 58 40" className="stroke-neutral-800 stroke-2 fill-none" />
                  <path d="M30 20 Q50 10 70 20" className="fill-wood-600" />
                  
                  {/* Hat */}
                  <ellipse cx="50" cy="8" rx="28" ry="8" className="fill-wood-700" />
                  
                  {/* Body */}
                  <rect x="30" y="55" width="40" height="50" rx="5" className="fill-sky-DEFAULT" />
                  
                  {/* Waving arm */}
                  <g className="origin-[50px_55px] animate-wave">
                    <ellipse cx="85" cy="45" rx="12" ry="8" className="fill-sky-DEFAULT" />
                    <circle cx="95" cy="38" r="8" className="fill-amber-200" />
                  </g>
                  
                  {/* Other arm */}
                  <ellipse cx="15" cy="70" rx="12" ry="8" className="fill-sky-DEFAULT" />
                  <circle cx="5" cy="70" r="8" className="fill-amber-200" />
                  
                  {/* Legs */}
                  <rect x="33" y="105" width="14" height="35" rx="3" className="fill-sky-DEFAULT" />
                  <rect x="53" y="105" width="14" height="35" rx="3" className="fill-sky-DEFAULT" />
                  <ellipse cx="40" cy="145" rx="12" ry="6" className="fill-wood-700" />
                  <ellipse cx="60" cy="145" rx="12" ry="6" className="fill-wood-700" />
                </g>

                {/* Flowers */}
                <g className="animate-float [animation-delay:1s]">
                  <circle cx="50" cy="350" r="8" className="fill-pink-300" />
                  <circle cx="50" cy="350" r="4" className="fill-yellow-400" />
                </g>
                <g className="animate-float [animation-delay:2s]">
                  <circle cx="350" cy="340" r="6" className="fill-red-400" />
                  <circle cx="350" cy="340" r="3" className="fill-yellow-400" />
                </g>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="font-display text-xl text-primary">About</span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mt-2 mb-6">
              Just One Hardworking Guy
            </h2>
            <p className="text-xl font-semibold text-primary mb-4">
              No crew. No overhead. No runaround.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Just Mike showing up on time and getting the job done right. 
              Serving Adams County, Wisconsin neighbors since 2025.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
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
