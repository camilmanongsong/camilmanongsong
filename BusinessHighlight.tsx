import { Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    title: "Proven Results",
    description: "85% increase in response rates across 20+ brands",
  },
  {
    title: "Custom Solutions",
    description: "Tailored automation systems built for your specific needs",
  },
  {
    title: "Sustainable Growth",
    description: "Long-term solutions that evolve with your business",
  },
]

export default function BusinessHighlight() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#40E0D0]/10 via-white to-[#FF69B4]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#00308F] mb-4">Real Results for Real Businesses</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#0047AB] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0047AB]">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            className="text-xl px-16 py-8 bg-[#0047AB] hover:bg-[#00308F] text-white future-button"
            onClick={() => window.open("https://calendly.com/your-link", "_blank")}
          >
            See How Automation Transformed These Businesses
          </Button>
        </div>
      </div>
    </section>
  )
}

