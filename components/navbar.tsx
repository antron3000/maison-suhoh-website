"use client"

import Link from "next/link"

export default function Navbar() {
  const navLinks = [
    { href: "/work", label: "INDEX OF WORK" },
    { href: "/about", label: "INFORMATION" },
    { href: "/contact", label: "EMAIL" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background">
      <div className="px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm tracking-[0.2em] font-light">
            (MAISON)
          </Link>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.15em] hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
