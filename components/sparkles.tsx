'use client'

import { useEffect, useState } from 'react'

interface Sparkle {
  id: number
  left: number
  top: number
  delay: number
  duration: number
}

export function Sparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    // Generate sparkles in a burst pattern
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 0.5,
      duration: 1.5 + Math.random() * 0.5,
    }))
    setSparkles(newSparkles)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute text-2xl animate-sparkle"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        >
          ✨
        </div>
      ))}
    </div>
  )
}
