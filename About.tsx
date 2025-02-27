import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/camiiii%20jp.jpg-p1LP9A3InSaBcnPLK0NQ9XZie2TXak.jpeg"
                alt="Camil Manongsong"
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0047AB] mb-6">Hey there! I'm Camil 👋</h2>
            <p className="text-xl text-gray-600 mb-6">
              Your automation specialist who turns overwhelming manual tasks into smooth-running systems that save you
              time and boost your results.
            </p>
            <div className="space-y-4 text-gray-600">
              <p>
                Having worked with 20+ brands, I know exactly how to spot and fix those time-draining manual processes
                that are holding your business back.
              </p>
              <p>
                My superpower? Creating custom automation solutions that feel like having an extra team working 24/7 -
                without the extra headcount.
              </p>
            </div>
            <div className="mt-8">
              <Button
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4 bg-[#0047AB] hover:bg-[#00308F] text-white future-button"
                onClick={() => window.open("https://calendly.com/cramwithcam/30min", "_blank")}
              >
                Let's Get To Know More!
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

