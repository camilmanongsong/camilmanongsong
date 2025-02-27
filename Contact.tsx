import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-[#0047AB]">Ready to Automate Your Success?</CardTitle>
            <CardDescription className="text-center">
              Book a free consultation to discuss how we can transform your manual processes
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <p className="text-gray-600 mb-6 text-center">
              During our call, we'll explore your current challenges and identify opportunities for automation that can
              save you time and boost your results.
            </p>
            <Button
              size="lg"
              className="bg-[#0047AB] hover:bg-[#003380]"
              onClick={() => window.open("https://calendly.com/your-link", "_blank")}
            >
              Schedule Your Free Call
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

