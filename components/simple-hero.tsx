"use client"

import { motion } from "framer-motion"
import clsx from "clsx"

type SimpleHeroProps = {
  title: string
  subtitle?: string
  className?: string
  backgroundImage?: string
}

export function SimpleHero({ title, subtitle, className, backgroundImage = "/forest-trees-nature-carbon-offset.jpg" }: SimpleHeroProps) {
  return (
    <section className={clsx("relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden", className)}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(180deg, rgba(16,39,33,0.72), rgba(16,39,33,0.45)), url('${backgroundImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/35 to-background" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(31,122,92,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(212,175,55,0.12),transparent_32%)]" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground">{title}</h1>
          {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  )
}
