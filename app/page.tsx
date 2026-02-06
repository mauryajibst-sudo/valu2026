'use client'

import { useState } from 'react'
import { FloatingHearts } from '@/components/floating-hearts'
import { QuestionStep } from '@/components/question-step'
import { RevealStep } from '@/components/reveal-step'

export default function Page() {
  const [showReveal, setShowReveal] = useState(false)

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-background via-background to-secondary/30 flex items-center justify-center overflow-hidden relative">
      <FloatingHearts />

      {!showReveal ? (
        <QuestionStep onYes={() => setShowReveal(true)} />
      ) : (
        <RevealStep />
      )}
    </main>
  )
}
