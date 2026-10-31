import { Link } from "react-router-dom";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-900 text-white">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg" />
      {/* Gradient orbs */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-600/20 blur-[120px]" />
      <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-accent-600/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-cyanx-600/10 blur-[100px]" />
      {/* Radial fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-900" />

      <div className="container-mw container-px relative z-10 flex min-h-[100svh] flex-col items-center justify-center py-32 text-center">
        {/* Badge */}
        <div className="reveal mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-brand-400" />
          IT Services &amp; Technology Solutions
        </div>

        {/* Heading */}
        <h1 className="reveal max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl" data-reveal-delay="100">
          Technology That Moves
          <br />
          <span className="gradient-text">Your Business Forward.</span>
        </h1>

        {/* Subtitle */}
        <p className="reveal mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg" data-reveal-delay="200">
          Nexora provides IT consulting, software development, technical support,
          and technology solutions to help individuals and businesses solve
          technical challenges and build better digital experiences.
        </p>

        {/* CTAs */}
        <div className="reveal mt-10 flex flex-col items-center gap-4 sm:flex-row" data-reveal-delay="300">
          <Link to="/services" className="btn-primary">
            Explore Our Services
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="btn-ghost-light">
            <Mail className="h-4 w-4" />
            Contact Us
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/20 p-1.5">
            <div className="h-2 w-1 animate-bounce rounded-full bg-white/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
