"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Plus } from "lucide-react"
import { faqs } from "@/lib/site"
import { cn } from "@/lib/utils"
import { Reveal, ease } from "./motion"
import { ButtonLink, SectionHeading } from "./ui"

export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section className="py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Questions we are <span className="italic text-secondary">often</span> asked.
              </>
            }
            description="Can’t find what you’re looking for? Our team is happy to talk through your context and needs."
          />
          <Reveal delay={0.15} className="mt-8">
            <ButtonLink href="/contact" variant="primary">
              Ask us anything
            </ButtonLink>
          </Reveal>
        </div>
        <div className="divide-y divide-border border-y border-border lg:col-span-7">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 0.05} y={16}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={cn(
                      "font-display text-xl transition-colors md:text-[1.4rem]",
                      isOpen ? "text-secondary" : "text-primary group-hover:text-secondary",
                    )}
                  >
                    {f.q}
                  </span>
                  <span
                    className={cn(
                      "grid h-10 w-10 shrink-0 place-items-center rounded-full border transition-all duration-500",
                      isOpen ? "rotate-45 border-secondary bg-secondary text-white" : "border-primary/15 text-primary",
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
                      transition={{ duration: 0.45, ease }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-7 leading-relaxed text-muted-foreground">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
