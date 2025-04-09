import { GalleryLayout } from "@/components/gallery-layout"

// Przykładowe dane galerii
const foodImages = [
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Deser czekoladowy",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Sałatka z owocami morza",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Tarta z owocami",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Steak z warzywami",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Zupa krem",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Deska serów",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Makarony z sosem",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Koktajl owocowy",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Ciasto z kremem",
    width: 800,
    height: 800,
  },
]

export default function SlodkoSlonaUcztaPage() {
  return (
    <GalleryLayout
      title="Słodko-słona uczta"
      description="Fotografie kulinarne, które podkreślają apetyczność i piękno potraw. Od słodkich deserów po wytrawne dania główne - każde zdjęcie oddaje charakter i smak prezentowanego jedzenia."
      images={foodImages}
    />
  )
}
