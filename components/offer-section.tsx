"use client"

import { OFFER_ITEMS } from "@/lib/constants"
import { OfferCard } from "@/components/offer-card"

export function OfferSection() {
  return (
    <div id="offer" className="py-24 px-4 md:px-8 bg-opacity-80">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center tracking-tight">Oferta</h2>

        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          Tak wygląda moja oferta współpracy. Nie mniej jednak, zawsze możemy się dogadać i "wyjść poza schemat"! :)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {OFFER_ITEMS.map((item, index) => (
            <OfferCard key={item.id} item={item} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </div>
  )
}
