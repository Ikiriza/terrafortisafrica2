"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { WordReveal, ease } from "./motion"

/** Parallax hero used at the top of inner pages. */
export function PageHero({
  title,
  highlight = [],
  subtitle,
  eyebrow,
  image,
  crumb,
}: {
  title: string
  highlight?: string[]
  subtitle?: string
  eyebrow?: string
  image: string
  crumb: string
}) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "35%"])
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.08, 1.2])
  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "45%"])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section ref={ref} className="grain relative flex min-h-[78svh] items-end overflow-hidden bg-forest-deep md:min-h-[82svh]">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/55 to-forest-deep/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/80 via-forest-deep/20 to-transparent" />

      <motion.div style={{ y: contentY, opacity: fade }} className="container-x relative z-10 pb-20 pt-40 md:pb-28">
        <motion.nav
          aria-label="Breadcrumb"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
          className="mb-6 flex items-center gap-2 text-sm text-white/70"
        >
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 text-gold" />
          <span className="text-white">{crumb}</span>
        </motion.nav>

        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.25 }}
            className="mb-5 inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold"
          >
            <span className="h-px w-8 bg-gold/70" />
            {eyebrow}
          </motion.p>
        )}

        <h1 className="max-w-4xl text-[2.6rem] leading-[1.05] text-white sm:text-6xl md:text-7xl">
          <WordReveal text={title} highlight={highlight} delay={0.3} />
        </h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.7 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>

      {/* Curved bottom edge */}
      <svg
        className="absolute -bottom-px left-0 z-10 h-10 w-full text-background md:h-16"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path fill="currentColor" d="M0,80 L0,40 C240,80 480,0 720,20 C960,40 1200,80 1440,30 L1440,80 Z" />
      </svg>
    </section>
  )
}
