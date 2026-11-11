"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { coreValues, coreValuesIntro, images } from "@/lib/site"
import { Icon } from "@/components/site/icons"
import { ParallaxImage, Reveal, ease } from "@/components/site/motion"
import { Eyebrow } from "@/components/site/ui"
import { cn } from "@/lib/utils"

export function CoreValues() {
  const [open, setOpen] = useState<number>(0)

  return (
    <section className="relative bg-sand py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow className="mb-5">Core values</Eyebrow>
              <h2 className="text-[2.1rem] leading-[1.1] text-primary sm:text-5xl text-balance">
                Principles that guide every <span className="italic text-secondary">decision.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{coreValuesIntro}</p>
            </Reveal>
            <Reveal delay={0.15} className="mt-10 hidden lg:block">
              <ParallaxImage
                src={images.seedling}
                alt="A young plant sprouting from the soil"
                className="aspect-[4/3] rounded-[1.75rem]"
              />
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="space-y-4">
            {coreValues.map((v, i) => {
              const isOpen = open === i
              return (
                <Reveal key={v.title} delay={i * 0.06}>
                  <div
                    className={cn(
                      "overflow-hidden rounded-[1.5rem] border transition-all duration-500",
                      isOpen
                        ? "border-primary bg-primary text-white shadow-[0_30px_60px_-30px_rgba(14,59,42,0.6)]"
                        : "border-border bg-card hover:border-primary/30",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-5 p-6 text-left md:p-7"
                    >
                      <span
                        className={cn(
                          "grid h-14 w-14 shrink-0 place-items-center rounded-2xl transition-colors duration-500",
                          isOpen ? "bg-gold text-forest-deep" : "bg-secondary/10 text-secondary",
                        )}
                      >
                        <Icon name={v.icon} className="h-6 w-6" />
                      </span>
                      <span className="flex-1">
                        <span className={cn("block font-sans text-xs font-semibold tracking-[0.2em]", isOpen ? "text-gold" : "text-foreground/40")}>
                          0{i + 1}
                        </span>
                        <span className={cn("mt-1 block font-display text-xl md:text-2xl", isOpen ? "text-white" : "text-primary")}>
                          {v.title}
                        </span>
                      </span>
                      <span
                        className={cn(
                          "grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-500",
                          isOpen ? "rotate-45 border-white/30 text-white" : "border-primary/15 text-primary",
                        )}
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease }}
                        >
                          <p className="px-6 pb-7 leading-relaxed text-white/80 md:pl-[6.75rem] md:pr-10">{v.text}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
