"use client"

import { motion } from "framer-motion"

export default function AboutPage() {
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
            <h1 className="text-sm tracking-[0.2em] mb-12">INFORMATION</h1>
            <div className="space-y-8 text-sm leading-relaxed text-foreground/70">
              <p>
                Maison is an independent creative studio founded in 2018, 
                specializing in fashion photography, film production, and 
                brand storytelling.
              </p>
              <p>
                We work with emerging designers and established luxury brands, 
                creating compelling visual narratives that resonate with audiences 
                and drive brand engagement.
              </p>
              <p>
                Our approach combines meticulous attention to detail with bold 
                creative vision, ensuring every project exceeds expectations.
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-16">
            <h2 className="text-xs tracking-[0.15em] mb-8 text-foreground/60">
              RECOGNITION
            </h2>
            <div className="space-y-3 text-xs leading-relaxed text-foreground/70">
              <p>Featured in Vogue, Harper&apos;s Bazaar, and Elle Magazine</p>
              <p>Winner of the 2023 Fashion Photography Award</p>
              <p>Collaborated with 50+ international fashion brands</p>
            </div>
          </div>

          <div className="border-t border-border pt-16">
            <h2 className="text-xs tracking-[0.15em] mb-8 text-foreground/60">
              SERVICES
            </h2>
            <div className="space-y-3 text-xs leading-relaxed text-foreground/70">
              <p>Fashion Photography</p>
              <p>Film Production & Videography</p>
              <p>Creative Direction</p>
              <p>Brand Consulting</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
