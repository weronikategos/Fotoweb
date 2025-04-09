import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { BACKGROUND_COLORS } from "@/lib/constants"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Oblicza kolor tła na podstawie pozycji przewijania
 */
export function calculateBackgroundColor(scrollY: number, pageHeight: number): string {
  try {
    // Użyj pełnej wysokości strony dla przejść kolorów
    const scrollProgress = Math.min(Math.max(scrollY / pageHeight, 0), 1)

    const colorIndex = Math.min(
      Math.floor(scrollProgress * (BACKGROUND_COLORS.length - 1)),
      BACKGROUND_COLORS.length - 2,
    )
    const nextColorIndex = Math.min(colorIndex + 1, BACKGROUND_COLORS.length - 1)
    const colorProgress = Math.min(Math.max(scrollProgress * (BACKGROUND_COLORS.length - 1) - colorIndex, 0), 1)

    const r = Math.round(
      BACKGROUND_COLORS[colorIndex].r +
        (BACKGROUND_COLORS[nextColorIndex].r - BACKGROUND_COLORS[colorIndex].r) * colorProgress,
    )
    const g = Math.round(
      BACKGROUND_COLORS[colorIndex].g +
        (BACKGROUND_COLORS[nextColorIndex].g - BACKGROUND_COLORS[colorIndex].g) * colorProgress,
    )
    const b = Math.round(
      BACKGROUND_COLORS[colorIndex].b +
        (BACKGROUND_COLORS[nextColorIndex].b - BACKGROUND_COLORS[colorIndex].b) * colorProgress,
    )

    return `rgb(${r}, ${g}, ${b})`
  } catch (error) {
    // Fallback do jasnoróżowego w przypadku błędu
    return "rgb(255, 245, 245)"
  }
}

/**
 * Przewija do określonej sekcji z płynną animacją
 */
export function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({ behavior: "smooth" })
  }
}
