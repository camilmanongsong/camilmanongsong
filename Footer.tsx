import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-4">Camil Manongsong</h3>
            <p className="text-gray-400 mb-6">Automation & Lead Generation Specialist</p>
            <div className="space-y-3">
              <Link
                href="mailto:camil.manongsong19@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                camil.manongsong19@gmail.com
              </Link>
              <Link
                href="tel:+639453806939"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                +63 945 380 6939
              </Link>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="h-5 w-5" />
                Cebu City, Philippines
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Camil Manongsong. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

