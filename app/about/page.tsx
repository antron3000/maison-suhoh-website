"use client"
import Footer from "@/components/footer"

import Image from "next/image"
import Link from "next/link"
import TopBar from "@/components/top-bar"

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

const TEAM = [
  {
    name: "MAMA SOUKHO BRETHE",
    role: "FOUNDER",
    email: "mama.soukho@maisonsukoh.com",
    image: "/images/mama-brethe-v2.jpg",
  },
  {
    name: "TESSIA-YASMINE",
    role: "DIRECTOR",
    email: "tessia.yasmine@maisonsukoh.com",
    image: "/images/tessia-yasmine-v2.jpg",
  },
]

const EDUCATION = [
  {
    year: "",
    title: "SOUND",
  },
  {
    year: "",
    title: "VISUALS",
  },
  {
    year: "",
    title: "MEDIA",
  },
  {
    year: "",
    title: "CURATED\nEVENTS",
  },
]

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <main className="pt-16 bg-white min-h-screen font-mono">

        {/* ── MAIN SECTION: Two-column editorial grid ── */}
        <section className="px-10 md:px-16 pt-14 pb-20">
          <div className="relative border border-foreground/15 p-8 md:p-12">
            <Marks />
          <div className="grid grid-cols-1 md:grid-cols-[62fr_38fr] gap-12 md:gap-16 items-stretch">

            {/* ── LEFT COLUMN (62%) ── */}
            <div className="flex flex-col gap-2">

              {/* Title */}
              <h1 className="text-2xl tracking-[-0.04em]">ABOUT</h1>

              {/* Bio */}
              <div className="text-[11px] tracking-[0.01em] leading-loose text-foreground/75 w-full space-y-4">
                <p>
                  WE ARE MAISON SUKOH, A TORONTO BASED MULTIDISCIPLINARY PRODUCTION COMPANY FOUNDED IN 2025 BY MAMA SOUKHO BERETHE. BUILT AS A COLLECTIVE PLATFORM, THE COMPANY CREATES OPPORTUNITIES FOR PEOPLE TO ENGAGE WITH AND WORK WITHIN THE CREATIVE SCENE.
                </p>
                <p>
                  Our work is influenced by the cities we exist in—Barcelona, Accra, Toronto, where we PRODUCE ACROSS SOUND, VISUALS, MEDIA, AND CURATED EVENTS.
                </p>
                <p>
                  THE NAME REFLECTS BOTH ORIGIN AND PURPOSE. "MAISON," MEANING HOUSE IN FRENCH, REPRESENTS A SPACE FOR CREATIVES TO COME TOGETHER, WITH DIFFERENT ROOMS SYMBOLIZING ITS VARIOUS DOMAINS. "SUKOH" DERIVES FROM SOUKHO, ROOTED IN MALIAN HERITAGE AND CONNECTED TO THE KEITA LINEAGE.
                </p>
              </div>

              {/* Featured image */}
              <div className="relative w-full aspect-[8/5] overflow-hidden mt-12">
                <Image
                  src="/images/about-main.jpg"
                  alt="Maison SUKOH"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

            {/* ── RIGHT COLUMN (38%) ── */}
            <div className="flex flex-col gap-10 justify-end">

              {/* Recognition */}
              <div className="mt-[300px]">
                <h2 className="text-2xl tracking-[-0.04em] text-foreground mb-8">PLATFORMS</h2>
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


            </div>

          </div>
          {/* Team — full width below grid */}
          <div className="mt-24 w-[52%]">
            <div className="flex gap-12">
              {TEAM.map((member) => (
                <div key={member.name} className="flex-1 flex flex-col">
                  {/* Portrait photo */}
                  <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                    <Image src={member.image} alt={member.name} fill quality={100} className="object-cover object-top" />
                    <span className="absolute bottom-2 left-2 text-white/80 text-sm font-light leading-none select-none">+</span>
                  </div>
                  {/* Text below */}
                  <div className="mt-4 flex flex-col gap-1">
                    <p className="text-[18px] font-bold tracking-[-0.01em] text-foreground">{member.name}</p>
                    <div className="mt-2 flex flex-col gap-0.5">
                      <p className="text-[12px] tracking-[0.05em] text-foreground/70 font-normal">{member.role}</p>
                      <p className="text-[12px] tracking-[0.05em] text-foreground/70 font-normal">MAISON SUKOH</p>
                    </div>
                    <a
                      href={`mailto:${member.email}`}
                      className="mt-3 text-[12px] tracking-[0.03em] text-foreground/60 hover:text-foreground transition-colors font-normal"
                    >
                      {member.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          </div>{/* end border wrapper */}
        </section>

      </main>
      <Footer />
    </>
  )
}
