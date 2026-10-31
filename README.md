# Nexora | IT Consulting & Technology Solutions

A modern, professional, responsive website for **Nexora** — an independent IT services brand providing IT consulting, software development, technical support, and technology solutions.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** (build tool)
- **Tailwind CSS 3** (styling)
- **React Router 6** (routing)
- **Lucide Icons** (icon system)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

The dev server runs at `http://localhost:5173`.

## Project Structure

```
nexora/
├── public/
│   ├── favicon.svg          # Site favicon
│   ├── og-image.svg         # Open Graph social share image
│   ├── robots.txt           # Search engine directives
│   ├── sitemap.xml          # XML sitemap
│   └── _redirects           # Cloudflare Pages SPA redirects
├── src/
│   ├── components/
│   │   ├── home/            # Home page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── BrandIntro.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── TechAdvantages.tsx
│   │   │   ├── Process.tsx
│   │   │   └── ContactCTA.tsx
│   │   ├── Navbar.tsx       # Sticky responsive navigation
│   │   ├── Footer.tsx       # Site footer
│   │   ├── SEO.tsx          # Per-page meta tag updater
│   │   ├── ServiceIcon.tsx  # Icon mapper component
│   │   └── ScrollToTop.tsx  # Scroll restoration on route change
│   ├── config/
│   │   └── site.ts          # ← EDIT: brand info, email, domain, services
│   ├── hooks/
│   │   └── useScrollReveal.ts  # Scroll-triggered animations
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   ├── Privacy.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx              # Root component + routes
│   ├── main.tsx             # Entry point
│   ├── index.css           # Global styles + Tailwind
│   └── vite-env.d.ts
├── index.html               # HTML template with SEO meta tags
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json            # Root (references app + node configs)
├── tsconfig.app.json        # App source config
├── tsconfig.node.json       # Vite config TS
└── README.md
```

## Configuration

All site-wide configuration lives in **`src/config/site.ts`**. Update these values before deploying:

| Field | Description | Current Placeholder |
|---|---|---|
| `SITE_CONFIG.url` | Your deployed domain | `https://nexora.example.com` |
| `SITE_CONFIG.contactEmail` | Your contact email | `hello@nexora.example.com` |
| `SITE_CONFIG.social.github` | GitHub URL | `https://github.com/nexora` |
| `SITE_CONFIG.social.linkedin` | LinkedIn URL | `https://www.linkedin.com/company/nexora` |
| `SITE_CONFIG.social.twitter` | Twitter URL (empty = hidden) | `""` |

Also update these URLs in:
- `public/robots.txt` — replace `https://nexora.example.com`
- `public/sitemap.xml` — replace all `https://nexora.example.com` entries
- `index.html` — replace `og:url` value

## Contact Form

The contact form (`/contact`) includes **front-end validation only**. It validates:
- Name (required, min 2 characters)
- Email (required, valid format)
- Service selection (required)
- Message (required, min 10 characters)

**No backend is connected.** To make the form functional, integrate one of:
- **Cloudflare Workers** — create a Worker that receives the form POST and sends email
- **Formspree** — set a Formspree endpoint and change the form to submit via fetch
- **EmailJS** — use EmailJS to send emails directly from the browser

Until a backend is configured, the form clearly informs users to use the email address directly.

## Deploy to Cloudflare Pages

### Method 1: Git Integration (Recommended)

1. Push this project to a GitHub repository.
2. Log in to [Cloudflare Pages](https://pages.cloudflare.com).
3. Click **Create a project** → **Connect to Git**.
4. Select your repository.
5. Configure the build:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Click **Save and Deploy**.

Cloudflare will automatically build and deploy. The `public/_redirects` file ensures SPA routing works (all routes serve `index.html`).

### Method 2: Wrangler CLI

```bash
# Install Wrangler globally
npm install -g wrangler

# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy dist --project-name nexora
```

## GitHub Upload

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Nexora website"

# Add remote and push
git remote add origin https://github.com/your-username/nexora.git
git branch -M main
git push -u origin main
```

## SEO

- **Title:** Nexora | IT Consulting & Technology Solutions
- **Meta Description:** Configured per page via the `SEO` component
- **Open Graph:** Configured in `index.html`, updated per page
- **robots.txt:** Located in `public/robots.txt`
- **sitemap.xml:** Located in `public/sitemap.xml`
- **URL structure:** Clean paths (`/`, `/about`, `/services`, `/contact`, `/privacy`)

## License

© Nexora. All rights reserved.
