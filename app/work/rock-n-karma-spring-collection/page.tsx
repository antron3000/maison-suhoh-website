"use client"

import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import TopBar from "@/components/top-bar"

const IMAGES = [
  "/images/rnk-01.jpg",
  "/images/rnk-02.jpg",
  "/images/rnk-03.jpg",
  "/images/rnk-04.jpg",
  "/images/rnk-05.jpg",
  "/images/rnk-06.jpg",
  "/images/rnk-07.jpg",
  "/images/rnk-08.jpg",
  "/images/rnk-09.jpg",
  "/images/rnk-10.jpg",
  "/images/rnk-11.jpg",
  "/images/rnk-12.jpg",
  "/images/rnk-13.jpg",
  "/images/rnk-14.jpg",
  "/images/rnk-15.jpg",
  "/images/rnk-16.jpg",
  "/images/rnk-17.jpg",
  "/images/rnk-18.jpg",
  "/images/rnk-19.jpg",
  "/images/rnk-20.jpg",
  "/images/rnk-21.jpg",
  "/images/rnk-22.jpg",
  "/images/rnk-23.jpg",
  "/images/rnk-24.jpg",
  "/images/rnk-25.jpg",
  "/images/rnk-26.jpg",
  "/images/rnk-27.jpg",
  "/images/rnk-28.jpg",
  "/images/rnk-29.jpg",
  "/images/rnk-30.jpg",
  "/images/rnk-31.jpg",
  "/images/rnk-32.jpg",
  "/images/rnk-33.jpg",
  "/images/rnk-34.jpg",
  "/images/rnk-35.jpg",
  "/images/rnk-36.jpg",
  "/images/rnk-37.jpg",
  "/images/rnk-38.jpg",
  "/images/rnk-39.jpg",
  "/images/rnk-40.jpg",
  "/images/rnk-41.jpg",
  "/images/rnk-42.jpg",
  "/images/rnk-43.jpg",
  "/images/rnk-44.jpg",
  "/images/rnk-45.jpg",
  "/images/rnk-46.jpg",
  "/images/rnk-47.jpg",
  "/images/rnk-48.jpg",
  "/images/rnk-49.jpg",
  "/images/rnk-50.jpg",
  "/images/rnk-51.jpg",
  "/images/rnk-52.jpg",
  "/images/rnk-53.jpg",
  "/images/rnk-54.jpg",
]

const VIDEOS = [
  { src: "/images/rnk-pink-video.mp4", label: "Pink" },
  { src: "/images/rnk-geo-print-video.mp4", label: "Geo Print" },
]

export default function RockNKarmaPage() {
  return (
    <>
      <TopBar />
      <main className="pt-20 pb-16 px-6 bg-background min-h-screen">

        {/* Header */}
        <div className="flex items-end justify-between mb-10 max-w-6xl mx-auto">
          <div>
            <p className="text-[10px] tracking-[0.1em] text-foreground/50 mb-1">008</p>
            <h1 className="text-2xl tracking-[-0.04em]">ROCK N&apos; KARMA SPRING COLLECTION</h1>
          </div>
          <div className="text-right text-[10px] tracking-[0.1em] text-foreground/50">
            <p>EDITORIAL</p>
            <p>PHOTOGRAPHY</p>
            <p className="mt-2">2026</p>
          </div>
        </div>

        {/* Video section */}
        <div className="max-w-6xl mx-auto mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {VIDEOS.map((v, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden bg-muted"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <video
                src={v.src}
                controls
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Image grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-2">
          {IMAGES.map((src, i) => (
            <motion.div
              key={i}
              className="relative aspect-[2/3] overflow-hidden bg-muted"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.03 }}
            >
              <Image
                src={src}
                alt={`Rock N' Karma Spring Collection ${i + 1}`}
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
