import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] text-white">
      {/* Copyright Bar */}
      <div className="py-6 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="text-lg font-bold text-white uppercase tracking-wide">
              KM Vloeren
            </Link>
            
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} KM Vloeren. Alle rechten voorbehouden.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
