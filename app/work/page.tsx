"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { PageTransition } from "@/components/PageTransition"
import TopBar from "@/components/top-bar"

const PROJECTS = [
  {
    id: "001",
    slug: "noir-campaign",
    title: "Noir Campaign",
    year: "2026",
    image: "/images/photo-01.jpg",
  },
  {
    id: "002",
    slug: "lumiere-launch",
    title: "Lumière Launch",
    year: "2025",
    image: "/images/lumiere-01.jpg",
  },
  {
    id: "003",
    slug: "sequoia-dinner",
    title: "Séquoia Dinner",
    year: "2025",
    image: "/images/photo-03.jpg",
  },
  {
    id: "004",
    slug: "brand-story-cle",
    title: "Brand Story — Clé",
    year: "2024",
    image: "/images/brand-01.jpg",
  },
  {
    id: "005",
    slug: "rooftop-activation",
    title: "Rooftop Activation",
    year: "2024",
    image: "/images/photo-02.jpg",
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
          {PROJECTS.map((project) => (
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
          <div className="border-t border-foreground/10" />
          {PROJECTS.map((project) => (
            <Link href={`/work/${project.slug}`} key={project.id}>
              <motion.div
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-6 md:py-8 border-b border-foreground/10 cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-12">
                  <span className="text-xs font-sans text-foreground/40 tracking-widest mt-2 sm:mt-0 transition-colors group-hover:text-foreground">
                    {project.id}
                  </span>
                  <h2 className="text-sm md:text-base lg:text-lg font-serif font-extrabold tracking-tight transition-transform duration-500 ease-out group-hover:translate-x-4">
                    {project.title}
                  </h2>
                </div>
                <div className="mt-4 sm:mt-0 pl-[3.25rem] sm:pl-0 text-xs font-sans tracking-widest text-foreground/40 group-hover:text-foreground transition-colors">
                  {project.year}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </PageTransition>
    </>
  )
}
