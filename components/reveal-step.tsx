'use client'

import { useEffect, useState } from 'react'
import { Sparkles } from '@/components/sparkles'

const messages = [
  "Because moments with you mean everything to me ✨❤️",
  "You make even the simplest days feel special 💕",
  "Every smile of yours is my favorite reward 😊💖",
  "I'll bring snacks, smiles, and hugs 🥰🍫",
  "This yes comes with unlimited cuddles 🤗💞"
]

export function RevealStep() {
  const [showSparkles, setShowSparkles] = useState(true)
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

  useEffect(() => {
    // Auto-hide sparkles after animation completes
    const timer = setTimeout(() => setShowSparkles(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Change message every 3 seconds
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
    }, 3000)

    return () => clearInterval(messageInterval)
  }, [])

  useEffect(() => {
    // Load Tenor embed script if not already loaded
    if (typeof window !== 'undefined') {
      const existingScript = document.querySelector('script[src="https://tenor.com/embed.js"]')
      if (!existingScript) {
        const script = document.createElement('script')
        script.src = 'https://tenor.com/embed.js'
        script.async = true
        document.body.appendChild(script)
      }
    }
  }, [])

  return (
    <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl animate-fadeInUp">
      {/* Sparkles animation */}
      {showSparkles && <Sparkles />}

      {/* Celebration text */}
      <div className="mb-8">
        <h2 className="text-6xl sm:text-7xl font-bold text-primary mb-6 animate-scaleIn">
         Congratulations Yayyy! 💕
        </h2>
      </div>

      {/* Main message */}
      <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
        Happy Valentine&apos;s Week❤️
      </h1>

      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 leading-tight text-balance">
      🎀🫶🏻💌 To My Valentine 💌🫶🏻🎀
      </h3>

      {/* Dynamic sweet message */}
      <p 
        key={currentMessageIndex}
        className="text-xl sm:text-2xl text-foreground/80 mb-4 leading-relaxed animate-fadeInUp min-h-[3rem] flex items-center justify-center"
      >
        {messages[currentMessageIndex]}
      </p>

      {/* Loving line */}
      <p className="text-sm sm:text-base text-foreground/60 mb-8 leading-relaxed italic">
        For me, every day with you feels like Valentine&apos;s 😘💐🫶🏻🥹❤️‍🩹
      </p>

      {/* Photo section */}
      <div className="mb-10 flex flex-col items-center gap-3">
        <div className="relative flex items-center justify-center gap-2 sm:gap-4">
        
          
          {/* Photo box */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-lg">
            <img 
              src="/couple-photo.jpg" 
              alt="Us together"
              className="w-full h-full object-cover"
            />
          </div>
          
         
        </div>
        <p className="text-sm text-foreground/60 font-light">More Suprises Coming Soon !!!! ❤️</p>
        <p className="text-sm sm:text-base text-foreground/60 mb-8 leading-relaxed italic">
        Stay Tuned for more surprises 💕
      </p>
      </div>

      {/* Decorative hearts around the edges */}
      <div className="absolute top-10 left-4 text-4xl animate-float" style={{ animationDelay: '0s' }}>
        ❤️
      </div>
      <div className="absolute top-20 right-8 text-3xl animate-float" style={{ animationDelay: '0.5s' }}>
        💕
      </div>
      <div className="absolute bottom-20 left-8 text-3xl animate-float" style={{ animationDelay: '1s' }}>
        💖
      </div>
      <div className="absolute bottom-10 right-4 text-4xl animate-float" style={{ animationDelay: '1.5s' }}>
        ❤️
      </div>
    </div>
  )
}
