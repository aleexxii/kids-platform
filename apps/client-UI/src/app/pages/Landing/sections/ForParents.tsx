import SectionShell from '@/app/layouts/SectionShell';
import { CheckIcon } from '@heroicons/react/24/outline';

function ForParents() {
  return (
    <SectionShell
      className="min-h-screen px-6 py-16 md:py-24"
      topHeight="h-1/4"
      bottomHeight="h-1/5 "
    >
      {/* Section container */}
      <div className="mx-auto max-w-6xl text-center">
        {/* Heading */}
        <h2 className="mx-auto max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-white/95">
          A calmer way for children to grow
          <br className="hidden md:block" />
          and for parents to feel confident.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
          Kiddo is designed with intention. No ads. No dark patterns. No endless
          scrolling. Just meaningful activities that respect your child's
          attention — and your parenting choices.
        </p>

        {/* Horizontal divider */}
        <div className="my-16 h-px w-full bg-white/25" />
        {/* Two column section */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vertical divider */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 w-px bg-white/25" />

          {/* Child column */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="mb-6 text-xl font-medium tracking-tight">
              What your child experiences
            </h3>

            <ul className="space-y-4 text-white/85">
              {[
                'Calm daily activities',
                'Short kindness stories',
                'Focus and brain games',
                'Gentle movement breaks',
                'Positive habit challenges',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-center gap-3"
                >
                  <CheckIcon className="h-5 w-5 text-white/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Parent column */}
          <div className="flex flex-col items-center text-center px-4">
            <h3 className="mb-6 text-xl font-medium tracking-tight">
              What parents can expect
            </h3>

            <ul className="space-y-4 text-white/85">
              {[
                'No ads or dark patterns',
                'Clear screen-time boundaries',
                'Age-appropriate experiences',
                'Child-development–guided design',
                'Respect for parenting choices',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center justify-center gap-3"
                >
                  <CheckIcon className="h-5 w-5 text-white/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key belief strip */}
        <div className="mx-auto mt-20 max-w-2xl rounded-2xl bg-white/10 px-6 py-6 backdrop-blur">
          <p className="text-lg italic text-white/90">
            “We don't aim to increase screen time. We aim to make it
            meaningful.”
          </p>
        </div>

        {/* Account clarity */}
        <p className="mx-auto mt-6 max-w-xl text-sm md:text-base text-white/75">
          <strong>Multiple children?</strong> Each child can have their own
          profile under one premium account — just like Hotstar or Netflix.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <button className="rounded-full border border-white/30 px-8 py-3 text-sm md:text-base font-medium backdrop-blur transition hover:bg-white/10">
            Explore Kiddo for your family →
          </button>
        </div>
      </div>
    </SectionShell>
  );
}

export default ForParents;
