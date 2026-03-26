"use client"

import Footer from "@/components/footer"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { PageTransition } from "@/components/PageTransition"
import TopBar from "@/components/top-bar"

const PROJECTS = [
  {
    id: "001",
    slug: "darkos",
    title: "Darkos",
    year: "2026",
    category: "CAMPAIGN",
    image: "/images/darkos-02.jpg",
  },
  {
    id: "002",
    slug: "grwm",
    title: "#GRWM",
    year: "2026",
    category: "CAMPAIGN",
    image: "/images/grwm-01.jpg",
  },
  {
    id: "006",
    slug: "ghana-food-movement",
    title: "Ghana Food Movement",
    year: "2026",
    category: "EVENT",
    image: "/images/ghana-01.jpg",
  },
  {
    id: "003",
    slug: "revival-in-ghana",
    title: "Revival in Ghana",
    year: "2025",
    category: "CAMPAIGN",
    image: "/images/lumiere-08.jpg",
  },
  {
    id: "004",
    slug: "for-the-geng-only",
    title: "For The Geng Only",
    year: "2025",
    category: "CAMPAIGN",
    image: "/images/ftg-01.jpg",
  },
  {
    id: "005",
    slug: "nora-pop-photography",
    title: "Nora Pop Photography",
    year: "2024",
    category: "CATALOGUE",
    image: "/images/brand-01.jpg",
  },

]

export default function WorkPage() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <>
      <TopBar />
      <PageTransition className="px-4 md:px-8 py-16 min-h-screen relative flex flex-col justify-center">
        {/* Fixed image reveal on hover — left side, desktop only */}
        <div className="fixed top-1/2 -translate-y-1/2 left-16 w-[400px] aspect-[3/4] pointer-events-none hidden md:block z-0">
          {[...PROJECTS].sort((a, b) => Number(b.year) - Number(a.year)).map((project) => (
            <div
              key={project.id}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-out ${
                hoveredProject === project.id
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              }`}
            >
              <Image
                src={project.image}
                alt=""
                fill
                className="object-cover shadow-2xl shadow-black/10 rounded-sm grayscale"
              />
            </div>
          ))}
        </div>

        {/* Project list — aligned to right */}
        <div className="max-w-2xl relative z-10 w-full ml-auto md:mr-16">
          <div className="border-t-2 border-foreground" />
          {[...PROJECTS].sort((a, b) => Number(b.year) - Number(a.year)).map((project) => (
            <Link href={`/work/${project.slug}`} key={project.id}>
              <motion.div
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-1 md:py-1 border-b-2 border-foreground cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-12">
                  <span className="text-xs font-sans text-foreground/40 tracking-widest mt-2 sm:mt-0 transition-colors group-hover:text-foreground">
                    {project.year}
                  </span>
                  <h2 className="text-sm md:text-base lg:text-lg font-serif font-extrabold tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-4">
                    {project.title}
                  </h2>
                </div>
                <div className="mt-4 sm:mt-0 pl-[3.25rem] sm:pl-0 text-xs font-sans tracking-widest text-foreground/40 group-hover:text-foreground transition-colors">
                  {project.category}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </PageTransition>
      <Footer />
    </>
  )
}
