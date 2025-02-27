import Image from "next/image"

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    quote: "StreamLine has revolutionized our team's productivity. It's a game-changer!",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Jane Smith",
    role: "Project Manager, InnovateCo",
    quote: "The collaboration features in StreamLine are unparalleled. Highly recommended!",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Alex Johnson",
    role: "Freelancer",
    quote: "As a freelancer, StreamLine helps me stay organized and deliver projects on time.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

