import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock } from "lucide-react"

export default function CallToAction() {
  return (
    <section className="py-20 bg-[#0047AB]">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto bg-white">
          <CardContent className="p-8 md:p-12">
            <div className="text-center space-y-6">
              <Clock className="h-16 w-16 mx-auto text-[#0047AB]" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#0047AB]">Ready to Take Back Your Time?</h2>
              <p className="text-xl text-gray-600 max-w-xl mx-auto">
                Book your free strategy call now. We'll discuss your current challenges and create a custom automation
                plan for your business.
              </p>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="bg-[#0047AB] hover:bg-[#003380] text-lg px-8 py-6 group text-white transition-all duration-300 ease-in-out hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-105"
                  onClick={() => window.open("https://calendly.com/cramwithcam/30min", "_blank")}
                >
                  Free Strategy Session—BOOK HERE!
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-sm text-red-500 italic">Limited spots available this week</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

