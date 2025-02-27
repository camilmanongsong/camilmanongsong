import { Clock, Target, TrendingUp } from "lucide-react"

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
    icon: Target,
    title: "Results in 30 Minutes",
    description: "Quick implementation that delivers immediate impact",
  },
]

export default function ValueProp() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0047AB] mb-4">Your Time is Being Wasted</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manual tasks are costing you money and opportunities. Let's fix that.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50">
              <benefit.icon className="h-12 w-12 text-[#0047AB] mb-4" />
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

