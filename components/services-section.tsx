"use client"

import { motion } from "framer-motion"
import { Globe, Search, Smartphone, Headphones, Brain, Map, Camera, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies.",
    icon: Globe,
  },
  {
    title: "SEO Optimization",
    description: "Improve your online visibility and drive more traffic to your website.",
    icon: Search,
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "Technical Support",
    description: "24/7 technical support and maintenance for your digital products.",
    icon: Headphones,
  },
  {
    title: "Artificial Intelligence",
    description: "AI-powered solutions to automate processes and gain insights from data.",
    icon: Brain,
  },
  {
    title: "GIS Solutions",
    description: "Geographic Information System solutions for spatial data analysis.",
    icon: Map,
  },
  {
    title: "Photo Recognition",
    description: "Advanced image recognition and processing using machine learning.",
    icon: Camera,
  },
  {
    title: "Dashboards",
    description: "Interactive data visualization dashboards for business intelligence.",
    icon: BarChart3,
  },
]

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
          <h2 className="text-3xl font-bold sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of software development services to help businesses thrive in the digital era.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="service-card h-full border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:border-primary/30 group">
                <CardHeader className="pb-2">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110"
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(124, 58, 237, 0.2)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <service.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <CardTitle className="group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground group-hover:text-muted-foreground/90 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
