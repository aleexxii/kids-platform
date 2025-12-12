const PuzzleChallenge: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center min-h-screen bg-blue-100">
      <div className="bg-yellow-200 rounded-3xl p-10 flex items-center justify-center">
        {/* Replace with real icon/image */}
        <span className="text-6xl">
          {/* Puzzle icon */}
          &#129504;
        </span>
      </div>
      <div className="max-w-xl">
        <h2 className="font-bold text-3xl md:text-4xl mb-4">
          Brain Boosting Puzzles
        </h2>
        <p className="mb-6 text-gray-700">
          Interactive challenges that boost problem-solving, critical thinking,
          memory, and spatial skills, sparking creativity & resilience.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center">
            <span className="mr-2">&#129488;</span>
            Critical thinking based learning
          </li>
          <li className="flex items-center">
            <span className="mr-2">&#127918;</span>
            Problem Solving
          </li>
          <li className="flex items-center">
            <span className="mr-2">&#128737;</span>
            Character Development
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PuzzleChallenge;
