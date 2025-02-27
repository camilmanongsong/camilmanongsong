import Hero from "./components/Hero"
import TimeWasted from "./components/TimeWasted"
import About from "./components/About"
import CaseStudy from "./components/CaseStudy"
import Tools from "./components/Tools"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <TimeWasted />
        <About />
        <CaseStudy />
        <Tools />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

