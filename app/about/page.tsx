"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold sm:text-5xl mb-6">About Gen-T AI Solutions</h1>
              <p className="text-xl text-muted-foreground mb-6">
                At Gen-T AI Solutions, we are committed to deliver! And believe in building long-term relationships with
                our clients to contribute to their success.
              </p>
              <p className="text-muted-foreground mb-6">
                Innovation is the name of the game at the floor, we encourage originality in our teams to come up with a
                solution at super agile speed. Integrity is at the helm of our dealings with clients externally and with
                teams internally.
              </p>
            </motion.div>
            <motion.div
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="relative h-80 w-full lg:h-96 rounded-lg overflow-hidden shadow-xl">
                <video
                  src="/about.mp4"
                  autoPlay
                  loop
                  muted
                  className="object-cover h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              We strongly believe in these core principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Integrity",
                description:
                  "We maintain the highest standards of honesty and transparency in all our dealings, both with clients and within our team.",
              },
              {
                title: "Innovation",
                description:
                  "We constantly push boundaries to develop cutting-edge solutions that address complex challenges in unique ways.",
              },
              {
                title: "Originality",
                description:
                  "We encourage creative thinking and fresh perspectives to deliver solutions that stand out in the market.",
              },
              {
                title: "Agility",
                description:
                  "We adapt quickly to changing requirements and deliver solutions at speed without compromising on quality.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border/50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl">Our Approach</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              How we work to deliver exceptional results for our clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Discover",
                description:
                  "We begin by understanding your business, goals, and challenges through in-depth consultations and research.",
              },
              {
                step: "2",
                title: "Design",
                description:
                  "We create detailed plans and prototypes, collaborating closely with you to refine the solution.",
              },
              {
                step: "3",
                title: "Develop",
                description:
                  "Our expert team builds your solution using the latest technologies and best practices in software development.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-card border border-border/50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
