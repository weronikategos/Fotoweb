"use client"

import { CONTACT_OPTIONS } from "@/lib/constants"
import { ContactOption } from "@/components/contact-option"

export function ContactSection() {
  return (
    <div id="contact" className="py-24 px-4 md:px-8 bg-opacity-90">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Skontaktuj się ze mną</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Jeśli jesteś zainteresowany/a współpracą lub masz pytania dotyczące mojej oferty, napisz do mnie:
        </p>

        {/* Opcje kontaktu */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          {CONTACT_OPTIONS.map((option, index) => (
            <ContactOption key={index} option={option} />
          ))}
        </div>
      </div>
    </div>
  )
}
