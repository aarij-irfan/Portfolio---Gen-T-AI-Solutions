"use client"

import type React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ServiceCardProps {
  service: {
    title: string
    description: string
    icon: React.ElementType
    gradient: string
    color: string
    features: string[]
  }
  index: number
  isActive: boolean
  onClick: () => void
}

export default function ServiceCard({ service, index, isActive, onClick }: ServiceCardProps) {
  const { title, description, icon: Icon, gradient, color, features } = service

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card
        className="h-full overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:border-primary/30 group cursor-pointer"
        onClick={onClick}
      >
        <div className={`h-2 bg-gradient-to-r ${gradient}`}></div>
        <div className="relative h-48 overflow-hidden">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-24 h-24 relative"
              initial={{ scale: 0.8, opacity: 0.8 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`w-16 h-16 rounded-xl bg-${color}/10 flex items-center justify-center mx-auto`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Icon className={`h-8 w-8 text-${color}`} />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <CardContent className="p-6">
          <h3
            className={`text-xl font-bold mb-2 bg-gradient-to-r ${gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}
          >
            {title}
          </h3>
          <p className="text-muted-foreground mb-4 group-hover:text-muted-foreground/90 transition-colors duration-300">
            {description}
          </p>

          <motion.div
            className="space-y-2"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isActive ? "auto" : 0,
              opacity: isActive ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {features.map((feature, featureIndex) => (
              <motion.div
                key={featureIndex}
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : -10,
                }}
                transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
              >
                <CheckCircle2 className={`h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-${color}`} />
                <span className="text-sm">{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-4 flex justify-between items-center">
            <motion.button
              className={`text-sm font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent flex items-center`}
              onClick={(e) => {
                e.stopPropagation()
                onClick()
              }}
              whileHover={{ x: isActive ? 0 : 5 }}
            >
              {isActive ? "Show less" : "Learn more"}
            </motion.button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
