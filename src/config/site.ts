/**
 * Nexora site configuration.
 * Update the values below with your real domain, email, and social links.
 */
export const SITE_CONFIG = {
  name: "Nexora",
  tagline: "IT Consulting & Technology Solutions",
  description:
    "Nexora provides IT consulting, software development, technical support, and technology solutions to help individuals and businesses solve technical challenges and build better digital experiences.",
  // ↓ Change this to your real domain after deployment
  url: "https://nexora.example.com",
  // ↓ Change these to your real contact emails
  contactEmails: ["nexoranta@gmail.com", "admin@kristina.de5.net"],
  // ↓ Optional: change or remove these
  social: {
    github: "",
    linkedin: "",
    twitter: "https://x.com/nexoranta",
    instagram: "https://instagram.com/nexoranta",
  },
};

export type ServiceId =
  | "it-consulting"
  | "software-development"
  | "technical-support"
  | "technology-solutions";

export interface ServiceDetail {
  id: ServiceId;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string; // lucide icon name (mapped in component)
  items: string[];
  scenarios: string[];
}

export const SERVICES: ServiceDetail[] = [
  {
    id: "it-consulting",
    title: "IT Consulting",
    shortDesc:
      "Strategic IT guidance and digital transformation advice tailored to your goals.",
    fullDesc:
      "We provide professional IT consulting services to help you make informed technology decisions. From technology planning and architecture advice to software selection and digital transformation strategies, we work with you to identify the right path forward.",
    icon: "Lightbulb",
    items: [
      "IT Technology Planning",
      "Technical Architecture Advisory",
      "Software & Tool Selection",
      "Digital Transformation Consulting",
      "Technical Problem Analysis",
    ],
    scenarios: [
      "Planning a new technology initiative",
      "Choosing the right tools or platforms for your needs",
      "Evaluating your current tech stack",
      "Navigating digital transformation",
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    shortDesc:
      "Custom web applications, websites, and software solutions built with modern technology.",
    fullDesc:
      "We build software that solves real problems. Whether you need a web application, a business website, a custom tool, or an API integration, we deliver clean, maintainable solutions designed for performance and scalability.",
    icon: "Code2",
    items: [
      "Web Application Development",
      "Website Development",
      "Custom Software Solutions",
      "API Integration",
      "Database Design",
      "Automation Tools",
    ],
    scenarios: [
      "Launching a new web application or product",
      "Building or rebuilding a company website",
      "Integrating third-party services via APIs",
      "Automating repetitive manual workflows",
    ],
  },
  {
    id: "technical-support",
    title: "Technical Support",
    shortDesc:
      "Hands-on troubleshooting, diagnosis, and maintenance guidance to keep things running.",
    fullDesc:
      "When things break or behave unexpectedly, we help you diagnose and resolve the issue. From software troubleshooting to system configuration and ongoing maintenance guidance, we provide clear, practical support.",
    icon: "Wrench",
    items: [
      "Software Troubleshooting",
      "System Configuration",
      "Technical Problem Diagnosis",
      "Software Installation & Configuration",
      "IT Maintenance Guidance",
    ],
    scenarios: [
      "Experiencing software errors or crashes",
      "Setting up and configuring new systems",
      "Diagnosing unexplained technical issues",
      "Need guidance on routine IT maintenance",
    ],
  },
  {
    id: "technology-solutions",
    title: "Technology Solutions",
    shortDesc:
      "End-to-end solutions that integrate systems, automate workflows, and optimize performance.",
    fullDesc:
      "We design and implement technology solutions that bring everything together. From system integration and workflow automation to custom tools and technical optimization, we help you get more from your technology investments.",
    icon: "Puzzle",
    items: [
      "System Integration",
      "Workflow Automation",
      "Digital Tools Integration",
      "Technical Optimization",
      "Customized Technology Solutions",
    ],
    scenarios: [
      "Connecting multiple systems or tools together",
      "Automating multi-step business workflows",
      "Optimizing slow or inefficient systems",
      "Need a customized solution for a unique problem",
    ],
  },
];
