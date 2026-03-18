import Image from "next/image"

export function Showroom() {
  return (
    <section className="relative w-full bg-white">
      <div className="p-10 aspect-[16/7] md:aspect-[21/9] relative w-full">
        <Image
          src="/images/showroom.jpg"
          alt="KM Vloeren showroom - Modern gebouw met houten gevelbekleding"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
