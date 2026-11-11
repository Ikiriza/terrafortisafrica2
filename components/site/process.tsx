"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { processSteps } from "@/lib/site"
import { ease } from "./motion"
import { SectionHeading } from "./ui"

export function Process({
  eyebrow = "How we work",
  title = (
    <>
      A clear path from <span className="italic text-secondary">brief</span> to lasting impact.
    </>
  ),
  description = "Transparent governance, practical reporting and measurable outcomes keep every partner aligned from day one.",
}: {
  eyebrow?: string
  title?: ReactNode
  description?: string
}) {
  return (
    <section className="relative overflow-hidden bg-sand py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align="center" />

        <div className="relative mt-20">
          {/* Animated connector line (desktop) */}
          <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-primary/10 lg:block">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 1.8, ease }}
              className="h-full origin-left bg-gradient-to-r from-secondary via-gold to-secondary"
            />
          </div>
          {/* Vertical connector (mobile) */}
          <div className="absolute bottom-8 left-7 top-8 w-px bg-primary/10 lg:hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.8, ease }}
              className="h-full w-full origin-top bg-gradient-to-b from-secondary via-gold to-secondary"
            />
          </div>

          <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease, delay: 0.2 + i * 0.15 }}
                className="group flex gap-6 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
              >
                <span className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border-4 border-sand bg-primary font-display text-lg text-gold shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-forest-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="lg:mt-6">
                  <h3 className="text-xl text-primary md:text-[1.35rem]">{step.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
