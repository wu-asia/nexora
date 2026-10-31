import { useEffect } from "react";
import { SITE_CONFIG } from "../config/site";

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}

/**
 * Lightweight SEO component that updates document title and meta tags
 * on route change. For a static site deployed to Cloudflare Pages, the
 * base meta tags live in index.html; this component overrides them
 * per-page at runtime.
 */
export default function SEO({
  title,
  description = SITE_CONFIG.description,
  path = "/",
  ogImage = "/og-image.svg",
}: SEOProps) {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector) as HTMLElement | null;
      if (!el) {
        el = document.createElement("meta");
        const [name, val] = selector.replace(/[\[\]"]/g, "").split("=");
        el.setAttribute(name.split("=")[0] || name, val);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", `${SITE_CONFIG.url}${path}`);
    setMeta('meta[property="og:image"]', "content", ogImage);
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", ogImage);
  }, [fullTitle, description, path, ogImage]);

  return null;
}
