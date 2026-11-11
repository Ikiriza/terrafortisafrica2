import Image from "next/image"
import { team } from "@/lib/site"
import { Stagger, StaggerItem } from "@/components/site/motion"
import { SectionHeading } from "@/components/site/ui"

function initials(name: string) {
  return name
    .replace(/^(Mr|Ms|Mrs|Dr|Prof|Eng)\.?\s+/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase()
}

export function Team() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Leadership"
          title={
            <>
              The people driving our <span className="italic text-secondary">mission</span> forward.
            </>
          }
          description="Our leadership brings together field-tested experience in agricultural development, programme management and partnership building."
        />

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {team.map((m, i) => (
            <StaggerItem key={m.name}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-primary">
                  {m.image ? (
                    <Image
                      src={m.image}
                      alt={m.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="topo grain absolute inset-0 bg-gradient-to-br from-primary via-forest-deep to-[#05170f]">
                      <div className="absolute inset-0 grid place-items-center">
                        <span className="font-display text-[5.5rem] italic leading-none text-white/90 transition-transform duration-700 group-hover:scale-110">
                          {initials(m.name)}
                        </span>
                      </div>
                      <svg
                        viewBox="0 0 200 200"
                        className="absolute -bottom-10 -right-10 h-48 w-48 text-gold/15 transition-transform duration-700 group-hover:rotate-12"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M100 10c30 40 40 80 0 180C60 90 70 50 100 10Z" />
                        <path d="M20 80c45 5 70 35 80 110C40 160 25 120 20 80Z" opacity=".7" />
                        <path d="M180 80c-45 5-70 35-80 110 60-30 75-70 80-110Z" opacity=".7" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-white/10 px-3 py-1 font-sans text-xs font-semibold tracking-widest text-white backdrop-blur-md">
                    0{i + 1}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
                </div>
                <div className="mt-5 px-1">
                  <h3 className="text-[1.4rem] text-primary">{m.name}</h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-secondary">{m.role}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
