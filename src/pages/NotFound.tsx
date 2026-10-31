import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you are looking for does not exist." path="/404" />
      <div className="flex min-h-screen flex-col items-center justify-center bg-ink-900 px-4 text-center text-white">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-brand-600/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-accent-600/20 blur-[120px]" />

        <div className="relative z-10">
          <h1 className="text-8xl font-extrabold gradient-text md:text-9xl">404</h1>
          <p className="mt-4 text-xl font-semibold text-white">
            Page not found.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Link to="/" className="btn-primary">
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-ghost-light"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
