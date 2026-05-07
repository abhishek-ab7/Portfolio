# Abhishek Saini — Premium Full-Stack Portfolio

A recruiter-optimized, case-study-driven portfolio for Abhishek Saini, a full-stack software engineer focused on React, Node.js, Express, MongoDB, Socket.IO, REST APIs, JWT authentication, payments, and polished web experiences.

## Strategic Positioning

This portfolio is designed to pass both recruiter and engineering screens:

- **6-second recruiter scan:** role, stack, resume, contact links, proof metrics, and featured work are visible immediately.
- **Engineering credibility:** projects are presented as case studies with problem statements, stack rationale, architecture decisions, challenges, API structure, and data models.
- **Retention:** engineering notes, GitHub credibility checklist, architecture snippets, and interactive routes keep technical visitors exploring longer.
- **SEO/ATS alignment:** metadata, Open Graph tags, JSON-LD schema, sitemap, robots file, and keyword-rich content support discoverability.

## Featured Case Studies

| Project | Engineering Story | Stack |
| --- | --- | --- |
| Full-Stack E-Commerce Platform | Secure sessions, Razorpay payments, admin dashboard, order lifecycle, and MongoDB-backed commerce data. | React, Node.js, Express, MongoDB, Redux, Tailwind, Razorpay |
| Live Location Tracking App | Browser geolocation, Socket.IO event pipeline, Leaflet map visualization, and realtime marker updates. | Node.js, Express, Socket.IO, Leaflet, Geolocation API |
| Real-Time Chat Application | JWT auth, realtime private messaging, persistent conversation history, and recoverable message state. | React, Node.js, Express, MongoDB, Socket.IO, JWT |

## Information Architecture

```txt
Hero
  Role + value proposition + stack + resume/contact CTAs + proof metrics
About
  Positioning + capability bento grid + outcome-focused experience
Projects
  Case-study cards with problem, impact, demo, source, and deep routes
Skills
  Evidence-based matrix instead of subjective progress bars
Engineering
  Architecture pattern + code snippet + GitHub/readme checklist + notes
Contact
  Fast direct contact + form with mailto fallback
```

## Technical Architecture

```txt
React + Vite SPA
  ├─ src/data/portfolio.js        # Portfolio content model
  ├─ src/components/*             # Premium reusable sections
  ├─ src/pages/Home.jsx           # Landing page composition
  ├─ src/pages/ProjectCaseStudy.jsx
  ├─ src/pages/BlogPost.jsx
  └─ public/*                     # SEO assets, resume, sitemap, robots
```

## Quality Gates

- `npm run lint` checks React and JavaScript quality.
- `npm run build` verifies the production Vite bundle.
- GitHub Actions runs install, lint, and build on push and pull request.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Contact Configuration

The contact form supports EmailJS through environment variables and falls back to a prepared `mailto:` link when EmailJS is not configured.

Create `.env.local` if EmailJS is desired:

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Never hard-code EmailJS keys directly in source files.

## Deployment Checklist

- Replace `public/Abhishek-Saini-Resume.pdf` with the latest ATS-ready resume.
- Update canonical URLs in `index.html`, `public/robots.txt`, and `public/sitemap.xml` to the final production domain.
- Add a real Open Graph image if a PNG/JPG preview is preferred over the current SVG.
- Verify all live demos and GitHub repository URLs.
- Add analytics for resume downloads, demo clicks, GitHub clicks, and case-study retention.
