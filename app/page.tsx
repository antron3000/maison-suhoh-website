"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import LoadingScreen from "@/components/loading-screen"
import Footer from "@/components/footer"
import TopBar from "@/components/top-bar"
import { useLanguage } from "@/lib/LanguageContext"
import { translations } from "@/lib/i18n"

const MARQUEE_ITEMS = [
  { src: "/images/grwm-01.jpg",       slug: "grwm",                  title: "#GRWM" },
  { src: "/images/darkos-02.jpg",     slug: "darkos",                title: "Darkos" },
  { src: "/images/lumiere-03.jpg",    slug: "revival-in-ghana",      title: "Revival in Ghana" },
  { src: "/images/ftg-01.jpg",        slug: "for-the-geng-only",              title: "For The Geng Only" },
  { src: "/images/grwm-04.jpg",       slug: "grwm",                  title: "#GRWM" },
  { src: "/images/brand-01.jpg",      slug: "nora-pop-photography",  title: "Nora Pop Photography" },
  { src: "/images/darkos-03.jpg",     slug: "darkos",                title: "Darkos" },
  { src: "/images/lumiere-08.jpg",    slug: "revival-in-ghana",      title: "Revival in Ghana" },
  { src: "/images/ftg-03.jpg",        slug: "for-the-geng-only",              title: "For The Geng Only" },
  { src: "/images/grwm-07.jpg",       slug: "grwm",                  title: "#GRWM" },
  { src: "/images/brand-03.jpg",      slug: "nora-pop-photography",  title: "Nora Pop Photography" },
  { src: "/images/darkos-05.jpg",     slug: "darkos",                title: "Darkos" },
  { src: "/images/lumiere-05.jpg",    slug: "revival-in-ghana",      title: "Revival in Ghana" },
  { src: "/images/ftg-05.jpg",        slug: "for-the-geng-only",              title: "For The Geng Only" },
  { src: "/images/grwm-10.jpg",       slug: "grwm",                  title: "#GRWM" },
  { src: "/images/brand-05.jpg",      slug: "nora-pop-photography",  title: "Nora Pop Photography" },
  { src: "/images/lumiere-01.jpg",    slug: "revival-in-ghana",      title: "Revival in Ghana" },
  { src: "/images/darkos-02.jpg",     slug: "darkos",                title: "Darkos" },
  { src: "/images/ftg-02.jpg",        slug: "for-the-geng-only",              title: "For The Geng Only" },
  { src: "/images/grwm-05.jpg",       slug: "grwm",                  title: "#GRWM" },
]
const ITEMS = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

const FEATURED = [
  {
    slug: "revival-in-ghana",
    title: "Revival in Ghana",
    services: ["Brand Strategy", "Art Direction", "Graphic Design"],
    category: "Campaign",
    year: "2025",
    image: "/images/lumiere-08.jpg",
  },
  {
    slug: "for-the-geng-only",
    title: "For The Geng Only",
    services: ["Creative Direction", "Campaign Design", "Photography"],
    category: "Campaign",
    year: "2025",
    image: "/images/photo-03.jpg",
  },
  {
    slug: "nora-pop-photography",
    title: "Nora Pop Photography",
    services: ["Graphic Design", "Visual Storytelling", "Branding"],
    category: "Branding",
    year: "2024",
    image: "/images/photo-01.jpg",
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
  const [loading, setLoading] = useState(false)
  const { language } = useLanguage()
  const t = translations[language].home

  useEffect(() => {
    const visited = document.cookie.split("; ").find(row => row.startsWith("ms_visited="))
    if (!visited) {
      setLoading(true)
    }
  }, [])

  const handleLoadComplete = () => {
    document.cookie = "ms_visited=1; max-age=86400; path=/"
    setLoading(false)
  }

  if (loading) return <LoadingScreen onComplete={handleLoadComplete} />

  return (
    <>
      <TopBar />
      <main>

        {/* ── SECTION 1: MARQUEE ── */}
        <section className="relative bg-background flex flex-col items-center justify-center" style={{ height: "100vh" }}>
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
                  style={{ width: 193, height: 294 }}
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
          <div className="absolute bottom-6 right-8 text-[10px] tracking-[0.05em] text-foreground text-right pointer-events-none">
            <p>PRODUCTION BY THE PEOPLE</p>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <Footer />

      </main>
    </>
  )
}
