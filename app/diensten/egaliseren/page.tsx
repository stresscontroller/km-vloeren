import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Egaliseren | Compleet Vloeren",
  description: "Professioneel egaliseren van uw vloer voor een perfecte ondergrond. Compleet Vloeren zorgt voor een vlakke basis.",
}

export default function EgaliserenPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <section className="bg-[#c9b99a] py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Content */}
              <div>
                {/* Title */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#4a4538] mb-6 uppercase tracking-[0.1em] leading-tight">
                  Egaliseren van je vloer<br />
                  <span className="text-xl md:text-2xl lg:text-3xl">De perfecte basis voor elke nieuwe vloer</span>
                </h1>
                
                <p className="text-[#4a4538] text-sm md:text-base leading-relaxed mb-8">
                  Een egale ondervloer is essentieel voor het strak en duurzaam leggen van je pvc vloer, laminaat, tegels of gietvloer. Compleet Vloeren zorgt met vakkundig egaliseren voor een stabiele en gladde basis, in heel Nederland.
                </p>

                {/* Waarom Egaliseren */}
                <div className="mb-8">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic border-b border-[#4a4538]/30 pb-2">
                    Waarom egaliseren?
                  </h2>
                  <ul className="space-y-3 text-[#4a4538] text-sm">
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Strak eindresultaat:</strong> Oneffenheden worden verwijderd, zodat je vloer perfect vlak ligt.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Langere levensduur:</strong> Voorkomt slijtage, loskomen of beschadiging van je nieuwe vloer.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Optimale hechting:</strong> Onmisbaar voor pvc, laminaat en gietvloeren – voorkomt problemen achteraf.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Voorkomt werken van de vloer:</strong> Gelijkmatige ondergrond voorkomt krimp en uitzetting.</span>
                    </li>
                  </ul>
                </div>

                {/* Onze Werkwijze */}
                <div className="mb-8">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic border-b border-[#4a4538]/30 pb-2">
                    Onze werkwijze
                  </h2>
                  <ol className="space-y-3 text-[#4a4538] text-sm">
                    <li className="flex gap-2">
                      <span className="font-medium">1.</span>
                      <span><strong>Grondige inspectie:</strong> We beoordelen je bestaande vloer en bepalen de beste aanpak.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium">2.</span>
                      <span><strong>Professionele voorbereiding:</strong> Oude vloerbedekking verwijderen en de ondergrond schoonmaken.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium">3.</span>
                      <span><strong>Juiste egalisatiemiddelen:</strong> We gebruiken hoogwaardige materialen, afgestemd op jouw ondervloer en de gewenste vloerafwerking.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-medium">4.</span>
                      <span><strong>Nauwkeurige afwerking:</strong> Alles wordt strak en glad opgeleverd – klaar om te leggen!</span>
                    </li>
                  </ol>
                </div>

                {/* Waarom Compleet Vloeren */}
                <div className="mb-8">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic border-b border-[#4a4538]/30 pb-2">
                    Waarom Compleet Vloeren?
                  </h2>
                  <ul className="space-y-3 text-[#4a4538] text-sm">
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Jarenlange ervaring</strong> met egaliseren van alle soorten vloeren.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Snelle, zorgvuldige service:</strong> We plannen vlot in en werken efficiënt.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Hoogwaardige materialen:</strong> Gegarandeerd de beste basis voor je nieuwe vloer.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Landelijke dekking & persoonlijk advies:</strong> Altijd een oplossing op maat.</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Section */}
                <div className="mb-8">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic border-b border-[#4a4538]/30 pb-2">
                    Vakkundig egaliseren?
                  </h2>
                  <p className="text-[#4a4538] text-sm mb-6">
                    Neem contact op voor gratis advies of vraag direct een vrijblijvende offerte aan. Compleet Vloeren regelt de perfecte basis voor elk type vloer!
                  </p>
                  <Link 
                    href="#contact"
                    className="inline-block bg-[#4a4538] text-white hover:bg-[#3a3528] transition-colors rounded-full px-6 py-3 text-sm font-medium"
                  >
                    Neem contact met ons op
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="order-first md:order-last">
                <div className="sticky top-24">
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <Image
                      src="/images/egaliseren-worker.jpg"
                      alt="Vakman bezig met egaliseren van vloer"
                      fill
                      className="object-cover object-top"
                      priority
                    />
                  </div>
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
