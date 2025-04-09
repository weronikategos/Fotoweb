"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { PortfolioItem as PortfolioItemType } from "@/lib/types"

interface PortfolioItemProps {
  item: PortfolioItemType
  isReversed?: boolean
}

export function PortfolioItem({ item, isReversed = false }: PortfolioItemProps) {
  const containerClass = isReversed ? "portfolio-item-right" : "portfolio-item-left"

  return (
    <motion.div
      className={containerClass}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="portfolio-image h-80 md:h-96">
        <Image src={item.imageSrc || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
      </div>
      <div className="portfolio-content">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{item.title}</h3>
        <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
        <Link href={item.link}>
          <Button variant="outline" className="border-2">
            Zobacz więcej
          </Button>
        </Link>
      </div>
    </motion.div>
  )
}
