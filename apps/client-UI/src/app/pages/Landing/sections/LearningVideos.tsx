
const LearningVideos: React.FC = () => (
  <section className="flex flex-col md:flex-row min-h-screen items-center bg-blue-50">
    <div className="bg-yellow-200 rounded-3xl p-10 flex items-center justify-center">
      {/* Replace with real icon/image */}
      <span className="text-6xl text-yellow-500">&#9654;</span>
    </div>
    <div className="max-w-xl">
      <h2 className="font-bold text-3xl md:text-4xl mb-4">
        Interactive Learning Videos
      </h2>
      <p className="mb-6 text-gray-700">
        Engaging animated videos that teach kids values, knowledge, and problem solving skills in a fun way.
      </p>
      <ul className="space-y-3">
        <li className="flex items-center">
          <span className="mr-2"></span>
          Story-based learning
        </li>
        <li className="flex items-center">
          <span className="mr-2"></span>
          Education topics (Maths, English, Science)
        </li>
        <li className="flex items-center">
          <span className="mr-2"></span>
          Moral & life skills
        </li>
      </ul>
    </div>
  </section>
);

export default LearningVideos;
