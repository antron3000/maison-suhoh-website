"use client"

import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import TopBar from "@/components/top-bar"

const IMAGES = [
  "/images/grwm-01.jpg",
  "/images/grwm-02.jpg",
  "/images/grwm-04.jpg",
  "/images/grwm-05.jpg",
  "/images/grwm-06.jpg",
  "/images/grwm-07.jpg",
  "/images/grwm-08.jpg",
  "/images/grwm-09.jpg",
  "/images/grwm-10.jpg",
]

export default function GRWMPage() {
  return (
    <>
      <TopBar />
      <main className="pt-20 pb-16 px-6 bg-background min-h-screen">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 max-w-6xl mx-auto">
          <div>
            <p className="text-[10px] tracking-[0.1em] text-foreground/50 mb-1">003</p>
            <h1 className="text-2xl tracking-[-0.04em]">#GRWM</h1>
          </div>
          <div className="text-right text-[10px] tracking-[0.1em] text-foreground/50">
            <p>FASHION PHOTOGRAPHY</p>
            <p>CREATIVE DIRECTION</p>
            <p>EDITORIAL</p>
            <p className="mt-2">2026</p>
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
                alt={`#GRWM ${i + 1}`}
                fill
                quality={100}
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority={i < 3}
              />
            </motion.div>
          ))}
        </div>

        {/* Back link */}
        <div className="max-w-6xl mx-auto mt-12">
          <Link href="/work" className="text-[10px] tracking-[0.15em] text-foreground/50 hover:text-foreground transition-colors">
            ← ALL PROJECTS
          </Link>
        </div>

      </main>
      <Footer />
    </>
  )
}
