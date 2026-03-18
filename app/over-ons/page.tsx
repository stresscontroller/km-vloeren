import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Over ons | KM Vloeren",
  description: "Leer meer over KM Vloeren - uw specialist in PVC-vloeren, laminaat, gietvloeren en vloerverwarming in heel Nederland.",
}

export default function OverOnsPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        {/* Main Content Section */}
        <section className="py-12 md:py-16 bg-[#f5f0e8]">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Showroom Image */}
              <div className="relative">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src="/images/showroom.jpg"
                    alt="KM Vloeren showroom gebouw"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#4a4538] uppercase tracking-[0.15em] italic mb-4">
                    Over ons
                  </h1>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-normal text-[#4a4538] uppercase tracking-[0.1em]">
                    KM Vloeren
                  </h2>
                </div>

                <div className="space-y-4 text-[#4a4538] text-sm md:text-base leading-relaxed">
                  <p>
                    Bij KM Vloeren staan kwaliteit, vakmanschap en persoonlijke service centraal. 
                    Wij zijn gespecialiseerd in het leveren en installeren van hoogwaardige pvc-vloeren, 
                    laminaat, gietvloeren en vloerverwarming. Met uitsluitend topmerken en vakkundige 
                    plaatsing garanderen wij een duurzame, stijlvolle en comfortabele vloeroplossing 
                    voor iedere ruimte.
                  </p>

                  <p>
                    Dankzij onze jarenlange ervaring bieden wij maatwerkoplossingen die perfect 
                    aansluiten bij jouw wensen en woonsituatie. Van het eerste advies tot de 
                    complete afwerking denken wij met je mee: welk merk, patroon of vloer het 
                    beste past, hoe de ideale combinatie met vloerverwarming eruitziet en hoe jouw 
                    vloer optimaal tot zijn recht komt.
                  </p>

                  <p>
                    Wij werken voor zowel particulieren als bedrijven, door heel Nederland. Je bent 
                    altijd welkom voor persoonlijk advies, een offerte op maat of een bezoek aan 
                    onze showroom.
                  </p>

                  <p>
                    Zo ben je verzekerd van een vloer die perfect past bij jouw wensen en jarenlang 
                    woonplezier biedt – stijlvol, comfortabel en onderhoudsvriendelijk in elke 
                    ruimte.
                  </p>
                </div>

                <div className="pt-4">
                  <Link 
                    href="#contact"
                    className="inline-block bg-[#6b5d45] text-white hover:bg-[#5a4d38] transition-colors rounded-full px-6 py-3 text-sm font-medium"
                  >
                    Neem contact op
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-[#c9b99a]">
          <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-3xl">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-normal text-[#4a4538] uppercase tracking-[0.1em] italic leading-relaxed mb-4">
              Benieuwd naar wat KM Vloeren voor jou kan betekenen?
            </h3>
            <p className="text-[#4a4538] text-sm md:text-base">
              Neem vandaag nog contact met ons op voor een vrijblijvend adviesgesprek.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
