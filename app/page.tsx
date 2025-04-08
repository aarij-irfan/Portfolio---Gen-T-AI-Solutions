import HeroSection from "@/components/hero-scene"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import TechStack from "@/components/tech-stack"
import CTASection from "@/components/cta-section"
import ScrollIndicator from "@/components/scroll-indicator"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <TechStack />
      <CTASection />
      <ScrollIndicator />
    </>
  )
}
