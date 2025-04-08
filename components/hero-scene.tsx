"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  // Generate particles for the scroll indicator
  const particles = Array.from({ length: 15 }, (_, i) => i)

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Background with gradient and animated shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 z-0" />

      {/* Animated circles */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10 backdrop-blur-3xl"
            initial={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0.3,
            }}
            animate={{
              x: isHovering
                ? `calc(${Math.random() * 100}% + ${(mousePosition.x / window.innerWidth - 0.5) * 50}px)`
                : `${Math.random() * 100}%`,
              y: isHovering
                ? `calc(${Math.random() * 100}% + ${(mousePosition.y / window.innerHeight - 0.5) * 50}px)`
                : `${Math.random() * 100}%`,
              opacity: [0.2, 0.3, 0.2],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:50px_50px] opacity-[0.02] z-0" />

      {/* Subtle scroll indicator particles */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-0 overflow-hidden pointer-events-none">
        {particles.map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            initial={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              x: `${Math.random() * 100}%`,
              y: "100%",
              opacity: 0,
            }}
            animate={{
              y: ["100%", "-20%"],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block">Innovative</span>
              <motion.span
                className="block mt-2 bg-gradient-to-r from-purple-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% center", "100% center", "0% center"],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                style={{ backgroundSize: "200% auto" }}
              >
                Software Solutions
              </motion.span>
            </h1>
          </motion.div>

          <motion.p
            className="mt-6 max-w-md mx-auto text-lg sm:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming ideas into digital reality with cutting-edge technology
          </motion.p>

          {/* Portfolio notice with website link */}
          <motion.div
            className="mt-6 mb-2 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="text-sm text-muted-foreground mb-2">
              This is a portfolio showcase. Visit our official website:
            </div>
            <motion.a
              href="https://www.gen-tsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-all duration-300 hover:shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              www.gen-tsolutions.com
              <ExternalLink className="h-3.5 w-3.5" />
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button asChild size="lg" className="text-lg px-8 relative overflow-hidden group">
              <Link href="/services">
                <span className="relative z-10">Our Services</span>
                <span className="absolute inset-0 bg-primary/80 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 group">
              <Link href="/projects">
                <span>View Projects</span>
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Mouse-following gradient spotlight effect */}
      {isHovering && (
        <motion.div
          className="pointer-events-none absolute -inset-px z-0 opacity-0 backdrop-blur-md"
          animate={{
            opacity: 0.1,
            WebkitMaskImage: `radial-gradient(
              500px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(0, 0, 0, 1) 0%,
              rgba(0, 0, 0, 0) 100%
            )`,
          }}
        />
      )}
    </div>
  )
}
