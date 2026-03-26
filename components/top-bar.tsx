"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/lib/LanguageContext"
import { translations } from "@/lib/i18n"

export default function TopBar() {
  const [time, setTime] = useState("")
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = translations[language].nav

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(`${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`)
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    return () => clearInterval(interval)
  }, [])

  const links = [
    { label: t.home,     href: "/" },
    { label: "ABOUT",    href: "/about" },
    { label: t.projects, href: "/work" },
    { label: t.gallery,  href: "/gallery" },
    { label: "EVENTS",   href: "/events" },
    { label: "SERVICES", href: "/services" },
    { label: "CONTACT",  href: "/contact" },
  ]

  return (
    <>
      {/* Top bar — minimal */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Left — MAISON SUKOH */}
          <Link
            href="/"
            className="text-2xl tracking-[-0.04em]"
            onClick={() => setOpen(false)}
          >
            MAISON SUKOH
          </Link>

          {/* Right — location + time + hamburger */}
          <div className="flex items-center gap-4">
            <div className="text-[10px] tracking-[0.1em] text-foreground/50 flex gap-2">
              <span>TORONTO</span>
              <span className="text-foreground/30">|</span>
              <span>{time}</span>
            </div>
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex flex-col gap-[5px] p-1 z-10"
              aria-label="Menu"
            >
              <motion.span
                className="block w-5 h-[1.5px] bg-foreground origin-center"
                animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className="block w-5 h-[1.5px] bg-foreground"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block w-5 h-[1.5px] bg-foreground origin-center"
                animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
              />
            </button>
          </div>
        </div>

      </div>

      {/* Dropdown menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-background flex flex-col justify-between px-8 pt-24 pb-12"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Nav links */}
            <nav className="flex flex-col gap-8 mt-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-2xl md:text-3xl tracking-tight hover:opacity-50 transition-opacity block"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom — language + copyright */}
            <div className="flex items-end justify-between">
              <div className="flex gap-4 text-xs tracking-[0.1em]">
                <button
                  onClick={() => setLanguage("EN")}
                  className={language === "EN" ? "opacity-100" : "opacity-40 hover:opacity-70"}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("FR")}
                  className={language === "FR" ? "opacity-100" : "opacity-40 hover:opacity-70"}
                >
                  FR
                </button>
              </div>
              <p className="text-[10px] tracking-[0.1em] text-foreground/40">©2026 MAISON SUKOH</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
