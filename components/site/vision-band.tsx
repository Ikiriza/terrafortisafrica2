"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { Quote } from "lucide-react"
import { images, vision } from "@/lib/site"
import { ScrollText } from "./motion"

/** Full-bleed parallax band with the vision statement lighting up word-by-word. */
export function VisionBand({ image = images.sunsetFields }: { image?: string }) {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-15%", "15%"])

  return (
    <section ref={ref} className="grain relative overflow-hidden bg-forest-deep py-28 md:py-44">
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[20%] -bottom-[20%]">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-forest-deep/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/60 via-transparent to-forest-deep/60" />

      <div className="container-x relative">
        <div className="mx-auto max-w-5xl text-center">
          <span className="mx-auto mb-8 grid h-16 w-16 place-items-center rounded-full border border-gold/40 text-gold">
            <Quote className="h-7 w-7" />
          </span>
          <p className="mb-6 text-[0.72rem] font-semibold uppercase tracking-[0.25em] text-gold">Our vision</p>
          <ScrollText
            text={vision}
            className="justify-center font-display text-[1.75rem] leading-[1.3] text-white sm:text-4xl md:text-5xl md:leading-[1.2]"
          />
        </div>
      </div>
    </section>
  )
}
