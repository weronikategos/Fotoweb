import type React from "react"
// Wspólne typy używane w aplikacji

export interface NavigationItem {
  label: string
  target: string
}

export interface PortfolioItem {
  id: string
  title: string
  description: string
  imageSrc: string
  link: string
}

export interface OfferItem {
  id: string
  title: string
  description?: string
  listItems?: string[]
}

export interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
}

export interface ContactOption {
  icon: React.ComponentType<{ className?: string }>
  text: string
  href?: string
}
