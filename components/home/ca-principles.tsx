"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { caBenefits, caPrinciples } from "@/lib/site"
import { Reveal, Stagger, StaggerItem, ease } from "@/components/site/motion"
import { SectionHeading } from "@/components/site/ui"
import { cn } from "@/lib/utils"

export function CaPrinciples() {
  const [active, setActive] = useState(0)

  return (
    <section className="grain topo relative overflow-hidden bg-forest-deep py-24 text-white md:py-32">
      {/* soft glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[30rem] w-[30rem] rounded-full bg-secondary/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[26rem] w-[26rem] rounded-full bg-gold/10 blur-[120px]" />

      <div className="container-x relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <SectionHeading
            tone="light"
            className="lg:col-span-7"
            eyebrow="Our core expertise"
            title={
              <>
                Conservation Agriculture: three principles, <span className="italic text-gold">applied together.</span>
              </>
            }
          />
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-white/70">
              As defined by FAO, Conservation Agriculture rests on three linked principles. Used together, they protect
              the soil, save water and labour, and make farms more resilient to climate shocks.
            </p>
          </Reveal>
        </div>

        {/* Desktop: expanding panels */}
        <div className="mt-16 hidden h-[34rem] gap-4 lg:flex">
          {caPrinciples.map((p, i) => {
            const isActive = active === i
            return (
              <motion.button
                key={p.title}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                initial={false}
                animate={{ flexGrow: isActive ? 2.4 : 1 }}
                transition={{ duration: 0.7, ease }}
                style={{ flexBasis: 0, flexShrink: 1 }}
                className="group relative min-w-0 overflow-hidden rounded-[2rem] text-left"
              >
                <Image
                  src={p.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={cn(
                    "object-cover transition-transform duration-[1.4s] ease-out",
                    isActive ? "scale-100" : "scale-110",
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-0 transition-colors duration-700",
                    isActive
                      ? "bg-gradient-to-t from-forest-deep via-forest-deep/50 to-transparent"
                      : "bg-forest-deep/70",
                  )}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-8">
                  <span
                    className={cn(
                      "font-display text-7xl leading-none transition-colors duration-500",
                      isActive ? "text-gold" : "text-white/30",
                    )}
                  >
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-3xl text-white">{p.title}</h3>
                    <motion.p
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 16, height: isActive ? "auto" : 0 }}
                      transition={{ duration: 0.5, ease, delay: isActive ? 0.2 : 0 }}
                      className="max-w-md overflow-hidden text-lg leading-relaxed text-white/80"
                    >
                      <span className="block pt-3">{p.text}</span>
                    </motion.p>
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Mobile / tablet: stacked cards */}
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-3 lg:hidden">
          {caPrinciples.map((p, i) => (
            <StaggerItem key={p.title}>
              <div className="relative flex min-h-[22rem] flex-col justify-end overflow-hidden rounded-[1.75rem] p-6">
                <Image src={p.image} alt="" fill sizes="(min-width: 640px) 33vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-forest-deep/10" />
                <div className="relative">
                  <span className="font-display text-5xl text-gold">0{i + 1}</span>
                  <h3 className="mt-2 text-2xl text-white">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/80">{p.text}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Benefits */}
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {caBenefits.map((b) => (
            <StaggerItem key={b}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-forest-deep">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <p className="text-[0.95rem] leading-snug text-white/85">{b}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <p className="mt-6 text-xs text-white/40">
          Source: Food and Agriculture Organization of the United Nations (FAO), Conservation Agriculture.
        </p>
      </div>
    </section>
  )
}
