# Webminers AI

Next.js (pages router) site, repositioning from a crypto-investing blog into a
site about applying AI to real work ("Practical AI for Work Efficiency").
The ~45 legacy crypto articles stay published as-is for now; they'll be
repurposed later rather than deleted.

**Status:** rebrand is committed and pushed to `main` on GitHub. **Not yet
deployed to production** — `webminers.dev` is still the old crypto-branded
build until someone runs a deploy (see Deployment below).

## Stack

- Next.js 13.1.6 (pages router), React 18
- **Tailwind CSS** — styling system for the rebrand, with a CSS-variable-based
  dark/light theme (see Theming below)
- **react-bootstrap** — legacy styling system, still powers pages not yet
  converted (see below). Both coexist right now; don't remove Bootstrap
  globally until everything on the list is migrated.
- Firebase (auth/db), Stripe, SendGrid/Mailjet (mailing list), Vercel Analytics

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

### ⚠️ Don't run `npm run build` while `npm run dev` is running

Both write into the same `.next/` directory with incompatible layouts
(dev uses unhashed chunk names like `main.js`; production build uses hashed
names). Running both against the same `.next/` folder corrupts the dev
server's manifest and produces 404s on `main.js` / `_app.js` /
`react-refresh.js` in the browser — this happened and cost real debugging
time. If you need to verify a production build: stop `dev`, run `build`,
then `rm -rf .next` and restart `dev`.

## Deployment

No deploy has been done from this rebrand yet. The repo's set up for Vercel
(per the original template) but nothing is linked/authenticated in this
environment - the Vercel CLI isn't installed here. To ship to production:
`npm i -g vercel`, `vercel login`, then `vercel --prod` (or connect the
GitHub repo in the Vercel dashboard for auto-deploys on push to `main`).

## Theming (dark/light)

Colors are CSS variables (`--page`, `--surface`, `--raised`, `--border`,
`--fg`, `--muted`, `--brand`/`--brand-light`/`--brand-dark`, `--accent`)
defined in `src/styles/globals.css`: light values on `:root`, dark values
under a `.dark` class. `tailwind.config.js` maps Tailwind color names
(`page`, `surface`, `raised`, `border`, `fg`, `muted`, `brand`, `accent`) to
`rgb(var(--x) / <alpha-value>)` so any `bg-*`/`text-*`/`border-*` utility
using those names is theme-aware automatically. `darkMode: 'class'` is set.

- Toggle: `src/components/theme-toggle.js`, added to the navbar (desktop +
  mobile). Flips the `.dark` class on `<html>` and persists to
  `localStorage['theme']`.
- No-flash init script lives in `src/pages/_document.js` - runs before paint,
  defaults to **dark** if no stored preference exists.
- A colored button/CTA that should always be white text regardless of theme
  (sits on solid `bg-brand`) should use literal `text-white`, **not**
  `text-fg` - `text-fg` flips to near-black in light mode and will look wrong
  on a purple button. Two spots already do this correctly: the hero CTA and
  the email-signup button in `src/components/email.js`.
- Legacy gotcha: Bootstrap's CSS (still imported in `_app.js` for
  not-yet-converted pages) sets `a { text-decoration: underline }`. It's
  imported *before* `globals.css` in `_app.js` specifically so our
  `text-decoration: none` wins the cascade - don't reorder those two imports.

## What changed in the AI rebrand

Rebuilt in Tailwind with the dark/light theme, AI-focused copy - **done**:
- `src/pages/index.js` - homepage: new hero ("Practical AI for Work
  Efficiency"), "Becoming Irreplaceable With AI" / "Recently published"
  article sections, auto-surfaces AI-tagged articles (see below), no crypto
  CTA
- `src/components/navbar.js` - new nav, LinkedIn is an icon not a button,
  theme toggle, logo swaps between light/dark variants (see Logos below)
- `src/components/footer.js`
- `src/components/format.js` - shared article template used by **all**
  article pages. Removed the crypto "Efficient Profit" promo that used to
  render on every article. Disclaimer text generalized (no longer
  crypto-specific wording).
- `src/components/outline.js`, `src/components/suggest.js`,
  `src/components/find-article.js`, `src/components/email.js`
- `src/pages/articles/index.js` - articles listing page
- `src/pages/privacy.js`, `src/pages/terms-of-service.js` - rewritten for
  the new site and converted to Tailwind
- `tailwind.config.js` - theme-aware color tokens (see Theming), Space
  Grotesk for headings via `@next/font/google` (note: **`@next/font`, not
  `next/font`** - this Next version needs the old import path), Figtree
  stays as body font (set in `_app.js`)

Deleted (dead code / crypto promo, no longer referenced anywhere):
`src/components/efficient-sales.js`, `ad-recover.js`, `article-ad.js`,
`display-ad.js`

**Not yet converted** - still on react-bootstrap / old styling, left alone
as a scope call, not an oversight:
- `src/pages/efficiency.js` - the crypto "efficiency" tool. Unlinked from
  nav/homepage but still live and functional at `/efficiency`.
- `src/pages/strategy.js`, `src/pages/email-list.js`, `src/pages/unsubscribe.js`
- `src/pages/auth/*` (login/signup/reset/profile)

### Homepage "AI articles" auto-detection

`src/pages/index.js` picks which articles count as AI-focused by matching
the article's `url` against `/ai-`, `-ai-`, or a trailing `-ai` (see
`isAiArticle` in that file) - there's no explicit topic/tag field in
`src/components/details.js`. New AI articles should use a slug that matches
one of those patterns, or update the filter if that stops being reliable.

## Logos / brand images

Original logos were green; recolored to the brand cyan (`--accent`,
hue ~188°) using a hue-shift script (kept at
`recolor_logo.py` outside the repo, in the working scratch dir - not
committed). Files:

- `src/images/WebLogo.webp` - navbar icon, **dark-mode** variant (white
  outline lines - arrow + bar outlines - visible against a dark header)
- `src/images/WebLogo-light.webp` - same icon, **light-mode** variant, with
  those outline lines recolored to near-black so they don't disappear
  against a light header. Swapped in via CSS only (`dark:hidden` /
  `dark:block` on two `<Image>` tags in `navbar.js`), no JS/flicker.
- `src/images/WebminersLogo.webp` / `public/webminers-logo.webp` - full
  splash logo with wordmark, black background, used on the password-reset
  page and as the default OG/social share image. Cyan recolor only, no
  light/dark variant needed (background is baked-in black).
- `public/favicon.ico` - despite the extension, this file is actually a PNG
  (`file` confirms it). Recolored the same way; if regenerating, save with
  PNG encoding even though the filename ends in `.ico`.
- `assets-backup/` - untouched original (green) versions of all four files
  above, kept in case the recolor needs to be redone differently. Committed
  to the repo, not gitignored.

## Known issues / follow-ups

- Dependency vulnerabilities: local `npm audit` reported 94 (7 low / 12
  moderate / 67 high / 8 critical); GitHub's Dependabot scan on push reported
  233 (10 critical / 115 high / 89 moderate / 19 low) - it checks more
  transitive deps. Not addressed yet - needs its own pass; don't blindly run
  `--force`, some of these deps (Stripe, Firebase Admin) are load-bearing.
- Not deployed yet - see Deployment above.
- `.idea/` and Firebase service-account key filename patterns were added to
  `.gitignore` to stop future accidental commits of local/secret files.
