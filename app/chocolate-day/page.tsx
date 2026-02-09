'use client'

import { useState } from 'react'
import { FloatingHearts } from '@/components/floating-hearts'
import { ChocolateInteractionStep } from '@/components/chocolate-interaction-step'
import { ChocolateRevealStep } from '@/components/chocolate-reveal-step'

export default function ChocolateDayPage() {
  const [showReveal, setShowReveal] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleChocolateClick = () => {
    setIsTransitioning(true)
    // Small delay for fade effect
    setTimeout(() => {
      setShowReveal(true)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-pink-100 via-rose-200 to-amber-100 flex items-center justify-center overflow-hidden relative">
      {/* Background animations */}
      <FloatingHearts />

      {/* Floating chocolate icons */}
      <div className="absolute top-20 left-10 text-2xl animate-float" style={{ animationDelay: '0s' }}>
        🍫
      </div>
      <div className="absolute top-40 right-16 text-xl animate-float" style={{ animationDelay: '1s' }}>
        🍫
      </div>
      <div className="absolute bottom-32 left-16 text-xl animate-float" style={{ animationDelay: '2s' }}>
        🍫
      </div>
      <div className="absolute bottom-20 right-10 text-2xl animate-float" style={{ animationDelay: '1.5s' }}>
        🍫
      </div>

      <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {!showReveal ? (
          <ChocolateInteractionStep onChocolateClick={handleChocolateClick} />
        ) : (
          <ChocolateRevealStep />
        )}
      </div>
    </main>
  )
}
