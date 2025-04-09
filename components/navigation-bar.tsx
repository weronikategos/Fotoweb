"use client"

import { memo } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { NAVIGATION_ITEMS } from "@/lib/constants"
import { scrollToSection } from "@/lib/utils"
import { useScrollPosition } from "@/hooks/use-scroll-position"

export const NavigationBar = memo(function NavigationBar() {
  const { activeSection, isScrolled } = useScrollPosition(NAVIGATION_ITEMS.map((item) => item.target))

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-4",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-end">
        <div className="flex flex-wrap justify-center gap-1 md:gap-3">
          {NAVIGATION_ITEMS.map((item) => (
            <motion.div
              key={item.target}
              initial={{ scale: 1, y: 0 }}
              whileHover={{
                scale: 1.05,
                y: -2,
                transition: {
                  type: "spring",
                  stiffness: 500,
                  damping: 15,
                },
              }}
              animate={{ scale: 1, y: 0 }}
              transition={{
                duration: 0, // Natychmiastowy powrót
              }}
            >
              <Button
                variant={activeSection === item.target ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.target)}
                className={cn(
                  "transition-all text-base font-medium",
                  activeSection === item.target ? "bg-primary text-primary-foreground" : "hover:bg-primary/10",
                )}
              >
                {item.label}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </nav>
  )
})
