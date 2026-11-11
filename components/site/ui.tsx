import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "./motion"

/* Small uppercase label above headings */
export function Eyebrow({ children, tone = "dark", className }: { children: ReactNode; tone?: "dark" | "light"; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em]",
        tone === "light" ? "text-gold" : "text-secondary",
        className,
      )}
    >
      <span className={cn("h-px w-8", tone === "light" ? "bg-gold/70" : "bg-secondary/60")} />
      {children}
    </span>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
  titleClassName,
}: {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: "left" | "center"
  tone?: "dark" | "light"
  className?: string
  titleClassName?: string
}) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow tone={tone} className={cn("mb-5", align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "text-[2.1rem] leading-[1.1] sm:text-5xl md:text-[3.4rem] text-balance",
          tone === "light" ? "text-white" : "text-primary",
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 text-base md:text-lg leading-relaxed text-pretty",
            tone === "light" ? "text-white/75" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}

type Variant = "gold" | "primary" | "outline" | "outline-light" | "white"

const variants: Record<Variant, string> = {
  gold: "bg-gold text-forest-deep hover:bg-[#f0b93f] shadow-lg shadow-gold/20",
  primary: "bg-primary text-primary-foreground hover:bg-forest-deep shadow-lg shadow-primary/15",
  white: "bg-white text-primary hover:bg-sand shadow-lg shadow-black/10",
  outline: "border border-primary/20 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground",
  "outline-light": "border border-white/30 text-white backdrop-blur-sm bg-white/5 hover:bg-white hover:text-primary",
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  icon = true,
  external,
}: {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  icon?: boolean
  external?: boolean
}) {
  const cls = cn(
    "group/btn inline-flex items-center justify-center gap-3 rounded-full pl-6 pr-2 py-2 text-[0.95rem] font-semibold transition-all duration-300 active:scale-[0.98]",
    !icon && "pr-6 py-3",
    variants[variant],
    className,
  )
  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <span
          className={cn(
            "relative grid h-9 w-9 place-items-center overflow-hidden rounded-full transition-colors duration-300",
            variant === "gold" && "bg-forest-deep text-gold",
            variant === "primary" && "bg-gold text-forest-deep",
            variant === "white" && "bg-primary text-white",
            variant === "outline" && "bg-primary text-white group-hover/btn:bg-gold group-hover/btn:text-forest-deep",
            variant === "outline-light" && "bg-white text-primary group-hover/btn:bg-primary group-hover/btn:text-white",
          )}
        >
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-6 group-hover/btn:translate-x-6" />
          <ArrowUpRight className="absolute h-4 w-4 -translate-x-6 translate-y-6 transition-transform duration-300 group-hover/btn:translate-x-0 group-hover/btn:translate-y-0" />
        </span>
      )}
    </>
  )
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    )
  }
  if (/^(tel:|mailto:)/.test(href)) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    )
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  )
}
