"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import TopBar from "@/components/top-bar"

const IMAGES = [
  "/images/lumiere-01.jpg",
  "/images/lumiere-02.jpg",
  "/images/lumiere-03.jpg",
  "/images/lumiere-04.jpg",
  "/images/lumiere-05.jpg",
  "/images/lumiere-06.jpg",
  "/images/lumiere-07.jpg",
  "/images/lumiere-08.jpg",
  "/images/lumiere-09.jpg",
  "/images/lumiere-10.jpg",
]

export default function LumiereLaunchPage() {
  return (
    <>
      <TopBar />
      <main className="pt-20 pb-16 px-6 bg-background min-h-screen">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 max-w-6xl mx-auto">
          <div>
            <p className="text-[10px] tracking-[0.1em] text-foreground/50 mb-1">002</p>
            <h1 className="text-2xl tracking-[-0.04em]">LUMIÈRE LAUNCH</h1>
          </div>
          <div className="text-right text-[10px] tracking-[0.1em] text-foreground/50">
            <p>ART DIRECTION</p>
            <p>BRAND STRATEGY</p>
            <p>PHOTOGRAPHY</p>
            <p className="mt-2">2025</p>
          </div>
        </div>

        {/* Image grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-2">
          {IMAGES.map((src, i) => (
            <motion.div
              key={i}
              className="relative aspect-[2/3] overflow-hidden bg-muted"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Image
                src={src}
                alt={`Lumière Launch ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority={i < 3}
              />
            </motion.div>
          ))}
        </div>

        {/* Back link */}
        <div className="max-w-6xl mx-auto mt-10">
          <Link href="/work" className="text-[10px] tracking-[0.1em] text-foreground/50 hover:text-foreground transition-colors">
            ← BACK TO PROJECTS
          </Link>
        </div>

      </main>
    </>
  )
}
