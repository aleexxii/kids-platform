import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import card1 from '../../../../assets/images/Hero/card1.png';
import card2 from '../../../../assets/images/Hero/card2.png';
import FeatureCard from '@/app/components/landing/heroSection/FeatureCard';

function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#660F24] via-[#E5203A] to-[#FF94B2] text-white overflow-hidden">
      {/* ================= HEADER ================= */}
      <header className="flex items-center justify-between px-10 pt-6 md:px-10">
        <div className="text-2xl font-extrabold tracking-wide font-Bungee">
          KIDDO
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium bg-white/25 backdrop:blur rounded-full p-3">
          {[
            'Home',
            'About',
            'Learning Paths',
            'For Parents',
            'Contact',
            'How It Works',
          ].map((label) => (
            <a
              key={label}
              href={`/${label.toLowerCase().replace(/\s/g, '-')}`}
              className="hover:opacity-80"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="block sm:hidden p-2 rounded-xl bg-white/15 border border-white/20 text-white shadow-md backdrop-blur"
        >
          {open ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>

        {/* Mobile menu panel */}

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', stiffness: 50, damping: 10 }}
              className="sm:hidden fixed top-16 right-4 w-64 bg-black/90 backdrop-blur-xl rounded-2xl shadow-2xl z-50 overflow-hidden border border-white/10"
            >
              <ul className="flex flex-col text-sm font-medium text-white">
                {[
                  'Home',
                  'About',
                  'Learning Paths',
                  'For Parents',
                  'Contact',
                  'How It Works',
                ].map((label) => (
                  <li
                    key={label}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <Link
                      to={`/${label.toLowerCase().replace(/\s/g, '-')}`}
                      onClick={() => setOpen(false)}
                      className="block px-6 py-4 hover:bg-white/10 text-left"
                    >
                      {label}
                    </Link>
                  </li>
                ))}

                {/* Mobile Auth Actions */}
                <li className="p-4 bg-white/5 space-y-3">
                  <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className="block w-full py-3 text-center font-semibold border border-white/20 rounded-xl hover:bg-white/10"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    onClick={() => setOpen(false)}
                    className="block w-full py-3 text-center font-semibold bg-white text-[#e9344c] rounded-xl shadow-lg active:scale-95 transition-transform"
                  >
                    Sign Up Free
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Login / SignUp */}
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

      {/* ================= HERO SECTIONS ================= */}

      {/* Desktop Hero */}
      <section className="hidden lg:flex relative px-10 pt-10 inset-x-0 items-end justify-between gap-8">
        {/* LEFT: text */}
        <div className="relative z-10 max-w-lg text-justify bottom-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-lime-300" />
            +5,000 kids building better habits
          </div>
          <div className="mt-4 space-y-2">
            <h2 className="text-4xl md:text-3xl font-extrabold leading-tight">
              Grow happy, curious, <br /> kind kiddos.
            </h2>
            <p className="text-sm md:text-base font-medium text-white/90">
              Videos, puzzles, and games that coach behaviour, learning, and
              health—one tiny mission at a time.
            </p>
          </div>
          <p className="mt-4 text-sm md:text-base text-white/85 leading-relaxed">
            KIDDO turns screen time into daily quests: kindness missions, focus
            boosts, movement breaks, and brain puzzles designed with
            child‑development experts.
          </p>
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
          <div className="mt-4 flex items-center gap-3 text-xs text-white/80">
            <div className="flex -space-x-2">
              <span className="h-6 w-6 rounded-full bg-white/60 border border-white/40" />
              <span className="h-6 w-6 rounded-full bg-white/40 border border-white/40" />
              <span className="h-6 w-6 rounded-full bg-white/30 border border-white/40" />
            </div>
            <span>Trusted by parents who want calm, confident kids.</span>
          </div>
        </div>

        {/* CENTER: Avatar */}
        <div className="flex pt-6 justify-center">
          <img src="/landing_Avatar.png" alt="" className="max-w-xl" />
        </div>

        {/* RIGHT: Feature cards */}
        <div className="hidden mb-16 md:flex flex-row gap-4">
          <FeatureCard
            title="Kindness Quests"
            description="Short stories and missions that help kids practise gratitude, sharing, and empathy."
            image={card1}
          />
          <FeatureCard
            title="Brain & Health Boost"
            description="Puzzle playlists and movement breaks designed to support focus, memory, and healthy routines."
            image={card2}
            ctaText="Explore videos →"
            showRings
          />
        </div>
      </section>

      {/* TABLET HERO */}
      <section className="hidden md:flex lg:hidden px-10 pt-16 items-start justify-between gap-10">
        {/* LEFT: Text */}
        <div className="max-w-md space-y-5">
          <h2 className="text-4xl font-extrabold leading-tight">
            Grow happy, curious, <br /> kind kiddos.
          </h2>

          <p className="text-base text-white/90">
            Videos, puzzles, and games that coach behaviour, learning, and
            health—one tiny mission at a time.
          </p>

          <p className="text-sm text-white/85 leading-relaxed">
            KIDDO turns screen time into daily quests: kindness missions, focus
            boosts, movement breaks, and brain puzzles designed with
            child-development experts.
          </p>

          <Link
            to="/signup"
            className="inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#e9344c] shadow-lg hover:bg-lime-50"
          >
            Start free for your kid
          </Link>

          {/* Trust */}
          <div className="flex items-center gap-3 text-xs text-white/80 pt-3">
            <div className="flex -space-x-2">
              <span className="h-6 w-6 rounded-full bg-white/60 border border-white/40" />
              <span className="h-6 w-6 rounded-full bg-white/40 border border-white/40" />
              <span className="h-6 w-6 rounded-full bg-white/30 border border-white/40" />
            </div>
            <span>+5,000 kids building better habits</span>
          </div>
        </div>

        {/* RIGHT: Avatar + Cards */}
        <div className="flex flex-col items-center gap-8">
          {/* Avatar */}
          <img src="/landing_Avatar.png" alt="" className="max-w-sm" />

          {/* Feature cards */}
          <div className="flex gap-4">
            <FeatureCard
              title="Kindness Quests"
              description="Short stories and missions that help kids practise gratitude, sharing, and empathy."
              image={card1}
            />
            <FeatureCard
              title="Brain & Health Boost"
              description="Puzzle playlists and movement breaks designed to support focus, memory, and healthy routines."
              image={card2}
              ctaText="Explore videos →"
              showRings
            />
          </div>
        </div>
      </section>

      {/* Mobile Hero */}
      <section className="md:hidden flex flex-col items-center gap-4 pt-2 px-6">
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
        <div className="w-full flex justify-center -mt-12">
          <img
            src="/landing_Avatar.png"
            alt=""
            className="max-w-lg object-contain"
          />
        </div>
      </section>
      {/* Background overlay gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
    </main>
  );
}

export default Hero;