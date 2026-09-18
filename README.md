# Webminers AI

Next.js (pages router) site, repositioning from a crypto-investing blog into a
site about applying AI to real work ("Practical AI for Work Efficiency").
The ~45 legacy crypto articles stay published as-is for now; they'll be
repurposed later rather than deleted.

## Stack

- Next.js 13.1.6 (pages router), React 18
- **Tailwind CSS** — new styling system for the rebrand (added this session)
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
time. If you need to verify a production build, do it in a separate
checkout/branch, or: stop `dev`, run `build`, then `rm -rf .next` and
restart `dev`.

## What changed in the AI rebrand (this session)

Rebuilt in Tailwind, dark theme, AI-focused copy — **done**:
- `src/pages/index.js` — homepage: new hero, "Where AI actually helps" /
  "Recently published" article sections, auto-surfaces AI-tagged articles
  (see below), no crypto CTA
- `src/components/navbar.js` — new nav, LinkedIn is an icon not a button
- `src/components/footer.js`
- `src/components/format.js` — shared article template used by **all**
  article pages. Removed the crypto "Efficient Profit" promo that used to
  render on every article. Disclaimer text generalized (no longer
  crypto-specific wording).
- `src/components/outline.js`, `src/components/suggest.js`,
  `src/components/find-article.js`, `src/components/email.js`
- `src/pages/articles/index.js` — articles listing page
- `tailwind.config.js` — brand palette (`ink`/`surface`/`raised`/`border`/
  `brand`/`accent`/`muted`), Space Grotesk for headings via `@next/font/google`
  (note: **`@next/font`, not `next/font`** — this Next version needs the
  old import path), Figtree stays as body font (set in `_app.js`)

Deleted (dead code / crypto promo, no longer referenced anywhere):
`src/components/efficient-sales.js`, `ad-recover.js`, `article-ad.js`,
`display-ad.js`

**Not yet converted** — still on react-bootstrap / old styling, left alone
as a scope call, not an oversight:
- `src/pages/efficiency.js` — the crypto "efficiency" tool. Unlinked from
  nav/homepage but still live and functional at `/efficiency`.
- `src/pages/strategy.js`, `src/pages/email-list.js`, `src/pages/unsubscribe.js`
- `src/pages/privacy.js`, `src/pages/terms-of-service.js`
- `src/pages/auth/*` (login/signup/reset/profile)

### Homepage "AI articles" auto-detection

`src/pages/index.js` picks which articles count as AI-focused by matching
the article's `url` against `/ai-`, `-ai-`, or a trailing `-ai` (see
`isAiArticle` in that file) — there's no explicit topic/tag field in
`src/components/details.js`. New AI articles should use a slug that matches
one of those patterns, or update the filter if that stops being reliable.

## Known issues / follow-ups

- `npm audit` reports **94 vulnerabilities** (7 low / 12 moderate / 67 high /
  8 critical) in dependencies as of this session. Not addressed — needs its
  own pass; don't blindly run `--force`, some of these deps (Stripe,
  Firebase Admin) are load-bearing.
- Nothing from this session has been deployed. Production (`webminers.dev`)
  is untouched and still running the old crypto-branded build.
- `.idea/` and Firebase service-account key patterns were added to
  `.gitignore` this session to stop future accidental commits of local/
  secret files.
