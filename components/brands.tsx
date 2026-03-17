import Link from "next/link"

export function Brands() {
  return (
    <section id="assortiment" className="py-16 md:py-20 bg-[#f5f0e8]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h3 className="text-lg md:text-xl lg:text-2xl font-normal text-[#4a4538] mb-8 uppercase tracking-[0.2em]">
          Ontdek ons brede assortiment aan merken die wij aanbieden.
        </h3>

        <Link 
          href="#contact"
          className="inline-block bg-[#6b5d45] text-white hover:bg-[#5a4d38] transition-colors rounded-full px-6 py-3 text-sm font-medium"
        >
          Ontdek ons assortiment
        </Link>
      </div>
    </section>
  )
}
