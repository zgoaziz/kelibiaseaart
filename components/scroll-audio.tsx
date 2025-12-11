"use client"

import { useEffect } from "react"

export function ScrollAudio() {
  useEffect(() => {
    let lastScrollTime = 0
    const scrollDebounce = 100 // milliseconds

    const handleScroll = () => {
      const now = Date.now()
      if (now - lastScrollTime >= scrollDebounce) {
        // Play beach waves sound effect (very subtle)
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()

        // Create a soft wave sound using oscillator
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        // Soft, low frequency wave
        oscillator.frequency.value = 40 + Math.random() * 20
        oscillator.type = "sine"

        // Very quiet (0.01 volume)
        gainNode.gain.setValueAtTime(0.01, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.2)

        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.2)

        lastScrollTime = now
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return null
}
