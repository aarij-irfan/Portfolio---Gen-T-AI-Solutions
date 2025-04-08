import { Globe, Search, Smartphone, Headphones, Brain, Map, Camera, BarChart3, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import CTASection from "@/components/cta-section"

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies.",
    icon: Globe,
    features: [
      "Responsive design for all devices",
      "Progressive Web Applications (PWA)",
      "E-commerce solutions",
      "Content Management Systems",
      "Custom web portals and dashboards",
      "API development and integration",
    ],
  },
  {
    title: "SEO Optimization",
    description: "Improve your online visibility and drive more traffic to your website.",
    icon: Search,
    features: [
      "Keyword research and analysis",
      "On-page and off-page optimization",
      "Technical SEO audits",
      "Content strategy development",
      "Local SEO optimization",
      "Performance monitoring and reporting",
    ],
  },
  {
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    features: [
      "Native iOS and Android development",
      "Cross-platform solutions (React Native, Flutter)",
      "UI/UX design for mobile",
      "App store optimization",
      "Push notification systems",
      "Offline functionality",
    ],
  },
  {
    title: "Technical Support",
    description: "24/7 technical support and maintenance for your digital products.",
    icon: Headphones,
    features: [
      "24/7 helpdesk support",
      "System monitoring and maintenance",
      "Performance optimization",
      "Security updates and patches",
      "Data backup and recovery",
      "User training and documentation",
    ],
  },
  {
    title: "Artificial Intelligence",
    description: "AI-powered solutions to automate processes and gain insights from data.",
    icon: Brain,
    features: [
      "Machine learning models",
      "Natural Language Processing (NLP)",
      "Predictive analytics",
      "Computer vision solutions",
      "Recommendation systems",
      "AI chatbots and virtual assistants",
    ],
  },
  {
    title: "GIS Solutions",
    description: "Geographic Information System solutions for spatial data analysis.",
    icon: Map,
    features: [
      "Spatial data analysis",
      "Custom map development",
      "Location-based services",
      "Geospatial data visualization",
      "Remote sensing integration",
      "GPS tracking systems",
    ],
  },
  {
    title: "Photo Recognition",
    description: "Advanced image recognition and processing using machine learning.",
    icon: Camera,
    features: [
      "Object detection and recognition",
      "Facial recognition systems",
      "Image classification",
      "OCR (Optical Character Recognition)",
      "Image enhancement and restoration",
      "Visual search capabilities",
    ],
  },
  {
    title: "Dashboards",
    description: "Interactive data visualization dashboards for business intelligence.",
    icon: BarChart3,
    features: [
      "Real-time data visualization",
      "Interactive charts and graphs",
      "KPI tracking and reporting",
      "Custom analytics dashboards",
      "Data filtering and drill-down capabilities",
      "Export and sharing options",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold sm:text-5xl">Our Services</h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} id={service.title.toLowerCase().replace(/\s+/g, "-")} className="scroll-mt-20">
                <div className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="lg:w-1/2">
                    <div className="h-full flex items-center">
                      <Card className="w-full border border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardHeader className="pb-2">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                            <service.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                          <CardDescription className="text-lg">{service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 mt-4">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start">
                                <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="h-64 sm:h-80 lg:h-full bg-muted rounded-lg flex items-center justify-center">
                      <service.icon className="h-24 w-24 text-muted-foreground/20" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
