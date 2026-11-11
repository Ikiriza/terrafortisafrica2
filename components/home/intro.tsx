"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { images, mission } from "@/lib/site"
import { Parallax, ParallaxImage, Reveal } from "@/components/site/motion"
import { ButtonLink, Eyebrow } from "@/components/site/ui"

const points = [
  "African-rooted team with deep field experience",
  "Science-based, farmer-first approaches",
  "Partnerships built on integrity and accountability",
]

/** Circular badge with text that rotates slowly. */
export function RotatingBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`relative grid h-32 w-32 place-items-center rounded-full bg-gold text-forest-deep shadow-2xl md:h-36 md:w-36 ${className}`}>
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-current font-sans text-[8.2px] font-semibold uppercase tracking-[0.18em]">
          <textPath href="#badge-circle">For Food · Agriculture · Environment ·</textPath>
        </text>
      </svg>
      <Image src="/logo.png" alt="" width={525} height={313} className="h-auto w-12 md:w-14 rounded-sm bg-white p-1" />
    </div>
  )
}

export function HomeIntro() {
  return (
    <section id="who-we-are" className="relative overflow-hidden py-24 md:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Image composition */}
        <div className="relative pb-12 sm:pb-16 lg:col-span-6 lg:pb-0">
          <Reveal y={40}>
            <ParallaxImage
              src={images.womanFarmer}
              alt="A woman farmer harvesting her crop"
              className="aspect-[4/5] w-[82%] rounded-[2rem] shadow-2xl shadow-primary/20"
            />
          </Reveal>
          <Parallax offset={70} className="absolute bottom-[-6%] right-0 w-[48%]">
            <Reveal delay={0.2} y={50}>
              <ParallaxImage
                src={images.grainHands}
                alt="Hands holding freshly harvested grain"
                strength={8}
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="aspect-square rounded-[1.5rem] border-[6px] border-background shadow-2xl"
              />
            </Reveal>
          </Parallax>
          <Parallax offset={30} className="absolute -top-6 right-[8%] md:right-[12%]">
            <RotatingBadge />
          </Parallax>
        </div>

        {/* Copy */}
        <div className="lg:col-span-6">
          <Reveal>
            <Eyebrow className="mb-5">Who we are</Eyebrow>
            <h2 className="text-[2.1rem] leading-[1.1] text-primary sm:text-5xl text-balance">
              An African firm rooted in the soil it <span className="italic text-secondary">serves.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              TerraFortis Africa (TFA) is a consultancy and development firm delivering innovative, sustainable and
              green solutions that improve livelihoods, build wealth in rural Africa and protect the environment.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <blockquote className="mt-8 rounded-2xl border-l-4 border-gold bg-sand/80 p-6 text-[0.98rem] leading-relaxed text-foreground/80">
              <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Our mission</span>
              {mission}
            </blockquote>
          </Reveal>
          <Reveal delay={0.24}>
            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-foreground/85">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.3} className="mt-10">
            <ButtonLink href="/about" variant="primary">
              More about TFA
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
