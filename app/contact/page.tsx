import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - KM Vloeren",
  description: "Neem contact op met KM Vloeren voor vragen, advies of een vrijblijvende offerte.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-20">
        <section className="min-h-[calc(100vh-5rem)]">
          <div className="grid md:grid-cols-2 min-h-[calc(100vh-5rem)]">
            {/* Image */}
            <div className="relative h-[300px] md:h-auto">
              <Image
                src="/images/showroom.jpg"
                alt="KM Vloeren showroom"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Contact Info */}
            <div className="bg-white py-12 md:py-20 px-8 md:px-16 lg:px-24">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#4a4538] mb-12 uppercase tracking-[0.15em]">
                Contact
              </h1>

              <div className="space-y-8 text-[#4a4538]">
                {/* Phone & Email */}
                <div className="space-y-2">
                  <p className="text-base md:text-lg">
                    <span className="font-medium">T:</span> 085-115 5485
                  </p>
                  <p className="text-base md:text-lg">
                    <span className="font-medium">E:</span>{" "}
                    <a 
                      href="mailto:info@kmvloeren.nl" 
                      className="hover:text-[#6b5d45] transition-colors"
                    >
                      info@kmvloeren.nl
                    </a>
                  </p>
                </div>

                {/* Address */}
                <div className="space-y-1">
                  <p className="text-base md:text-lg">Industrieweg 16</p>
                  <p className="text-base md:text-lg">8304AD Emmeloord</p>
                </div>

                {/* Business Info */}
                <div className="space-y-2">
                  <p className="text-base md:text-lg">
                    <span className="font-bold">KVK:</span> 96239298
                  </p>
                  <p className="text-base md:text-lg">
                    <span className="font-bold">BTW:</span> NL867527080B01
                  </p>
                </div>

                {/* Opening Hours */}
                <div className="pt-4">
                  <p className="text-base md:text-lg font-medium mb-4">Openingstijden</p>
                  <div className="space-y-1 text-base md:text-lg">
                    <div className="flex">
                      <span className="w-48">Maandag t/m vrijdag:</span>
                      <span>09.00 - 17.00</span>
                    </div>
                    <div className="flex">
                      <span className="w-48">Zaterdag:</span>
                      <span>10.00 - 16.00</span>
                    </div>
                    <div className="flex">
                      <span className="w-48">Zondag:</span>
                      <span>gesloten</span>
                    </div>
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
