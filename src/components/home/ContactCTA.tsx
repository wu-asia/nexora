import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { SITE_CONFIG } from "../../config/site";

export default function ContactCTA() {
  return (
    <section className="section-py bg-white">
      <div className="container-mw container-px">
        <div className="reveal relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 via-brand-700 to-accent-600 px-6 py-16 text-center shadow-2xl md:px-12 md:py-20">
          {/* Decorative grid */}
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to move forward?
            </h2>
            <p className="mt-4 text-base text-white/90 md:text-lg">
              Whether you have a clear project in mind or just a technical
              question, we're happy to help. Reach out and let's talk about what
              you need.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition-all hover:bg-slate-50 hover:shadow-xl active:scale-[0.98]"
              >
                <Mail className="h-4 w-4" />
                Get in Touch
              </Link>
              {SITE_CONFIG.contactEmails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10 active:scale-[0.98]"
                >
                  {email}
                  <ArrowRight className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
