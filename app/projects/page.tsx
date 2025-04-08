"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import CTASection from "@/components/cta-section"

const projects = [
  {
    title: "Analytics Dashboard",
    description:
      "Interactive dashboard with real-time data visualization for a financial services company. Features include customizable widgets, data filtering, and export capabilities.",
    image: "/Dashboard1.png",
    link: "https://calm-gingersnap-412bf4.netlify.app/",
    category: "dashboard",
    tags: ["React", "D3.js", "Tailwind CSS", "Redux"],
  },
  {
    title: "Admin Dashboard",
    description:
      "Comprehensive admin panel with user management, role-based access control, and activity monitoring for a SaaS platform.",
    image: "/Dashboard2.png",
    link: "https://v0-animated-login-page-yf8nn7.vercel.app/dashboard",
    category: "dashboard",
    tags: ["Next.js", "shadcn/ui", "TypeScript", "Prisma"],
  },
  {
    title: "GIS Mapping Application",
    description:
      "Geographic Information System for spatial data analysis and visualization for an environmental research organization.",
    image: "/GIS.png",
    link: "https://silver-heliotrope-8742d0.netlify.app/",
    category: "gis",
    tags: ["Leaflet", "GeoJSON", "React", "Node.js"],
  },
  {
    title: "E-commerce Platform",
    description:
      "Full-featured online store with payment integration, inventory management, and customer analytics for a retail business.",
    image: "/E-commerce.png",
    link: "https://shiny-halva-7d885a.netlify.app/",
    category: "web",
    tags: ["Next.js", "Stripe", "MongoDB", "Redux"],
  },
  {
    title: "Login Page",
    description:
      "Modern authentication UI with smooth animations and secure authentication flow for a fintech application.",
    image: "/Login.png",
    link: "https://v0-animated-login-page-six.vercel.app/login",
    category: "web",
    tags: ["React", "Framer Motion", "Authentication", "JWT"],
  },
]

const categories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Development" },
  { value: "dashboard", label: "Dashboards" },
  { value: "gis", label: "GIS Solutions" },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold sm:text-5xl">Our Projects</h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of innovative solutions across various industries
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <Alert className="bg-card/50 border border-primary/20">
              <Info className="h-5 w-5 text-primary" />
              <AlertDescription className="text-base">
                <p className="font-medium">Showcase Examples</p>
                <p>
                  These projects are examples designed to showcase our aesthetic style and technical capabilities. They
                  represent the types of solutions we can build for your business. Each example demonstrates our
                  expertise in different technologies and design approaches.
                </p>
                <p className="mt-2">
                  Contact us to discuss how we can create a custom solution tailored to your specific requirements.
                </p>
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
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value={activeCategory} className="mt-0">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial="hidden"
                animate="visible"
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
                    <Card className="overflow-hidden project-card h-full border border-border/50 hover:border-primary/20">
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-xl font-semibold">{project.title}</h3>
                          {project.link !== "#" && (
                            <Link href={project.link} target="_blank" rel="noopener noreferrer">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </Link>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary">
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
        </div>
      </section>
      <CTASection />
    </div>
  )
}
