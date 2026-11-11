import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { services } from "@/lib/site"
import { Icon } from "@/components/site/icons"
import { Reveal, Stagger, StaggerItem } from "@/components/site/motion"
import { ButtonLink, SectionHeading } from "@/components/site/ui"

export function ServicesGrid({ limit = 6 }: { limit?: number }) {
  const list = services.slice(0, limit)
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end md:mb-20">
          <SectionHeading
            className="lg:col-span-7"
            eyebrow="What we do"
            title={
              <>
                Integrated expertise from <span className="italic text-secondary">soil</span> to market.
              </>
            }
          />
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              We combine agronomy, engineering, enterprise development and rigorous evidence to deliver programmes that
              work in the field — and keep working after we leave.
            </p>
            <ButtonLink href="/services" variant="outline" className="mt-6">
              All services
            </ButtonLink>
          </Reveal>
        </div>

        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {list.map((s, i) => (
            <StaggerItem key={s.id} className="h-full">
              <Link
                href={`/services#${s.id}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_30px_60px_-25px_rgba(14,59,42,0.45)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-forest-deep/10 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 font-sans text-xs font-semibold tracking-widest text-white backdrop-blur-md">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-primary opacity-0 shadow-lg transition-all duration-500 group-hover:rotate-45 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <div className="relative flex flex-1 flex-col p-7 pt-10">
                  <span className="absolute -top-7 left-7 grid h-14 w-14 place-items-center rounded-2xl bg-primary text-gold shadow-xl transition-colors duration-500 group-hover:bg-gold group-hover:text-forest-deep">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="text-[1.45rem] leading-snug text-primary">{s.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{s.short}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                    Learn more
                    <span className="h-px w-6 bg-secondary transition-all duration-500 group-hover:w-12" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
