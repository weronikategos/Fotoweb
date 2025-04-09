"use client"

import { useEffect, useState, memo } from "react"
import { motion } from "framer-motion"
import type { JSX } from "react"

// Komponenty SVG dla elementów jedzenia
const FoodSvgComponents = {
  cupcake: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 20C20 13.3726 25.3726 8 32 8C38.6274 8 44 13.3726 44 20V24H20V20Z" fill="#FFD1DC" />
      <path d="M18 24H46L42 52H22L18 24Z" fill="#F9A8BC" />
      <circle cx="32" cy="16" r="2" fill="#FF6B81" />
      <circle cx="26" cy="18" r="2" fill="#FF6B81" />
      <circle cx="38" cy="18" r="2" fill="#FF6B81" />
      <path d="M30 8L32 4L34 8" stroke="#8B4513" strokeWidth="2" />
    </svg>
  ),
  donut: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="18" fill="#FFB347" />
      <circle cx="30" cy="30" r="8" fill="white" />
      <circle cx="22" cy="22" r="2" fill="#FF6B81" />
      <circle cx="38" cy="22" r="2" fill="#FF6B81" />
      <circle cx="38" cy="38" r="2" fill="#FF6B81" />
      <circle cx="22" cy="38" r="2" fill="#FF6B81" />
      <circle cx="30" cy="18" r="2" fill="#FF6B81" />
    </svg>
  ),
  cake: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 50L30 10L50 50H10Z" fill="#F9A8BC" />
      <path d="M15 40L30 20L45 40H15Z" fill="#FFD1DC" />
      <path d="M20 30L30 15L40 30H20Z" fill="white" />
      <circle cx="25" cy="45" r="2" fill="#FF6B81" />
      <circle cx="35" cy="45" r="2" fill="#FF6B81" />
      <circle cx="30" cy="35" r="2" fill="#FF6B81" />
    </svg>
  ),
  coffee: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 20H45V40C45 45.5228 40.5228 50 35 50H25C19.4772 50 15 45.5228 15 40V20Z" fill="#8B4513" />
      <path d="M20 20H40V35C40 38.866 36.866 42 33 42H27C23.134 42 20 38.866 20 35V20Z" fill="#D2B48C" />
      <path d="M45 25H50C52.7614 25 55 27.2386 55 30C55 32.7614 52.7614 35 50 35H45V25Z" fill="#D9D9D9" />
      <path d="M25 15C25 12.2386 27.2386 10 30 10C32.7614 10 35 12.2386 35 15V20H25V15Z" fill="#D9D9D9" />
    </svg>
  ),
  icecream: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 20C20 13.3726 25.3726 8 32 8C38.6274 8 44 13.3726 44 20C44 26.6274 38.6274 32 32 32C25.3726 32 20 26.6274 20 20Z"
        fill="#FFD1DC"
      />
      <path d="M25 30L32 50L39 30" fill="#D2B48C" />
      <circle cx="28" cy="16" r="3" fill="white" />
      <circle cx="36" cy="16" r="3" fill="white" />
      <circle cx="32" cy="24" r="3" fill="white" />
    </svg>
  ),
  macaron: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="25" rx="15" ry="10" fill="#B19CD9" />
      <ellipse cx="30" cy="35" rx="15" ry="10" fill="#D6BCFA" />
      <path d="M20 30H40" stroke="#B19CD9" strokeWidth="2" />
    </svg>
  ),
  croissant: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 45C25 35 35 25 45 15C47 20 45 25 40 30C35 35 30 40 25 45C20 47 15 47 15 45Z" fill="#FFD700" />
      <path d="M20 40C25 35 30 30 35 25C37 27 35 30 32 33C29 36 26 39 23 42C21 43 18 42 20 40Z" fill="#FFF8DC" />
    </svg>
  ),
  cocktail: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 20H45L30 40V50H40V55H20V50H30V40L15 20Z" fill="#87CEFA" />
      <path d="M20 25L40 25L30 38L20 25Z" fill="#00BFFF" />
      <circle cx="25" cy="28" r="2" fill="white" />
      <circle cx="35" cy="28" r="2" fill="white" />
      <path d="M28 15L32 15" stroke="#FF6347" strokeWidth="2" />
      <path d="M25 10L35 10" stroke="#FF6347" strokeWidth="2" />
    </svg>
  ),
  strawberry: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 15L25 20H35L30 15Z" fill="#228B22" />
      <path d="M25 20C25 30 20 40 30 45C40 40 35 30 35 20H25Z" fill="#FF6347" />
      <circle cx="28" cy="25" r="1" fill="#FFFF00" />
      <circle cx="32" cy="25" r="1" fill="#FFFF00" />
      <circle cx="26" cy="30" r="1" fill="#FFFF00" />
      <circle cx="30" cy="30" r="1" fill="#FFFF00" />
      <circle cx="34" cy="30" r="1" fill="#FFFF00" />
      <circle cx="28" cy="35" r="1" fill="#FFFF00" />
      <circle cx="32" cy="35" r="1" fill="#FFFF00" />
    </svg>
  ),
  chocolate: (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="20" width="30" height="20" fill="#8B4513" />
      <path d="M15 20H45V25H15V20Z" fill="#A0522D" />
      <path d="M15 30H45V35H15V30Z" fill="#A0522D" />
      <path d="M25 20V40" stroke="#5C3317" strokeWidth="1" />
      <path d="M35 20V40" stroke="#5C3317" strokeWidth="1" />
    </svg>
  ),
}

// Konwertuj obiekt na tablicę dla łatwego losowego wyboru
const foodItems = Object.values(FoodSvgComponents)

interface FoodAnimationsProps {
  count?: number
}

// Zoptymalizowany komponent animacji jedzenia
export const FoodAnimations = memo(function FoodAnimations({ count = 20 }: FoodAnimationsProps) {
  const [foodElements, setFoodElements] = useState<JSX.Element[]>([])

  // Generuj elementy jedzenia tylko raz przy montowaniu komponentu
  useEffect(() => {
    const generateFoodElements = () => {
      const elements = []

      // Podziel ekran na równe kolumny dla lepszej dystrybucji
      const columnWidth = 100 / count

      for (let i = 0; i < count; i++) {
        // Losowo wybierz element jedzenia
        const randomFoodItem = foodItems[Math.floor(Math.random() * foodItems.length)]
        const size = 40 + Math.random() * 40 // Losowy rozmiar między 40px a 80px

        // Umieść każdy element w jego własnej kolumnie z małym losowym przesunięciem
        // To zapewnia bardziej równomierną dystrybucję poziomą
        const startX = i * columnWidth + Math.random() * columnWidth * 0.6

        // Losowe pozycje początkowe w pionie, aby stworzyć natychmiastowy efekt wizualny
        // Niektóre elementy zaczynają od powyżej viewportu, niektóre od wewnątrz
        const startY = Math.random() * -200

        // Różne czasy trwania, aby zapobiec poruszaniu się elementów z tą samą prędkością
        const duration = 15 + Math.random() * 20 // Losowy czas trwania (15-35s)

        // Minimalne lub brak opóźnienia dla początkowego pojawienia się
        const delay = i * 0.1 // Bardzo małe opóźnienie między elementami (0.1s)

        elements.push(
          <motion.div
            key={`food-${i}`}
            className="absolute will-change-transform"
            style={{
              width: size,
              height: size,
              left: `${startX}vw`,
              top: `${startY}px`, // Zacznij od różnych pozycji pionowych
              opacity: 0.2,
              position: "fixed", // Użyj pozycji fixed, aby uniknąć problemów z przewijaniem
            }}
            initial={{ y: startY, opacity: 0.2 }} // Ustaw początkową pozycję, aby pasowała do stylu
            animate={{
              y: ["0vh", "120vh"],
              rotate: [0, 360],
              opacity: [0.2, 0.3, 0.2, 0.1],
            }}
            transition={{
              y: {
                duration,
                repeat: Number.POSITIVE_INFINITY,
                delay,
                ease: "linear",
              },
              rotate: {
                duration: duration * 0.8,
                repeat: Number.POSITIVE_INFINITY,
                delay,
                ease: "linear",
              },
              opacity: {
                duration: duration * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                delay,
                ease: "linear",
                repeatType: "mirror",
              },
            }}
          >
            {randomFoodItem}
          </motion.div>,
        )
      }

      return elements
    }

    setFoodElements(generateFoodElements())
  }, [count])

  return <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">{foodElements}</div>
})
