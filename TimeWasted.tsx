import { Clock, TrendingUp, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    icon: Clock,
    title: "Save Precious Time",
    description: "Transform manual tasks into automated workflows that run 24/7",
  },
  {
    icon: TrendingUp,
    title: "85% Higher Response Rates",
    description: "Proven track record of boosting engagement through smart automation",
  },
  {
    icon: Zap,
    title: "Process Curated for You",
    description: "Templated process is out. Curated process is in for immediate impact.",
  },
]

export default function TimeWasted() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#40E0D0]/10 via-white to-[#FF69B4]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#00308F] mb-4">Your Time is Being Wasted</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manual tasks are costing you money and opportunities. Let's fix that.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#0047AB] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0047AB]">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

