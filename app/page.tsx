import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Brands } from "@/components/brands"
import { About } from "@/components/about"
import { Showroom } from "@/components/showroom"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Brands />
      <About />
      <Showroom />
            <div className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-white mb-12 text-center uppercase tracking-[0.15em] italic">
            Contact
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#c9b99a] mt-1 shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">Telefoon</p>
                    <a href="tel:0851155485" className="text-gray-400 hover:text-[#c9b99a] transition-colors">
                      085-115 5485
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#c9b99a] mt-1 shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">E-mail</p>
                    <a href="mailto:info@kmvloeren.nl" className="text-gray-400 hover:text-[#c9b99a] transition-colors">
                      info@kmvloeren.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#c9b99a] mt-1 shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">Adres</p>
                    <p className="text-gray-400">
                      Industrieweg 16<br />
                      8304AD Emmeloord
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#c9b99a] mt-1 shrink-0" />
                  <div>
                    <p className="text-white font-medium mb-1">Openingstijden</p>
                    <div className="text-gray-400 space-y-1 text-sm">
                      <p>Maandag t/m vrijdag: 09.00 - 17.00</p>
                      <p>Zaterdag: 10.00 - 16.00</p>
                      <p>Zondag: gesloten</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className="space-y-2 text-sm text-gray-400">
                    <p><span className="text-white font-medium">KVK:</span> 96239298</p>
                    <p><span className="text-white font-medium">BTW:</span> NL867527080B01</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
