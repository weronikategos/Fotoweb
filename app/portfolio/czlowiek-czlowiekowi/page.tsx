import { GalleryLayout } from "@/components/gallery-layout"

// Przykładowe dane galerii
const peopleImages = [
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Portret kobiety",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Sesja rodzinna",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Portret biznesowy",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Sesja lifestyle",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Portret artystyczny",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Zdjęcie grupowe",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Portret dziecka",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Sesja modowa",
    width: 800,
    height: 800,
  },
  {
    src: "/placeholder.svg?height=800&width=800",
    alt: "Portret seniora",
    width: 800,
    height: 800,
  },
]

export default function CzlowiekCzlowiekowiPage() {
  return (
    <GalleryLayout
      title="Człowiek człowiekowi"
      description="Sesje fotograficzne z ludźmi w roli głównej. Portrety, sesje lifestyle i zdjęcia grupowe, które ukazują autentyczne emocje i relacje międzyludzkie w naturalny sposób."
      images={peopleImages}
    />
  )
}
