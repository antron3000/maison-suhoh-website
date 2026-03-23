"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [showLogo, setShowLogo] = useState(false)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => setShowLogo(true), 300)
          return 100
        }
        return prev + 2
      })
    }, 40)

    return () => clearInterval(progressInterval)
  }, [])

  useEffect(() => {
    if (showLogo) {
      setTimeout(() => {
        onComplete()
      }, 2000)
    }
  }, [showLogo, onComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 bg-background z-50 flex items-center justify-center"
      >
        {!showLogo ? (
          <div className="w-full max-w-md px-8">
            <div className="h-px bg-border relative overflow-hidden mb-4">
              <motion.div
                className="absolute inset-y-0 left-0 bg-foreground"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <p className="text-xs tracking-[0.2em] mt-4 text-center text-foreground/60">
              {progress}%
            </p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-light tracking-[0.3em]">
              MAISON SUKOH
            </h1>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
