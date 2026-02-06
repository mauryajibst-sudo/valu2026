'use client'

import { useEffect, useState } from 'react'

interface Heart {
  id: number
  left: number
  delay: number
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    // Generate floating hearts
    const initialHearts = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setHearts(initialHearts)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-primary/40 text-4xl animate-float"
          style={{
            left: `${heart.left}%`,
            top: '-50px',
            animationDelay: `${heart.delay}s`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  )
}
