import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Workflow?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied customers and boost your productivity today.</p>
        <Button size="lg" variant="secondary">
          Start Your Free Trial
        </Button>
      </div>
    </section>
  )
}

