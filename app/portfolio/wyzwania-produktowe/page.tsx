import { GalleryLayout } from "@/components/gallery-layout"

// Przykładowe dane galerii
const productImages = [
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Bukiet kwiatów",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Naszyjnik z diamentem",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Zestaw kosmetyków",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Zegarek na rękę",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Perfumy",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Okulary przeciwsłoneczne",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Torebka skórzana",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Buty eleganckie",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Biżuteria srebrna",
    width: 800,
    height: 800,
  },
]

export default function WyzwaniaProduktowePage() {
  return (
    <GalleryLayout
      title="Wyzwania produktowe"
      description="Profesjonalne zdjęcia produktowe kwiatów, biżuterii, kosmetyków i innych przedmiotów. Każdy produkt jest fotografowany z dbałością o detale i w sposób podkreślający jego unikalne cechy."
      images={productImages}
    />
  )
}
