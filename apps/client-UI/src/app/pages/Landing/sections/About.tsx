const About: React.FC = () => (
  <section className="relative overflow-hidden bg-[#550303] text-white px-6 py-16 md:py-24">
    {/* TOP gradient */}
    <div
      className="pointer-events-none absolute top-0 inset-0 h-2/4 
                  bg-gradient-to-b from-black/60 to-transparent"
    />
    <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-10">
      <div className="flex flex-col items-center gap-6">
        <div className="h-12 w-px bg-white/70" />
        <img
          src="/about_avtr1.png"
          alt=""
          className="w-28 h-28 object-cover rounded-lg shadow-lg"
        />
        <img
          src="/about_avtr2.png"
          alt=""
          className="w-28 h-28 object-cover rounded-lg shadow-lg"
        />
        <img
          src="/about_avtr3.png"
          alt=""
          className="w-28 h-28 object-cover rounded-lg shadow-lg"
        />

        <div className="h-12 w-px bg-white/70" />
      </div>

      {/* text block */}
      <div className="sapce-y-4">
        <p className="text-xs tracking-[0.3em] uppercase text-white/70">
          {' '}
          About{' '}
        </p>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-wide">
          THE KIDDO PROJECT
        </h2>
        <p className="text-sm md:text-base text-white/85 leading-relaxed">
          Kiddo is a playful platform that helps children grow kinder, more
          focused, and healthier through story-driven videos, puzzles, and
          games. It turns everyday challenges into small, achievable quests so
          kids can practise good habits without feeling pressured. Parents get
          gentle insights into progress, while kids experience a safe, ad-free
          space designed just for them. Every element—from the soft 3D
          characters to the warm colors—is crafted to make kids feel safe, seen,
          and inspired.
        </p>
      </div>
    </div>
    {/* BOTTOM gradient */}
    <div
      className="pointer-events-none absolute bottom-0 left-0 w-full h-1/3 
                  bg-gradient-to-t from-black/60 to-transparent"
    />
  </section>
);

export default About;
