"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "TensorFlow",
  "PyTorch",
  "Three.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Kubernetes",
  "GraphQL",
  "Redux",
  "Express",
  "Django",
  "Flask",
  "Leaflet",
]

export default function TechStack() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Our Tech Stack</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We use cutting-edge technologies to build robust and scalable solutions.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card border border-border/50 rounded-lg p-4 flex items-center justify-center h-24 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:bg-primary/5 group"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <span className="font-medium group-hover:text-primary transition-colors duration-300">{tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
