'use client'

import { useState, useRef, useEffect } from 'react'

interface QuestionStepProps {
  onYes: () => void
}

export function QuestionStep({ onYes }: QuestionStepProps) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const noButtonRef = useRef<HTMLButtonElement>(null)

  const handleNoHover = () => {
    const button = noButtonRef.current
    if (!button) return

    // Get random position within viewport
    const randomX = (Math.random() - 0.5) * 200
    const randomY = (Math.random() - 0.5) * 200

    setNoPosition({ x: randomX, y: randomY })
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    // On mobile, add a small delay before moving (makes it feel more playful)
    // This gives a moment for the user to see the button before it "runs away"
    setTimeout(() => {
      handleNoHover()
    }, 150)
    
    // Prevent default to avoid any unwanted behaviors
    e.preventDefault()
  }

  return (
    <div className="relative z-10 text-center px-4 sm:px-6 max-w-md animate-fadeInUp">
      {/* Main question text */}
      <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-4 leading-tight text-balance">
        Will you be my Valentine? 💖
      </h1>

      {/* Subtext */}
      <p className="text-lg sm:text-xl text-foreground/80 mb-12 leading-relaxed">
        I promise smiles, hugs, and lots of love 😌
      </p>

      {/* Button container */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center min-h-20">
        {/* YES button */}
        <button
          onClick={onYes}
          className="relative px-8 py-4 sm:px-12 sm:py-5 bg-primary hover:bg-primary/90 text-primary-foreground text-lg sm:text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 animate-glow shadow-lg hover:shadow-2xl"
        >
          YES ❤️
        </button>

        {/* NO button - runs away on hover/touch */}
        <button
          ref={noButtonRef}
          onMouseEnter={handleNoHover}
          onTouchStart={handleTouchStart}
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
          }}
          className="px-8 py-4 sm:px-12 sm:py-5 bg-muted hover:bg-muted/80 text-muted-foreground text-lg sm:text-xl font-bold rounded-full transition-all duration-300 shadow-md"
        >
          NO 💔
        </button>
      </div>

      {/* Playful hint */}
      <p className="text-sm text-muted-foreground mt-8 italic">
        (the NO button is being shy 👉👈)
      </p>
    </div>
  )
}
