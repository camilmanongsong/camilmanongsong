import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const caseStudies = [
  {
    title: "Multi-Brand Success Story",
    description: "Increased response rates by 85% for 20+ brands through intelligent automation and chatbot solutions.",
    results: ["85% increase in response rates", "Implementation across 20+ brands", "Intelligent chatbot solutions"],
  },
  {
    title: "Inbound Inquiry Revolution",
    description:
      "Automated the entire inquiry process across platforms, reducing response time by 90% and seamlessly integrating with existing systems.",
    results: [
      "90% reduction in response time",
      "Cross-platform automation",
      "Seamless integration with existing systems",
    ],
  },
]

export default function CaseStudy() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0047AB] to-[#40E0D0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center mb-16">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-md border-white/20 hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3>
                <p className="text-blue-100 mb-6">{study.description}</p>
                <ul className="space-y-2">
                  {study.results.map((result, i) => (
                    <li key={i} className="flex items-start text-white">
                      <ArrowRight className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

