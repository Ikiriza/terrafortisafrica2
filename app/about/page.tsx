"use client"

import { motion } from "framer-motion"
import { Target, TrendingUp, Users, Award } from "lucide-react"
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

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />

      {/* Hero */}
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

      {/* Vision, Mission & Core Values (panel style to match the reference) */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-card border shadow-sm p-6 md:p-10">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-10">
              Vision, Mission & Core Values
            </h2>

            {/* Vision */}
            <div className="space-y-4 mb-10">
              <h3 className="text-2xl font-semibold text-foreground">Vision</h3>
              <div className="rounded-md border-4 border-yellow-300 bg-brown-50 p-4 md:p-6">
                <p className="text-center font-medium text-foreground">
                  To be a premier consultancy and development firm of excellence in promoting innovative, sustainable, and
                  green solutions for improved livelihoods and wealth creation in rural Africa.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="space-y-3 mb-10">
              <h3 className="text-2xl font-semibold text-foreground">Mission Statement</h3>
              <p className="text-muted-foreground leading-relaxed">
                To enhance agricultural productivity, sustainable land management, and environmental conservation through
                promotion of Conservation Agriculture (CA) principles and practices and Sustainable Agricultural
                Mechanization (SAM) technologies in Africa.
              </p>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">Core Values</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The decisions and actions in TFA are consistently based on a set of clear principles outlined here as our core values. These are:
              </p>

              <ol className="list-decimal pl-6 space-y-5">
                <li>
                  <p className="italic underline font-medium">Performance and service orientation:</p>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    TFA believes that the stakes in improving productivity, sustainable land management and environmental
                    conservation are extremely high and will, therefore, remain focused on quality service delivery,
                    innovativeness and adherent to ethics and standards so as to meet and exceed client’s expectation.
                  </p>
                </li>

                <li>
                  <p className="italic underline font-medium">Partnership, networking and collaboration:</p>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    TFA will pursue productive and beneficial partnerships and strategic alliances with clearly defined roles,
                    responsibilities, governance and supportive mechanisms so as to ensure effective collaboration and
                    synergies that have a direct bearing to the Network’s mission.
                  </p>
                </li>

                <li>
                  <p className="italic underline font-medium">Knowledge and information management:</p>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    TFA is committed to nurturing a strong culture in the generation, sharing and application of development
                    knowledge and information for promoting improved productivity, sustainable natural resource management,
                    environmental conservation and adaptation and mitigation to climate change challenges in Africa and beyond.
                  </p>
                </li>

                <li>
                  <p className="italic underline font-medium">Regionality and environmental concern:</p>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    TFA is an African organization committed to the achievement of economies of scale and scope while ensuring
                    optimal availability of Regenerative agriculture technologies, products and services while maintaining the
                    quality of environment and responding to the challenges of climate change.
                  </p>
                </li>

                <li>
                  <p className="italic underline font-medium">Integrity, transparency and accountability:</p>
                  <p className="text-muted-foreground mt-1 leading-relaxed">
                    TFA upholds virtues of integrity through honesty, fairness and professionalism in all its operations while
                    remaining committed to effective and efficient utilization of all resources entrusted to it in the most
                    transparent, accountable and cost-effective manner.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Team */}
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