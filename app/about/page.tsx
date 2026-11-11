import type { Metadata } from "next"
import { Eye, Target } from "lucide-react"
import { images, mission, stats, vision } from "@/lib/site"
import { PageHero } from "@/components/site/page-hero"
import { Counter, Parallax, ParallaxImage, Reveal, Stagger, StaggerItem } from "@/components/site/motion"
import { Eyebrow } from "@/components/site/ui"
import { CoreValues } from "@/components/about/core-values"
import { Team } from "@/components/about/team"
import { CtaBand } from "@/components/site/cta-band"
import { RotatingBadge } from "@/components/home/intro"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "TerraFortis Africa is a consultancy and development firm promoting Conservation Agriculture, Sustainable Agricultural Mechanization and green solutions for rural Africa. Our vision, mission, values and leadership.",
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        eyebrow="About TerraFortis Africa"
        title="For food, agriculture, and environment."
        highlight={["environment"]}
        subtitle="An African consultancy and development firm committed to innovative, sustainable and green solutions for improved livelihoods and wealth creation in rural Africa."
        image={images.heroAbout}
      />

      {/* Who we are */}
      <section className="py-24 md:py-32">
        <div className="container-x grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow className="mb-5">Who we are</Eyebrow>
              <h2 className="text-[2.1rem] leading-[1.1] text-primary sm:text-5xl text-balance">
                Practical solutions for Africa’s <span className="italic text-secondary">farms</span> and landscapes.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                TerraFortis Africa (TFA) is dedicated to delivering innovative, sustainable, and green solutions that
                improve livelihoods, build wealth in rural Africa, and protect the environment.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our work centres on Conservation Agriculture (CA) and Sustainable Agricultural Mechanization (SAM) —
                proven approaches that raise agricultural productivity while conserving soil, water and biodiversity.
                We partner with governments, development partners, the private sector and farmer organisations to turn
                these approaches into everyday practice.
              </p>
            </Reveal>
          </div>
          <div className="relative pb-6 lg:col-span-6 lg:pb-0">
            <Reveal y={40}>
              <ParallaxImage
                src={images.farmerField}
                alt="A farmer tending crops in a green field"
                className="ml-auto aspect-[4/5] w-[85%] rounded-[2rem] shadow-2xl shadow-primary/20"
              />
            </Reveal>
            <Parallax offset={60} className="absolute -left-2 bottom-10 w-[45%] sm:left-0">
              <Reveal delay={0.2}>
                <ParallaxImage
                  src={images.soilHands}
                  alt="Hands holding healthy soil"
                  strength={8}
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="aspect-square rounded-[1.5rem] border-[6px] border-background shadow-2xl"
                />
              </Reveal>
            </Parallax>
            <Parallax offset={30} className="absolute -right-2 -top-10 sm:-right-6">
              <RotatingBadge />
            </Parallax>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="pb-24 md:pb-32">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="grain topo relative h-full overflow-hidden rounded-[2rem] bg-primary p-8 text-white md:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-gold text-forest-deep">
                <Eye className="h-6 w-6" />
              </span>
              <p className="relative mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Our vision</p>
              <p className="relative mt-4 font-display text-2xl leading-snug md:text-[1.7rem] md:leading-[1.3]">{vision}</p>
            </article>
          </Reveal>
          <Reveal delay={0.12} className="h-full">
            <article className="relative h-full overflow-hidden rounded-[2rem] border border-border bg-card p-8 md:p-12">
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-leaf/15 blur-3xl" />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-white">
                <Target className="h-6 w-6" />
              </span>
              <p className="relative mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                Mission statement
              </p>
              <p className="relative mt-4 font-display text-2xl leading-snug text-primary md:text-[1.7rem] md:leading-[1.3]">
                {mission}
              </p>
            </article>
          </Reveal>
        </div>
      </section>

      <CoreValues />

      {/* Stats */}
      <section className="grain relative overflow-hidden bg-forest-deep py-20 text-white md:py-24">
        <div className="absolute inset-0 opacity-25">
          <ParallaxImage src={images.aerialPlots} alt="" sizes="100vw" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-forest-deep/80" />
        <Stagger className="container-x relative grid grid-cols-2 gap-y-12 md:grid-cols-4" stagger={0.1}>
          {stats.map((s, i) => (
            <StaggerItem
              key={s.label}
              className={`px-4 text-center ${i > 0 ? "md:border-l md:border-white/15" : ""} ${i % 2 === 1 ? "border-l border-white/15 md:border-l" : ""}`}
            >
              <Counter value={s.value} suffix={s.suffix} className="font-display text-5xl text-gold md:text-6xl" />
              <p className="mt-3 text-sm uppercase tracking-[0.18em] text-white/70">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <Team />

      <CtaBand title="Partner with a team that knows the field." />
    </>
  )
}
