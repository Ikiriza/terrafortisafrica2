import type { Metadata } from "next"
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { images, site } from "@/lib/site"
import { PageHero } from "@/components/site/page-hero"
import { Reveal, Stagger, StaggerItem } from "@/components/site/motion"
import { Eyebrow } from "@/components/site/ui"
import { ContactForm } from "@/components/contact/contact-form"
import { Faq } from "@/components/site/faq"

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with TerraFortis Africa in ${site.location}. Email ${site.email} or call ${site.phone}.`,
}

const channels = [
  { icon: Mail, label: "Email us", value: site.email, href: `mailto:${site.email}` },
  { icon: Phone, label: "Call us", value: site.phone, href: site.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with our team", href: site.whatsapp, external: true },
  { icon: MapPin, label: "Visit us", value: site.location, href: site.mapsUrl, external: true },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Get in touch"
        title="Let’s talk about your next harvest."
        highlight={["harvest"]}
        subtitle="Whether you have terms of reference ready or just an idea, we would love to hear from you."
        image={images.heroContact}
      />

      <section className="py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow className="mb-5">Contact details</Eyebrow>
              <h2 className="text-[2.1rem] leading-[1.1] text-primary sm:text-5xl text-balance">
                We’re here to <span className="italic text-secondary">help.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Reach out about consulting assignments, partnerships, training or anything else. Our team is based in{" "}
                {site.location}.
              </p>
            </Reveal>

            <Stagger className="mt-10 space-y-3" stagger={0.08}>
              {channels.map((c) => (
                <StaggerItem key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-5 rounded-[1.25rem] border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary"
                  >
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-secondary/10 text-secondary transition-colors duration-300 group-hover:bg-gold group-hover:text-forest-deep">
                      <c.icon className="h-6 w-6" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-foreground/45 transition-colors group-hover:text-gold">
                        {c.label}
                      </span>
                      <span className="mt-1 block break-all font-semibold text-primary transition-colors group-hover:text-white sm:break-normal">
                        {c.value}
                      </span>
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-primary/30 transition-all duration-300 group-hover:rotate-45 group-hover:text-gold" />
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-8">
        <div className="container-x">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-sm">
              <iframe
                title={`Map of ${site.location}`}
                src={site.mapEmbed}
                className="h-[420px] w-full grayscale-[35%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute left-5 top-5 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur md:left-8 md:top-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">Head office</p>
                <p className="mt-1 font-display text-2xl text-primary">{site.location}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Faq />
    </>
  )
}
