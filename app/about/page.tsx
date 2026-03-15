"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/lib/LanguageContext"
import { translations } from "@/lib/i18n"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = translations[language].about

  return (
    <main className="pt-32 pb-32 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-16"
        >
          <div>
            <h1 className="text-sm tracking-[0.2em] mb-12">{t.heading}</h1>
            <div className="space-y-8 text-sm leading-relaxed text-foreground/70">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>
          </div>

          <div className="border-t border-border pt-16">
            <h2 className="text-xs tracking-[0.15em] mb-8 text-foreground/60">
              {t.recognition}
            </h2>
            <div className="space-y-3 text-xs leading-relaxed text-foreground/70">
              <p>{t.r1}</p>
              <p>{t.r2}</p>
              <p>{t.r3}</p>
            </div>
          </div>

          <div className="border-t border-border pt-16">
            <h2 className="text-xs tracking-[0.15em] mb-8 text-foreground/60">
              {t.services}
            </h2>
            <div className="space-y-3 text-xs leading-relaxed text-foreground/70">
              <p>{t.s1}</p>
              <p>{t.s2}</p>
              <p>{t.s3}</p>
              <p>{t.s4}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
