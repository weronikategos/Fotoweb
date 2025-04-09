"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <div id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10">
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Katarzyna Świder
      </motion.h1>
      <motion.h2
        className="text-2xl md:text-3xl font-light mb-8 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Fotografia Kulinarna
      </motion.h2>
      <motion.div
        className="max-w-2xl text-lg md:text-xl text-gray-700 mb-12 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p>
          Specjalizuję się w fotografii kulinarnej, która podkreśla piękno i apetyczność potraw. Moje zdjęcia oddają nie
          tylko wygląd, ale także atmosferę i emocje związane z jedzeniem. Z pasją tworzę obrazy, które sprawiają, że
          ślinka cieknie na sam widok.
        </p>
      </motion.div>
    </div>
  )
}
