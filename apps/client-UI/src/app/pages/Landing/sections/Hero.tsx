import { Link } from 'react-router-dom';

function Hero() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#ff6b6b] via-[#ff8e8e] to-[#ffe0e0] text-white overflow-hidden">
      <header className="flex items-center justify-between px-10 pt-6">
        <div className="text-2xl font-bold tracking-tight">Kid's Joy</div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium bg-white/25 backdrop:blur rounded-full p-3">
          <a href="#home" className="hover:opacity-80">
            Home
          </a>
          <a href="#about" className="hover:opacity-80">
            About
          </a>
          <a href="#subscribe" className="hover:opacity-80">
            Programs 
          </a>
          <a href="#contact" className="hover:opacity-80">
            Activities 
          </a>
          <a href="#contact" className="hover:opacity-80">
            Contact 
          </a>
          <a href="#contact" className="hover:opacity-80">
            Pricing 
          </a>
        </nav>

        {/* Mobile Buttons */}
        <div className="block sm:hidden">
          <button className="p-4 bg-violet-600">Click</button>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="text-sm font-semibold hover:opacity-80">
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-[#e9344c] shadow-md hover:bg-white"
          >
            Sign Up
          </Link>
        </div>
      </header>

      <section className="relative px-10 pb-10 pt-10">
        {/* Background word */}
        <h1
          className="pointer-events-none select-none absolute inset-x-0 -top-2 md:top-6 text-[3rem] font-extrabold md:text-[9rem] tracking-widest text-center bg-gradient-to-b from-white to-red-400
    bg-clip-text text-transparent"
        >
          KIDDO
        </h1>

        {/* Desktop bottom row: left text + center avatar + right cards */}
        <div className="hidden inset-x-10 md:flex absolute items-end justify-between gap-8">
          {/* LEFT: text block */}
          <div className="relative z-10 max-w-lg text-justify bottom-16 ">
            {/* badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-lime-300" />
              +5,000 kids building better habits
            </div>

            {/* main heading + subheading */}
            <div className="mt-4 space-y-2">
              <h2 className="text-4xl md:text-3xl font-extrabold leading-tight">
                Grow happy, curious, <br /> kind kiddos.
              </h2>
              <p className="text-sm md:text-base font-medium text-white/90">
                Videos, puzzles, and games that coach behaviour, learning, and
                health—one tiny mission at a time.
              </p>
            </div>

            {/* body copy */}
            <p className="mt-4 text-sm md:text-base text-white/85 leading-relaxed">
              KIDDO turns screen time into daily quests: kindness missions,
              focus boosts, movement breaks, and brain puzzles designed with
              child‑development experts.
            </p>

            {/* primary CTA row */}
            <div className="mt-6 flex items-center gap-4">
              <Link
                to="/signup"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#e9344c] shadow-lg hover:bg-lime-50"
              >
                Start free for your kid
              </Link>
              <Link
                to="/login"
                className="text-sm font-semibold underline-offset-4 hover:underline"
              >
                Login
              </Link>
            </div>

            {/* small reassurance row */}
            <div className="mt-4 flex items-center gap-3 text-xs text-white/80">
              <div className="flex -space-x-2">
                <span className="h-6 w-6 rounded-full bg-white/60 border border-white/40" />
                <span className="h-6 w-6 rounded-full bg-white/40 border border-white/40" />
                <span className="h-6 w-6 rounded-full bg-white/30 border border-white/40" />
              </div>
              <span>Trusted by parents who want calm, confident kids.</span>
            </div>
          </div>

          {/* CENTER: main avatar */}
          <div className="flex pt-6 justify-center">
            <img src="/landing_Avatar.png" alt="" className="max-w-xl" />
          </div>

          {/* RIGHT: cards */}
          <div className="hidden mb-16 md:flex flex-row gap-4">
            {/* CARD 1 */}
            <div
              className="w-52 h-64 rounded-2xl bg-white/90 p-4 shadow-xl
                  flex flex-col text-left"
            >
              <h3 className="font-semibold text-[#e9344c]">Kindness Quests</h3>

              <p className="mt-2 text-xs text-gray-700">
                Short stories and missions that help kids practise gratitude,
                sharing, and empathy.
              </p>

              <img src="" alt="" />

              {/* <span className="mt-3 text-xs font-semibold text-[#e9344c]">
                Try a quest →
              </span> */}
            </div>

            {/* CARD 2 */}
            <div
              className="w-52 h-64 rounded-2xl bg-white/90 p-4 shadow-xl
                  flex flex-col items-center justify-center text-center"
            >
              <h3 className="font-semibold text-[#e9344c]">
                Brain & Health Boost
              </h3>

              <p className="mt-2 text-xs text-gray-700">
                Puzzle playlists and movement breaks designed to support focus,
                memory, and healthy routines.
              </p>

              <span className="mt-3 text-xs font-semibold text-[#e9344c]">
                Explore videos →
              </span>
            </div>
          </div>
        </div>

        {/* MOBILE HERO */}
        <div className="md:hidden flex flex-col items-center gap-4 pt-2">
          <h2 className="text-2xl font-extrabold leading-tight text-center">
            Grow happy, curious, kind kiddos.
          </h2>

          <p className="text-sm font-medium text-white/90 text-center">
            Videos, puzzles, and games that coach behaviour, learning, and
            health—one tiny mission at a time.
          </p>

          <p className="text-sm text-white/85 leading-relaxed text-center max-w-sm">
            KIDDO turns screen time into daily quests: kindness missions, focus
            boosts, movement breaks, and brain puzzles designed with
            child-development experts.
          </p>

          {/* avatar */}
          <div className="w-full flex justify-center -mt-12">
            <img
              src="/landing_Avatar.png"
              alt=""
              className="max-w-lg object-contain"
            />
          </div>
        </div>
      </section>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
    </main>
  );
}

export default Hero;
