"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { workAreas, workCategories } from "@/lib/site"
import { cn } from "@/lib/utils"
import { ease } from "@/components/site/motion"

export function WorkGrid() {
  const [filter, setFilter] = useState<(typeof workCategories)[number]>("All")
  const items = filter === "All" ? workAreas : workAreas.filter((w) => w.category === filter)

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter by area"
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {workCategories.map((c) => {
          const active = filter === c
          return (
            <button
              key={c}
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(c)}
              className={cn(
                "relative shrink-0 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
                active ? "border-primary text-white" : "border-border bg-card text-foreground/70 hover:border-primary/40 hover:text-primary",
              )}
            >
              {active && (
                <motion.span
                  layoutId="work-filter"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative">{c}</span>
            </button>
          )
        })}
      </div>

      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {items.map((w) => (
            <motion.article
              key={w.title}
              layout
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.5, ease }}
              className="group relative flex min-h-[28rem] flex-col justify-end overflow-hidden rounded-[1.75rem] bg-forest-deep p-7 text-white"
            >
              <Image
                src={w.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/70 to-forest-deep/5 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/30" />

              <span className="absolute left-6 top-6 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                {w.category}
              </span>

              <div className="relative">
                <h3 className="text-2xl leading-snug">{w.title}</h3>
                <p className="mt-3 leading-relaxed text-white/75 transition-all duration-500 md:max-h-0 md:opacity-0 md:group-hover:max-h-40 md:group-hover:opacity-100 md:group-focus-within:max-h-40 md:group-focus-within:opacity-100">
                  {w.text}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {w.tags.map((t) => (
                    <li key={t} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
