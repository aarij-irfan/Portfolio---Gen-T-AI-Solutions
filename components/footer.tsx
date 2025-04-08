"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.footer
      className="bg-background border-t"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold">Gen-T AI Solutions</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              At Gen-T AI Solutions, we are committed to deliver! And believe in building long-term relationships with
              our clients to contribute to their success.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/gen-t-ai-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://www.instagram.com/gen_t_ai_solutions?igsh=MXZtcHpvdTU2ejdkbA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://github.com/Gen-T-AI-Solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/services#web-development"
                  className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#app-development"
                  className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai-solutions"
                  className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services#gis"
                  className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  GIS Services
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start space-x-2 group">
                <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5 group-hover:text-primary transition-colors duration-300" />
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Gen-T AI Solutions - Classic Complex, Floor # 3, 35-M Model Town Extension, Lahore.
                </span>
              </li>
              <li className="flex items-center space-x-2 group">
                <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0 group-hover:text-primary transition-colors duration-300" />
                <a
                  href="tel:+923048222289"
                  className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300"
                >
                  +92 304-8222289
                </a>
              </li>
              <li className="flex items-center space-x-2 group">
                <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0 group-hover:text-primary transition-colors duration-300" />
                <a
                  href="mailto:saad.irfan@gen-tsolutions.com"
                  className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300"
                >
                  saad.irfan@gen-tsolutions.com
                </a>
              </li>
              <li className="flex items-center space-x-2 group">
                <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0 group-hover:text-primary transition-colors duration-300" />
                <a
                  href="mailto:support@gen-tsolutions.com"
                  className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300"
                >
                  support@gen-tsolutions.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        <motion.div className="mt-12 border-t pt-8" variants={itemVariants}>
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Gen-T AI Solutions. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
