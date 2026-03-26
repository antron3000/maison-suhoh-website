"use client"

import Footer from "@/components/footer"
import { useEffect, useState } from "react"
import TopBar from "@/components/top-bar"

export default function ContactPage() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString("en-CA", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "America/Toronto",
          hour12: false,
        }) + " (EST)"
      )
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  const rows = [
    {
      label: "Address",
      value: (
        <span>
          Toronto, Ontario<br />
          Canada
        </span>
      ),
    },
    { label: "Current Time", value: time },
    { label: "Phone", value: "(438) 931-4889" },
    {
      label: "Director",
      value: (
        <a href="mailto:tessia.yasmine@maisonsukoh.com" className="hover:opacity-60 transition-opacity">
          tessia.yasmine@maisonsukoh.com
        </a>
      ),
    },
    {
      label: "Founder",
      value: (
        <a href="mailto:mama.soukho@maisonsukoh.com" className="hover:opacity-60 transition-opacity">
          mama.soukho@maisonsukoh.com
        </a>
      ),
    },
    {
      label: "Social Media",
      value: (
        <span className="flex flex-col gap-1">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition-opacity"
          >
            Instagram
          </a>

        </span>
      ),
    },
  ]

  return (
    <>
      <TopBar />
      <main className="min-h-screen bg-background flex items-center justify-center px-8">
        <div className="w-full max-w-2xl grid grid-cols-[1fr_auto_1fr] gap-x-1.5">
          {rows.map((row, i) => (
            <div key={i} className="contents">
              <div className="py-2 flex justify-end">
                <p className="text-[9px] tracking-[0.12em] text-foreground/40 whitespace-nowrap self-baseline">{row.label}</p>
              </div>
              <div className="py-2" />
              <div className="py-2 flex justify-start">
                <span className="text-[10px] tracking-[0.08em] text-foreground leading-relaxed">
                  {row.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}
