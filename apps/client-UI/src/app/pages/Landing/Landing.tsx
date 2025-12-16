import Hero from "./sections/Hero"
import LearningVideosSection from "./sections/LearningVideos"
import PuzzleChallenge from "./sections/PuzzleChallenge"

function Landing() {
  return (
    <div>
      <main className="space-x-16">
        <Hero />
        <LearningVideosSection />
        <PuzzleChallenge />
      </main>
    </div>
  )
}

export default Landing