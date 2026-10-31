import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import SEO from "../components/SEO";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SERVICES } from "../config/site";
import ServiceIcon from "../components/ServiceIcon";

export default function Services() {
  useScrollReveal();

  return (
    <>
      <SEO
        title="Services"
        description="Nexora offers IT consulting, software development, technical support, and technology solutions. Explore our full range of IT services."
        path="/services"
      />
      <div className="pt-16 md:pt-18">
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink-900 py-24 text-white md:py-32">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-accent-600/20 blur-[120px]" />
          <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-brand-600/20 blur-[120px]" />
          <div className="container-mw container-px relative z-10">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-400">
                Our Services
              </span>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
                IT services that cover the full spectrum.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                From strategic consulting to hands-on development and support,
                we provide four core service areas designed to address technical
                challenges at every stage.
              </p>
            </div>
          </div>
        </section>

        {/* Service details */}
        <div className="bg-white">
          {SERVICES.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <section
                key={service.id}
                id={service.id}
                className={`section-py scroll-mt-20 ${isEven ? "bg-white" : "bg-slate-50"}`}
              >
                <div className="container-mw container-px">
                  <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Text content */}
                    <div className={`reveal ${!isEven ? "lg:order-2" : ""}`}>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/20">
                        <ServiceIcon name={service.icon} className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                        {service.title}
                      </h2>
                      <p className="mt-4 text-base leading-relaxed text-slate-600">
                        {service.fullDesc}
                      </p>

                      {/* Service items */}
                      <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-brand-600">
                        What's Included
                      </h3>
                      <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-slate-700"
                          >
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Scenarios card */}
                    <div className={`reveal ${!isEven ? "lg:order-1" : ""}`} data-reveal-delay="100">
                      <div className="rounded-xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                          When to Use This Service
                        </h3>
                        <ul className="mt-4 space-y-4">
                          {service.scenarios.map((scenario) => (
                            <li
                              key={scenario}
                              className="flex items-start gap-3"
                            >
                              <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-500 to-accent-500" />
                              <span className="text-sm leading-relaxed text-slate-700">
                                {scenario}
                              </span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          to="/contact"
                          className="btn-primary mt-8 w-full"
                        >
                          Discuss Your Needs
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
