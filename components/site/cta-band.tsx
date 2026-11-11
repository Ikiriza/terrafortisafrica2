import { images, site } from "@/lib/site"
import { ParallaxImage, Reveal } from "./motion"
import { ButtonLink } from "./ui"

export function CtaBand({
  title = "Let’s grow something that lasts.",
  text = "Whether you are designing a programme, scaling Conservation Agriculture or building mechanization services — we would love to hear about it.",
  image = images.goldenField,
  className = "pb-20 md:pb-28",
}: {
  title?: string
  text?: string
  image?: string
  className?: string
}) {
  return (
    <section className={className}>
      <div className="container-x">
        <ParallaxImage
          src={image}
          alt=""
          strength={10}
          sizes="100vw"
          className="grain rounded-[2rem] md:rounded-[2.5rem]"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/95 via-forest-deep/80 to-forest-deep/30" />
          <div className="relative grid gap-10 px-6 py-16 sm:px-10 md:px-16 md:py-24 lg:grid-cols-12 lg:items-end">
            <Reveal className="lg:col-span-8">
              <p className="mb-5 inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold">
                <span className="h-px w-8 bg-gold/70" />
                Work with us
              </p>
              <h2 className="text-4xl leading-[1.08] text-white md:text-6xl text-balance">{title}</h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{text}</p>
            </Reveal>
            <Reveal delay={0.15} className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <ButtonLink href="/contact" variant="gold">
                Start a conversation
              </ButtonLink>
              <ButtonLink href={site.phoneHref} variant="outline-light" icon={false}>
                {site.phone}
              </ButtonLink>
            </Reveal>
          </div>
        </ParallaxImage>
      </div>
    </section>
  )
}
