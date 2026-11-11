import { focusAreas } from "@/lib/site"

function Star() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-gold md:h-6 md:w-6" fill="currentColor" aria-hidden="true">
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z" />
    </svg>
  )
}

export function FocusMarquee() {
  const row = [...focusAreas, ...focusAreas]
  return (
    <section aria-label="Our focus areas" className="grain relative overflow-hidden bg-primary py-7 text-white md:py-9">
      <div className="flex w-max animate-marquee items-center gap-8 [--marquee-duration:55s] hover:[animation-play-state:paused] md:gap-12">
        {row.map((item, i) => (
          <div key={i} className="flex items-center gap-8 md:gap-12" aria-hidden={i >= focusAreas.length}>
            <span
              className={
                i % 2 === 0
                  ? "font-display text-2xl whitespace-nowrap md:text-4xl"
                  : "text-outline font-display text-2xl italic whitespace-nowrap text-white/70 md:text-4xl"
              }
            >
              {item}
            </span>
            <Star />
          </div>
        ))}
      </div>
    </section>
  )
}
