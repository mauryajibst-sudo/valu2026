'use client'

import { useEffect, useState } from 'react'

interface Heart {
  id: number
  left: number
  delay: number
  duration: number
  emoji: string
  size: number
}

const heartEmojis = ['❤️', '💕', '💖', '💗', '💓', '💝', '🌹']

export function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([])

  useEffect(() => {
    // Generate floating hearts with variety
    const initialHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
      size: 24 + Math.random() * 16,
    }))
    setHearts(initialHearts)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute text-primary/35 animate-floatDown"
          style={{
            left: `${heart.left}%`,
            top: '-50px',
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          {heart.emoji}
        </div>
      ))}
    </div>
  )
}
