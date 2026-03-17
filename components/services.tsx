import Image from "next/image"
import Link from "next/link"

export function Services() {
  return (
    <section id="diensten" className="py-16 md:py-24 bg-[#c9b99a]">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#4a4538] mb-6 uppercase tracking-[0.15em]">
              Diensten
            </h2>
            <p className="text-[#4a4538] leading-relaxed mb-8 text-sm md:text-base">
              Compleet Vloeren biedt een uitgebreid assortiment aan vloerdiensten voor klanten in heel Nederland. 
              Laat jouw PVC vloer, visgraatvloer of vloer met vloerverwarming vakkundig leggen door onze ervaren specialisten. 
              Ontdek onze diensten of vraag direct vrijblijvend een offerte aan!
            </p>
            <Link 
              href="#contact"
              className="inline-block bg-[#6b5d45] text-white hover:bg-[#5a4d38] transition-colors rounded-full px-6 py-3 text-sm font-medium"
            >
              Ontdek onze diensten
            </Link>
          </div>

          {/* Image Collage */}
          <div className="order-1 md:order-2 relative">
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2 aspect-[2/1] relative overflow-hidden">
                <Image
                  src="/images/hero-floor.jpg"
                  alt="Woonkamer met elegante vloer"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
