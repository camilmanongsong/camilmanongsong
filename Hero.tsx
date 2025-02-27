import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#40E0D0] via-[#0047AB] to-[#FF69B4] flex items-center overflow-hidden">
      {/* Chrome geometric elements and dot pattern (unchanged) */}

      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-sm md:text-base font-bold text-white/90 mb-6 tracking-[0.2em] uppercase">
            Attention Business Owners!
          </h2>
          <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            Your Success Story:
            <br />
            <span>
              <span className="text-white">Scale with </span>
              <span className="text-[#87CEFA]">Smart Systems</span>
            </span>
            <br />
            <span className="relative inline-block">
              Built for You
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-500" />
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-medium text-white whitespace-nowrap overflow-hidden text-overflow-ellipsis">
            Transform your business with custom automation that works 24/7 while you're asleep
          </p>
          <div className="space-y-6">
            <Button
              variant="secondary"
              size="lg"
              className="text-xl px-16 py-8 group bg-white/90 hover:bg-white text-[#0047AB] future-button transition-all duration-300 ease-in-out hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => window.open("https://calendly.com/cramwithcam/30min", "_blank")}
            >
              <span className="flex items-center">
                Book a Call
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

