import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Assortiment - Compleet Vloeren",
  description: "Ontdek ons brede assortiment aan topmerken vloeren. Bij Compleet Vloeren kies je uit 15 topmerken in pvc vloeren, laminaat en meer.",
}

const topmerken = [
  "ASPECTA",
  "BELAKOS",
  "BODIAX",
  "FLOER",
  "GELASTA",
  "HAMAT",
  "HEBETA",
  "OTIUM",
  "DOUWES DEKKER",
  "THERDEX",
]

export default function AssortimentPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <section className="bg-[#c9b99a] min-h-screen">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 py-12 md:py-16">
            <div className="max-w-4xl">
              {/* Main Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#4a4538] mb-10 uppercase tracking-[0.15em]">
                Assortiment
              </h1>

              {/* Subtitle */}
              <h2 className="text-xl md:text-2xl font-medium text-[#4a4538] mb-6 uppercase tracking-[0.1em]">
                Topmerken vloeren, één vaste pakketprijs
              </h2>

              {/* Description paragraphs */}
              <div className="space-y-4 text-[#4a4538] text-sm md:text-base leading-relaxed mb-8">
                <p>
                  Bij Compleet Vloeren kies je uit een zorgvuldig geselecteerd aanbod van 15 topmerken in pvc vloeren, laminaat en meer. Wij leveren uitsluitend kwaliteitsvloeren die bekend staan om hun duurzaamheid, uitstraling en garantie – geschikt voor elk type woning of project.
                </p>
                <p>
                  Of je nu kiest voor pvc, laminaat of een andere stijl: bij een compleet vloerproject (van vloerverwarming tot afgewerkte vloer) kies je vrij elk merk en elk design – zonder meerprijs.
                </p>
                <p>
                  Je profiteert altijd van één scherpe totaalprijs voor het volledige pakket: inclusief materiaal, professionele montage én topservice.
                </p>
                <p>
                  Dit maakt Compleet Vloeren uniek in de markt.
                </p>
              </div>

              {/* Top Brands Section */}
              <div className="mb-8">
                <h3 className="text-lg md:text-xl font-medium text-[#4a4538] mb-4 uppercase tracking-[0.1em]">
                  Onze topmerken:
                </h3>
                <ul className="space-y-2">
                  {topmerken.map((merk) => (
                    <li key={merk} className="flex items-center gap-3 text-[#4a4538] text-sm md:text-base">
                      <span className="w-1.5 h-1.5 bg-[#4a4538] rounded-full shrink-0" />
                      {merk}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="border-t border-[#4a4538]/30 my-8" />

              {/* CTA Text */}
              <div className="space-y-4 text-[#4a4538] text-sm md:text-base leading-relaxed mb-8">
                <p>
                  Twijfel je over het juiste merk of wil je verschillende vloeren in het echt vergelijken?
                </p>
                <p className="font-medium">
                  Bezoek onze showroom voor persoonlijk advies, een offerte op maat en een realistische indruk van elk merk.
                </p>
                <p>
                  Heb je vragen of wil je direct meer informatie over onze merken, prijzen of de mogelijkheden voor een totaalpakket?
                </p>
                <p>
                  Neem gerust contact op – wij denken graag met je mee!
                </p>
              </div>

              {/* CTA Button */}
              <Link
                href="#contact"
                className="inline-block bg-[#4a4538] text-white hover:bg-[#3a3528] transition-colors rounded-full px-6 py-3 text-sm font-medium"
              >
                Neem contact met ons op
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
