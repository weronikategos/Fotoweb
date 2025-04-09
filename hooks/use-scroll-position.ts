"use client"

import { useState, useEffect, useCallback } from "react"

interface ScrollPosition {
  scrollY: number
  activeSection: string
  isScrolled: boolean
}

export function useScrollPosition(sectionIds: string[]): ScrollPosition {
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState<string>("home")
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    // Ustaw tło nawigacji, gdy przewinięto
    setIsScrolled(currentScrollY > 50)
    setScrollY(currentScrollY)

    // Określ, która sekcja jest aktualnie widoczna
    const scrollPosition = currentScrollY + window.innerHeight / 3 // Użyj 1/3 wysokości viewportu jako punktu wyzwalania

    // Zacznij sprawdzanie od dołu strony (ostatnia sekcja jako pierwsza)
    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i])
      if (section) {
        // Pobierz pozycję i wymiary sekcji
        const rect = section.getBoundingClientRect()
        // Sprawdź, czy sekcja jest w viewporcie
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          setActiveSection(sectionIds[i])
          break
        }
      }
    }
  }, [sectionIds])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Wywołaj raz, aby ustawić początkowy stan
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return { scrollY, activeSection, isScrolled }
}
