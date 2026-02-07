'use client'

import { useState } from 'react'
import { FloatingHearts } from '@/components/floating-hearts'
import { FloatingPetals } from '@/components/floating-petals'
import { Sparkles } from '@/components/sparkles'
import { RoseInteractionStep } from '@/components/rose-interaction-step'
import { RoseRevealStep } from '@/components/rose-reveal-step'

export default function Page() {
  const [showReveal, setShowReveal] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleRosesClick = () => {
    setIsTransitioning(true)
    // Small delay for fade effect
    setTimeout(() => {
      setShowReveal(true)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-background via-background to-secondary/30 flex items-center justify-center overflow-hidden relative">
      {/* Background animations */}
      <FloatingHearts />
      <FloatingPetals />
      <Sparkles />

      <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
        {!showReveal ? (
          <RoseInteractionStep onRosesClick={handleRosesClick} />
        ) : (
          <RoseRevealStep />
        )}
      </div>
    </main>
  )
}
