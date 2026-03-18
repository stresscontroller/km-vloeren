import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Plinten Plaatsen | KM Vloeren",
  description: "Professionele plaatsing van MDF plinten voor een perfecte vloerafwerking door KM Vloeren.",
}

export default function PlintenPlaatsenPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="py-12 md:py-16 bg-[#c9b99a]">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Text Content */}
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#4a4538] mb-6 uppercase tracking-[0.1em] leading-tight">
                  Plinten plaatsen voor<br />
                  een perfecte<br />
                  vloerafwerking
                </h1>
                <p className="text-[#4a4538] leading-relaxed mb-8 text-sm md:text-base">
                  MDF plinten zijn dé finishing touch voor iedere vloer. Ze zorgen voor een strakke, verzorgde uitstraling én beschermen de onderrand van je muur tegen stoten en vuil. KM Vloeren plaatst MDF plinten vakkundig in elke ruimte, bij elke vloer – snel en netjes, in heel Nederland.
                </p>

                {/* Waarom kiezen voor MDF plinten */}
                <div className="border-t border-[#4a4538]/30 pt-6 mb-8">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic">
                    Waarom kiezen voor MDF plinten?
                  </h2>
                  <ul className="space-y-3 text-[#4a4538] text-sm md:text-base">
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Stijlvol en veelzijdig:</strong> Verkrijgbaar in diverse hoogtes en modellen, passend bij elk interieur.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Duurzaam & onderhoudsvriendelijk:</strong> Gemaakt van stevig MDF, eenvoudig te schilderen of af te werken in elke gewenste kleur.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Bescherming & afwerking:</strong> Voorkomt beschadigingen en zorgt voor een perfecte overgang tussen vloer en muur.</span>
                    </li>
                  </ul>
                </div>

                {/* Onze werkwijze */}
                <div className="border-t border-[#4a4538]/30 pt-6 mb-8">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic">
                    Onze werkwijze
                  </h2>
                  <ol className="space-y-3 text-[#4a4538] text-sm md:text-base">
                    <li>
                      <span className="font-medium">1. Nauwkeurig inmeten:</span> We meten alles exact op voor plinten op maat.
                    </li>
                    <li>
                      <span className="font-medium">2. Strak plaatsen:</span> Plinten worden snel, vakkundig en naadloos geplaatst – zonder kieren of scheve naden.
                    </li>
                    <li>
                      <span className="font-medium">3. Afwerking op maat:</span> We leveren de plinten indien gewenst in de juiste kleur of schilderen ze direct na plaatsing.
                    </li>
                    <li>
                      <span className="font-medium">4. Opruimen & opleveren:</span> Alles wordt netjes achtergelaten, zodat je direct kunt genieten van het resultaat.
                    </li>
                  </ol>
                </div>

                {/* Waarom KM Vloeren */}
                <div className="border-t border-[#4a4538]/30 pt-6 mb-8">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic">
                    Waarom KM Vloeren?
                  </h2>
                  <ul className="space-y-3 text-[#4a4538] text-sm md:text-base">
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Jarenlange ervaring en vakmanschap</strong> in plinten plaatsen en vloerafwerking.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Alleen hoogwaardige MDF plinten:</strong> duurzaam, strak en passend bij elke vloer.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Snel, efficiënt en persoonlijk:</strong> We luisteren naar jouw wensen voor het mooiste eindresultaat.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Landelijke service:</strong> Plinten laten plaatsen in heel Nederland, altijd met garantie op kwaliteit.</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Section */}
                <div className="border-t border-[#4a4538]/30 pt-6">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic">
                    Plinten laten plaatsen?
                  </h2>
                  <p className="text-[#4a4538] text-sm md:text-base mb-6">
                    Vraag direct een vrijblijvende offerte aan of neem contact op voor advies. KM Vloeren maakt jouw interieur écht af – met perfecte vloerafwerking!
                  </p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-[#4a4538] text-white hover:bg-[#3a3528] transition-colors rounded-full px-6 py-3 text-sm font-medium"
                  >
                    Neem contact met ons op
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="/images/plinten-worker.jpg"
                    alt="Vakman plaatst plinten langs een muur"
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
