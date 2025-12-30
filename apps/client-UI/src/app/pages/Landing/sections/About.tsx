import SectionShell from '@/app/layouts/SectionShell';
import InfiniteGhostText from '../../../components/landing/AboutSection/InfiniteGhostText';

const About: React.FC = () => (
  <SectionShell className="px-6 py-16 md:py-24" topHeight='h-2/4' bottomHeight='h-2/5'>
    {/* GHOST TEXT BACKGROUND */}
    <InfiniteGhostText
      text="KIDDO"
      rows={10}
      wordsPerRow={8}
      className="text-6xl font-extrabold uppercase tracking-widest text-white/5"
    />
    
    <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-10">
      <div className="flex flex-col items-center gap-6">
        <div className="h-16 w-1 bg-white/70" />
        <img
          src="/about_avtr1.png"
          alt=""
          className="w-32 h-32 object-cover rounded-lg shadow-lg"
        />
        <img
          src="/about_avtr2.png"
          alt=""
          className="w-32 h-32 object-cover rounded-lg shadow-lg"
        />
        <img
          src="/about_avtr3.png"
          alt=""
          className="w-32 h-32 object-cover rounded-lg shadow-lg"
        />

        <div className="h-16 w-1 bg-white/70" />
      </div>

      {/* text block */}
      <div className="sapce-y-4">
        <p className="text-xs tracking-[0.3em] font-extrabold uppercase text-white/70">
          About
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
  </SectionShell>
);

export default About;
