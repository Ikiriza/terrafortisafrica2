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
import { ArrowRight, Leaf, Zap, Globe, Users, Award } from "lucide-react"
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

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "50K+", label: "Trees Planted" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "30+", label: "Countries Served" },
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
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6">
                <Leaf className="h-4 w-4" />
                <span className="text-sm font-medium">Sustainable Innovation</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-7xl font-serif font-bold text-balance mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            >
              Building a Sustainable Future Together
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 leading-relaxed"
            >
              We transform businesses through eco-friendly solutions that drive growth while protecting our planet. Join
              us in creating lasting environmental impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <InteractiveButton>
                <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground">
                  <Link href="/contact">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </InteractiveButton>

              <InteractiveButton>
                <Button asChild size="lg" variant="outline">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </InteractiveButton>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section with animated, cursor-responsive cards */}
      <section className="py-20 md:py-32">
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

      <Footer />
    </div>
  )
}