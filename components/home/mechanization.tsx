"use client"

import { motion } from "framer-motion"
import { Tractor } from "lucide-react"
import { images, samTechnologies } from "@/lib/site"
import { Parallax, ParallaxImage, Reveal } from "@/components/site/motion"
import { ButtonLink, Eyebrow } from "@/components/site/ui"

export function Mechanization() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6 lg:order-2">
          <div className="relative">
            <Reveal y={40}>
              <ParallaxImage
                src={images.oxenPlough}
                alt="A farmer ploughing a field with oxen"
                className="aspect-[5/4] rounded-[2rem] shadow-2xl shadow-primary/20"
              />
            </Reveal>
            <Parallax offset={50} className="absolute -bottom-10 -left-4 w-[62%] sm:-left-10">
              <Reveal delay={0.2}>
                <div className="rounded-3xl bg-primary p-6 text-white shadow-2xl md:p-7">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gold text-forest-deep">
                    <Tractor className="h-6 w-6" />
                  </span>
                  <p className="mt-4 font-display text-xl leading-snug md:text-2xl">
                    From hand tools to tractors — the right power at every scale.
                  </p>
                </div>
              </Reveal>
            </Parallax>
          </div>
        </div>

        <div className="lg:col-span-6 lg:order-1">
          <Reveal>
            <Eyebrow className="mb-5">Sustainable Agricultural Mechanization</Eyebrow>
            <h2 className="text-[2.1rem] leading-[1.1] text-primary sm:text-5xl text-balance">
              Mechanization is a <span className="italic text-secondary">system</span>, not only a machine.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Sustainable Agricultural Mechanization (SAM) covers every level of farm power — from simple hand tools
              and animal traction to motorised equipment — chosen to be economically, socially and environmentally
              sound, and compatible with Conservation Agriculture.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We help partners select the right technologies and build the hire-service businesses, operator skills and
              spare-parts networks that make them accessible to smallholder farmers.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">Technologies we promote</p>
            <motion.ul
              className="mt-4 flex flex-wrap gap-2.5"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
            >
              {samTechnologies.map((t) => (
                <motion.li
                  key={t}
                  variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
                  className="rounded-full border border-primary/15 bg-white px-4 py-2 text-sm font-medium text-primary shadow-sm transition-colors hover:border-secondary hover:bg-secondary hover:text-white"
                >
                  {t}
                </motion.li>
              ))}
            </motion.ul>
          </Reveal>
          <Reveal delay={0.26} className="mt-10">
            <ButtonLink href="/services#mechanization" variant="primary">
              Mechanization services
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
