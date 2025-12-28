"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

const categories = ["All", "Renewable Energy", "Waste Management", "Green Buildings", "Carbon Reduction"]

const projects = [
  {
    id: 1,
    title: "Solar Farm Initiative",
    category: "Renewable Energy",
    image: "/solar-panels-farm-renewable-energy.jpg",
    description: "Large-scale solar installation powering 10,000 homes with clean energy.",
  },
  {
    id: 2,
    title: "Zero-Waste Corporate Campus",
    category: "Waste Management",
    image: "/modern-green-office-building-sustainable.jpg",
    description: "Implemented comprehensive recycling and composting systems achieving 98% waste diversion.",
  },
  {
    id: 3,
    title: "LEED Platinum Office Tower",
    category: "Green Buildings",
    image: "/modern-glass-office-tower-green-architecture.jpg",
    description: "Net-zero energy building with advanced sustainability features and green spaces.",
  },
  {
    id: 4,
    title: "Carbon Offset Program",
    category: "Carbon Reduction",
    image: "/forest-trees-nature-carbon-offset.jpg",
    description: "Planted 50,000 trees offsetting 100,000 tons of CO2 annually.",
  },
  {
    id: 5,
    title: "Wind Energy Park",
    category: "Renewable Energy",
    image: "/wind-turbines-energy-farm.jpg",
    description: "Offshore wind farm generating 500MW of clean electricity.",
  },
  {
    id: 6,
    title: "Smart Recycling Network",
    category: "Waste Management",
    image: "/recycling-technology-smart-bins.jpg",
    description: "IoT-enabled recycling infrastructure improving collection efficiency by 40%.",
  },
  {
    id: 7,
    title: "Eco-Retail Complex",
    category: "Green Buildings",
    image: "/sustainable-shopping-center-green-roof.jpg",
    description: "First carbon-neutral shopping center with living walls and solar roof.",
  },
  {
    id: 8,
    title: "Industrial Carbon Capture",
    category: "Carbon Reduction",
    image: "/industrial-carbon-capture-technology.jpg",
    description: "Advanced carbon capture system reducing emissions by 80% at manufacturing facility.",
  },
]

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

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
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
              Explore our successful sustainability projects that are making a real difference across industries and
              continents.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                    : ""
                }
              >
                {category}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center">
                        <ExternalLink className="h-6 w-6 text-accent-foreground" />
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  )
}
