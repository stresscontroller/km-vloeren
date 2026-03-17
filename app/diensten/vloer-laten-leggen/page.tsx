import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Vloer Laten Leggen | Compleet Vloeren",
  description:
    "Laat uw PVC vloer of visgraatvloer vakkundig leggen door de specialisten van Compleet Vloeren.",
}

export default function VloerLatenLeggenPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <section className="bg-[#c9b99a] py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Left Content */}
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#4a4538] mb-6 uppercase tracking-[0.1em]">
                  Vloer laten leggen
                </h1>
                <p className="text-[#4a4538] text-sm md:text-base leading-relaxed mb-8">
                  Laat je PVC, laminaat of gietvloer vakkundig leggen door specialisten van
                  Compleet Vloeren. Wij werken landelijk, leveren maatwerk in elke stijl – van
                  visgraat tot Hongaarse punt en rechte plank – en garanderen een strak
                  resultaat in elke ruimte.
                </p>

                {/* Voordelen Section */}
                <div className="border-t border-[#4a4538]/30 pt-6 mb-8">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic">
                    Voordelen van PVC, laminaat en gietvloeren
                  </h2>
                  <ul className="space-y-3 text-[#4a4538] text-sm">
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span>
                        <strong>Duurzaam & slijtvast:</strong> Bestendig tegen krassen, vlekken en intensief gebruik
                        – ideaal voor gezinnen en bedrijven.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span>
                        <strong>Onderhoudsvriendelijk:</strong> Eenvoudig schoon te maken en jarenlang mooi.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span>
                        <strong>Stijlvol & veelzijdig:</strong> Keuze uit talloze kleuren, patronen en structuren – voor
                        elk interieur.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span>
                        <strong>Comfortabel & geluidsdempend:</strong> Ideaal voor rustig, comfortabel wonen.
                        Geschikt voor vloerverwarming.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span>
                        <strong>Strak en naadloos:</strong> Zeker bij gietvloeren: modern, strak en onderhoudsarm.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Onze Werkwijze Section */}
                <div className="border-t border-[#4a4538]/30 pt-6 mb-8">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic">
                    Onze werkwijze
                  </h2>
                  <p className="text-[#4a4538] text-sm mb-4">
                    Het leggen van een vloer vraagt om kennis, precisie en de juiste voorbereiding.
                    Onze vakmensen verzorgen:
                  </p>
                  <ul className="space-y-3 text-[#4a4538] text-sm">
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span>
                        <strong>Advies & inmeten:</strong> Gratis vloeradvies, inmeten en heldere offerte.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span>
                        <strong>Vakkundige voorbereiding:</strong> Egaliseren van de ondervloer, dichtsmeren van
                        leidingen waar nodig.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span>
                        <strong>Perfecte plaatsing:</strong> Snel, netjes en volgens de hoogste kwaliteitsstandaard
                        gelegd.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span>
                        <strong>Afwerking tot in detail:</strong> Randen, plinten en oplevering – alles in één hand.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Waarom Kiezen Section */}
                <div className="border-t border-[#4a4538]/30 pt-6 mb-8">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic">
                    Waarom kiezen voor Compleet Vloeren?
                  </h2>
                  <ul className="space-y-3 text-[#4a4538] text-sm">
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span>
                        <strong>Jarenlange ervaring</strong> met pvc, laminaat én gietvloeren in alle denkbare
                        patronen.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span>
                        <strong>Landelijke service:</strong> Wij werken voor particulieren en bedrijven door heel
                        Nederland.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span>
                        <strong>Topmerken & maatwerk:</strong> Altijd de nieuwste stijlen, beste materialen en
                        persoonlijk advies.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span>
                        <strong>Snelle, betrouwbare uitvoering:</strong> Geen lange wachttijden, alles strak
                        ingepland.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* CTA Section */}
                <div className="border-t border-[#4a4538]/30 pt-6">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em]">
                    Meer weten of direct jouw vloer laten leggen?
                  </h2>
                  <p className="text-[#4a4538] text-sm mb-6">
                    Vraag vandaag nog een vrijblijvende offerte aan of kom langs in onze showroom.
                    Wij zorgen dat jouw vloer perfect gelegd wordt – precies zoals jij het wilt.
                  </p>
                  <Link
                    href="#contact"
                    className="inline-block bg-[#6b5d45] text-white hover:bg-[#5a4d38] transition-colors rounded-full px-6 py-3 text-sm font-medium"
                  >
                    Neem contact met ons op
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src="/images/craftsman.jpg"
                    alt="Vakman van Compleet Vloeren"
                    fill
                    className="object-cover object-top"
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
