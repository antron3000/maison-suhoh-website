"use client"

import { motion } from "framer-motion"

export default function ContactPage() {
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
            <h1 className="text-sm tracking-[0.2em] mb-12">EMAIL</h1>
            <div className="space-y-8">
              <a 
                href="mailto:hello@maison.com"
                className="block text-2xl md:text-3xl font-light tracking-wide hover:opacity-60 transition-opacity"
              >
                hello@maison.com
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-16">
            <h2 className="text-xs tracking-[0.15em] mb-8 text-foreground/60">
              STUDIO
            </h2>
            <div className="space-y-3 text-sm leading-relaxed text-foreground/70">
              <p>123 Fashion Avenue</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
            </div>
          </div>

          <div className="border-t border-border pt-16">
            <h2 className="text-xs tracking-[0.15em] mb-8 text-foreground/60">
              SOCIAL
            </h2>
            <div className="space-y-3 text-sm leading-relaxed">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-60 transition-opacity text-foreground/70"
              >
                Instagram
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-60 transition-opacity text-foreground/70"
              >
                Twitter
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-60 transition-opacity text-foreground/70"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
