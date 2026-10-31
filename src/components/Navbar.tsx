import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../config/site";
import { useScrolled } from "../hooks/useScrollReveal";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(8);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isSolid = scrolled || !isHome || mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid
          ? "border-b border-slate-200 bg-white/90 backdrop-blur-lg shadow-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-mw container-px flex h-16 items-center justify-between md:h-18">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-bold"
          onClick={() => setMobileOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-white">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 19V5l14 14V5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className={isSolid ? "text-slate-900" : "text-white"}>
            {SITE_CONFIG.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  isSolid
                    ? isActive
                      ? "text-brand-600"
                      : "text-slate-600 hover:text-brand-600"
                    : isActive
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className={`btn-primary ml-3 !py-2 !px-4 text-xs`}>
            Get in Touch
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className={`h-6 w-6 ${isSolid ? "text-slate-900" : "text-white"}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isSolid ? "text-slate-900" : "text-white"}`} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="container-mw container-px flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand-50 text-brand-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-2 !py-2.5"
            >
              Get in Touch
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
