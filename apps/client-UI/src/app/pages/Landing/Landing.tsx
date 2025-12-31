import Hero from "./sections/Hero"
import About from "./sections/About"
import LearningPath from "./sections/LearningPaths"
import ForParents from "./sections/ForParents"
import HowItWorksPage from "./sections/HowItWorks"
import Contact from "./sections/Contact"
import Footer from "@/app/layouts/Footer"

function Landing() {
  return (
    <div>
        <Hero />
        <About />
        <LearningPath />
        <HowItWorksPage />
        <ForParents />
        <Contact />
        <Footer />
    </div>
  )
}

export default Landing