import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dichtsmeren van de Leidingen | Compleet Vloeren",
  description: "Professioneel dichtsmeren van vloerverwarmingsleidingen voor optimale efficiëntie.",
}

export default function DichtSmerenPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <section className="py-12 md:py-16 bg-[#c9b99a]">
          <div className="container mx-auto px-4 md:px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Text Content */}
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#4a4538] mb-6 uppercase tracking-[0.1em] leading-tight">
                  Dichtsmeren van vloerverwarmingsleidingen voor optimale efficiëntie
                </h1>
                <p className="text-[#4a4538] leading-relaxed mb-8 text-sm md:text-base">
                  Het dichtsmeren van vloerverwarmingsleidingen is een essentiële stap voor een efficiënt, storingsvrij en energiezuinig vloerverwarmingssysteem. Compleet Vloeren zorgt voor een perfecte afdichting, zodat warmteverlies wordt voorkomen en jouw vloer overal gelijkmatig verwarmd wordt.
                </p>

                {/* Waarom leidingen dichtsmeren */}
                <div className="mb-8 border-t border-[#4a4538]/30 pt-6">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic">
                    Waarom leidingen dichtsmeren?
                  </h2>
                  <ul className="space-y-3 text-[#4a4538] text-sm md:text-base">
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Maximale warmte-efficiëntie:</strong> Geen luchtbellen of koude plekken – de warmte wordt gelijkmatig verdeeld.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Lagere energiekosten:</strong> Goed afgedichte leidingen voorkomen onnodig energieverlies.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Langere levensduur van je vloerverwarming:</strong> Minder kans op slijtage, lekkages of storingen.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Strak afgewerkte vloer:</strong> Direct klaar om af te werken met pvc, laminaat of een gietvloer.</span>
                    </li>
                  </ul>
                </div>

                {/* Onze werkwijze */}
                <div className="mb-8 border-t border-[#4a4538]/30 pt-6">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic">
                    Onze werkwijze
                  </h2>
                  <ul className="space-y-3 text-[#4a4538] text-sm md:text-base">
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">1.</span>
                      <span><strong>Inspectie & voorbereiding:</strong> We controleren het systeem en bepalen de beste aanpak voor jouw situatie.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">2.</span>
                      <span><strong>Dichtsmeren met kwaliteitsmaterialen:</strong> We gebruiken hoogwaardige egaline en afdichtmiddelen, afgestemd op vloerverwarming.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">3.</span>
                      <span><strong>Nauwkeurige afwerking:</strong> Strak en egaal, zonder luchtbellen of zwakke plekken.</span>
                    </li>
                  </ul>
                </div>

                {/* Waarom Compleet Vloeren */}
                <div className="mb-8 border-t border-[#4a4538]/30 pt-6">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic">
                    Waarom Compleet Vloeren?
                  </h2>
                  <ul className="space-y-3 text-[#4a4538] text-sm md:text-base">
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Gespecialiseerd team:</strong> Ervaren in zowel nieuwe als bestaande systemen.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Kwaliteit & garantie:</strong> Wij werken met de beste materialen voor een langdurig resultaat.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Snel en zorgvuldig:</strong> Geen onnodige wachttijden – je vloer is snel klaar voor verdere afwerking.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-[#4a4538]">•</span>
                      <span><strong>Landelijke service:</strong> Wij zijn actief in heel Nederland, voor zowel renovatie als nieuwbouw.</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Section */}
                <div className="border-t border-[#4a4538]/30 pt-6">
                  <h2 className="text-lg md:text-xl font-normal text-[#4a4538] mb-4 uppercase tracking-[0.1em] italic">
                    Vloerverwarmingsleidingen laten dichtsmeren?
                  </h2>
                  <p className="text-[#4a4538] leading-relaxed mb-6 text-sm md:text-base">
                    Neem contact op voor vrijblijvend advies of een offerte op maat. Compleet Vloeren zorgt dat jouw vloerverwarming optimaal presteert – voor jarenlang comfortabel wonen.
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
                    src="/images/dichtsmeren-worker.jpg"
                    alt="Dichtsmeren van vloerverwarmingsleidingen"
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
