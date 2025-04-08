"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"

const projects = [
  {
    title: "Analytics Dashboard",
    description: "Interactive dashboard with real-time data visualization",
    image: "/Dashboard1.png",
    link: "https://calm-gingersnap-412bf4.netlify.app/",
    category: "dashboard",
    tags: ["React", "D3.js", "Tailwind CSS"],
  },
  {
    title: "Admin Dashboard",
    description: "Comprehensive admin panel with user management",
    image: "/Dashboard2.png",
    link: "https://v0-animated-login-page-yf8nn7.vercel.app/dashboard",
    category: "dashboard",
    tags: ["Next.js", "shadcn/ui", "TypeScript"],
  },
  {
    title: "GIS Mapping Application",
    description: "Geographic Information System for spatial data analysis",
    image: "/GIS.png",
    link: "https://silver-heliotrope-8742d0.netlify.app/",
    category: "gis",
    tags: ["Leaflet", "GeoJSON", "React"],
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured online store with payment integration",
    image: "/E-commerce.png",
    link: "https://shiny-halva-7d885a.netlify.app/",
    category: "web",
    tags: ["Next.js", "Stripe", "MongoDB"],
  },
  {
    title: "Login Page",
    description: "Modern authentication UI with smooth animations",
    image: "/Login.png",
    link: "https://v0-animated-login-page-six.vercel.app/login",
    category: "web",
    tags: ["React", "Framer Motion", "Authentication"],
  },
]

const categories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Development" },
  { value: "dashboard", label: "Dashboards" },
  { value: "gis", label: "GIS Solutions" },
]

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl">Our Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions across various industries.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Alert className="bg-card/50 border border-primary/20">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription>
              These projects are examples to showcase our design aesthetics and technical capabilities. They represent
              the type of solutions we can build for your business. Contact us to discuss your specific project
              requirements.
            </AlertDescription>
          </Alert>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger
                  key={category.value}
                  value={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className="transition-all duration-300 data-[state=active]:bg-primary/20 hover:bg-primary/10"
                >
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                >
                  <Card className="overflow-hidden project-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 hover:bg-primary/10 transition-colors duration-300"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4 group-hover:text-muted-foreground/90 transition-colors duration-300">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge
                            key={tagIndex}
                            variant="secondary"
                            className="transition-all duration-300 hover:bg-primary/10"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <Button asChild className="transition-all duration-300 hover:bg-primary/90 hover:scale-105 group">
            <Link href="/projects">
              View All Projects{" "}
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
