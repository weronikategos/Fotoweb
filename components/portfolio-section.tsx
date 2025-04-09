"use client"

import { PORTFOLIO_ITEMS } from "@/lib/constants"
import { PortfolioItem } from "@/components/portfolio-item"

export function PortfolioSection() {
  return (
    <div id="portfolio" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center tracking-tight">Moje Portfolio</h2>

        <div className="space-y-24">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <PortfolioItem key={item.id} item={item} isReversed={index % 2 === 1} />
          ))}
        </div>
      </div>
    </div>
  )
}
