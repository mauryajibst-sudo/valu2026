'use client'

import { useEffect, useState } from 'react'

export function RoseRevealStep() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Fade in content after a brief delay
    const timer = setTimeout(() => setShowContent(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl animate-fadeInUp">
      {/* Main text */}
      <div className={`mb-6 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-4xl sm:text-5xl font-bold text-primary mb-4 leading-tight text-balance animate-scaleIn">
          These Roses are for my Flower ❤️
        </h3>
      </div>

      {/* Subtext */}
      <div className={`mb-8 transition-opacity duration-500 delay-200 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-xl sm:text-2xl text-foreground/80 mb-4 leading-relaxed">
          You make my world bloom just by being in it.
        </p>
        <p className="text-base sm:text-lg text-foreground/60 leading-relaxed italic">
          Every day with you feels beautiful.
        </p>
      </div>

      {/* Rose animation/GIF */}
      <div className={`mb-8 flex justify-center transition-opacity duration-500 delay-300 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {/* Alternative: Use GIF if available */}
        <img 
          src="/rose-animation.gif" 
          alt="Romantic rose" 
          className="w-32 h-32 sm:w-48 sm:h-48 object-contain"
        />
      </div>

      {/* Optional photo section */}
      <div className={`mb-8 flex flex-col items-center gap-3 transition-opacity duration-500 delay-400 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-3xl overflow-hidden shadow-lg">
          <img 
            src="/RoseDay.jpg" 
            alt="My favorite person"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Hide image container if image fails to load
              e.currentTarget.parentElement?.parentElement?.classList.add('hidden')
            }}
          />
        </div>
        <p className="text-sm sm:text-base text-foreground/60 font-light">
          My favorite person 🤍
        </p>
      </div>

      {/* Footer */}
      <div className={`transition-opacity duration-500 delay-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-sm text-foreground/50 italic">
          More love coming tomorrow 💌
        </p>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-4 text-3xl animate-float" style={{ animationDelay: '0s' }}>
        🌹
      </div>
      <div className="absolute top-20 right-8 text-2xl animate-float" style={{ animationDelay: '0.5s' }}>
        ❤️
      </div>
      <div className="absolute bottom-20 left-8 text-2xl animate-float" style={{ animationDelay: '1s' }}>
        🌹
      </div>
      <div className="absolute bottom-10 right-4 text-3xl animate-float" style={{ animationDelay: '1.5s' }}>
        💕
      </div>
    </div>
  )
}
