'use client'

import { useState } from 'react'

interface ChocolateInteractionStepProps {
  onChocolateClick: () => void
}

export function ChocolateInteractionStep({ onChocolateClick }: ChocolateInteractionStepProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative z-10 text-center px-4 sm:px-6 max-w-md animate-fadeInUp">
      {/* Main heading */}
      <h1 className="text-5xl sm:text-6xl font-bold text-primary mb-4 leading-tight text-balance">
        Happy Chocolate Day, My Love 🍫
      </h1>

      {/* Subtext */}
      <p className="text-lg sm:text-xl text-foreground/80 mb-12 leading-relaxed">
        A little sweetness, just for you.
      </p>

      {/* Chocolate - clickable */}
      <div className="mb-8 flex justify-center">
        <div
          onClick={onChocolateClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="cursor-pointer transition-all duration-300 transform active:scale-95"
          style={{
            transform: isHovered ? 'scale(1.15) translateY(-8px)' : 'scale(1)',
            filter: isHovered ? 'drop-shadow(0 15px 25px rgba(139, 69, 19, 0.5))' : 'drop-shadow(0 5px 15px rgba(139, 69, 19, 0.3))',
          }}
        >
          {/* Chocolate box/bar image */}
          <img 
            src="/choco.webp" 
            alt="Chocolate" 
            className="w-48 h-48 sm:w-64 sm:h-64 object-contain animate-float"
          />
        </div>
      </div>

      {/* Instruction text */}
      <p className="text-base sm:text-lg text-foreground/70 mb-8 animate-pulse">
        Tap the chocolate 🍫
      </p>
    </div>
  )
}
