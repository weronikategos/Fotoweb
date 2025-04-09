"use client"

import { useRef } from "react"
import { NavigationBar } from "@/components/navigation-bar"
import { FoodAnimations } from "@/components/food-animations"
import { HeroSection } from "@/components/hero-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { OfferSection } from "@/components/offer-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { useScrollPosition } from "@/hooks/use-scroll-position"
import { usePageHeight } from "@/hooks/use-page-height"
import { calculateBackgroundColor } from "@/lib/utils"
import { NAVIGATION_ITEMS } from "@/lib/constants"

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScrollPosition(NAVIGATION_ITEMS.map((item) => item.target))
  const pageHeight = usePageHeight(mainRef)

  return (
    <main
      ref={mainRef}
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor: calculateBackgroundColor(scrollY, pageHeight) }}
    >
      <NavigationBar />

      {/* Food animations in background */}
      <FoodAnimations count={20} />

      {/* Hero section */}
      <HeroSection />

      {/* Portfolio section */}
      <PortfolioSection />

      {/* Offer section */}
      <OfferSection />

      {/* Contact section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
