"use client"

import type React from "react"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceDetailProps {
  service: {
    title: string
    description: string
    icon: React.ElementType
    gradient: string
    color: string
    features: string[]
    longDescription?: string
  }
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const { title, description, icon: Icon, gradient, color, features, longDescription } = service

  return (
    <motion.div
      className="mt-12 mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border border-border/50 bg-card/50 backdrop-blur-sm shadow-xl overflow-hidden">
        <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                {title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">{longDescription || description}</p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <CheckCircle2 className={`h-5 w-5 mr-3 mt-1 flex-shrink-0 text-${color}`} />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative h-64 lg:h-auto rounded-lg overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-48 h-48 relative"
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  animate={{
                    scale: [0.9, 1.1, 0.9],
                    opacity: [0.8, 1, 0.8],
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    times: [0, 0.5, 1],
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className={`w-24 h-24 rounded-2xl bg-${color}/20 flex items-center justify-center`}
                      animate={{
                        rotate: [0, 10, 0, -10, 0],
                        scale: [1, 1.1, 1, 1.1, 1],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    >
                      <Icon className={`h-12 w-12 text-${color}`} />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
