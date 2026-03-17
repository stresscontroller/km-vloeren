import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface ServicePageProps {
  title: string
  subtitle: string
  description: string[]
  image: string
  imageAlt: string
}

export function ServicePage({ title, subtitle, description, image, imageAlt }: ServicePageProps) {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
        <Image
          src={image || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white uppercase tracking-[0.15em] mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 uppercase tracking-[0.1em]">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-[#c9b99a]">
        <div className="container mx-auto px-4 md:px-6 lg:px-12 max-w-4xl">
          <div className="space-y-6">
            {description.map((paragraph, index) => (
              <p key={index} className="text-[#4a4538] leading-relaxed text-sm md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link 
              href="/#contact"
              className="inline-block bg-[#6b5d45] text-white hover:bg-[#5a4d38] transition-colors rounded-full px-6 py-3 text-sm font-medium text-center"
            >
              Vraag een offerte aan
            </Link>
            <Link 
              href="/#diensten"
              className="inline-block bg-transparent border border-[#6b5d45] text-[#6b5d45] hover:bg-[#6b5d45] hover:text-white transition-colors rounded-full px-6 py-3 text-sm font-medium text-center"
            >
              Bekijk alle diensten
            </Link>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 md:py-20 bg-[#f5f0e8]">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-normal text-[#4a4538] mb-8 uppercase tracking-[0.2em]">
            Onze andere diensten
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <Link href="/diensten/vloer-laten-leggen" className="text-sm text-[#6b5d45] hover:text-[#4a4538] uppercase tracking-wide transition-colors">
              Vloer laten leggen
            </Link>
            <span className="text-[#b8a888]">|</span>
            <Link href="/diensten/egaliseren" className="text-sm text-[#6b5d45] hover:text-[#4a4538] uppercase tracking-wide transition-colors">
              Egaliseren
            </Link>
            <span className="text-[#b8a888]">|</span>
            <Link href="/diensten/vloerverwarming" className="text-sm text-[#6b5d45] hover:text-[#4a4538] uppercase tracking-wide transition-colors">
              Vloerverwarming
            </Link>
            <span className="text-[#b8a888]">|</span>
            <Link href="/diensten/dichtsmeren" className="text-sm text-[#6b5d45] hover:text-[#4a4538] uppercase tracking-wide transition-colors">
              Dichtsmeren
            </Link>
            <span className="text-[#b8a888]">|</span>
            <Link href="/diensten/plinten-plaatsen" className="text-sm text-[#6b5d45] hover:text-[#4a4538] uppercase tracking-wide transition-colors">
              Plinten plaatsen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
