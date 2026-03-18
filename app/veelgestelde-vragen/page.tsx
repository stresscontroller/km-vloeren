"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqItems = [
  {
    question: "Wat zijn de kosten van vloeradvies op maat",
    answer: "Vloeradvies op maat is helemaal kosteloos. Neem vrijblijvend contact op voor al u vragen."
  },
  {
    question: "Is een PVC vloer geschikt voor vloerverwarming",
    answer: "Ja, PVC vloeren zijn uitstekend geschikt voor vloerverwarming. Ze geleiden warmte goed en zijn bestand tegen temperatuurwisselingen. Wij adviseren u graag over de beste combinatie voor uw situatie."
  },
  {
    question: "Heb ik garantie",
    answer: "Ja, op al onze vloeren en werkzaamheden geven wij garantie. De garantieperiode verschilt per product en dienst. Neem contact met ons op voor meer informatie over de specifieke garantievoorwaarden."
  },
  {
    question: "Hoelang mag ik niet over de egaline heen lopen",
    answer: "Na het aanbrengen van de egaline adviseren wij minimaal 24 uur niet over de vloer te lopen. Afhankelijk van de dikte en omstandigheden kan dit langer zijn. Onze monteurs informeren u hierover na de werkzaamheden."
  },
  {
    question: "Hoe onderhoud ik mijn PVC vloer het beste",
    answer: "Een PVC vloer is zeer onderhoudsvriendelijk. Regelmatig stofzuigen en dweilen met een licht vochtige mop is voldoende. Gebruik geen agressieve schoonmaakmiddelen. Wij adviseren speciale PVC-reinigingsmiddelen voor het beste resultaat."
  },
  {
    question: "Hebben jullie een lange wacht tijd",
    answer: "Wij streven naar korte wachttijden en plannen efficiënt. In de meeste gevallen kunnen wij binnen enkele weken starten met de werkzaamheden. Neem contact op voor de actuele planning."
  },
  {
    question: "Ik heb een klacht",
    answer: "Wij nemen klachten zeer serieus. Neem zo snel mogelijk contact met ons op via telefoon of e-mail. Wij streven ernaar uw klacht binnen 48 uur te behandelen en samen tot een passende oplossing te komen."
  },
  {
    question: "Hoe kan ik een offerte aanvragen",
    answer: "U kunt eenvoudig een vrijblijvende offerte aanvragen via onze website, telefonisch of door langs te komen in onze showroom. Wij maken graag een offerte op maat voor uw project."
  },
  {
    question: "Komen jullie nog langs voorafgaand van de werkzaamheden",
    answer: "Ja, voorafgaand aan de werkzaamheden komen wij altijd langs voor een inmeting en inspectie van de ruimte. Zo kunnen wij de werkzaamheden optimaal voorbereiden en eventuele bijzonderheden bespreken."
  },
  {
    question: "Mijn vraag staat er niet tussen",
    answer: "Geen probleem! Neem gerust contact met ons op via telefoon of e-mail. Wij helpen u graag met al uw vragen over vloeren, vloerverwarming of onze diensten."
  }
]

export default function VeelgesteldeVragenPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Image */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image
            src="/images/showroom.jpg"
            alt="KM Vloeren Showroom"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better navbar visibility */}
          <div className="absolute inset-0 bg-black/30" />
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-[#f5f0e8]">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#8b7355] mb-10 text-center uppercase tracking-[0.15em]">
              Veelgestelde vragen
            </h1>

            {/* Accordion */}
            <div className="space-y-0">
              {faqItems.map((item, index) => (
                <div key={index} className="border-b border-[#c9b99a]/50">
                  {/* Question Header */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between px-5 py-4 bg-[#c9b99a] text-left hover:bg-[#bfad8a] transition-colors"
                  >
                    <span className="text-sm md:text-base font-normal text-[#4a4538] uppercase tracking-wide pr-4">
                      {item.question}
                    </span>
                    <ChevronDown 
                      className={`w-5 h-5 text-[#4a4538] shrink-0 transition-transform duration-200 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  {/* Answer Content */}
                  {openIndex === index && (
                    <div className="px-5 py-4 bg-[#f5f0e8] border-x border-[#c9b99a]/30">
                      <p className="text-sm md:text-base text-[#4a4538] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
