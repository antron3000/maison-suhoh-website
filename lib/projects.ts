// ─────────────────────────────────────────────
// Single source of truth for all project data.
// Both /work and /gallery import from here.
// ─────────────────────────────────────────────

export interface ProjectImage {
  src: string
  w: number
  h: number
}

export interface Project {
  id: string
  slug: string
  title: string
  year: string
  category: string
  image: string           // thumbnail used on /work
  images: ProjectImage[]  // gallery images
}

export const PROJECTS: Project[] = [
  {
    id: "001",
    slug: "darkos",
    title: "Darkos",
    year: "2026",
    category: "CAMPAIGN",
    image: "/images/darkos-02.jpg",
    images: [
      { src: "/images/darkos-01.jpg", w: 120, h: 120 },
      { src: "/images/darkos-02.jpg", w: 90,  h: 120 },
      { src: "/images/darkos-03.jpg", w: 130, h: 120 },
      { src: "/images/darkos-04.jpg", w: 100, h: 120 },
      { src: "/images/darkos-05.jpg", w: 90,  h: 120 },
    ],
  },
  {
    id: "002",
    slug: "grwm",
    title: "#GRWM",
    year: "2026",
    category: "CAMPAIGN",
    image: "/images/grwm-01.jpg",
    images: [
      { src: "/images/grwm-01.jpg", w: 120, h: 120 },
      { src: "/images/grwm-02.jpg", w: 90,  h: 120 },
      { src: "/images/grwm-03.jpg", w: 110, h: 120 },
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
    id: "006",
    slug: "ghana-food-movement",
    title: "Ghana Food Movement",
    year: "2026",
    category: "EVENT",
    image: "/images/ghana-01.jpg",
    images: [
      { src: "/images/ghana-01.jpg",      w: 130, h: 120 },
      { src: "/images/ghana-02.jpg",      w: 100, h: 120 },
      { src: "/images/ghana-03.jpg",      w: 150, h: 120 },
      { src: "/images/ghana-04.jpg",      w: 110, h: 120 },
      { src: "/images/ghana-05.jpg",      w: 130, h: 120 },
      { src: "/images/ghana-food-01.jpg", w: 120, h: 120 },
      { src: "/images/ghana-food-02.jpg", w: 100, h: 120 },
      { src: "/images/ghana-food-03.jpg", w: 140, h: 120 },
      { src: "/images/ghana-food-04.jpg", w: 110, h: 120 },
      { src: "/images/ghana-food-05.jpg", w: 130, h: 120 },
    ],
  },
  {
    id: "007",
    slug: "push-runway-show",
    title: "Push Runway Show",
    year: "2026",
    category: "EVENT",
    image: "/images/push-03.jpg",
    images: [
      { src: "/images/push-01.jpg", w: 110, h: 120 },
      { src: "/images/push-02.jpg", w: 130, h: 120 },
      { src: "/images/push-03.jpg", w: 120, h: 120 },
    ],
  },
  {
    id: "003",
    slug: "revival-in-ghana",
    title: "Revival in Ghana",
    year: "2025",
    category: "CAMPAIGN",
    image: "/images/lumiere-08.jpg",
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
    id: "004",
    slug: "for-the-geng-only",
    title: "For The Geng Only",
    year: "2025",
    category: "CAMPAIGN",
    image: "/images/ftg-01.jpg",
    images: [
      { src: "/images/ftg-01.jpg", w: 130, h: 115 },
      { src: "/images/ftg-02.jpg", w: 80,  h: 115 },
      { src: "/images/ftg-03.jpg", w: 190, h: 115 },
      { src: "/images/ftg-04.jpg", w: 100, h: 115 },
      { src: "/images/ftg-05.jpg", w: 150, h: 115 },
    ],
  },
  {
    id: "008",
    slug: "noir-campaign",
    title: "Noir Campaign",
    year: "2025",
    category: "CAMPAIGN",
    image: "/images/noir-01.jpg",
    images: [
      { src: "/images/noir-01.jpg", w: 120, h: 130 },
      { src: "/images/noir-02.jpg", w: 100, h: 130 },
      { src: "/images/noir-03.jpg", w: 140, h: 130 },
      { src: "/images/noir-04.jpg", w: 110, h: 130 },
      { src: "/images/noir-05.jpg", w: 130, h: 130 },
      { src: "/images/noir-06.jpg", w: 100, h: 130 },
      { src: "/images/noir-07.jpg", w: 120, h: 130 },
    ],
  },
  {
    id: "005",
    slug: "nora-pop-photography",
    title: "Nora Pop Photography",
    year: "2024",
    category: "CATALOGUE",
    image: "/images/brand-01.jpg",
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

// Sorted newest → oldest (used by /work page)
export const PROJECTS_SORTED = [...PROJECTS].sort(
  (a, b) => Number(b.year) - Number(a.year)
)

// Tag → project title mapping (used by /gallery page)
export const TAG_FILTER: Record<string, string[]> = {
  "ALL": [],
  "EDITORIAL": ["Revival in Ghana", "#GRWM", "Noir Campaign"],
  "CAMPAIGN": ["Darkos", "#GRWM", "Revival in Ghana", "For The Geng Only", "Noir Campaign"],
  "FASHION PHOTOGRAPHY": ["Darkos", "For The Geng Only", "#GRWM", "Noir Campaign"],
  "FILM": ["For The Geng Only"],
  "EVENTS": ["Ghana Food Movement", "Push Runway Show", "For The Geng Only"],
  "CREATIVE DIRECTION": ["Darkos", "For The Geng Only", "Nora Pop Photography", "#GRWM"],
  "BRAND": ["Nora Pop Photography"],
  "SS26": ["Revival in Ghana", "#GRWM", "Push Runway Show"],
  "FW26": ["Darkos", "Noir Campaign"],
}
