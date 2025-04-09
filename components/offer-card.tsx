"use client"

import { motion } from "framer-motion"
import type { OfferItem } from "@/lib/types"

interface OfferCardProps {
  item: OfferItem
  delay?: number
}

export function OfferCard({ item, delay = 0 }: OfferCardProps) {
  return (
    <motion.div
      className="bg-white p-8 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
      {item.description && <p className="text-gray-700 mb-4">{item.description}</p>}
      {item.listItems && item.listItems.length > 0 && (
        <ul className="space-y-2 mb-6 text-gray-700">
          {item.listItems.map((listItem, index) => (
            <li key={index}>• {listItem}</li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}
