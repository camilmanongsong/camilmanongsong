import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const tools = [
  {
    name: "n8n",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-19%20at%2012.56.15%E2%80%AFAM-sG6Q19Bi2zgVePSjAyY12f5sj9uSVi.png",
    className: "bg-white",
  },
  {
    name: "Make",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2ed1a007a65a86b2e0e337753c29ab97.jpg-O7x4qekBrsmyhGPke2KgqO6ZjwqFGA.jpeg",
    className: "bg-white",
  },
  {
    name: "ChatGPT",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1681038472chatgpt-logo-zZyBkcsESt7fKKHI7ByUB7HOenuIjv.png",
    className: "bg-white",
  },
  {
    name: "Zapier",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo_black@2x-XDUhQh6EYb8Qx5czl2pMTzKDBWj2Nv.webp",
    className: "bg-white",
  },
]

export default function Tools() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#00308F] mb-4">
            Powerful Tools for Powerful Results
          </h2>
        </div>

        <Card className="max-w-5xl mx-auto">
          <CardContent className="p-8">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className={`${tool.className} p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-40 h-24 flex items-center justify-center`}
                >
                  <Image
                    src={tool.logo || "/placeholder.svg"}
                    alt={`${tool.name} logo`}
                    width={120}
                    height={45}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

