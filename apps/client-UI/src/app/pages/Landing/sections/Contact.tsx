import SectionShell from "@/app/layouts/SectionShell";

const Contact: React.FC = () => {
  return (
    <SectionShell className="px-6 py-20 md:py-28" topHeight="h-2/4" bottomHeight="h-1/5">
      <div className="relative max-w-5xl mx-auto space-y-10 md:space-y-12">
        {/* Header */}
        <header className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">
            Let's build better days for kids, together.
          </h2>
          <p className="text-sm md:text-base text-white/85">
            Reach out as a parent, teacher, or partner. Share questions,
            feedback, or ideas—every message helps shape KIDDO.
          </p>
        </header>

        {/* Main grid: About + Form */}
        <div className="grid gap-10 md:grid-cols-[1.1fr_1.1fr] items-start">
          {/* Left: About + contact options */}
          <div className="space-y-6">
            {/* Mini About */}
            <div className="space-y-2">
              <h3 className="text-sm md:text-base font-semibold">
                A tiny app with a big mission.
              </h3>
              <p className="text-xs md:text-sm text-white/80">
                KIDDO turns 15-30 minutes of screen time into guided missions
                that build kindness, focus, and healthy habits—all in a
                kid-safe, parent-friendly space.
              </p>
            </div>

            {/* Contact methods */}
            <div className="grid gap-4 text-xs md:text-sm text-white/90">
              <div className="rounded-2xl bg-black/25 border border-white/15 px-4 py-3 space-y-1">
                <p className="text-[11px] uppercase tracking-wide text-emerald-200">
                  Email support
                </p>
                <p className="font-medium">support@kiddo.app</p>
                <p className="text-[11px] text-white/70">
                  For questions, bugs, and general help.
                </p>
              </div>

              <div className="rounded-2xl bg-black/25 border border-white/15 px-4 py-3 space-y-1">
                <p className="text-[11px] uppercase tracking-wide text-emerald-200">
                  WhatsApp / Call
                </p>
                <p className="font-medium">+91-98765-43210</p>
                <p className="text-[11px] text-white/70">
                  Mon–Sat, 10:00 AM – 6:00 PM IST.
                </p>
              </div>

              <div className="rounded-2xl bg-black/25 border border-white/15 px-4 py-3 space-y-1">
                <p className="text-[11px] uppercase tracking-wide text-emerald-200">
                  For schools & partners
                </p>
                <p className="font-medium">partners@kiddo.app</p>
                <p className="text-[11px] text-white/70">
                  Collaborations, pilots, or bulk access.
                </p>
              </div>
            </div>

            {/* Quick FAQ links */}
            <div className="space-y-1 text-xs md:text-sm text-white/80">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-white/60">
                Quick answers
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <a href="/faq" className="underline underline-offset-2">
                    What ages is KIDDO for?
                  </a>
                </li>
                <li>
                  <a href="/safety" className="underline underline-offset-2">
                    How do you keep content safe?
                  </a>
                </li>
                <li>
                  <a href="/pricing" className="underline underline-offset-2">
                    Is KIDDO free or paid?
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Rich form */}
          <form className="rounded-3xl bg-black/30 border border-white/15 px-5 py-6 md:px-6 md:py-7 space-y-4 backdrop-blur">
            <div className="grid gap-3 md:grid-cols-2">
              <div className="space-y-1">
                <label className="block text-xs font-medium text-white/80">
                  Your name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
                  placeholder="Parent / teacher name"
                />
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-medium text-white/80">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-white/80">
                Who are you?
              </label>
              <select
                className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
                defaultValue=""
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="parent">Parent / guardian</option>
                <option value="teacher">Teacher / school</option>
                <option value="partner">Partner / organisation</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-white/80">
                What is this about?
              </label>
              <select
                className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-300/70"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose a topic
                </option>
                <option value="question">General question</option>
                <option value="feedback">Feedback / idea</option>
                <option value="bug">Issue / bug</option>
                <option value="school">School / partnership</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="block text-xs font-medium text-white/80">
                Your message
              </label>
              <textarea
                rows={4}
                className="w-full rounded-xl bg-white/10 border border-white/20 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-300/70 resize-none"
                placeholder="Share your question, feedback, or idea…"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full md:w-auto rounded-xl bg-emerald-400 text-black text-sm font-semibold px-5 py-2.5 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300 transition"
              >
                Send message
              </button>

              <p className="text-[11px] text-white/60 md:text-right">
                We usually reply within 24 hours on weekdays. No spam, ever.
              </p>
            </div>
          </form>
        </div>
      </div>
    </SectionShell>
  );
};

export default Contact;
