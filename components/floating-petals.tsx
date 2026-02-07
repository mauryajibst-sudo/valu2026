'use client'

import { useEffect, useState } from 'react'

interface Petal {
  id: number
  left: number
  delay: number
  duration: number
  size: number
}

export function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    // Generate floating rose petals
    const initialPetals = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 2,
      size: 20 + Math.random() * 15,
    }))
    setPetals(initialPetals)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute text-primary/30 animate-floatDownSlow"
          style={{
            left: `${petal.left}%`,
            top: '-30px',
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            fontSize: `${petal.size}px`,
          }}
        >
          🌹
        </div>
      ))}
    </div>
  )
}
