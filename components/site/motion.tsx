"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"
import Image from "next/image"
import {
  MotionConfig,
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion"
import { cn } from "@/lib/utils"

export const ease = [0.22, 1, 0.36, 1] as const

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

/* ------------------------------------------------------------------ */
/* Reveal: fade + slide in when scrolled into view                     */
/* ------------------------------------------------------------------ */
type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  x?: number
  duration?: number
  amount?: number
}

export function Reveal({ children, className, delay = 0, y = 28, x = 0, duration = 0.9, amount = 0.2 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, ease, delay }}
    >
      {children}
    </motion.div>
  )
}

/* Stagger container + items */
export function Stagger({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  amount = 0.15,
}: {
  children: ReactNode
  className?: string
  stagger?: number
  delay?: number
  amount?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, y = 28 }: { children: ReactNode; className?: string; y?: number }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
      }}
    >
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* WordReveal: headline words rise from a mask                         */
/* ------------------------------------------------------------------ */
export function WordReveal({
  text,
  className,
  delay = 0,
  highlight = [],
  highlightClassName = "italic text-gold",
  inView = false,
}: {
  text: string
  className?: string
  delay?: number
  highlight?: string[]
  highlightClassName?: string
  inView?: boolean
}) {
  const words = text.split(" ")
  const trigger = inView
    ? { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.5 } }
    : { initial: "hidden", animate: "show" }
  return (
    <motion.span
      className={cn("inline", className)}
      {...trigger}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: delay } } }}
      aria-label={text}
    >
      {words.map((word, i) => {
        const clean = word.replace(/[.,!?]/g, "")
        const isHi = highlight.includes(clean)
        return (
          <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom" aria-hidden="true">
            <motion.span
              className={cn("inline-block will-change-transform", isHi && highlightClassName)}
              variants={{
                hidden: { y: "110%", rotate: 4 },
                show: { y: "0%", rotate: 0, transition: { duration: 0.9, ease } },
              }}
            >
              {word}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        )
      })}
    </motion.span>
  )
}

/* ------------------------------------------------------------------ */
/* ParallaxImage: image drifts inside its frame as you scroll          */
/* ------------------------------------------------------------------ */
export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  strength = 12,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  children,
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  strength?: number
  priority?: boolean
  sizes?: string
  children?: ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : [`-${strength}%`, `${strength}%`])
  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[18%] -bottom-[18%]">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", imgClassName)} />
      </motion.div>
      {children}
    </div>
  )
}

/* Generic scroll-linked parallax wrapper for any element */
export function Parallax({
  children,
  className,
  offset = 60,
}: {
  children: ReactNode
  className?: string
  offset?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const raw = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [offset, -offset])
  const y = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 })
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}

/* ------------------------------------------------------------------ */
/* Counter: animates a number when it enters the viewport              */
/* Renders the final value on the server so it is never "0".           */
/* ------------------------------------------------------------------ */
export function Counter({ value, suffix = "", className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(value)
  const started = useRef(false)

  // After hydration, reset to 0 (if still off-screen) so the count-up plays on reveal.
  useEffect(() => {
    if (!reduce && !started.current && ref.current) {
      const r = ref.current.getBoundingClientRect()
      if (r.top > window.innerHeight) setDisplay(0)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!inView || started.current || reduce) return
    started.current = true
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value, reduce])

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* ScrollText: words light up one-by-one as the block scrolls past     */
/* ------------------------------------------------------------------ */
export function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] })
  const words = text.split(" ")
  return (
    <p ref={ref} className={cn("flex flex-wrap", className)} aria-label={text}>
      {words.map((w, i) => {
        const start = i / words.length
        const end = start + 1 / words.length
        return <ScrollWord key={i} word={w} progress={scrollYProgress} range={[start, end]} />
      })}
    </p>
  )
}

function ScrollWord({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const reduce = useReducedMotion()
  const opacity = useTransform(progress, range, reduce ? [1, 1] : [0.18, 1])
  return (
    <span className="relative mr-[0.25em] mt-[0.1em]" aria-hidden="true">
      <motion.span style={{ opacity }}>{word}</motion.span>
    </span>
  )
}

/* ------------------------------------------------------------------ */
/* Scroll progress bar pinned to the top of the viewport               */
/* ------------------------------------------------------------------ */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-leaf via-gold to-leaf"
      aria-hidden="true"
    />
  )
}
