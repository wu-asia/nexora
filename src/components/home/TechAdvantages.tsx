import {
  Zap,
  Shield,
  Layers,
  GitBranch,
  Gauge,
  HeartHandshake,
} from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Modern Tech Stack",
    desc: "We work with current, well-supported technologies — React, TypeScript, Node.js, cloud platforms, and modern tooling.",
  },
  {
    icon: Shield,
    title: "Reliability First",
    desc: "Solutions are built to be maintainable and dependable. No shortcuts that compromise long-term stability.",
  },
  {
    icon: Layers,
    title: "Component-Based Architecture",
    desc: "Clean, modular code structures that are easy to understand, update, and extend as your needs evolve.",
  },
  {
    icon: GitBranch,
    title: "Version-Controlled Workflow",
    desc: "Transparent development process with version control, clear commits, and documented changes.",
  },
  {
    icon: Gauge,
    title: "Performance Optimized",
    desc: "Fast-loading, efficient applications. We care about page speed, resource optimization, and user experience.",
  },
  {
    icon: HeartHandshake,
    title: "Direct Communication",
    desc: "As an independent operator, you work directly with the person doing the work. No layers, no handoffs.",
  },
];

export default function TechAdvantages() {
  return (
    <section className="section-py bg-white">
      <div className="container-mw container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Why Nexora
          </span>
          <h2 className="section-title mt-3">Technology Advantages</h2>
          <p className="section-subtitle">
            How we approach technology and deliver work that holds up over
            time.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, i) => (
            <div
              key={adv.title}
              className="reveal card"
              data-reveal-delay={`${i * 70}`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <adv.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{adv.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
