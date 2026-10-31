import { useState, type FormEvent } from "react";
import { Mail, Send, AlertCircle, CheckCircle2, Info } from "lucide-react";
import SEO from "../components/SEO";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SITE_CONFIG, SERVICES } from "../config/site";

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
}

type Status = "idle" | "success" | "error";

export default function Contact() {
  useScrollReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    // NOTE: This form does not have a backend configured.
    // To make it functional, connect it to your preferred backend or
    // email service (e.g., Cloudflare Workers, Formspree, EmailJS, etc.)
    // and replace the logic below with an actual API call.
    setStatus("success");
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full rounded-lg border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500/20 ${
      errors[field]
        ? "border-red-300 bg-red-50 focus:border-red-400"
        : "border-slate-300 bg-white focus:border-brand-400"
    }`;

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Nexora for IT consulting, software development, technical support, or technology solutions."
        path="/contact"
      />
      <div className="pt-16 md:pt-18">
        {/* Hero */}
        <section className="relative overflow-hidden bg-ink-900 py-24 text-white md:py-32">
          <div className="absolute inset-0 grid-bg" />
          <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-brand-600/20 blur-[120px]" />
          <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-accent-600/20 blur-[120px]" />
          <div className="container-mw container-px relative z-10">
            <div className="reveal mx-auto max-w-3xl text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-400">
                Get in Touch
              </span>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
                Let's talk about your project.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Whether you have a specific project in mind or just want to
                explore what's possible, send us a message and we'll get back to
                you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact content */}
        <section className="section-py bg-white">
          <div className="container-mw container-px">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Info sidebar */}
              <div className="reveal lg:col-span-2">
                <h2 className="text-xl font-bold text-slate-900">
                  Contact Information
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Reach out via email or the contact form. We typically respond
                  within 1–2 business days.
                </p>

                <div className="mt-8 space-y-4">
                  <a
                    href={`mailto:${SITE_CONFIG.contactEmail}`}
                    className="flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-colors hover:border-brand-300 hover:bg-brand-50/50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500">Email</p>
                      <p className="text-sm font-semibold text-slate-900">
                        {SITE_CONFIG.contactEmail}
                      </p>
                    </div>
                  </a>
                </div>

                {/* Note about form */}
                <div className="mt-8 flex items-start gap-3 rounded-lg bg-slate-50 p-4 text-xs leading-relaxed text-slate-500">
                  <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-400" />
                  <p>
                    The contact form below includes front-end validation only.
                    To receive submissions, connect it to a backend or email
                    service. Until then, please use the email address above for
                    inquiries.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="reveal lg:col-span-3" data-reveal-delay="100">
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
                >
                  <h2 className="text-xl font-bold text-slate-900">
                    Send a Message
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Fill out the form below and we'll get back to you.
                  </p>

                  {/* Success message */}
                  {status === "success" && (
                    <div className="mt-6 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                      <div>
                        <p className="text-sm font-semibold text-green-800">
                          Form validation passed.
                        </p>
                        <p className="mt-1 text-xs text-green-700">
                          Your message has been validated successfully. However,
                          no backend email service is currently configured —
                          please send your inquiry directly to{" "}
                          <a
                            href={`mailto:${SITE_CONFIG.contactEmail}`}
                            className="font-semibold underline"
                          >
                            {SITE_CONFIG.contactEmail}
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="mt-6 space-y-5">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass("name")}
                        placeholder="Your name"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3 w-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass("email")}
                        placeholder="you@example.com"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3 w-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Service Needed <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={inputClass("service")}
                        aria-invalid={!!errors.service}
                      >
                        <option value="">Select a service...</option>
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                        <option value="Other">Other / Not sure yet</option>
                      </select>
                      {errors.service && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3 w-3" />
                          {errors.service}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-slate-700"
                      >
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`${inputClass("message")} resize-y`}
                        placeholder="Tell us about your project or technical challenge..."
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && (
                        <p className="mt-1.5 flex items-center gap-1 text-xs text-red-600">
                          <AlertCircle className="h-3 w-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn-primary w-full"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
