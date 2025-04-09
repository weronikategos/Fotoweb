"use client"

import { motion } from "framer-motion"
import type { ContactOption as ContactOptionType } from "@/lib/types"

interface ContactOptionProps {
  option: ContactOptionType
}

export function ContactOption({ option }: ContactOptionProps) {
  const { icon: Icon, text, href } = option

  const content = (
    <motion.div
      className="flex items-center gap-3 px-6 py-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-primary/10"
      initial={{ scale: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        y: -2,
        transition: {
          type: "spring",
          stiffness: 500,
          damping: 15,
        },
      }}
      animate={{ scale: 1, y: 0 }}
      transition={{
        duration: 0, // Natychmiastowy powrót
      }}
    >
      <Icon className="h-6 w-6 text-primary" />
      <span className="text-lg">{text}</span>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return content
}
