import { CheckCircle, Zap, Users, Lock } from "lucide-react"

const features = [
  { icon: CheckCircle, title: "Easy Task Management", description: "Organize and prioritize tasks effortlessly" },
  { icon: Zap, title: "Lightning Fast", description: "Blazing fast performance for seamless workflow" },
  { icon: Users, title: "Team Collaboration", description: "Work together in real-time with your team" },
  { icon: Lock, title: "Secure & Reliable", description: "Your data is safe and always accessible" },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

