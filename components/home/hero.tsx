"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Leaf, Sprout, Tractor } from "lucide-react"
import { images } from "@/lib/site"
import { WordReveal, ease } from "@/components/site/motion"
import { ButtonLink } from "@/components/site/ui"

const pillars = [
  { icon: Sprout, title: "Conservation Agriculture", text: "Healthier soils, steadier yields" },
  { icon: Tractor, title: "Sustainable Mechanization", text: "Right-scale power for smallholders" },
  { icon: Leaf, title: "Environment & Climate", text: "Restored land, resilient farms" },
]

export function HomeHero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "30%"])
  const bgScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1.06, 1.18])
  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "35%"])
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="grain relative flex min-h-[100svh] flex-col overflow-hidden bg-forest-deep text-white">
      {/* Background with parallax + slow Ken Burns zoom */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease }}
          className="absolute inset-0"
        >
          <Image
            src={images.heroHome}
            alt="A farm road winding through green fields in Uganda"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/90 via-forest-deep/55 to-forest-deep/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-transparent to-forest-deep/40" />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="container-x relative z-10 flex flex-1 flex-col justify-center pb-10 pt-32 md:pt-36"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.3 }}
          className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white/90 backdrop-blur-md sm:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-leaf opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-leaf" />
          </span>
          Agricultural consulting &amp; development<span className="hidden sm:inline"> · Kampala, Uganda</span>
        </motion.p>

        <h1 className="max-w-5xl text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl xl:text-[5.1rem]">
          <WordReveal
            text="Cultivating resilient farms, landscapes and livelihoods across Africa."
            highlight={["resilient", "livelihoods"]}
            delay={0.45}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1.1 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/80 md:text-xl"
        >
          We help governments, development partners, agribusinesses and farmers scale{" "}
          <span className="text-white">Conservation Agriculture</span> and{" "}
          <span className="text-white">Sustainable Agricultural Mechanization</span> — raising productivity while
          restoring the land it depends on.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 1.3 }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <ButtonLink href="/services" variant="gold">
            Explore our services
          </ButtonLink>
          <ButtonLink href="/about" variant="outline-light">
            Who we are
          </ButtonLink>
        </motion.div>
      </motion.div>

      {/* Pillars strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 1.5 }}
        className="container-x relative z-10 hidden pb-10 md:block"
      >
        <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-md">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="group flex items-center gap-4 border-white/10 p-6 transition-colors hover:bg-white/[0.06] [&:not(:first-child)]:border-l"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold/15 text-gold transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                <p.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/50">0{i + 1}</p>
                <p className="font-display text-lg text-white">{p.title}</p>
                <p className="text-sm text-white/60">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll cue (mobile) */}
      <motion.a
        href="#who-we-are"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="relative z-10 mx-auto mb-8 grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white md:hidden"
      >
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  )
}
