"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useLanguage } from "@/lib/LanguageContext"
import { translations } from "@/lib/i18n"

export default function TopBar() {
  const [time, setTime] = useState("")
  const { language, setLanguage } = useLanguage()
  const t = translations[language].nav

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      setTime(`${hours}:${minutes}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 bg-background border-b border-border">
        <div className="flex items-center justify-between px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-xs tracking-[0.15em]">
            <span>TORONTO, ON</span>
            <span className="text-foreground/40">|</span>
            <span>{time}</span>
          </div>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2 text-sm tracking-[0.2em] font-light">
            MAISON SUKOH
          </Link>

          <div></div>
        </div>
      </div>

      <aside className="fixed left-0 top-16 h-screen w-48 bg-background border-r border-border z-30 p-8">
        <div className="flex flex-col gap-8">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-sm hover:opacity-60 transition-opacity text-foreground/60">
              {t.home}
            </Link>
            <Link href="/work" className="text-sm hover:opacity-60 transition-opacity font-medium">
              {t.projects}
            </Link>
            <Link href="/work" className="text-sm hover:opacity-60 transition-opacity font-medium">
              {t.gallery}
            </Link>
            <Link href="/about" className="text-sm hover:opacity-60 transition-opacity font-medium">
              {t.studio}
            </Link>
          </nav>

          <div className="flex flex-col gap-2 pt-4 border-t border-border">
            <button
              onClick={() => setLanguage("EN")}
              className={`text-sm text-left ${language === "EN" ? "font-medium" : "text-foreground/60"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("FR")}
              className={`text-sm text-left ${language === "FR" ? "font-medium" : "text-foreground/60"}`}
            >
              FR
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
