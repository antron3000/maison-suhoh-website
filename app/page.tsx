"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/loading-screen"
import TopBar from "@/components/top-bar"
import { useLanguage } from "@/lib/LanguageContext"
import { translations } from "@/lib/i18n"

const MARQUEE_ITEMS = [
  { src: "/images/lumiere-01.jpg", slug: "lumiere-launch",    title: "Lumière Launch" },
  { src: "/images/brand-01.jpg",   slug: "brand-story-cle",   title: "Brand Story — Clé" },
  { src: "/images/lumiere-02.jpg", slug: "lumiere-launch",    title: "Lumière Launch" },
  { src: "/images/brand-02.jpg",   slug: "brand-story-cle",   title: "Brand Story — Clé" },
  { src: "/images/lumiere-03.jpg", slug: "lumiere-launch",    title: "Lumière Launch" },
  { src: "/images/brand-03.jpg",   slug: "brand-story-cle",   title: "Brand Story — Clé" },
  { src: "/images/lumiere-04.jpg", slug: "lumiere-launch",    title: "Lumière Launch" },
  { src: "/images/brand-04.jpg",   slug: "brand-story-cle",   title: "Brand Story — Clé" },
  { src: "/images/lumiere-05.jpg", slug: "lumiere-launch",    title: "Lumière Launch" },
  { src: "/images/brand-05.jpg",   slug: "brand-story-cle",   title: "Brand Story — Clé" },
  { src: "/images/lumiere-06.jpg", slug: "lumiere-launch",    title: "Lumière Launch" },
  { src: "/images/brand-06.jpg",   slug: "brand-story-cle",   title: "Brand Story — Clé" },
  { src: "/images/lumiere-07.jpg", slug: "lumiere-launch",    title: "Lumière Launch" },
  { src: "/images/lumiere-08.jpg", slug: "lumiere-launch",    title: "Lumière Launch" },
  { src: "/images/lumiere-09.jpg", slug: "lumiere-launch",    title: "Lumière Launch" },
  { src: "/images/lumiere-10.jpg", slug: "lumiere-launch",    title: "Lumière Launch" },
]
const ITEMS = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

const FEATURED = [
  {
    slug: "noir-campaign",
    title: "Noir Campaign",
    services: ["Creative Direction", "Fashion Photography", "Art Direction"],
    category: "Editorial",
    year: "2026",
    image: "/images/photo-01.jpg",
  },
  {
    slug: "lumiere-launch",
    title: "Lumière Launch",
    services: ["Brand Strategy", "Art Direction", "Graphic Design"],
    category: "Campaign",
    year: "2025",
    image: "/images/photo-02.jpg",
  },
  {
    slug: "sequoia-dinner",
    title: "Séquoia Dinner",
    services: ["Creative Direction", "Campaign Design", "Photography"],
    category: "Campaign",
    year: "2025",
    image: "/images/photo-03.jpg",
  },
  {
    slug: "brand-story-cle",
    title: "Brand Story — Clé",
    services: ["Graphic Design", "Visual Storytelling", "Branding"],
    category: "Branding",
    year: "2024",
    image: "/images/photo-01.jpg",
  },
  {
    slug: "rooftop-activation",
    title: "Rooftop Activation",
    services: ["Creative Production", "Art Direction", "Photography"],
    category: "Activation",
    year: "2024",
    image: "/images/photo-02.jpg",
  },
]

// Corner registration marks
function Marks() {
  const pos = [
    "top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0",
    "top-1/2 -translate-y-1/2 left-0", "top-1/2 -translate-y-1/2 right-0",
    "top-0 left-1/2 -translate-x-1/2", "bottom-0 left-1/2 -translate-x-1/2",
  ]
  return (
    <>
      {pos.map((p, i) => (
        <span key={i} className={`absolute w-2.5 h-2.5 bg-foreground ${p}`} />
      ))}
    </>
  )
}

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [current, setCurrent] = useState(0)
  const { language } = useLanguage()
  const t = translations[language].home

  const project = FEATURED[current]
  const total = FEATURED.length

  if (loading) return <LoadingScreen onComplete={() => setLoading(false)} />

  return (
    <>
      <TopBar />
      <main className="pt-16">

        {/* ── SECTION 1: MARQUEE ── */}
        <section className="relative min-h-screen bg-background flex flex-col justify-center">
          <div
            className="w-full overflow-hidden flex flex-col gap-2"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 18%, black 82%, transparent 100%)',
            }}
          >
            {/* Row 1 — scrolls left */}
            <div className="flex gap-2 animate-marquee">
              {ITEMS.map((item, idx) => (
                <Link
                  key={idx}
                  href={`/work/${item.slug}`}
                  className="relative flex-shrink-0 overflow-hidden bg-muted group"
                  style={{ width: 160, height: 210 }}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </Link>
              ))}
            </div>

          </div>

          {/* Bottom right text */}
          <div className="absolute bottom-24 right-8 text-[10px] tracking-[0.05em] text-foreground text-right pointer-events-none">
            <p>MULTIDISCIPLINARY PRODUCTION</p>
            <p>COMPANY BASED IN TORONTO</p>
          </div>
        </section>

        {/* ── SECTION 2: FEATURED WORK ── */}
        <section className="min-h-screen bg-background flex items-center py-10 px-10">
          <div className="relative w-full max-w-7xl flex items-start gap-8">

            {/* Frame — left aligned, portrait */}
            <div className="relative border border-foreground/15 flex-shrink-0" style={{ width: "38vw", maxWidth: 520 }}>
              <Marks />

              {/* Top right label */}
              <div className="absolute top-3 right-6 text-[10px] tracking-[0.1em] text-foreground/60 text-right z-10">
                <p>FEATURED WORK</p>
                <p>{current + 1}–{total}</p>
              </div>

              {/* Image — natural portrait size, left inside frame */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.slug}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="p-6"
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="relative block group overflow-hidden"
                    style={{ aspectRatio: "3/4", width: "100%" }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Info — right side */}
            <AnimatePresence mode="wait">
              <motion.div
                key={project.slug + "-info"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col justify-between pt-4"
                style={{ minHeight: 300 }}
              >
                <div>
                  <p className="text-[11px] font-bold tracking-[0.05em] mb-3">{project.title}</p>
                  <div className="flex flex-col text-[10px] tracking-[0.04em] text-foreground/60 leading-relaxed mb-2">
                    {project.services.map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                  <p className="text-[10px] tracking-[0.05em] text-foreground/60 mt-1">{project.category}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.1em] text-foreground/50 mb-6">{project.year}</p>
                  <div className="flex gap-6 text-[10px] tracking-[0.15em]">
                    <button onClick={() => setCurrent((c) => (c === 0 ? total - 1 : c - 1))} className="opacity-40 hover:opacity-100 transition-opacity">←</button>
                    <button onClick={() => setCurrent((c) => (c === total - 1 ? 0 : c + 1))} className="opacity-40 hover:opacity-100 transition-opacity">→</button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="bg-background px-8 py-6 flex items-center justify-between">
          <p className="text-[10px] tracking-[0.1em] text-foreground/40">©2026 MAISON SUKOH</p>
          <p className="text-[10px] tracking-[0.1em] text-foreground/40">TORONTO, CA</p>
        </footer>

      </main>
    </>
  )
}
