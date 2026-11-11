import type { Metadata } from "next"
import { ArrowRight } from "lucide-react"
import { impactPathway, images } from "@/lib/site"
import { PageHero } from "@/components/site/page-hero"
import { Reveal, Stagger, StaggerItem } from "@/components/site/motion"
import { SectionHeading } from "@/components/site/ui"
import { WorkGrid } from "@/components/work/work-grid"
import { VisionBand } from "@/components/site/vision-band"
import { CtaBand } from "@/components/site/cta-band"

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore TerraFortis Africa's programme areas — Conservation Agriculture, mechanization hire services, land restoration, climate resilience, value chains and evidence for better programmes.",
}

export default function WorkPage() {
  return (
    <>
      <PageHero
        crumb="Our Work"
        eyebrow="Programme areas"
        title="Work that takes root and keeps growing."
        highlight={["root"]}
        subtitle="From farmer field schools to national strategies — the kinds of programmes we design, deliver and learn from across rural Africa."
        image={images.heroWork}
      />

      <section className="py-24 md:py-32">
        <div className="container-x">
          <div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
            <SectionHeading
              className="lg:col-span-7"
              eyebrow="Where we add value"
              title={
                <>
                  Programmes built for the <span className="italic text-secondary">realities</span> of smallholder farming.
                </>
              }
            />
            <Reveal delay={0.1} className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Filter by area to see how we support partners — and hover a card to learn more about each type of
                engagement.
              </p>
            </Reveal>
          </div>
          <WorkGrid />
        </div>
      </section>

      {/* Impact pathway */}
      <section className="bg-sand py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            align="center"
            eyebrow="Our impact pathway"
            title={
              <>
                How our work turns into <span className="italic text-secondary">lasting</span> change.
              </>
            }
            description="Every engagement is designed around a clear pathway — from new knowledge on the farm to healthier landscapes and better lives."
          />
          <Stagger className="mt-16 grid gap-4 md:grid-cols-5" stagger={0.12}>
            {impactPathway.map((s, i) => (
              <StaggerItem key={s.title} className="relative">
                <div className="group h-full rounded-[1.5rem] border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:bg-primary">
                  <span className="font-display text-4xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-xl text-primary transition-colors group-hover:text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-white/70">
                    {s.text}
                  </p>
                </div>
                {i < impactPathway.length - 1 && (
                  <span className="absolute -right-4 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full bg-secondary text-white shadow-md md:grid">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                )}
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <VisionBand image={images.goldenField} />

      <CtaBand
        title="Have a programme in mind?"
        text="Share your terms of reference or a short brief — we’ll come back with ideas on how we can help."
        image={images.fieldWorkers}
        className="py-20 md:py-28"
      />
    </>
  )
}
