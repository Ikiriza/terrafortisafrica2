"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { navItems, site } from "@/lib/site"
import { ease } from "./motion"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const last = useRef(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24)
    const goingDown = y > last.current
    setHidden(goingDown && y > 480 && !open)
    last.current = y
  })

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: 1 }}
        transition={{ duration: 0.6, ease }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className={cn("transition-[padding] duration-500", scrolled ? "pt-3" : "pt-4 md:pt-6")}>
          <div className="container-x">
            <nav
              aria-label="Main"
              className={cn(
                "flex items-center justify-between rounded-2xl border pl-3 pr-2 transition-all duration-500 sm:pl-4",
                scrolled
                  ? "h-16 border-black/5 bg-white/90 shadow-[0_10px_40px_-12px_rgba(7,42,29,0.25)] backdrop-blur-xl"
                  : "h-[72px] border-white/50 bg-white/95 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.45)]",
              )}
            >
              <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} — home`}>
                <Image
                  src="/logo.png"
                  alt={`${site.name} logo`}
                  width={525}
                  height={313}
                  priority
                  className={cn("w-auto transition-all duration-500", scrolled ? "h-10" : "h-12")}
                />
              </Link>

              <ul className="hidden items-center gap-1 lg:flex">
                {navItems.map((item) => {
                  const active = isActive(item.href)
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "relative block rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors",
                          active ? "text-primary" : "text-foreground/70 hover:text-primary",
                        )}
                      >
                        {active && (
                          <motion.span
                            layoutId="nav-pill"
                            className="absolute inset-0 rounded-full bg-primary/[0.07]"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        <span className="relative">{item.name}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>

              <div className="flex items-center gap-2">
                <a
                  href={site.phoneHref}
                  className="hidden items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-primary xl:flex"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-secondary/10 text-secondary">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  {site.phone}
                </a>
                <Link
                  href="/contact"
                  className="group hidden items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-forest-deep sm:inline-flex"
                >
                  Work with us
                  <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => setOpen((v) => !v)}
                  aria-label={open ? "Close menu" : "Open menu"}
                  aria-expanded={open}
                  className="relative grid h-12 w-12 place-items-center rounded-xl bg-sand text-primary lg:hidden"
                >
                  <span className="sr-only">Menu</span>
                  <span
                    className={cn(
                      "absolute h-[2px] w-5 rounded bg-current transition-all duration-300",
                      open ? "rotate-45" : "-translate-y-[5px]",
                    )}
                  />
                  <span
                    className={cn(
                      "absolute h-[2px] w-5 rounded bg-current transition-all duration-300",
                      open ? "-rotate-45" : "translate-y-[5px]",
                    )}
                  />
                </button>
              </div>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Mobile / tablet menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 3rem) 3rem)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 3rem) 3rem)" }}
            transition={{ duration: 0.7, ease }}
            className="grain topo fixed inset-0 z-40 overflow-y-auto bg-forest-deep text-white lg:hidden"
          >
            <div className="container-x flex min-h-full flex-col pb-10 pt-32">
              <ul className="space-y-1">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.07, duration: 0.6, ease }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-white/10 py-4"
                    >
                      <span className="font-sans text-xs text-gold">0{i + 1}</span>
                      <span
                        className={cn(
                          "font-display text-4xl sm:text-5xl transition-colors",
                          isActive(item.href) ? "text-gold" : "text-white group-hover:text-gold",
                        )}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-auto space-y-3 pt-10 text-sm text-white/70"
              >
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 break-all hover:text-white">
                  <Mail className="h-4 w-4 shrink-0 text-gold" /> {site.email}
                </a>
                <a href={site.phoneHref} className="flex items-center gap-3 hover:text-white">
                  <Phone className="h-4 w-4 shrink-0 text-gold" /> {site.phone}
                </a>
                <p className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 shrink-0 text-gold" /> {site.location}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
