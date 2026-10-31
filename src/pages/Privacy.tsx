import SEO from "../components/SEO";
import { SITE_CONFIG } from "../config/site";

export default function Privacy() {
  const lastUpdated = "October 31, 2026";

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Nexora's privacy policy explaining how this website handles data and respects your privacy."
        path="/privacy"
      />
      <div className="pt-16 md:pt-18">
        {/* Header */}
        <section className="border-b border-slate-200 bg-slate-50 py-16 md:py-20">
          <div className="container-mw container-px">
            <div className="reveal mx-auto max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Legal
              </span>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Privacy Policy
              </h1>
              <p className="mt-4 text-sm text-slate-500">
                Last updated: {lastUpdated}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-py bg-white">
          <div className="container-mw container-px">
            <div className="reveal mx-auto max-w-3xl space-y-8">
              {/* Intro */}
              <div>
                <p className="text-base leading-relaxed text-slate-700">
                  This Privacy Policy describes how the {SITE_CONFIG.name}{" "}
                  website (the "Site") handles information. We are committed to
                  being transparent about what data is collected and how it is
                  used.
                </p>
              </div>

              {/* Section 1 */}
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  1. Information We Collect
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  This website is a static site hosted on Cloudflare Pages. We do
                  not use server-side analytics, tracking pixels, or advertising
                  scripts. The Site does not require you to create an account or
                  log in.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  If you choose to contact us via the email address provided on
                  the Site, the information you include in your email (such as
                  your name, email address, and message content) will be handled
                  by your email provider and ours for the purpose of responding
                  to your inquiry.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  2. Cookies and Local Storage
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  This Site does not use cookies for tracking, advertising, or
                  analytics purposes. Standard browser caching may be used by
                  Cloudflare's CDN to improve page load performance, which is a
                  normal part of web hosting and does not involve personal data
                  collection.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  3. Contact Form
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  The contact form on this Site includes front-end input
                  validation only. If no backend email service is configured,
                  form submissions are not sent or stored anywhere. To ensure
                  your message reaches us, please use the email address provided
                  on the Contact page.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  4. Third-Party Services
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  The Site is hosted on Cloudflare Pages, which may process
                  basic technical data (such as IP addresses) as part of
                  standard web hosting and CDN operations. We do not integrate
                  any third-party analytics, advertising, or tracking services
                  into the Site.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Google Fonts may be loaded to display typography. Google may
                  receive technical information (such as your IP address) as part
                  of this service. You can find Google's privacy policy at{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-600 underline hover:text-brand-700"
                  >
                    policies.google.com/privacy
                  </a>
                  .
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  5. Data Security
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  The Site itself does not store personal data. Communications
                  sent via email are subject to the security practices of the
                  respective email providers. We do not knowingly collect or
                  store sensitive personal information through this Site.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  6. Your Rights
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Since this Site does not collect or store personal data beyond
                  what is described above, there is no personal data to access,
                  correct, or delete. If you have emailed us and would like your
                  correspondence deleted, please contact us at the email address
                  provided below.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  7. Changes to This Policy
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  We may update this Privacy Policy from time to time to reflect
                  changes in the Site's functionality or legal requirements.
                  Updates will be posted on this page with a revised "Last
                  updated" date.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  8. Contact
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  If you have any questions about this Privacy Policy, please
                  contact us at{" "}
                  <a
                    href={`mailto:${SITE_CONFIG.contactEmail}`}
                    className="text-brand-600 underline hover:text-brand-700"
                  >
                    {SITE_CONFIG.contactEmail}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
