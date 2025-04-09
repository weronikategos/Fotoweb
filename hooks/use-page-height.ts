"use client"

import { useState, useEffect, type RefObject } from "react"

export function usePageHeight(ref: RefObject<HTMLElement>): number {
  const [pageHeight, setPageHeight] = useState(1000) // Domyślna wartość, aby zapobiec dzieleniu przez zero

  useEffect(() => {
    const updatePageHeight = () => {
      if (ref.current) {
        const height = Math.max(ref.current.scrollHeight - window.innerHeight, 1000)
        setPageHeight(height)
      }
    }

    // Początkowa aktualizacja
    updatePageHeight()

    // Aktualizuj przy zmianie rozmiaru okna
    window.addEventListener("resize", updatePageHeight)

    return () => {
      window.removeEventListener("resize", updatePageHeight)
    }
  }, [ref])

  return pageHeight
}
