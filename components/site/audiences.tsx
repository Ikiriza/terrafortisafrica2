import { audiences } from "@/lib/site"
import { Icon } from "./icons"
import { Stagger, StaggerItem } from "./motion"
import { SectionHeading } from "./ui"

export function Audiences() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Who we work with"
          title={
            <>
              Partners across the <span className="italic text-secondary">agrifood</span> system.
            </>
          }
          description="Our clients and partners range from public institutions and development agencies to private enterprises and the farmer organisations at the heart of rural economies."
        />
        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" stagger={0.08}>
          {audiences.map((a) => (
            <StaggerItem key={a.title} className="h-full">
              <div className="group relative h-full overflow-hidden rounded-[1.5rem] border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:bg-primary">
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary/10 text-secondary transition-colors duration-500 group-hover:bg-gold group-hover:text-forest-deep">
                  <Icon name={a.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 text-xl leading-snug text-primary transition-colors duration-500 group-hover:text-white">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-white/70">
                  {a.text}
                </p>
                <span className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gold/0 blur-2xl transition-colors duration-500 group-hover:bg-gold/20" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
