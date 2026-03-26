"use client"

import Footer from "@/components/footer"
import Link from "next/link"
import TopBar from "@/components/top-bar"

const SERVICES = [
  "CREATIVE DIRECTION",
  "ART DIRECTION",
  "PHOTOGRAPHY",
  "WEB DESIGN AND DEVELOPMENT",
  "CAMPAIGN",
  "CREATIVE PRODUCTION",
  "BRAND STRATEGY",
  "EVENT CURATION",
]

const NAV = [
  { label: "WORK",    href: "/work" },
  { label: "BRAND",   href: "/about" },
  { label: "INDEX",   href: "/contact" },
]

export default function ServicesPage() {
  return (
    <>
      <TopBar />
      <main className="min-h-screen bg-background flex items-center justify-center pt-16 px-6 pb-6">

        <div className="relative w-full max-w-4xl p-8 md:p-12">

          {/* Services list */}
          <div className="mb-8">
            <p className="text-[20px] tracking-[-0.03em] mb-3">SERVICES</p>
            <div className="flex flex-col gap-[3px]">
              {SERVICES.map((s) => (
                <p key={s} className="text-[20px] tracking-[-0.03em]">{s}</p>
              ))}
            </div>
          </div>

          {/* Press */}
          <div className="mb-16">
            <p className="text-[20px] tracking-[-0.03em] mb-3">PRESS</p>
            <p className="text-[20px] tracking-[-0.03em]">[MAISON SUKOH] 2023</p>
          </div>



        </div>
      </main>
      <Footer />
    </>
  )
}
