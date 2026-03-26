"use client"

import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TopBar from "@/components/top-bar"

const EVENTS = [
  {
    id: "01",
    title: "PUSH\nRUNWAY SHOW",
    subtitle: "A runway showcase celebrating emerging talent, movement, and the future of fashion.",
    date: "MAY 8, 2026",
    location: "BEVY SPACE, TORONTO",
    category: "FW SS26",
    image: "/images/push-01.jpg",
    hero: "/images/push-01.jpg",
    stats: [
      { label: "GUESTS", value: "" },
      { label: "YEAR", value: "2026" },
      { label: "SEASON", value: "SS26" },
    ],
    services: ["CREATIVE DIRECTION", "CASTING", "PRODUCTION"],
    clients: ["MAISON SUKOH", "PUSH"],
  },
  {
    id: "02",
    title: "LUMIÈRE\nLAUNCH",
    subtitle: "A brand launch evening celebrating light, identity, and the art of the reveal.",
    date: "MAY 03, 2026",
    location: "MONTREAL, CA",
    category: "BRAND EVENT",
    image: "/images/lumiere-01.jpg",
    hero: "/images/lumiere-04.jpg",
    stats: [
      { label: "GUESTS", value: "120" },
      { label: "YEAR", value: "2026" },
      { label: "SEASON", value: "SS26" },
    ],
    services: ["PHOTOGRAPHY", "VIDEOGRAPHY", "POST-PRODUCTION"],
    clients: ["LUMIÈRE", "MAISON SUKOH"],
  },

]

export default function EventsPage() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (idx: number) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }
  const prev = () => go(current === 0 ? EVENTS.length - 1 : current - 1)
  const next = () => go(current === EVENTS.length - 1 ? 0 : current + 1)

  const event = EVENTS[current]

  return (
    <>
      <TopBar />

      <div
        className="fixed inset-0 top-[56px] flex"
        style={{ height: "calc(100vh - 56px)", cursor: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='12' fill='none' stroke='%23000' stroke-width='1.2'/%3E%3Cline x1='16' y1='10' x2='16' y2='22' stroke='%23000' stroke-width='1.2'/%3E%3Cline x1='10' y1='16' x2='22' y2='16' stroke='%23000' stroke-width='1.2'/%3E%3C/svg%3E\") 16 16, pointer" }}
        onClick={next}
      >

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            className="absolute inset-0 flex"
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >

            {/* ── LEFT: Content panel ── */}
            <div className="w-[53%] flex flex-col justify-between px-10 py-6 bg-background overflow-hidden" onClick={e => e.stopPropagation()}>

              {/* Top row */}
              <div className="flex items-start justify-between">
                <span className="text-[11px] tracking-[0.2em] text-foreground/30">
                  {event.id} / {String(EVENTS.length).padStart(2, "0")}
                </span>
                <span className="text-[10px] tracking-[0.2em] text-foreground/50 border border-foreground/20 px-2 py-0.5">
                  {event.category}
                </span>
              </div>

              {/* Middle */}
              <div className="flex flex-col gap-4">
                {/* Thumbnail */}
                <div className="relative w-16 h-16 overflow-hidden bg-muted">
                  <Image src={event.image} alt={event.title} fill quality={100} className="object-cover" />
                </div>

                {/* Headline */}
                <h2 className="text-[46px] leading-[0.93] font-bold tracking-[-0.03em]">
                  {event.title.split("\n").map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h2>

                {/* Subtitle */}
                <p className="text-[13px] leading-relaxed text-foreground/50 max-w-[340px]">
                  {event.subtitle}
                </p>

                {/* CTA */}
                <Link href="/work" className="text-[11px] tracking-[0.2em] hover:opacity-50 transition-opacity inline-flex items-center gap-2 group">
                  <span className="w-6 h-[1px] bg-foreground inline-block group-hover:w-10 transition-all duration-300" />
                  EXPLORE OUR PROJECTS
                </Link>
              </div>

              {/* Bottom metadata */}
              <div className="flex flex-col gap-0">
                <div className="flex items-center justify-between py-3 border-t border-foreground/10">
                  <span className="text-[10px] tracking-[0.2em] text-foreground/40">DATE</span>
                  <span className="text-[11px] tracking-[0.1em]">{event.date}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-t border-foreground/10">
                  <span className="text-[10px] tracking-[0.2em] text-foreground/40">LOCATION</span>
                  <span className="text-[11px] tracking-[0.1em]">{event.location}</span>
                </div>
                <div className="flex gap-0 border-t border-foreground/10 pt-4 mt-1">
                  {event.stats.map((s) => (
                    <div key={s.label} className="flex-1 flex flex-col gap-1 pr-4">
                      <span className="text-[9px] tracking-[0.2em] text-foreground/30">{s.label}</span>
                      <span className="text-[22px] font-bold tracking-tight">{s.value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-start justify-between py-3 border-t border-foreground/10 mt-2">
                  <span className="text-[10px] tracking-[0.2em] text-foreground/40 shrink-0 mr-4">SERVICES</span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 justify-end">
                    {event.services.map((s) => (
                      <span key={s} className="text-[10px] tracking-[0.1em] text-foreground/60">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-start justify-between py-3 border-t border-b border-foreground/10">
                  <span className="text-[10px] tracking-[0.2em] text-foreground/40 shrink-0 mr-4">CLIENTS</span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 justify-end">
                    {event.clients.map((c) => (
                      <span key={c} className="text-[10px] tracking-[0.1em] text-foreground/60">{c}</span>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            {/* ── RIGHT: Hero image ── */}
            <div className="w-[47%] relative overflow-hidden bg-muted">
              <Image src={event.hero} alt={event.title} fill quality={100} className="object-cover" />

              {/* Large watermark number */}
              <div className="absolute bottom-8 left-8 z-10">
                <span className="text-[120px] font-bold leading-none text-white/10 select-none">{event.id}</span>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* ── DOT indicators ── */}
        <div className="absolute bottom-6 left-[53%] -translate-x-1/2 z-50 flex gap-2 pointer-events-none">
          {EVENTS.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-foreground w-4" : "bg-foreground/30 w-1.5"}`}
            />
          ))}
        </div>

        {/* ── Click hint ── */}
        <div className="absolute bottom-6 right-8 z-50 pointer-events-none">
          <p className="text-[9px] tracking-[0.2em] text-foreground/30">CLICK TO ADVANCE</p>
        </div>

      </div>
      <Footer />
    </>
  )
}
