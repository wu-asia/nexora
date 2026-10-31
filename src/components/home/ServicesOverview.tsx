import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../../config/site";
import ServiceIcon from "../ServiceIcon";

export default function ServicesOverview() {
  return (
    <section className="section-py bg-slate-50">
      <div className="container-mw container-px">
        {/* Heading */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            What We Do
          </span>
          <h2 className="section-title mt-3">Core Services</h2>
          <p className="section-subtitle">
            Four areas of expertise, each designed to address real technical
            challenges — from strategic planning to hands-on implementation.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Link
              key={service.id}
              to={`/services#${service.id}`}
              className="reveal group card flex flex-col"
              data-reveal-delay={`${i * 80}`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 text-white shadow-lg shadow-brand-500/20">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {service.shortDesc}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition-all group-hover:gap-2">
                Learn more
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
