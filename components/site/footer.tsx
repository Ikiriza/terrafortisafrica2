import Link from "next/link"
import Image from "next/image"
import { ArrowUp, ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { navItems, services, site } from "@/lib/site"

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="grain topo relative overflow-hidden bg-forest-deep text-white">
      {/* Top statement */}
      <div className="container-x relative pt-20 md:pt-28">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-4xl leading-[1.1] text-white md:text-5xl text-balance">
            Rooted in Africa. <span className="italic text-gold">Growing</span> what lasts.
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-3 rounded-full bg-gold py-2 pl-6 pr-2 font-semibold text-forest-deep transition hover:bg-[#f0b93f]"
            >
              Email our team
              <span className="grid h-9 w-9 place-items-center rounded-full bg-forest-deep text-gold">
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </span>
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-primary"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="container-x relative grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <div className="inline-block rounded-2xl bg-white p-3">
            <Image src="/logo.png" alt={`${site.name} logo`} width={525} height={313} className="h-16 w-auto" />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">{site.description}</p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">Explore</h3>
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">Services</h3>
          <ul className="space-y-3">
            {services.slice(0, 6).map((s) => (
              <li key={s.id}>
                <Link href={`/services#${s.id}`} className="text-sm text-white/70 transition-colors hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h3 className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-gold">Get in touch</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-3 text-white/70 hover:text-white">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span className="[overflow-wrap:anywhere]">{site.email}</span>
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="flex items-center gap-3 text-white/70 hover:text-white">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/70 hover:text-white"
              >
                <MapPin className="h-4 w-4 shrink-0 text-gold" />
                {site.location}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="pointer-events-none relative select-none overflow-hidden" aria-hidden="true">
        <p className="text-outline whitespace-nowrap text-center font-display text-[17vw] leading-[0.85] text-white/[0.08]">
          TerraFortis
        </p>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-4 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="italic">{site.tagline}</p>
          <a href="#top" className="inline-flex items-center gap-2 transition-colors hover:text-white">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
