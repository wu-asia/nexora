import { CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "../../config/site";

const principles = [
  "Practical Technology",
  "Reliable Solutions",
  "Continuous Improvement",
  "Client-Focused Approach",
];

export default function BrandIntro() {
  return (
    <section className="section-py bg-white">
      <div className="container-mw container-px">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text */}
          <div className="reveal">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              About Nexora
            </span>
            <h2 className="section-title mt-3">
              Practical technology solutions,
              <br className="hidden md:block" /> built with purpose.
            </h2>
            <p className="section-subtitle">
              {SITE_CONFIG.name} is an independently operated IT services brand
              focused on helping individuals, small businesses, and startups
              navigate technology with confidence. We believe in practical
              solutions over hype — clear advice, reliable software, and
              support that genuinely helps.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {principles.map((p) => (
                <div key={p} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-brand-500" />
                  <span className="text-sm font-medium text-slate-700">{p}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="reveal" data-reveal-delay="150">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-500/10 to-accent-500/10 blur-2xl" />
              <div className="relative rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-xl">
                {/* Stats / highlights */}
                <div className="space-y-6">
                  {[
                    {
                      title: "IT Consulting",
                      desc: "Strategic technology guidance and planning.",
                      value: "Advisory",
                    },
                    {
                      title: "Software Development",
                      desc: "Web apps, websites, and custom tools.",
                      value: "Build",
                    },
                    {
                      title: "Technical Support",
                      desc: "Troubleshooting, diagnosis, and maintenance.",
                      value: "Support",
                    },
                    {
                      title: "Technology Solutions",
                      desc: "Integration, automation, and optimization.",
                      value: "Solve",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          {item.title}
                        </p>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
