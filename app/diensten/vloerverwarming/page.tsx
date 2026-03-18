import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vloerverwarming | KM Vloeren",
  description: "Vloerverwarming installatie door KM Vloeren. Geniet het hele jaar door van een warm en comfortabel huis.",
}

export default function VloerverwarmingPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-[#c9b99a] py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Text Content */}
              <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-normal text-[#4a4538] mb-6 uppercase tracking-[0.1em] leading-tight">
                  Vloerverwarming laten aanleggen – comfortabel, energiezuinig en modern
                </h1>
                <p className="text-[#4a4538] leading-relaxed text-sm md:text-base mb-8">
                  Vloerverwarming is de toekomst van comfortabel wonen. Geniet van warme voeten, een gelijkmatig binnenklimaat en een strak interieur – zonder zichtbare radiatoren. KM Vloeren is specialist in het aanleggen van vloerverwarming in elke woning, nieuwbouw én bestaande bouw.
                </p>

                {/* De voordelen van vloerverwarming */}
                <div className="border-t border-[#4a4538]/30 pt-6 mb-8">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic">
                    De voordelen van vloerverwarming
                  </h2>
                  <ul className="space-y-3 text-[#4a4538] text-sm md:text-base">
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Gelijkmatige warmte:</strong> Verwarmt elke kamer vanaf de vloer, zonder koude zones of tocht.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Onzichtbaar & ruimtebesparend:</strong> Geen radiatoren, dus meer ruimte en vrijheid in je interieur.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Energiezuinig:</strong> Werkt op lage temperatuur en is eenvoudig te combineren met duurzame energie, zoals zonnepanelen of warmtepomp.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Stil en onderhoudsvriendelijk:</strong> Geen geluidsoverlast, nauwelijks onderhoud nodig.</span>
                    </li>
                  </ul>
                </div>

                {/* Waarom kiezen voor KM Vloeren */}
                <div className="border-t border-[#4a4538]/30 pt-6 mb-8">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic">
                    Waarom kiezen voor KM Vloeren?
                  </h2>
                  <ul className="space-y-3 text-[#4a4538] text-sm md:text-base">
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Maatwerk voor elke situatie:</strong> Vloerverwarming mogelijk in elke ruimte, geschikt voor pvc, laminaat, tegels en gietvloeren.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Professionele installatie:</strong> Deskundig en snel geplaatst door ervaren monteurs, met oog voor detail.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Advies en service:</strong> Gratis advies op maat, duidelijke offerte en begeleiding van A tot Z.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Landelijke dekking:</strong> Wij installeren vloerverwarming in heel Nederland, bij renovatie én nieuwbouw.</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Section */}
                <div className="border-t border-[#4a4538]/30 pt-6">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic">
                    Transformeer je woning met vloerverwarming
                  </h2>
                  <p className="text-[#4a4538] text-sm md:text-base mb-2">
                    Wil je ook het hele jaar door genieten van een warm, comfortabel én energiezuinig huis?
                  </p>
                  <p className="text-[#4a4538] text-sm md:text-base mb-2">
                    Neem contact op voor vrijblijvend advies of vraag direct een offerte aan.
                  </p>
                  <p className="text-[#4a4538] text-sm md:text-base mb-6">
                    KM Vloeren regelt het – van advies tot vakkundige installatie.
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-[#3b3522] text-white hover:bg-[#2a2618] transition-colors rounded-full px-6 py-3 text-sm font-medium"
                  >
                    Neem contact met ons op
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/images/vloerverwarming-pipes.jpg"
                    alt="Vloerverwarming buizen in spiraalpatroon"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
