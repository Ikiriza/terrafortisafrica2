"use client"

import { useRef } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Leaf,
  Zap,
  Globe,
  Users,
  Award,
  Sprout,
  ShieldCheck,
  Radar,
  Workflow,
  Sparkles,
  Trees,
  MessageCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

type Feature = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    description: "Eco-friendly innovations that protect our planet for future generations.",
  },
  {
    icon: Zap,
    title: "Efficient Technology",
    description: "Cutting-edge tools that maximize impact while minimizing waste.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Making a difference across continents with scalable solutions.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Building partnerships that create lasting change together.",
  },
]

const services = [
  {
    icon: Sprout,
    title: "Climate-Smart Advisory",
    points: ["Landscape diagnostics & baselining", "Climate-resilient cropping systems", "Farmer-first capacity building"],
  },
  {
    icon: ShieldCheck,
    title: "Programme Delivery",
    points: ["End-to-end programme design", "Field implementation & governance", "Risk, safeguards & compliance"],
  },
  {
    icon: Radar,
    title: "Data & Impact",
    points: ["Remote sensing & GIS intelligence", "MRV for carbon and biodiversity", "Dashboards for donors & boards"],
  },
]

const processSteps = [
  { title: "Listen & Align", description: "Stakeholder mapping, rapid discovery, and success criteria defined with your teams.", icon: Users },
  { title: "Co-Design", description: "Blueprint solutions with clear budgets, governance, and climate resilience baked in.", icon: Workflow },
  { title: "Deploy & Train", description: "Field teams, extension workers, and local partners execute with on-the-ground support.", icon: Sparkles },
  { title: "Measure & Scale", description: "MRV dashboards, audits, and playbooks to replicate across regions.", icon: Globe },
]

const testimonials = [
  {
    quote: "TerraFortis helped us cut diesel use by 42% while increasing yields in two seasons. Their team lives the work with us.",
    name: "Grace N., Smallholder Cooperative Lead",
    region: "Northern Uganda",
  },
  {
    quote: "A rare partner that blends rigorous science with community empathy. Reporting to donors became painless.",
    name: "Daniel O., Program Director, Regional NGO",
    region: "Rwanda & DRC",
  },
  {
    quote: "Their data dashboards finally connected our boardroom to field realities. Decisions now move in days, not months.",
    name: "Lina M., Sustainability VP, Agrifood Enterprise",
    region: "East Africa",
  },
]

const partners = [
  { name: "AgriSphere", logo: "/placeholder-logo.svg" },
  { name: "GreenRise", logo: "/placeholder-logo.svg" },
  { name: "EcoFund", logo: "/placeholder-logo.svg" },
  { name: "Solaris", logo: "/placeholder-logo.svg" },
]

// Reusable interactive wrapper for buttons with tilt + cursor-follow glow
function InteractiveButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const rx = useSpring(useTransform(py, [0, 1], [6, -6]), { stiffness: 200, damping: 20, mass: 0.5 })
  const ry = useSpring(useTransform(px, [0, 1], [-8, 8]), { stiffness: 200, damping: 20, mass: 0.5 })
  const scale = useSpring(1, { stiffness: 200, damping: 20, mass: 0.5 })

  const gx = useTransform(px, (v) => `${(v * 100).toFixed(2)}%`)
  const gy = useTransform(py, (v) => `${(v * 100).toFixed(2)}%`)
  const glow = useMotionTemplate`radial-gradient(120px circle at ${gx} ${gy}, rgba(255,255,255,0.18), transparent 55%)`
  const borderGlow = useMotionTemplate`radial-gradient(200px circle at ${gx} ${gy}, rgba(34,197,94,0.35), transparent 70%)`

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  function onEnter() {
    scale.set(1.03)
  }
  function onLeave() {
    scale.set(1)
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, scale, transformStyle: "preserve-3d" }}
      className="relative inline-block"
    >
      {/* Cursor-follow glow layers (non-interactive) */}
      <motion.div
        aria-hidden="true"
        style={{ backgroundImage: glow }}
        className="pointer-events-none absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
      />
      <motion.div
        aria-hidden="true"
        style={{ backgroundImage: borderGlow }}
        className="pointer-events-none absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
      />
      {/* Inner content lifted in z to enhance tilt */}
      <div style={{ transform: "translateZ(24px)" }} className="group relative">
        {children}
      </div>
    </motion.div>
  )
}

// Feature card with cursor-responsive tilt and glow
function FeatureCard({ icon: Icon, title, description }: Feature) {
  const cardRef = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rx = useSpring(useTransform(py, [0, 1], [8, -8]), { stiffness: 200, damping: 20, mass: 0.5 })
  const ry = useSpring(useTransform(px, [0, 1], [-10, 10]), { stiffness: 200, damping: 20, mass: 0.5 })
  const gx = useTransform(px, (v) => `${(v * 100).toFixed(2)}%`)
  const gy = useTransform(py, (v) => `${(v * 100).toFixed(2)}%`)
  const glow = useMotionTemplate`radial-gradient(140px circle at ${gx} ${gy}, rgba(255,255,255,0.12), transparent 60%)`
  const borderGlow = useMotionTemplate`radial-gradient(220px circle at ${gx} ${gy}, rgba(34,197,94,0.35), transparent 70%)`

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
  }
  function handleMouseLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", willChange: "transform" }}
      className="h-full"
    >
      <Card className="relative h-full border-border/70 shadow-sm">
        <motion.div aria-hidden="true" style={{ backgroundImage: glow }} className="pointer-events-none absolute inset-0 rounded-xl opacity-0 md:group-hover:opacity-100 transition-opacity" />
        <motion.div aria-hidden="true" style={{ backgroundImage: borderGlow }} className="pointer-events-none absolute -inset-px rounded-xl opacity-0 md:group-hover:opacity-100 transition-opacity" />
        <CardContent className="relative p-6 md:p-7 h-full group" style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
          <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4" style={{ transform: "translateZ(20px)" }}>
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-serif font-semibold mb-2" style={{ transform: "translateZ(18px)" }}>
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed" style={{ transform: "translateZ(14px)" }}>
            {description}
          </p>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-secondary/10 to-transparent rounded-b-xl" />
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-44 pb-24 md:pt-48 md:pb-28"
        id="top"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/solar-panels-farm-renewable-energy.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/70 to-background/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(212,175,55,0.2),transparent_35%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div className="space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-full shadow-md"
              >
                <Leaf className="h-4 w-4" />
                <span className="text-sm font-semibold uppercase tracking-wide">Sustainable & Organic</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-extrabold text-primary-foreground leading-tight"
              >
                World&apos;s First Organic & Sustainability Farm Ecosystem
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl leading-relaxed"
              >
                Train. Certify. Grow. Sustain. Connecting farmers to sustainable markets globally with data, tools,
                and trusted partners.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary-foreground text-primary hover:bg-accent hover:text-accent-foreground font-semibold"
                >
                  <Link href="/portfolio">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/70 p-8 space-y-5"
              id="app"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
                Mobile App
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary">Digitise every hectare</h3>
              <p className="text-muted-foreground leading-relaxed">
                Real-time advisory, certification tracking, carbon-smart practices, and transparent sourcing in one app.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="p-4 rounded-xl bg-primary/5 border border-border/70">
                  <div className="font-semibold text-primary">Offline-first</div>
                  <p className="text-muted-foreground">Works where signal is weak.</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/5 border border-border/70">
                  <div className="font-semibold text-primary">MRV Ready</div>
                  <p className="text-muted-foreground">Carbon & biodiversity evidence.</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/5 border border-border/70">
                  <div className="font-semibold text-primary">Marketplace</div>
                  <p className="text-muted-foreground">Link growers to buyers.</p>
                </div>
                <div className="p-4 rounded-xl bg-primary/5 border border-border/70">
                  <div className="font-semibold text-primary">Multilingual</div>
                  <p className="text-muted-foreground">Inclusive onboarding.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Impact ribbon */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-gradient-to-r from-primary/90 via-secondary to-primary text-primary-foreground">
            <div className="absolute inset-0 opacity-25 mix-blend-soft-light bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.2),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.14),transparent_32%)]" />
            <div className="relative grid grid-cols-2 md:grid-cols-4 divide-x divide-primary/30">
              {[
                { label: "CO₂ avoided", value: "1.2M t", icon: Trees },
                { label: "Farmers supported", value: "120K+", icon: Users },
                { label: "Irrigated hectares", value: "85K", icon: Leaf },
                { label: "Renewables online", value: "480 MW", icon: Zap },
              ].map((item) => (
                <div key={item.label} className="p-6 md:p-8 flex items-start gap-3">
                  <div className="h-11 w-11 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-semibold leading-tight">{item.value}</div>
                    <div className="text-sm text-primary-foreground/80">{item.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with animated, cursor-responsive cards */}
      <section className="py-20 md:py-32" id="sustainability">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance mb-4">Why Choose TerraFortis Africa</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Our work is aimed at developing innovative solutions for Africa’s agrifood systems that are resilient,
              sustainable, and equitable, enabling work opportunities for young people.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group"
              >
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background" id="services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance mb-4">What We Deliver</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From vision to verification, we combine agronomy, engineering, and finance to unlock resilient growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-border/70 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-7 space-y-5">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold">{service.title}</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <div className="mt-1 h-2 w-2 rounded-full bg-secondary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24" id="workflow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/15 text-secondary text-sm font-medium">
                Proven Delivery Model
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-3">How We Engage</h2>
              <p className="text-muted-foreground max-w-2xl">
                Clear governance, transparent reporting, and measurable outcomes keep every partner aligned from day one.
              </p>
            </motion.div>
            <InteractiveButton>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
                <Link href="/contact">
                  Book a discovery call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </InteractiveButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
              >
                <Card className="h-full border-border/70 shadow-sm relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-primary/5" />
                  <CardContent className="relative p-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-lg bg-secondary/15 text-secondary flex items-center justify-center">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">Step {idx + 1}</span>
                    </div>
                    <h3 className="text-xl font-serif font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-sm font-medium text-secondary">Trusted by partners who build for the long term</p>
              <h3 className="text-2xl font-serif font-semibold">Aligned with governments, investors, and agrifood leaders.</h3>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="h-14 w-32 rounded-xl bg-card border border-border/70 flex items-center justify-center px-4 shadow-sm"
                >
                  <img src={partner.logo} alt={partner.name} className="h-7 object-contain opacity-70" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance mb-4">Voices From the Field</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Practical, measurable outcomes for people who steward land, water, and capital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <Card className="h-full border-border/70 shadow-sm">
                  <CardContent className="p-7 space-y-4">
                    <div className="text-secondary">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <p className="text-lg leading-relaxed text-foreground/90">“{item.quote}”</p>
                    <div className="pt-2">
                      <p className="font-serif font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.region}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Award className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance mb-6">Ready to Make an Impact?</h2>
            <p className="text-lg text-primary-foreground/90 text-pretty leading-relaxed mb-8">
              Join hundreds of organizations transforming their operations with sustainable practices.
            </p>

            <InteractiveButton>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-accent hover:text-accent-foreground"
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </InteractiveButton>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp quick contact */}
      <a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-green-500 text-white shadow-xl flex items-center justify-center hover:scale-105 transition"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>

      <Footer />
    </div>
  )
}
