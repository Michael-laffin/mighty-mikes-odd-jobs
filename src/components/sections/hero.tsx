'use client'

import { Button } from '@/components/ui/button'
import { Phone, MessageSquare } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob absolute w-[600px] h-[600px] -top-48 -right-48 bg-gradient-to-br from-forest-400 to-sky-light animate-blob-float" />
        <div className="blob absolute w-[500px] h-[500px] -bottom-32 -left-32 bg-gradient-to-br from-earth to-wood-300 animate-blob-float [animation-delay:-7s]" />
        <div className="blob absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-pink-200 to-yellow-200 dark:from-pink-300/30 dark:to-yellow-300/30 animate-blob-float [animation-delay:-14s]" />
      </div>

      {/* Floating decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <span className="absolute text-2xl top-[15%] left-[10%] animate-float [animation-delay:0s]">🍃</span>
        <span className="absolute text-2xl top-[25%] right-[15%] animate-float [animation-delay:-2s]">🌸</span>
        <span className="absolute text-2xl top-[60%] left-[5%] animate-float [animation-delay:-4s]">🌷</span>
        <span className="absolute text-2xl top-[70%] right-[10%] animate-float [animation-delay:-6s]">🐝</span>
        <span className="absolute text-2xl top-[40%] right-[5%] animate-float [animation-delay:-8s]">🍂</span>
        <span className="absolute text-2xl top-[85%] left-[20%] animate-float [animation-delay:-10s]">🌻</span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Wooden Sign */}
        <div className="relative inline-block mb-8 animate-sign-swing">
          {/* Ropes */}
          <svg className="w-32 h-12 mx-auto mb-0" viewBox="0 0 100 40">
            <path 
              d="M20 0 Q30 20 50 25 Q70 20 80 0" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3"
              className="text-wood-600"
            />
          </svg>
          
          {/* Sign board */}
          <div className="relative bg-gradient-to-b from-wood-300 via-wood-500 to-wood-700 px-8 py-6 rounded-xl shadow-2xl">
            <div className="absolute inset-0 wood-texture rounded-xl" />
            <h1 className="relative font-display text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-lg leading-tight">
              <span className="block">Mighty Mike&apos;s</span>
              <span className="block">Odd Jobs</span>
            </h1>
          </div>
        </div>

        {/* Tagline */}
        <p className="font-heading text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-8 italic">
          One Guy. <span className="text-primary">Mighty Results.</span>
        </p>

        {/* Mike Character SVG */}
        <div className="relative w-48 h-64 mx-auto mb-8 group cursor-pointer">
          <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-xl group-hover:scale-105 transition-transform">
            {/* Hat */}
            <ellipse cx="100" cy="35" rx="35" ry="12" className="fill-wood-700" />
            <rect x="75" y="20" width="50" height="20" rx="5" className="fill-wood-600" />
            
            {/* Head */}
            <circle cx="100" cy="60" r="28" className="fill-amber-200" />
            <path d="M75 50 Q80 40 100 38 Q120 40 125 50" className="fill-wood-600" />
            
            {/* Face */}
            <circle cx="90" cy="58" r="4" className="fill-neutral-800" />
            <circle cx="110" cy="58" r="4" className="fill-neutral-800" />
            <path d="M90 72 Q100 82 110 72" className="stroke-neutral-800 stroke-[2.5] fill-none" strokeLinecap="round" />
            <circle cx="80" cy="68" r="6" className="fill-pink-300 opacity-50" />
            <circle cx="120" cy="68" r="6" className="fill-pink-300 opacity-50" />
            
            {/* Body */}
            <rect x="70" y="88" width="60" height="80" rx="8" className="fill-sky-DEFAULT" />
            <rect x="72" y="85" width="12" height="25" className="fill-sky-dark" />
            <rect x="116" y="85" width="12" height="25" className="fill-sky-dark" />
            <rect x="85" y="110" width="30" height="20" rx="3" className="fill-sky-dark" />
            <path d="M85 88 L100 98 L115 88" className="stroke-white stroke-[3] fill-none" />
            
            {/* Arms */}
            <rect x="45" y="95" width="25" height="14" rx="7" className="fill-sky-DEFAULT" />
            <rect x="130" y="95" width="25" height="14" rx="7" className="fill-sky-DEFAULT" />
            <circle cx="45" cy="102" r="10" className="fill-amber-200" />
            <circle cx="155" cy="102" r="10" className="fill-amber-200" />
            
            {/* Legs */}
            <rect x="75" y="168" width="20" height="45" rx="5" className="fill-sky-DEFAULT" />
            <rect x="105" y="168" width="20" height="45" rx="5" className="fill-sky-DEFAULT" />
            <ellipse cx="85" cy="220" rx="18" ry="10" className="fill-wood-700" />
            <ellipse cx="115" cy="220" rx="18" ry="10" className="fill-wood-700" />
            
            {/* Rake */}
            <rect x="160" y="50" width="8" height="170" rx="4" className="fill-wood-500" />
            <rect x="145" y="210" width="40" height="12" rx="3" className="fill-neutral-500" />
          </svg>

          {/* Speech bubble on hover */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-card px-4 py-2 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-border">
            <p className="font-medium">Hi there! 👋</p>
            <p className="text-sm text-muted-foreground">Need a hand with yard work?</p>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-r border-b border-border transform rotate-45" />
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="xl" asChild>
            <a href="tel:608-403-2930" className="gap-3">
              <Phone className="w-5 h-5" />
              <span className="flex flex-col items-start">
                <span className="text-sm opacity-80">Call Mike Now</span>
                <span className="font-bold">608-403-2930</span>
              </span>
            </a>
          </Button>
          <Button size="xl" variant="wood" asChild>
            <a href="sms:608-403-2930" className="gap-2">
              <MessageSquare className="w-5 h-5" />
              Text Mike
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-0.5 h-10 bg-gradient-to-b from-primary to-transparent" />
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
      </div>
    </section>
  )
}
