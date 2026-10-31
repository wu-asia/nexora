import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { SITE_CONFIG, SERVICES } from "../config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-ink-900 text-slate-400">
      <div className="container-mw container-px py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-lg font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 19V5l14 14V5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {SITE_CONFIG.description}
            </p>
            {/* Social */}
            <div className="mt-6 flex items-center gap-3">
              {SITE_CONFIG.social.github && (
                <a
                  href={SITE_CONFIG.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
              {SITE_CONFIG.social.linkedin && (
                <a
                  href={SITE_CONFIG.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
              {SITE_CONFIG.social.twitter && (
                <a
                  href={SITE_CONFIG.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
              )}
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-3 text-sm">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services#${s.id}`}
                    className="text-slate-400 transition-colors hover:text-brand-400"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-slate-400 transition-colors hover:text-brand-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 transition-colors hover:text-brand-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 transition-colors hover:text-brand-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-slate-400 transition-colors hover:text-brand-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 md:flex-row">
          <p>
            &copy; {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p>{SITE_CONFIG.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
