import { MessagesSquare, ClipboardList, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessagesSquare,
    step: "01",
    title: "Initial Discussion",
    desc: "We start with a conversation about your needs, goals, and technical challenges. No jargon, no pressure — just a clear understanding of what you're trying to achieve.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Assessment & Planning",
    desc: "Based on the discussion, we assess the situation and outline a practical approach — what needs to be done, what technologies fit, and what the timeline looks like.",
  },
  {
    icon: Code,
    step: "03",
    title: "Implementation",
    desc: "We get to work. Whether it's consulting advice, software development, or troubleshooting, the work is done with clear communication throughout.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Delivery & Support",
    desc: "We deliver the result, walk you through it, and provide ongoing guidance. If something needs adjustment, we're here to help.",
  },
];

export default function Process() {
  return (
    <section className="section-py bg-slate-50">
      <div className="container-mw container-px">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            How We Work
          </span>
          <h2 className="section-title mt-3">Collaboration Process</h2>
          <p className="section-subtitle">
            A straightforward process designed to keep things clear and
            on track from start to finish.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className="reveal relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              data-reveal-delay={`${i * 80}`}
            >
              {/* Step number */}
              <span className="absolute -top-3 right-4 rounded-full bg-brand-600 px-2.5 py-0.5 text-xs font-bold text-white">
                {s.step}
              </span>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.desc}
              </p>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 hidden h-px w-6 bg-slate-200 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
