"use client"

import { motion } from "framer-motion"
import { Camera, Film, Palette, Users, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: Camera,
      title: "Fashion Photography",
      description: "Editorial shoots, lookbooks, and campaign photography that captures the essence of your brand with stunning visual storytelling.",
    },
    {
      icon: Film,
      title: "Videography & Film",
      description: "From brand films to fashion films, we create cinematic content that engages and inspires your audience.",
    },
    {
      icon: Palette,
      title: "Creative Direction",
      description: "End-to-end creative direction ensuring your vision is executed flawlessly from concept to final delivery.",
    },
    {
      icon: Users,
      title: "Casting & Production",
      description: "Full production services including model casting, location scouting, and on-set coordination.",
    },
    {
      icon: Sparkles,
      title: "Post-Production",
      description: "Professional retouching, color grading, and editing to ensure your content meets the highest standards.",
    },
    {
      icon: Zap,
      title: "Brand Consulting",
      description: "Strategic guidance on visual identity and content strategy to elevate your brand presence.",
    },
  ]

  return (
    <main className="pt-32 pb-24">
      <section className="px-6 lg:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-light tracking-wider mb-6">
              Our Services
            </h1>
            <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
              Comprehensive production services tailored to bring your creative
              vision to life with precision and artistry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="mb-6">
                    <Icon size={40} className="text-foreground group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-light tracking-wide mb-4">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 py-24 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-6">
              Let&apos;s Create Together
            </h2>
            <p className="text-foreground/70 text-lg mb-12 max-w-2xl mx-auto">
              Whether you need a full campaign or a single editorial shoot, we&apos;re
              here to help bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-12 py-5 text-lg hover:bg-foreground/90 transition-colors"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
