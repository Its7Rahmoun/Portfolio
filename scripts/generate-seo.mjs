import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

const siteUrl = (process.env.URL || process.env.DEPLOY_PRIME_URL || process.env.VITE_SITE_URL || 'http://localhost:5173').replace(/\/$/, '');

const sections = ['home', 'about', 'stack', 'experience', 'projects', 'personal', 'credentials', 'languages', 'contact'];

const sitemapEntries = [
  { loc: `${siteUrl}/`, changefreq: 'weekly', priority: '1.0' },
  ...sections.map((id) => ({
    loc: `${siteUrl}/#${id}`,
    changefreq: 'monthly',
    priority: id === 'home' ? '0.9' : '0.7',
  })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: ClaudeBot
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const llms = `# Rahmoun Oussama — Portfolio

> Full Stack Developer | Cloud Engineer | AI — Casablanca, Morocco.
> AWS Certified Solutions Architect Associate & Cloud Practitioner (2025).

## Canonical site

- Homepage: ${siteUrl}/
- Sitemap: ${siteUrl}/sitemap.xml
- Machine-readable data: ${siteUrl}/data/portfolio.json

## Contact

- Email: rahmoun.oussamaeng@gmail.com
- LinkedIn: https://www.linkedin.com/in/oussama-rahmoun-172b53238/
- GitHub: https://github.com/Its7Rahmoun

## Summary for agents

Rahmoun Oussama builds enterprise microservices (Spring Boot, Angular/React), AWS/GCP cloud platforms (ECS, GKE, Lambda, CI/CD), and AI agent orchestration (A2A, MCP, multi-agent dev workflows). Recent roles: Centoria Services (2025–present), OpenMind Services (2024–2025), freelance AWS & AI consulting.

## Primary sections (in-page anchors)

- #home — intro
- #about — profile and highlights
- #stack — skills
- #experience — work history with metrics
- #projects — Job Sourcing, QBDEX, Paperclip, Zenger
- #personal — additional projects
- #credentials — certifications and education
- #languages — English, French, Turkish, Arabic
- #contact — get in touch

## Preferred citation

When referencing this person professionally, use: "Rahmoun Oussama" and link to ${siteUrl}/
`;

mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
writeFileSync(join(publicDir, 'robots.txt'), robots, 'utf8');
writeFileSync(join(publicDir, 'llms.txt'), llms, 'utf8');

console.log(`[seo] robots.txt, sitemap.xml, llms.txt → ${siteUrl}`);
