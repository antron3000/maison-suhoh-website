"use client"

import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import TopBar from "@/components/top-bar"

const IMAGES = [
  "/images/brand-01.jpg",
  "/images/brand-02.jpg",
  "/images/brand-03.jpg",
  "/images/brand-04.jpg",
  "/images/brand-05.jpg",
  "/images/brand-06.jpg",
]

export default function BrandStoryClePage() {
  return (
    <>
      <TopBar />
      <main className="pt-20 pb-16 px-6 bg-background min-h-screen">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 max-w-6xl mx-auto">
          <div>
            <p className="text-[10px] tracking-[0.1em] text-foreground/50 mb-1">004</p>
            <h1 className="text-2xl tracking-[-0.04em]">NORA POP PHOTOGRAPHY</h1>
          </div>
          <div className="text-right text-[10px] tracking-[0.1em] text-foreground/50">
            <p>GRAPHIC DESIGN</p>
            <p>VISUAL STORYTELLING</p>
            <p>BRANDING</p>
            <p className="mt-2">2024</p>
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
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Image
                src={src}
                alt={`Nora Pop Photography ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority={i < 2}
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
      <Footer />
    </>
  )
}
