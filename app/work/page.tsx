"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import TopBar from "@/components/top-bar"

type ViewMode = "grid" | "list" | "masonry"

export default function WorkPage() {
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [filter, setFilter] = useState("ALL")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const categories = ["ALL", "EDITORIAL", "CAMPAIGN", "LOOKBOOK", "FILM"]

  const projects = [
    {
      id: 1,
      title: "Ethereal Collection",
      category: "EDITORIAL",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80",
      year: "2024",
    },
    {
      id: 2,
      title: "Urban Minimalism",
      category: "CAMPAIGN",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
      year: "2024",
    },
    {
      id: 3,
      title: "Avant-Garde",
      category: "LOOKBOOK",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
      year: "2023",
    },
    {
      id: 4,
      title: "Noir Series",
      category: "EDITORIAL",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
      year: "2023",
    },
    {
      id: 5,
      title: "Summer Campaign",
      category: "CAMPAIGN",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
      year: "2024",
    },
    {
      id: 6,
      title: "Motion Pictures",
      category: "FILM",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea1c8a7c?w=800&q=80",
      year: "2023",
    },
  ]

  const filteredProjects = filter === "ALL" 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <>
      <TopBar />
      <main className="pt-24 pb-32 px-8 pl-56">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between mb-12">
            <div className="text-xs tracking-[0.15em]">
              <p className="mb-2">{filteredProjects.length} ITEMS</p>
              <div className="flex gap-4 mt-4">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`${
                      filter === cat ? "opacity-100" : "opacity-40"
                    } hover:opacity-100 transition-opacity`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 text-xs tracking-[0.15em]">
              <button
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "opacity-100" : "opacity-40 hover:opacity-100"}
              >
                GRID
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "opacity-100" : "opacity-40 hover:opacity-100"}
              >
                LIST
              </button>
              <button
                onClick={() => setViewMode("masonry")}
                className={viewMode === "masonry" ? "opacity-100" : "opacity-40 hover:opacity-100"}
              >
                MASONRY
              </button>
            </div>
          </div>

          {viewMode === "grid" && (
            <div className="grid grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.id}`}
                  className="group relative"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center text-white"
                      >
                        <div className="text-center">
                          <p className="text-2xl font-light mb-2">{String(project.id).padStart(3, '0')}</p>
                          <p className="text-xs tracking-[0.15em]">{project.title}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}

          {viewMode === "list" && (
            <div className="space-y-8">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.id}`}
                  className="group grid grid-cols-12 gap-8 items-center"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="col-span-1 text-xs tracking-[0.15em] text-foreground/40">
                    {String(project.id).padStart(3, '0')}
                  </div>
                  <div className="col-span-6 relative aspect-[16/9] bg-muted overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="col-span-5">
                    <h3 className="text-xl font-light mb-2">{project.title}</h3>
                    <p className="text-xs tracking-[0.15em] text-foreground/60">{project.category} · {project.year}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {viewMode === "masonry" && (
            <div className="columns-3 gap-6">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.id}`}
                  className="group relative block mb-6 break-inside-avoid"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="relative aspect-[3/4] bg-muted overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {hoveredProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/60 flex items-center justify-center text-white"
                      >
                        <div className="text-center">
                          <p className="text-2xl font-light mb-2">{String(project.id).padStart(3, '0')}</p>
                          <p className="text-xs tracking-[0.15em]">{project.title}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="fixed bottom-8 left-8 text-xs tracking-[0.15em] text-foreground/60">
          ©2026 MAISON SUKOH
        </div>
      </main>
    </>
  )
}
