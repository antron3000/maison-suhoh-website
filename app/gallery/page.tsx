"use client"

import Footer from "@/components/footer"
import { useState, useMemo, useRef, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import TopBar from "@/components/top-bar"
import { PageTransition } from "@/components/PageTransition"

// Fisher-Yates shuffle (returns new array)
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// Tag → project title mapping
const TAG_FILTER: Record<string, string[]> = {
  "ALL": [],
  "EDITORIAL": ["Noir Campaign", "Revival in Ghana", "#GRWM"],
  "CAMPAIGN": ["Revival in Ghana", "Nora Pop Photography"],
  "FASHION PHOTOGRAPHY": ["Noir Campaign", "For The Geng Only", "#GRWM"],
  "FILM": ["For The Geng Only"],
  "EVENTS": ["Ghana Food Movement", "For The Geng Only", "#GRWM"],
  "CREATIVE DIRECTION": ["Noir Campaign", "For The Geng Only", "Nora Pop Photography", "#GRWM"],
  "BRAND": ["Nora Pop Photography"],
  "SS26": ["Revival in Ghana", "#GRWM"],
  "FW26": ["Noir Campaign"],
}

const PROJECTS = [
  {
    id: "00",
    title: "#GRWM",
    images: [
      { src: "/images/grwm-01.jpg", w: 120, h: 120 },
      { src: "/images/grwm-02.jpg", w: 90,  h: 120 },

      { src: "/images/grwm-04.jpg", w: 100, h: 120 },
      { src: "/images/grwm-05.jpg", w: 90,  h: 120 },
      { src: "/images/grwm-06.jpg", w: 130, h: 120 },
      { src: "/images/grwm-07.jpg", w: 90,  h: 120 },
      { src: "/images/grwm-08.jpg", w: 90,  h: 120 },
      { src: "/images/grwm-09.jpg", w: 90,  h: 120 },
      { src: "/images/grwm-10.jpg", w: 90,  h: 120 },
    ],
  },
  {
    id: "01",
    title: "Noir Campaign",
    images: [
      { src: "/images/photo-01.jpg", w: 180, h: 120 },
      { src: "/images/photo-02.jpg", w: 90,  h: 120 },
      { src: "/images/photo-03.jpg", w: 140, h: 120 },
      { src: "/images/photo-01.jpg", w: 100, h: 120 },
      { src: "/images/photo-02.jpg", w: 160, h: 120 },
      { src: "/images/photo-03.jpg", w: 80,  h: 120 },
      { src: "/images/photo-01.jpg", w: 120, h: 120 },
      { src: "/images/photo-02.jpg", w: 150, h: 120 },
      { src: "/images/photo-03.jpg", w: 90,  h: 120 },
    ],
  },
  {
    id: "02",
    title: "Revival in Ghana",
    images: [
      { src: "/images/lumiere-01.jpg", w: 100, h: 130 },
      { src: "/images/lumiere-02.jpg", w: 100, h: 130 },
      { src: "/images/lumiere-03.jpg", w: 160, h: 130 },
      { src: "/images/lumiere-04.jpg", w: 160, h: 130 },
      { src: "/images/lumiere-05.jpg", w: 100, h: 130 },
      { src: "/images/lumiere-06.jpg", w: 100, h: 130 },
      { src: "/images/lumiere-07.jpg", w: 140, h: 130 },
      { src: "/images/lumiere-08.jpg", w: 100, h: 130 },
      { src: "/images/lumiere-09.jpg", w: 100, h: 130 },
      { src: "/images/lumiere-10.jpg", w: 140, h: 130 },
    ],
  },
  {
    id: "03",
    title: "For The Geng Only",
    images: [
      { src: "/images/photo-03.jpg", w: 130, h: 115 },
      { src: "/images/photo-01.jpg", w: 80,  h: 115 },
      { src: "/images/photo-02.jpg", w: 190, h: 115 },
      { src: "/images/photo-03.jpg", w: 100, h: 115 },
      { src: "/images/photo-01.jpg", w: 150, h: 115 },
      { src: "/images/photo-02.jpg", w: 90,  h: 115 },
      { src: "/images/photo-03.jpg", w: 170, h: 115 },
      { src: "/images/photo-01.jpg", w: 110, h: 115 },
    ],
  },
  {
    id: "04",
    title: "Nora Pop Photography",
    images: [
      { src: "/images/brand-01.jpg", w: 160, h: 125 },
      { src: "/images/brand-02.jpg", w: 100, h: 125 },
      { src: "/images/brand-03.jpg", w: 140, h: 125 },
      { src: "/images/brand-04.jpg", w: 90,  h: 125 },
      { src: "/images/brand-05.jpg", w: 180, h: 125 },
      { src: "/images/brand-06.jpg", w: 120, h: 125 },
    ],
  },
]

// All images flattened for View 2 & 3
const ALL_IMAGES = PROJECTS.flatMap(p => p.images.map(img => ({ ...img, project: p.title })))

// Scattered positions for View 2
const SCATTERED = [
  { x: 60,  y: 80,  w: 220, h: 160 },
  { x: 310, y: 60,  w: 280, h: 200 },
  { x: 620, y: 90,  w: 180, h: 140 },
  { x: 100, y: 320, w: 240, h: 170 },
  { x: 380, y: 310, w: 200, h: 155 },
  { x: 30,  y: 560, w: 180, h: 140 },
  { x: 260, y: 530, w: 260, h: 180 },
  { x: 560, y: 290, w: 220, h: 165 },
  { x: 700, y: 480, w: 190, h: 150 },
]

type ViewMode = "view1" | "view2" | "view3"

// ── VIEW 1: Horizontal strips per project ──
// ── Fisheye film strip row ──
// Continuous cursor-X tracking with Gaussian falloff → smooth rolling wave
const FISHEYE_SIGMA = 120   // px — spread of the lens bulge
const FISHEYE_PEAK = 1.38   // max scale at cursor centre

function gaussianW(distPx: number): number {
  return 1 + (FISHEYE_PEAK - 1) * Math.exp(-0.5 * (distPx / FISHEYE_SIGMA) ** 2)
}

function FilmStripRow({ project }: { project: typeof PROJECTS[number] }) {
  const [cursorX, setCursorX] = useState<number | null>(null)
  const imgRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    setCursorX(e.clientX)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setCursorX(null)
  }, [])

  return (
    <div className="relative py-5">
      <div className="flex items-end">
        <span className="flex-shrink-0 text-[10px] tracking-[0.18em] text-foreground/30 w-12 pl-8 select-none pb-1">
          {project.id}
        </span>
        <div
          className="flex items-end gap-[4px] overflow-x-auto pr-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          {project.images.map((img, i) => {
            // Compute dist from cursor to this image's centre in real time
            let scale = 1
            let opacity = 1
            if (cursorX !== null && imgRefs.current[i]) {
              const rect = imgRefs.current[i]!.getBoundingClientRect()
              const cx = rect.left + rect.width / 2
              const dist = Math.abs(cursorX - cx)
              scale = gaussianW(dist)
              // Opacity: full at centre, gentle fade outward
              opacity = 0.35 + 0.65 * Math.exp(-0.5 * (dist / (FISHEYE_SIGMA * 1.8)) ** 2)
            }

            return (
              <motion.div
                key={i}
                ref={el => { imgRefs.current[i] = el }}
                className="flex-shrink-0 relative overflow-hidden bg-muted cursor-pointer"
                animate={{
                  width: img.w * scale,
                  height: img.h * scale,
                  opacity,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 32, mass: 0.6 }}
              >
                <Image
                  src={img.src}
                  alt={`${project.title} ${i + 1}`}
                  fill
                  quality={100}
                  className="object-cover"
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function View1({ filteredProjects }: { filteredProjects: typeof PROJECTS }) {
  return (
    <div className="pb-32 bg-background min-h-screen">
      {filteredProjects.map((project) => (
        <FilmStripRow key={project.id} project={project} />
      ))}
    </div>
  )
}

// ── VIEW 2: BOWTE editorial scroll layout ──
function HeroImage({ src }: { src: string }) {
  return (
    <div className="flex justify-end">
      <motion.div
        className="relative overflow-hidden bg-muted w-[55%]"
        style={{ aspectRatio: "4/5" }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image src={src} alt="" fill quality={100} className="object-cover" />
      </motion.div>
    </div>
  )
}

function View2({ filteredImages }: { filteredImages: typeof ALL_IMAGES }) {
  const imgs = filteredImages

  // Helper component for a single image block
  const Img = ({ src, aspect, className }: { src: string; aspect: string; className?: string }) => (
    <motion.div
      className={`relative overflow-hidden bg-muted ${className ?? ""}`}
      style={{ aspectRatio: aspect }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Image src={src} alt="" fill quality={100} className="object-cover transition-transform duration-700 hover:scale-105" />
    </motion.div>
  )

  return (
    <div className="bg-background pb-32 px-4 md:px-6 space-y-6 md:space-y-10 max-w-7xl mx-auto">

      {/* 1 — Hero: smaller, right-aligned */}
      {imgs[0] && <HeroImage src={imgs[0].src} />}

      {/* 2 — Single centered ~60% */}
      {imgs[1] && (
        <div className="flex justify-center">
          <Img src={imgs[1].src} aspect="3/4" className="w-3/5" />
        </div>
      )}

      {/* 3 — Two equal side by side */}
      {imgs[2] && imgs[3] && (
        <div className="flex gap-4">
          <Img src={imgs[2].src} aspect="18/23" className="flex-1" />
          <Img src={imgs[3].src} aspect="18/23" className="flex-1" />
        </div>
      )}

      {/* 4 — Two equal side by side */}
      {imgs[4] && imgs[5] && (
        <div className="flex gap-4">
          <Img src={imgs[4].src} aspect="4/5" className="flex-1" />
          <Img src={imgs[5].src} aspect="4/5" className="flex-1" />
        </div>
      )}

      {/* 5 — Single centered ~50% */}
      {imgs[6] && (
        <div className="flex justify-center">
          <Img src={imgs[6].src} aspect="4/5" className="w-1/2" />
        </div>
      )}

      {/* 6 — Asymmetric: small left, large right */}
      {imgs[7] && imgs[8] && (
        <div className="flex gap-4 items-end">
          <Img src={imgs[7].src} aspect="16/22" className="w-1/3" />
          <Img src={imgs[8].src} aspect="27/34" className="flex-1" />
        </div>
      )}

      {/* 7 — Full width landscape */}
      {imgs[9] && <Img src={imgs[9].src} aspect="45/34" className="w-full" />}

      {/* 8 — Single centered ~55% */}
      {imgs[10] && (
        <div className="flex justify-center">
          <Img src={imgs[10].src} aspect="18/23" className="w-[55%]" />
        </div>
      )}

      {/* 9 — Two equal */}
      {imgs[11] && imgs[12] && (
        <div className="flex gap-4">
          <Img src={imgs[11].src} aspect="21/26" className="flex-1" />
          <Img src={imgs[12].src} aspect="21/26" className="flex-1" />
        </div>
      )}

      {/* 10 — Two equal */}
      {imgs[13] && imgs[14] && (
        <div className="flex gap-4">
          <Img src={imgs[13].src} aspect="4/5" className="flex-1" />
          <Img src={imgs[14].src} aspect="4/5" className="flex-1" />
        </div>
      )}

      {/* 11 — Full width landscape */}
      {imgs[15] && <Img src={imgs[15].src} aspect="45/34" className="w-full" />}

      {/* 12 — Asymmetric: large left, small right */}
      {imgs[16] && imgs[17] && (
        <div className="flex gap-4 items-end">
          <Img src={imgs[16].src} aspect="27/34" className="flex-1" />
          <Img src={imgs[17].src} aspect="16/22" className="w-1/3" />
        </div>
      )}

      {/* 13 — Single centered */}
      {imgs[18] && (
        <div className="flex justify-center">
          <Img src={imgs[18].src} aspect="4/5" className="w-1/2" />
        </div>
      )}

      {/* 14 — Two equal */}
      {imgs[19] && imgs[20] && (
        <div className="flex gap-4">
          <Img src={imgs[19].src} aspect="4/5" className="flex-1" />
          <Img src={imgs[20].src} aspect="4/5" className="flex-1" />
        </div>
      )}
    </div>
  )
}

// ── VIEW 3: Clean 6-column grid ──
const MIXED_IMAGES = [
  ...ALL_IMAGES.filter((_, i) => i % 2 === 0),
  ...ALL_IMAGES.filter((_, i) => i % 2 !== 0),
].slice(0, 12)

function View3({ filteredImages }: { filteredImages: typeof ALL_IMAGES }) {
  const [hovered, setHovered] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<{ src: string; project: string } | null>(null)
  const mixed = filteredImages.slice(0, 12)
  return (
    <div className="bg-background pb-24">
      <div className="grid grid-cols-4 gap-0">
        {mixed.map((item, i) => (
          <div
            key={i}
            className="relative cursor-pointer bg-white p-2 flex flex-col"
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setLightbox({ src: item.src, project: item.project })}
          >
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image src={item.src} alt={`Photo ${i + 1}`} fill quality={100} className="object-cover transition-transform duration-500 hover:scale-105" />
              {hovered === i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white"
                >
                  <p className="text-[9px] tracking-[0.15em]">{item.project.toUpperCase()}</p>
                </motion.div>
              )}
            </div>
            <p className="text-[9px] tracking-[0.12em] text-foreground/40 mt-1 text-center">
              {String(i + 1).padStart(2, "0")}
            </p>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] w-full mx-8"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ aspectRatio: "3/4", maxHeight: "85vh" }}>
                <Image src={lightbox.src} alt={lightbox.project} fill quality={100} className="object-contain" />
              </div>
              <p className="text-center text-[10px] tracking-[0.2em] text-white/50 mt-3">
                {lightbox.project.toUpperCase()}
              </p>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-4 -right-4 w-8 h-8 flex items-center justify-center text-white/60 hover:text-white text-xl leading-none"
              >
                ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const TAGS = [
  "ALL", "EDITORIAL", "CAMPAIGN", "FASHION PHOTOGRAPHY", "FILM", "EVENTS",
]

export default function GalleryPage() {
  const [view, setView] = useState<ViewMode>("view1")
  const [activeTag, setActiveTag] = useState("ALL")

  const filteredProjects = useMemo(() => {
    const projects = activeTag === "ALL"
      ? PROJECTS
      : PROJECTS.filter(p => TAG_FILTER[activeTag]?.includes(p.title))
    // Shuffle images within each project row (View 3 / strip view)
    return projects.map(p => ({ ...p, images: shuffle(p.images) }))
  }, [activeTag])

  const filteredImages = useMemo(() =>
    shuffle(filteredProjects.flatMap(p => p.images.map(img => ({ ...img, project: p.title }))))
  , [activeTag])

  return (
    <>
      <TopBar />

      {/* Info header block */}
      <div className="pt-[56px] px-8 md:px-14 pb-6">
        <div className="flex items-start gap-6 pt-8">
          {/* Index number */}
          <span className="text-[64px] font-bold leading-none text-foreground/15 select-none shrink-0 mt-1">1</span>
          {/* Title + tags */}
          <div className="flex flex-col gap-3">
            <h1 className="text-[52px] md:text-[64px] font-bold leading-[0.92] tracking-[-0.03em]">
              Gallery
            </h1>
            <p className="text-[11px] tracking-[0.08em] leading-relaxed flex flex-wrap gap-x-0">
              {TAGS.map((tag, i) => (
                <span key={tag}>
                  <button
                    onClick={() => setActiveTag(tag)}
                    className={`transition-all duration-150 ${activeTag === tag ? "text-foreground underline underline-offset-2" : "text-foreground/40 hover:text-foreground/80 active:text-foreground"}`}
                  >
                    {tag}
                  </button>
                  {i < TAGS.length - 1 && <span className="text-foreground/25">,&nbsp;</span>}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* Sub-nav */}
      <div className="sticky top-[56px] left-0 right-0 z-30 bg-background">
        <div className="flex items-center justify-center gap-10 py-2">
          {(["view1", "view2", "view3"] as ViewMode[]).map((v, i) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`text-[10px] tracking-[0.2em] transition-opacity pb-1 ${
                view === v
                  ? "opacity-100 border-b border-foreground"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              VIEW {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="pt-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {view === "view1" && <View3 filteredImages={filteredImages} />}
            {view === "view2" && <View2 filteredImages={filteredImages} />}
            {view === "view3" && <View1 filteredProjects={filteredProjects} />}
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </>
  )
}
