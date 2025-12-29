"use client"

import { useEffect, useRef, useState } from "react"
import {
  motion,
  useAnimation,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import { Target, Eye, TrendingUp, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

const stats = [
  { icon: Users, value: "150+", label: "Team Members" },
  { icon: Award, value: "25+", label: "Industry Awards" },
  { icon: Target, value: "500+", label: "Projects Delivered" },
  { icon: TrendingUp, value: "98%", label: "Success Rate" },
]

const team = [
  { name: "Mr. Robert Gensi", role: "Chief of Party", image: "/professional-ceo-portrait.png" },
  { name: "Ms. Victoria Akello", role: "Director of Programmes", image: "/professional-man-sustainability-portrait.jpg" },
  { name: "Mr. Neftali Mugizi", role: "Programmes Officer", image: "/professional-woman-tech-portrait.png" },
  { name: "David Kim", role: "Director of Operations", image: "/professional-man-operations.png" },
]

const aboutCards = [
  {
    title: "About TerraFortis Africa (TFA)",
    content: (
      <p>
        TerraFortis Africa (TFA) provides innovative green solutions to alleviate hunger, multidimensional poverty,
        social inequality, and the impacts of climate change across Africa. We deliver ethical, community-led, market-based,
        and enterprise-focused consultancy and development services to governments, donors, global and regional enterprises,
        and bilateral and multilateral organizations in the food, agriculture, and environmental sectors.
      </p>
    ),
  },
  {
    title: "Sustainable Access",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Nutritious food throughout their lives</li>
        <li>Decent incomes and employment</li>
        <li>Thriving natural resources</li>
      </ul>
    ),
  },
  {
    title: "Our Goal and Focus",
    content: (
      <p>
        Our goal is food security for all—sustainable access to sufficient, high‑quality food for active, healthy lives.
        Our primary focus is Sub‑Saharan Africa, where hunger and poverty are acute despite vast potential. We believe
        equitable economic development is essential to ending poverty.
      </p>
    ),
  },
  {
    title: "Core Areas of Focus",
    content: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Research & Development for green technology innovation</li>
        <li>Resilient food systems in lush, green landscapes</li>
        <li>Sustainable Market Systems Development (MSD)</li>
        <li>Climate change impact and adaptation</li>
      </ul>
    ),
  },
  {
    title: "Partnerships and Resilience",
    content: (
      <p>
        Together with our donors, partners, and collaborators, we are building food systems that can withstand biotic and
        abiotic shocks—sustainably and at scale.
      </p>
    ),
  },
  {
    title: "Our Aspiration",
    content: (
      <p>
        TFA aspires to be the Center of Excellence for African farmer‑led systems, forming symbiotic partnerships to
        address challenges across African agriculture. We serve as a one‑stop center accelerating the development of
        functional, inclusive, and resilient food systems.
      </p>
    ),
  },
]

const coreValues = [
  {
    title: "Performance and Service Orientation",
    description:
      "Focused on quality service delivery, innovation, and adherence to ethics and standards to meet and exceed clients’ expectations in productivity, sustainable land management, and environmental conservation.",
  },
  {
    title: "Partnership, Networking and Collaboration",
    description:
      "Pursuing productive partnerships with clear roles, responsibilities, governance, and supportive mechanisms to foster effective collaboration and synergies aligned to TFA’s mission.",
  },
  {
    title: "Knowledge and Information Management",
    description:
      "Nurturing a strong culture of generating, sharing, and applying development knowledge for improved productivity, sustainable natural resource management, environmental conservation, and climate action.",
  },
  {
    title: "Regionality and Environmental Concern",
    description:
      "Committed to African-led scale and scope, ensuring availability of regenerative agriculture technologies, products, and services while safeguarding environmental quality and responding to climate challenges.",
  },
  {
    title: "Integrity, Transparency and Accountability",
    description:
      "Upholding honesty, fairness, and professionalism, and ensuring efficient use of entrusted resources in a transparent, accountable, and cost‑effective manner.",
  },
]

function useTiltGlow() {
  const ref = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rx = useSpring(useTransform(py, [0, 1], [8, -8]), { stiffness: 220, damping: 20, mass: 0.5 })
  const ry = useSpring(useTransform(px, [0, 1], [-10, 10]), { stiffness: 220, damping: 20, mass: 0.5 })
  const scale = useSpring(1, { stiffness: 220, damping: 20, mass: 0.5 })
  const gx = useTransform(px, (v) => `calc(${(v * 100).toFixed(2)}%)`)
  const gy = useTransform(py, (v) => `calc(${(v * 100).toFixed(2)}%)`)
  const glow = useMotionTemplate`radial-gradient(160px circle at ${gx} ${gy}, rgba(255,255,255,0.12), transparent 60%)`
  const borderGlow = useMotionTemplate`radial-gradient(240px circle at ${gx} ${gy}, rgba(34,197,94,0.35), transparent 70%)`

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  function onEnter() {
    scale.set(1.02)
  }
  function onLeave() {
    scale.set(1)
    px.set(0.5)
    py.set(0.5)
  }

  return { ref, rx, ry, scale, glow, borderGlow, onMove, onEnter, onLeave }
}

type ValueCardProps = {
  title: string
  description: string
  onHoverChange?: (hovering: boolean) => void
}

function InteractiveValueCard({ title, description, onHoverChange }: ValueCardProps) {
  const { ref, rx, ry, scale, glow, borderGlow, onMove, onEnter, onLeave } = useTiltGlow()

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        onMove(e)
      }}
      onMouseEnter={() => {
        onEnter()
        onHoverChange?.(true)
      }}
      onMouseLeave={() => {
        onLeave()
        onHoverChange?.(false)
      }}
      style={{ rotateX: rx, rotateY: ry, scale, transformStyle: "preserve-3d", willChange: "transform" }}
      className="min-w-[360px] max-w-[360px] h-[220px]"
    >
      <Card className="relative h-full border-border/70 shadow-sm">
        <motion.div
          aria-hidden="true"
          style={{ backgroundImage: glow }}
          className="pointer-events-none absolute inset-0 rounded-xl opacity-100"
        />
        <motion.div
          aria-hidden="true"
          style={{ backgroundImage: borderGlow }}
          className="pointer-events-none absolute -inset-px rounded-xl opacity-100"
        />
        <CardContent
          className="relative h-full p-6"
          style={{ transform: "translateZ(24px)", transformStyle: "preserve-3d" }}
        >
          <h3 className="text-lg font-serif font-semibold mb-2" style={{ transform: "translateZ(18px)" }}>
            {title}
          </h3>
          <p
            className="text-muted-foreground leading-relaxed text-sm line-clamp-[8]"
            style={{ transform: "translateZ(14px)" }}
          >
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function MarqueeRow({
  reverse = false,
  onAnyHoverChange,
}: {
  reverse?: boolean
  onAnyHoverChange: (hovering: boolean) => void
}) {
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  // Start scrolling animation
  useEffect(() => {
    controls.start({
      x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
      transition: { duration: 40, repeat: Infinity, ease: "linear" },
    })
  }, [controls, reverse])

  function handleHoverChange(hovering: boolean) {
    onAnyHoverChange(hovering)
    if (hovering) {
      controls.stop()
    } else {
      controls.start({
        x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        transition: { duration: 40, repeat: Infinity, ease: "linear" },
      })
    }
  }

  const items = [...coreValues, ...coreValues] // duplicate for seamless loop

  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div className="flex gap-6" animate={controls}>
        {items.map((cv, idx) => (
          <InteractiveValueCard
            key={`${cv.title}-${idx}`}
            title={cv.title}
            description={cv.description}
            onHoverChange={handleHoverChange}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default function AboutPage() {
  const dragAreaRef = useRef<HTMLDivElement>(null)
  const [, setMarqueePaused] = useState(false)

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />

      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-balance mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About TerraFortis Africa
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              For food, agriculture, and environment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={dragAreaRef} className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aboutCards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                  className="h-full"
                >
                  <motion.div
                    drag
                    dragConstraints={dragAreaRef}
                    dragElastic={0.2}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="h-full"
                  >
                    <Card className="h-full border-border/70 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm">
                      <CardContent className="p-6 h-full">
                        <div className="flex h-full flex-col">
                          <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{card.title}</h3>
                          <div className="text-base text-muted-foreground leading-relaxed flex-1 min-h-[140px]">
                            {card.content}
                          </div>
                          <div className="mt-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance mb-4">Mission & Vision</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              Clear purpose and direction guiding our impact in Africa’s agrifood and environmental systems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-border/70 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-semibold mb-3">Our Mission</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        To enhance agricultural productivity, sustainable land management, and environmental conservation
                        through promotion of Conservation Agriculture (CA) principles and practices and Sustainable
                        Agricultural Mechanization (SAM) technologies in Africa.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full border-border/70 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Eye className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-serif font-semibold mb-3">Our Vision</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        To be a premier consultancy and development firm of excellence in promoting innovative,
                        sustainable, and green solutions for improved livelihoods and wealth creation in rural Africa.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values: equal-sized, cursor-interactive cards in marquee that pauses on hover */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-10"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The principles that guide our decisions and actions across Africa.
            </p>
          </motion.div>

          <div className="space-y-6">
            <MarqueeRow
              reverse={false}
              onAnyHoverChange={(paused) => {
                setMarqueePaused(paused)
              }}
            />
            <MarqueeRow
              reverse
              onAnyHoverChange={(paused) => {
                setMarqueePaused(paused)
              }}
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="text-center"
              >
                <stat.icon className="h-10 w-10 mx-auto mb-3 text-accent" />
                <div className="text-3xl md:text-4xl font-serif font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance mb-4">Meet Our Leadership</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              The passionate people driving our mission forward.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-4 aspect-square">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-1 group-hover:text-secondary transition-colors">
                  {member.name}
                </h3>
                <p className="text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}