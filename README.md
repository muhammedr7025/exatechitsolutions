# Exatech IT Solutions — website

React + Vite site with an embedded [Sanity](https://www.sanity.io) Studio at `/studio`.
**Everything visible on the site is editable in Studio** — no code changes or redeploys needed.

## What you can edit in Studio (`/studio`)

| Studio section | Controls |
| --- | --- |
| **Site Settings** | Logo, favicon, address, phone/mobile, email, WhatsApp number, footer text, header button |
| **Pages → Home** | Hero, stats, client logos, why-us, services, process, portfolio, testimonials and certifications headings, section on/off switches, SEO |
| **Pages → About / Services / Portfolio / Blog / Contact** | Page headings, intro text, labels, SEO |
| **Services**, **Sub-Services** | Every service page and its sub-pages (text, icons, stats, sections, background image, buttons) |
| **Portfolio Projects** | Projects shown on the Portfolio page and homepage |
| **Blog Posts**, **Blog Categories** | The blog at `/blog` |
| **Testimonials**, **Client Logos**, **Certifications** | The three social-proof sections on the homepage. Each stays hidden until you add at least one item |

Things to know:

- **Click Publish.** The website only shows *published* content. A document that says "Draft" or has unpublished changes is not live yet.
- **Address / phone / email** live in one place (Site Settings) and update the footer, the Contact page, the call link, the map link and every WhatsApp button. WhatsApp uses the phone number unless you set a separate WhatsApp number.
- **Logo:** upload in Site Settings. Use a PNG/SVG with a transparent background and light lettering (the site is dark). It is also used as the browser-tab icon unless you upload a favicon.
- Published changes appear on the next page load. (Sanity's CDN can take a short while to refresh, and a returning visitor may briefly see their previously cached version first.)

## First-time setup (one time only)

1. **Environment.** Copy `.env.example` to `.env` and fill in `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET`. Set the same two variables in Vercel.
2. **CORS.** At [sanity.io/manage](https://www.sanity.io/manage) → your project → **API → CORS origins**, add your site (`https://exatech.co.in`, `https://www.exatech.co.in`, any Vercel preview domain) and `http://localhost:5173`. Tick **Allow credentials** (Studio login needs it). Without this the browser blocks the requests and the site quietly shows its built-in content.
3. **Copy the existing content into Sanity** (so it can be edited):
   1. Create an **Editor** token: sanity.io/manage → **API → Tokens**. Put it in `.env` as `SANITY_WRITE_TOKEN`.
   2. Preview: `npm run seed -- --dry-run`
   3. Run it: `npm run seed`

   The seed is safe to re-run. It only creates what is missing and fills blank fields; it never overwrites anything that has been edited. Do this **before** deploying, because once Sanity has any services, Sanity is treated as the source of truth for the services list.
4. Open `/studio`, log in, and **publish** any page that shows unpublished changes.

## How the site uses Sanity

- `src/cms/` — queries, cache, and the hooks pages use. Pages render instantly from built-in content (`src/data/defaults/`), then swap in Sanity content. If Sanity is empty or unreachable, the built-in content stays on screen.
- `src/sanity/` — Studio config and content schemas. `client.js`/`env.js` are safe for the public bundle; the rest is Studio-only and lazy-loaded.
- `src/data/defaults/` — built-in copy. Doubles as the source for `npm run seed`.
- `scripts/seed-sanity.mjs` — the seed script.

Editing rules built into the site: a heading and its highlighted part fall back together; clearing "Address line 2" really clears it; a deleted service disappears from the site once Sanity has services.

## Development

```bash
npm install
npm run dev        # http://localhost:5173  (Studio at /studio)
npm run lint
npm run build
```

Requires Node 22.12+.
