import Hero from "./sections/Hero"
import LearningVideosSection from "./sections/LearningVideos"
import PuzzleChallenge from "./sections/PuzzleChallenge"

function Landing() {
  return (
    <div>
        <Hero />
        <LearningVideosSection />
        <PuzzleChallenge />
    </div>
  )
}

export default Landing