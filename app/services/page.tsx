import type { Metadata } from "next"
import Link from "next/link"
import { Check } from "lucide-react"
import { images, services } from "@/lib/site"
import { PageHero } from "@/components/site/page-hero"
import { Icon } from "@/components/site/icons"
import { ParallaxImage, Reveal, Stagger, StaggerItem } from "@/components/site/motion"
import { ButtonLink, SectionHeading } from "@/components/site/ui"
import { Process } from "@/components/site/process"
import { Faq } from "@/components/site/faq"
import { CtaBand } from "@/components/site/cta-band"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Conservation Agriculture, Sustainable Agricultural Mechanization, climate-smart agriculture, value chains, capacity building, research & MEL and policy support — TerraFortis Africa's consulting services.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What we do"
        title="Expertise that grows from the ground up."
        highlight={["grows"]}
        subtitle="Seven integrated service lines — anchored in Conservation Agriculture and Sustainable Agricultural Mechanization — to help farms, programmes and agribusinesses thrive."
        image={images.heroServices}
      />

      {/* Overview / quick navigation */}
      <section className="py-24 md:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our services"
            title={
              <>
                One partner, from <span className="italic text-secondary">field</span> to policy.
              </>
            }
            description="Every engagement is tailored. Most combine several of the services below — so you get one coherent team instead of a patchwork of consultants."
          />
          <Stagger className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={0.05}>
            {services.map((s, i) => (
              <StaggerItem key={s.id} y={16}>
                <Link
                  href={`#${s.id}`}
                  className="group flex h-full items-center gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:shadow-lg"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-[0.95rem] font-semibold leading-snug text-primary">
                    <span className="mr-1.5 text-xs text-foreground/40">0{i + 1}</span>
                    {s.title}
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Detailed services */}
      <div className="space-y-24 pb-24 md:space-y-36 md:pb-32">
        {services.map((s, i) => {
          const flip = i % 2 === 1
          return (
            <section key={s.id} id={s.id} className="container-x">
              <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
                <div className={cn("relative isolate lg:col-span-6", flip && "lg:order-2")}>
                  <span
                    className={cn(
                      "pointer-events-none absolute -top-[4.5rem] -z-10 font-display text-[7rem] italic leading-none text-secondary/15 md:-top-[6.5rem] md:text-[10rem]",
                      flip ? "left-6" : "right-6",
                    )}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Reveal y={40}>
                    <ParallaxImage
                      src={s.image}
                      alt=""
                      className="aspect-[5/4] rounded-[2rem] shadow-2xl shadow-primary/15"
                    />
                  </Reveal>
                  <span
                    className={cn(
                      "absolute -bottom-7 z-10 grid h-16 w-16 place-items-center rounded-2xl bg-gold text-forest-deep shadow-xl",
                      flip ? "right-8" : "left-8",
                    )}
                  >
                    <Icon name={s.icon} className="h-7 w-7" />
                  </span>
                </div>

                <div className={cn("lg:col-span-6", flip && "lg:order-1")}>
                  <Reveal>
                    <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-secondary">
                      Service {String(i + 1).padStart(2, "0")}
                    </p>
                    <h2 className="text-3xl leading-[1.12] text-primary md:text-[2.75rem] text-balance">{s.title}</h2>
                    <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{s.description}</p>
                  </Reveal>
                  <Reveal delay={0.12}>
                    <div className="mt-8 rounded-[1.5rem] border border-border bg-card p-6 md:p-7">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
                        What we deliver
                      </p>
                      <ul className="grid gap-3">
                        {s.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-3 text-foreground/85">
                            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-secondary text-white">
                              <Check className="h-3.5 w-3.5" />
                            </span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                  <Reveal delay={0.2} className="mt-8">
                    <ButtonLink href={`/contact?topic=${encodeURIComponent(s.title)}`} variant="outline">
                      Discuss this service
                    </ButtonLink>
                  </Reveal>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      <Process />
      <Faq />
      <CtaBand image={images.maizePath} />
    </>
  )
}
