"use client"

import Image from "next/image"
import Link from "next/link"
import TopBar from "@/components/top-bar"

const TEAM = [
  {
    name: "TESSIA-YASMINE",
    role: "DIRECTOR",
    email: "tessia.yasmine@maisonsukoh.com",
    image: "/images/photo-01.jpg",
  },
  {
    name: "MAMA BRETHE",
    role: "FOUNDER",
    email: "mama.soukoh@gmail.com",
    image: "/images/photo-02.jpg",
  },
]

const EDUCATION = [
  {
    year: "2024–2025",
    title: "CREATIVE DIRECTION,\nMAISON SUKOH STUDIO,\nTORONTO",
  },
  {
    year: "2024–2025",
    title: "BRAND STRATEGY,\nINDEPENDENT STUDY &\nMENTORSHIP",
  },
  {
    year: "2024",
    title: "PHOTOGRAPHY INTENSIVE,\nSTUDIO PRACTICE,\nTORONTO",
  },
  {
    year: "2023",
    title: "VISUAL DESIGN,\nDIGITAL & PRINT\nSYSTEMS",
  },
]

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <main className="pt-16 bg-white min-h-screen font-mono">

        {/* ── MAIN SECTION: Two-column editorial grid ── */}
        <section className="px-10 md:px-16 pt-14 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-[62fr_38fr] gap-12 md:gap-16 items-start">

            {/* ── LEFT COLUMN (62%) ── */}
            <div className="flex flex-col gap-2">

              {/* Title */}
              <h1 className="text-2xl font-bold tracking-[0.08em]">ABOUT</h1>

              {/* Bio */}
              <div className="text-[11px] tracking-[0.04em] leading-loose text-foreground/75 w-full">
                <p className="mb-4">
                  Maison SUKOH is an independent creative studio passionate about crafting meaningful, modern visual identities. With a hands-on background in fashion photography, art direction, and brand storytelling, we build visual systems that resonate.
                </p>
                <p>
                  We bring clarity, craft, and a collaborative spirit to every project — always pushing the work forward. Currently based in Toronto, working with brands globally.
                </p>
              </div>

              {/* Featured image */}
              <div className="relative w-full aspect-[8/5] overflow-hidden grayscale">
                <Image
                  src="/images/about-studio.jpg"
                  alt="Maison SUKOH Studio"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

            {/* ── RIGHT COLUMN (38%) ── */}
            <div className="flex flex-col gap-10 pt-2 md:pt-80">

              {/* Recognition */}
              <div>
                <h2 className="text-[55px] font-bold tracking-[0.08em] text-foreground mb-8">RECOGNITION</h2>
                <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                  {EDUCATION.map((e, i) => (
                    <div key={i} className="border-t border-foreground/10 pt-4">
                      <p className="text-[9px] tracking-[0.15em] text-foreground/40 mb-2">{e.year}</p>
                      <p className="text-[11px] tracking-[0.06em] leading-relaxed font-bold">
                        {e.title.split("\n").map((line, j) => (
                          <span key={j}>{line}<br /></span>
                        ))}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer note */}
              <div className="mt-auto pt-16 text-[9px] tracking-[0.1em] text-foreground/30">
                <p>©2026 ALL RIGHTS RESERVED</p>
                <p className="mt-1">MAISON SUKOH STUDIO</p>
              </div>
            </div>

          </div>
          {/* Team — full width below grid, left-aligned */}
          <div className="mt-16 w-[62%]">
            <h2 className="text-[11px] font-bold tracking-[0.2em] text-foreground/40 mb-6">TEAM</h2>
            <div className="flex gap-12">
              {TEAM.map((member) => (
                <div key={member.name} className="border-t border-foreground/10 pt-4 flex gap-4 items-start flex-1">
                  <div className="relative w-16 h-20 shrink-0 overflow-hidden grayscale">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.1em] mb-1">{member.name}</p>
                    <p className="text-[9px] tracking-[0.15em] text-foreground/50 mb-2">{member.role}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-[9px] tracking-[0.06em] text-foreground/50 hover:text-foreground transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

      </main>
    </>
  )
}
