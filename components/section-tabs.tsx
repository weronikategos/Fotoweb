"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface SectionTabsProps {
  className?: string
}

export function SectionTabs({ className }: SectionTabsProps) {
  const sections = [
    { id: "portfolio", label: "Portfolio" },
    { id: "offer", label: "Oferta" },
    { id: "contact", label: "Kontakt" },
  ]

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.div
      className={`flex flex-wrap justify-center gap-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.6 + index * 0.1 },
          }}
          whileHover={{
            scale: 1.1,
            y: -5,
            transition: { duration: 0.2 },
          }}
        >
          <Button
            variant="outline"
            onClick={() => scrollToSection(section.id)}
            className="text-base font-medium px-6 py-6 border-2 transition-all hover:bg-primary hover:text-primary-foreground hover:border-primary"
          >
            {section.label}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}
