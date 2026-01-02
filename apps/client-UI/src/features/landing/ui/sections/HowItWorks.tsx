import SectionShell from "@/app/layouts/SectionShell";

const HowItWorksPage: React.FC = () => {
  const steps = [
    {
      title: 'Create your kiddo',
      text: 'Set up a profile with age, interests, and goals so KIDDO can suggest the right videos, puzzles, and quests.',
      badge: 'Step 1',
    },
    {
      title: 'Choose a daily path',
      text: 'Pick from behaviour, school skills, or healthy habits paths—or let KIDDO rotate them through the week.',
      badge: 'Step 2',
    },
    {
      title: 'Watch, play, complete quests',
      text: 'Kids watch short story videos, solve puzzles, and finish tiny missions that build real‑life habits.',
      badge: 'Step 3',
    },
    {
      title: 'See progress together',
      text: 'Parents get simple reports on streaks, mood check‑ins, and skills practised—no confusing charts.',
      badge: 'Step 4',
    },
  ];

  return (
    <SectionShell id="how-it-works" className="min-h-screen" topHeight="h-1/6" bottomHeight="h-1/6">
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        {/* Hero */}
        <header className="text-center space-y-4 mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Tiny daily missions that grow big life skills.
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl mx-auto">
            KIDDO turns screen time into a guided routine: kids watch, play, and
            complete quests, while you get a calm, clear view of their progress.
          </p>
        </header>

        {/* Steps */}
        <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative rounded-3xl bg-white/15 border border-white/20 px-5 py-6 flex flex-col gap-3"
            >
              <span className="inline-flex w-fit rounded-full bg-amber-300/20 px-3 py-1 text-[11px] font-semibold text-amber-100 uppercase tracking-wide">
                {step.badge}
              </span>
              <h3 className="text-base md:text-lg font-semibold">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-white/80 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </section>

        {/* Parent reassurance */}
        <section className="mt-16 grid gap-8 md:grid-cols-[1.4fr_1fr] items-start">
          <div className="space-y-3">
            <h2 className="text-xl md:text-2xl font-bold">
              Built for kids, designed for parents.
            </h2>
            <p className="text-sm md:text-base text-white/80">
              Sessions are short, guided, and age-appropriate. You choose how
              many days a week, KIDDO keeps the flow simple and consistent.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/85">
              <li>• Ad-free, kid-safe space with curated content.</li>
              <li>• Gentle reminders and streaks instead of pressure.</li>
              <li>• Easy pause or limits for screen time whenever you need.</li>
            </ul>
          </div>

          <div className="rounded-3xl bg-white/5 border border-amber-300/40 px-5 py-6 text-sm text-white/85">
            <h3 className="font-semibold mb-2">Quick start in 3 minutes</h3>
            <ol className="space-y-1 text-xs md:text-sm">
              <li>1. Create your account and add your kiddo.</li>
              <li>2. Pick a path and daily schedule.</li>
              <li>3. Let them finish their first quest tonight.</li>
            </ol>
          </div>
        </section>
      </section>
    </SectionShell>
  );
};

export default HowItWorksPage;
