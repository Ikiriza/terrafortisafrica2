"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion"
import { Menu, X, Sun, Moon, Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

const contactLinks = [
  { icon: Mail, label: "hello@terrafortisafrica.com", href: "mailto:hello@terrafortisafrica.com" },
  { icon: Phone, label: "+1 (555) 123-4567", href: "tel:+15551234567" },
  { icon: MapPin, label: "San Francisco, CA", href: "https://maps.google.com/?q=TerraFortis%20Africa" },
]

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/terrafortisafrica" },
  { icon: Twitter, label: "X / Twitter", href: "https://twitter.com/terrafortisafrica" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com/terrafortisafrica" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/terrafortisafrica" },
]


type InteractiveButtonProps = {
  children: React.ReactNode
  className?: string
  paddingClassName?: string
}

function InteractiveButton({ children, className, paddingClassName = "" }: InteractiveButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rx = useSpring(useTransform(py, [0, 1], [8, -8]), { stiffness: 220, damping: 20, mass: 0.5 })
  const ry = useSpring(useTransform(px, [0, 1], [-10, 10]), { stiffness: 220, damping: 20, mass: 0.5 })
  const scale = useSpring(1, { stiffness: 220, damping: 20, mass: 0.5 })

  const gx = useTransform(px, (v) => `calc(${(v * 100).toFixed(2)}%)`)
  const gy = useTransform(py, (v) => `calc(${(v * 100).toFixed(2)}%)`)
  const glow = useMotionTemplate`radial-gradient(120px circle at ${gx} ${gy}, rgba(255,255,255,0.12), transparent 60%)`
  const borderGlow = useMotionTemplate`radial-gradient(200px circle at ${gx} ${gy}, rgba(34,197,94,0.35), transparent 70%)`

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  function onEnter() {
    scale.set(1.02)
  }
  function onLeave() {
    scale.set(1)
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, scale, transformStyle: "preserve-3d", willChange: "transform" }}
      className={`relative ${paddingClassName}`}
    >
      <motion.div
        aria-hidden="true"
        style={{ backgroundImage: glow }}
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
      />
      <motion.div
        aria-hidden="true"
        style={{ backgroundImage: borderGlow }}
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
      />
      <div className="relative" style={{ transform: "translateZ(24px)", transformStyle: "preserve-3d" }}>
        <div className={`group ${className || ""}`}>{children}</div>
      </div>
    </motion.div>
  )
}

function TopBar() {
  return (
    <div className="bg-gradient-to-r from-primary via-secondary to-primary text-primary-foreground text-xs sm:text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {contactLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <item.icon className="h-4 w-4" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden lg:inline text-primary-foreground/80">Follow us</span>
          <div className="flex items-center gap-2">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="h-9 w-9 flex items-center justify-center rounded-full border border-primary-foreground/20 bg-white/10 backdrop-blur-sm hover:bg-primary-foreground/15 hover:border-primary-foreground/40 transition-colors"
              >
                <item.icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) return null

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-neutral-900 ${
          isScrolled ? "shadow-sm border-b border-border/70" : "border-b border-transparent"
        }`}
      >
        <AnimatePresence initial={false}>
          {!isScrolled && (
            <motion.div
              key="topbar"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <TopBar />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo (increased size) */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
                <Image
                  src="/logo.png"
                  alt="TerraFortis Africa logo"
                  width={50}
                  height={50}
                  className="h-15 w-24"
                  priority
                />
              </motion.div>
              <span className="text-xl font-serif font-bold text-foreground group-hover:text-secondary transition-colors">
                TerraFortis Africa
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    className="relative px-4 py-2 rounded-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span
                      className={`relative z-10 font-medium transition-colors ${
                        pathname === item.href ? "text-primary" : "text-foreground hover:text-secondary"
                      }`}
                    >
                      {item.name}
                    </span>
                    {pathname === item.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute inset-0 bg-secondary/10 rounded-lg"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle with interactive effect */}
              <InteractiveButton paddingClassName="p-1 rounded-full">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className="rounded-full"
                  aria-label="Toggle theme"
                >
                  <motion.div
                    initial={{ scale: 0.5, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.3 }}
                    key={theme}
                  >
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5 text-accent" />
                    ) : (
                      <Moon className="h-5 w-5 text-primary" />
                    )}
                  </motion.div>
                </Button>
              </InteractiveButton>

              {/* CTA Button - Desktop with interactive effect */}
              <InteractiveButton>
                <Button
                  asChild
                  className="hidden md:flex bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </InteractiveButton>

              {/* Mobile Menu Toggle with interactive effect */}
              <InteractiveButton paddingClassName="rounded-full">
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden rounded-full"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </InteractiveButton>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 md:hidden bg-background"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-3xl font-serif font-semibold transition-colors ${
                      pathname === item.href ? "text-secondary" : "text-foreground hover:text-secondary"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
