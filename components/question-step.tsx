'use client'

import { useState, useRef } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface QuestionStepProps {
  onYes: () => void
}

const dialogMessages = [
  "Just a tiny yes… I'll treasure it forever 💖",
  "I'll bring snacks, smiles, and hugs 🥰🍫",
  "I pinky promise lots of happiness 🤞💗",
  "My heart already hopes you'll say yes 🥹❤️"
]

export function QuestionStep({ onYes }: QuestionStepProps) {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 })
  const [showAreYouSure, setShowAreYouSure] = useState(false)
  const [buttonSizes, setButtonSizes] = useState({ yes: 1, no: 1 })
  const [clickCount, setClickCount] = useState(0)
  const [currentDialogMessageIndex, setCurrentDialogMessageIndex] = useState(0)
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

  const handleNoClick = () => {
    // Increment click count
    const newClickCount = clickCount + 1
    setClickCount(newClickCount)
    
    // Cycle through dialog messages
    setCurrentDialogMessageIndex((prevIndex) => (prevIndex + 1) % dialogMessages.length)
    
    // Show cute message in popup
    setShowAreYouSure(true)
    
    // Make YES bigger and NO smaller with each click (accumulating effect)
    // YES grows by 0.15x each time, NO shrinks by 0.1x each time
    // Cap at reasonable sizes (YES max 2x, NO min 0.3x)
    const newYesSize = Math.min(1 + (newClickCount * 0.15), 2)
    const newNoSize = Math.max(1 - (newClickCount * 0.1), 0.3)
    
    setButtonSizes({ yes: newYesSize, no: newNoSize })
    
    // Auto-close popup after 2 seconds
    setTimeout(() => {
      setShowAreYouSure(false)
    }, 2000)
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

      {/* Popup Dialog for "Are you sure?" message */}
      <Dialog open={showAreYouSure} onOpenChange={setShowAreYouSure}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader>
            <DialogTitle className="text-3xl sm:text-4xl font-bold text-primary">
              Are you sure? 🥺💔
            </DialogTitle>
            <DialogDescription 
              key={currentDialogMessageIndex}
              className="text-lg sm:text-xl text-foreground/80 mt-4 animate-fadeInUp"
            >
              {dialogMessages[currentDialogMessageIndex]}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Button container */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center min-h-20">
        {/* YES button */}
        <button
          onClick={onYes}
          style={{
            transform: `scale(${buttonSizes.yes})`,
          }}
          className="relative px-8 py-4 sm:px-12 sm:py-5 bg-primary hover:bg-primary/90 text-primary-foreground text-lg sm:text-xl font-bold rounded-full transition-all duration-500 transform hover:scale-105 animate-glow shadow-lg hover:shadow-2xl"
        >
          YES ❤️
        </button>

        {/* NO button - runs away on hover/touch, disappears after 5 clicks */}
        {clickCount < 5 && (
          <button
            ref={noButtonRef}
            onMouseEnter={handleNoHover}
            onClick={handleNoClick}
            onTouchStart={handleTouchStart}
            style={{
              transform: `translate(${noPosition.x}px, ${noPosition.y}px) scale(${buttonSizes.no})`,
            }}
            className="px-8 py-4 sm:px-12 sm:py-5 bg-muted hover:bg-muted/80 text-muted-foreground text-lg sm:text-xl font-bold rounded-full transition-all duration-500 shadow-md"
          >
            NO 💔
          </button>
        )}
      </div>

      {/* Playful hint */}
      <p className="text-sm text-muted-foreground mt-8 italic">
        {clickCount >= 5 ? '(You can only say YES now! 😊❤️)' : '(the NO button is being shy 👉👈)'}
      </p>
    </div>
  )
}
