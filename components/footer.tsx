export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="px-6 lg:px-12 py-8">
        <div className="flex items-center justify-between">
          <p className="text-xs tracking-[0.15em] text-foreground/40">
            © {currentYear}
          </p>
          <a 
            href="mailto:hello@maison.com" 
            className="text-xs tracking-[0.15em] hover:opacity-60 transition-opacity"
          >
            HELLO@MAISON.COM
          </a>
        </div>
      </div>
    </footer>
  )
}
