const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05060A] text-white px-6 pt-10 pb-6 md:pt-12 md:pb-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Top: brand + CTA */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-white flex items-center justify-center text-xs font-black text-[#E5203A]">
              K
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide">KIDDO</p>
              <p className="text-[11px] text-white/70">
                Tiny daily missions for big life skills.
              </p>
            </div>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-xl bg-emerald-400 text-black text-xs md:text-sm font-semibold px-4 py-2 shadow-md shadow-emerald-500/40 hover:bg-emerald-300 transition"
          >
            Get early access
          </button>
        </div>

        {/* Middle: 3–4 columns */}
        <div className="grid gap-6 md:grid-cols-4 text-xs md:text-[13px] text-white/80">
          {/* Product */}
          <div className="space-y-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-wide text-white/60">
              Product
            </h3>
            <ul className="space-y-1">
              <li><a href="#learning-paths" className="hover:underline">Learning paths</a></li>
              <li><a href="#for-parents" className="hover:underline">For parents</a></li>
              <li><a href="#how-it-works" className="hover:underline">How it works</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-wide text-white/60">
              Company
            </h3>
            <ul className="space-y-1">
              <li><a href="#about" className="hover:underline">About KIDDO</a></li>
              <li><a href="/pov" className="hover:underline">Our POV</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-wide text-white/60">
              Support
            </h3>
            <ul className="space-y-1">
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="#contact" className="hover:underline">Help & support</a></li>
              <li><a href="/safety" className="hover:underline">Safety & content</a></li>
              <li><a href="/press" className="hover:underline">Press kit</a></li>
            </ul>
          </div>

          {/* Contact / Social */}
          <div className="space-y-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-wide text-white/60">
              Stay in touch
            </h3>
            <p className="text-[11px] text-white/65">
              support@kiddo.app<br />
              +91-98765-43210
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a href="/" aria-label="Instagram" className="hover:opacity-80">IG</a>
              <a href="/" aria-label="YouTube" className="hover:opacity-80">YT</a>
              <a href="/" aria-label="WhatsApp" className="hover:opacity-80">WA</a>
            </div>
          </div>
        </div>

        {/* Bottom: legal row */}
        <div className="border-t border-white/10 pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-[11px] text-white/55">
          <p>© {new Date().getFullYear()} KIDDO. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="/privacy" className="hover:underline">Privacy policy</a>
            <a href="/terms" className="hover:underline">Terms of use</a>
            <a href="/cookies" className="hover:underline">Cookie policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
