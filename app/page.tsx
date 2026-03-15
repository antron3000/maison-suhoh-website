"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import LoadingScreen from "@/components/loading-screen"
import TopBar from "@/components/top-bar"
import { useLanguage } from "@/lib/LanguageContext"
import { translations } from "@/lib/i18n"

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const { language } = useLanguage()
  const t = translations[language].home

  const slideImages = [
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80",
  ]

  const galleryImages = [
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80",
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80",
    "https://images.unsplash.com/photo-1558769132-cb1aea1c8a7c?w=400&q=80",
    "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80",
    "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&q=80",
    "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80",
  ]

  useEffect(() => {
    const handleScroll = () => {}
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />
  }

  return (
    <>
      <TopBar />
      <main className="pt-16 pl-48">
        <section className="min-h-screen bg-background flex items-center justify-center py-32 px-8">
          <div className="w-full max-w-7xl">
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-xs tracking-[0.15em]">{t.rueStudio}</h2>
              <h2 className="text-xs tracking-[0.15em]">{t.archive}</h2>
              <div className="flex gap-6 text-xs tracking-[0.15em]">
                <Link href="/work" className="hover:opacity-60 transition-opacity">{t.work}</Link>
                <Link href="/services" className="hover:opacity-60 transition-opacity">{t.services}</Link>
                <Link href="/about" className="hover:opacity-60 transition-opacity">{t.about}</Link>
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-8">
              {galleryImages.map((img, idx) => (
                <Link
                  key={idx}
                  href={`/work/project-${idx + 1}`}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-48 h-64 bg-muted overflow-hidden">
                    <Image
                      src={img}
                      alt={`Project ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
              ))}
            </div>

            <div className="flex items-end justify-between mt-16">
              <div className="text-xs tracking-[0.15em]">
                <p>{t.rueStudio}</p>
              </div>
              <div className="text-xs tracking-[0.15em]">
                <p>{t.archive}</p>
              </div>
              <div className="text-xs tracking-[0.15em] text-right">
                <p>{t.exploreFW24}</p>
                <p>{t.collectionExplore}</p>
                <p>{t.archiveStudio}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-background flex items-center justify-center relative">
          <div className="absolute top-8 left-8 text-xs tracking-[0.15em] max-w-xs">
            <p className="mb-2">{t.slides[currentSlide].title}</p>
            <p className="mb-2">{t.slides[currentSlide].subtitle}</p>
          </div>

          <div className="absolute top-8 right-8 text-xs tracking-[0.15em] text-right">
            <Link href="/work" className="hover:opacity-60 transition-opacity">{t.work}</Link>
            <br />
            <Link href="/services" className="hover:opacity-60 transition-opacity">{t.services}</Link>
            <br />
            <Link href="/about" className="hover:opacity-60 transition-opacity">{t.about}</Link>
          </div>

          <div className="relative w-full max-w-2xl aspect-[4/5]">
            <Image
              src={slideImages[currentSlide]}
              alt="Collection"
              fill
              className="object-cover"
              priority
            />
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1))}
            className="absolute left-8 top-1/2 -translate-y-1/2 text-xs tracking-[0.15em] hover:opacity-60 transition-opacity"
          >
            {t.back}
          </button>

          <button
            onClick={() => setCurrentSlide((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1))}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-xs tracking-[0.15em] hover:opacity-60 transition-opacity"
          >
            {t.next}
          </button>

          <div className="absolute bottom-8 left-8 text-xs tracking-[0.15em]">
            {t.description.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <div className="absolute bottom-8 right-8 text-xs tracking-[0.15em] text-right">
            <p>{t.exploreIdea}</p>
            <p>{t.exploreCollection}</p>
            <p>{t.archiveStudio}</p>
          </div>
        </section>

        <div className="fixed bottom-8 left-8 text-xs tracking-[0.15em] text-foreground/60">
          {t.copyright}
        </div>
      </main>
    </>
  )
}
