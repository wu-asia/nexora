import { Link } from "react-router-dom";
import {
  Wrench,
  ShieldCheck,
  TrendingUp,
  Users,
  ArrowRight,
} from "lucide-react";
import SEO from "../components/SEO";
import { useScrollReveal } from "../hooks/useScrollReveal";

const values = [
  {
    icon: Wrench,
    title: "Practical Technology",
    desc: "Technology should solve problems, not create them. We focus on tools and approaches that are fit for purpose — not trendy for its own sake. If a simple solution works, that's what we recommend.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Solutions",
    desc: "We build and recommend solutions designed to last. Clean architecture, maintainable code, and documented decisions mean your technology doesn't become a liability over time.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    desc: "Technology evolves, and so should your solutions. We stay current with industry developments and help you adapt — incrementally, without unnecessary disruption.",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    desc: "Every situation is different. We listen first, understand your context and constraints, then tailor our approach accordingly. No templates forced onto problems they don't fit.",
  },
];

export default function About() {
  useScrollReveal();

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Nexora — an independent IT services brand providing practical technology consulting, development, and support to individuals and businesses."
        path="/about"
      />
      <div className="pt-16 md:pt-18">
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink-900 py-24 text-white md:py-32">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-600/20 blur-[120px]" />
          <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-accent-600/20 blur-[120px]" />
          <div className="container-mw container-px relative z-10">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-400">
                About Nexora
              </span>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
                Technology, done practically.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Nexora is an independently operated IT services brand. We exist
                to help people and organizations navigate technology with
                clarity — through consulting, development, support, and
                solutions that genuinely make a difference.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-py bg-white">
          <div className="container-mw container-px">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Our Approach
              </span>
              <h2 className="section-title mt-3">
                Clear advice. Reliable software. Honest support.
              </h2>
              <p className="section-subtitle">
                We don't oversell. We don't overpromise. What we do is listen to
                what you need, assess the situation honestly, and deliver work
                that addresses the real problem — whether that's strategic
                advice, a working application, or hands-on troubleshooting.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                As a sole trader operation, every project gets direct attention.
                You work with the person doing the work, not a account manager
                relaying messages. That means faster communication, clearer
                accountability, and results that match what was discussed.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-py bg-slate-50">
          <div className="container-mw container-px">
            <div className="reveal mx-auto max-w-2xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                What We Believe
              </span>
              <h2 className="section-title mt-3">Core Principles</h2>
              <p className="section-subtitle">
                Four principles guide how we work and what we deliver.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="reveal card"
                  data-reveal-delay={`${i * 80}`}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-white">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-py bg-white">
          <div className="container-mw container-px">
            <div className="reveal rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center md:p-14">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Want to learn if we can help?
              </h2>
              <p className="mt-4 text-base text-slate-600">
                The best way to find out is to reach out. Tell us what you're
                working on or what's not working — we'll let you know honestly
                if and how we can help.
              </p>
              <Link to="/contact" className="btn-primary mt-8">
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
