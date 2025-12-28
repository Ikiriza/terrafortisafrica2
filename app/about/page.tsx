"use client"

import { motion } from "framer-motion"
import { Target, Heart, Lightbulb, TrendingUp, Users, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "We exist to create sustainable solutions that benefit both business and planet.",
  },
  {
    icon: Heart,
    title: "People First",
    description: "Building relationships and communities that drive meaningful change.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pioneering new approaches to environmental challenges with cutting-edge technology.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Empowering sustainable growth that creates lasting economic and environmental value.",
  },
]

const timeline = [
  { year: "2018", title: "Founded", description: "Started with a vision to transform sustainable business practices." },
  {
    year: "2019",
    title: "First 100 Clients",
    description: "Reached our first major milestone helping companies go green.",
  },
  { year: "2021", title: "Global Expansion", description: "Expanded operations to 15 countries across 4 continents." },
  {
    year: "2023",
    title: "Industry Leader",
    description: "Recognized as a top sustainable solutions provider worldwide.",
  },
]

const team = [
  { name: "Sarah Chen", role: "Chief Executive Officer", image: "/professional-ceo-portrait.png" },
  { name: "Marcus Johnson", role: "Head of Sustainability", image: "/professional-man-sustainability-portrait.jpg" },
  { name: "Elena Rodriguez", role: "Chief Technology Officer", image: "/professional-woman-tech-portrait.png" },
  { name: "David Kim", role: "Director of Operations", image: "/professional-man-operations.png" },
]

const stats = [
  { icon: Users, value: "150+", label: "Team Members" },
  { icon: Award, value: "25+", label: "Industry Awards" },
  { icon: Target, value: "500+", label: "Projects Delivered" },
  { icon: TrendingUp, value: "98%", label: "Success Rate" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-balance mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About TerraFortis Africa
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              We're on a mission to revolutionize how businesses approach sustainability, creating a future where profit
              and planet thrive together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

      {/* Values Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              These principles guide every decision we make and every solution we create.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-lg group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <value.icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-secondary transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-balance mb-4">Our Journey</h2>
            <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
              From humble beginnings to global impact, here's our story.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                {index < timeline.length - 1 && <div className="absolute left-3 top-6 bottom-0 w-0.5 bg-border" />}
                <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-background" />
                </div>
                <div className="text-accent font-serif font-semibold text-lg mb-1">{item.year}</div>
                <h3 className="text-xl font-serif font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
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
