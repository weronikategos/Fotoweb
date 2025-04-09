import type { PortfolioItem, OfferItem, NavigationItem } from "@/lib/types"
import { Mail, Instagram, Facebook } from "lucide-react"

// Stałe nawigacyjne
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: "Strona główna", target: "home" },
  { label: "Portfolio", target: "portfolio" },
  { label: "Oferta", target: "offer" },
  { label: "Kontakt", target: "contact" },
]

// Dane portfolio
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "slodko-slona-uczta",
    title: "Słodko-słona uczta",
    description:
      "Fotografie kulinarne, które podkreślają apetyczność i piękno potraw. Od słodkich deserów po wytrawne dania główne - każde zdjęcie oddaje charakter i smak prezentowanego jedzenia.",
    imageSrc: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/slodko-slona-uczta",
  },
  {
    id: "wyzwania-produktowe",
    title: "Wyzwania produktowe",
    description:
      "Profesjonalne zdjęcia produktowe kwiatów, biżuterii, kosmetyków i innych przedmiotów. Każdy produkt jest fotografowany z dbałością o detale i w sposób podkreślający jego unikalne cechy.",
    imageSrc: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/wyzwania-produktowe",
  },
  {
    id: "czlowiek-czlowiekowi",
    title: "Człowiek człowiekowi",
    description:
      "Sesje fotograficzne z ludźmi w roli głównej. Portrety, sesje lifestyle i zdjęcia grupowe, które ukazują autentyczne emocje i relacje międzyludzkie w naturalny sposób.",
    imageSrc: "/placeholder.svg?height=600&width=800",
    link: "/portfolio/czlowiek-czlowiekowi",
  },
]

// Dane oferty
export const OFFER_ITEMS: OfferItem[] = [
  {
    id: "fotografia-produktowa",
    title: "Fotografia produktowa",
    listItems: [
      'Typu "flat lay" z produktami ułożonymi na estetycznym tle',
      "W użyciu, np. modelka nakładająca makijaż, klient smakujący croissanta",
      "Z bliska, pokazujące teksturę i detale produktów",
      "W stylu lifestyle'owym, np. piknik w parku, śniadanie w łóżku",
    ],
  },
  {
    id: "wspolpraca-lokale",
    title: "Współpraca z lokalami gastronomicznymi",
    listItems: [
      "Różne perspektywy oferowanych przez lokal pozycji z menu",
      "Ukazanie wnętrza lokalu",
      "Pokazanie estetyki pracy zespołu danego lokalu, np. zdjęcia kucharza, kelnerów w akcji",
      "Życie w lokalu, czyli pokazanie radości gości, korzystających z lokalu",
    ],
  },
  {
    id: "sesje-portrety",
    title: "Sesje w studio/w plenerze, uroczystości rodzinne, portrety",
  },
  {
    id: "content-creator",
    title: "Content Creator",
    listItems: [
      "Indywidualne prowadzenie social mediów, m. in. wykonywanie zdjęć, planowanie postów, nagrywanie i montowanie rolek",
    ],
  },
]

// Dane kontaktowe
export const CONTACT_OPTIONS = [
  {
    icon: Mail,
    text: "anna.kowalska@example.com",
  },
  {
    icon: Instagram,
    text: "@juicy.lens",
    href: "https://www.instagram.com/juicy.lens/?hl=en",
  },
  {
    icon: Facebook,
    text: "Katarzyna Świder",
    href: "https://www.facebook.com/katarzyna.swider.399#",
  },
]

// Kolory tła dla przejść
export const BACKGROUND_COLORS = [
  { r: 255, g: 245, b: 245 }, // Light pink
  { r: 245, g: 255, b: 245 }, // Light green
  { r: 245, g: 245, b: 255 }, // Light blue
  { r: 255, g: 255, b: 245 }, // Light yellow
  { r: 255, g: 245, b: 255 }, // Light lavender
  { r: 245, g: 255, b: 255 }, // Light cyan
]
