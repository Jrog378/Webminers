// Generates public/sitemap.xml at build time (runs as the npm "prebuild" script).
//
// Includes: the site's static pages, every article in src/components/details.js, and
// Eureka Reports issues (Wed/Sat digest + Sunday Coding with Christ) that Justin has approved,
// each with its hero image as an image-sitemap entry.
// Unreviewed issues are noindex, so they're left out; listing noindex URLs in a sitemap
// sends Google conflicting signals. The /eureka hub is listed once any issue is approved.
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const SITE = 'https://webminers.dev'
const ROOT = path.join(__dirname, '..')

const STATIC_PAGES = [
    {loc: '/', changefreq: 'weekly'},
    {loc: '/articles', changefreq: 'weekly'},
    {loc: '/methodology', changefreq: 'monthly'},
    {loc: '/email-list', changefreq: 'yearly'},
]

const MONTHS = {January: 1, February: 2, March: 3, April: 4, May: 5, June: 6, July: 7, August: 8, September: 9, October: 10, November: 11, December: 12}

// "July 13th, 2023" -> "2023-07-13"
function isoFromHumanDate(text) {
    const match = /^(\w+) (\d+)\w*, (\d{4})$/.exec((text || '').trim())
    if (!match || !MONTHS[match[1]]) return null
    return `${match[3]}-${String(MONTHS[match[1]]).padStart(2, '0')}-${match[2].padStart(2, '0')}`
}

// details.js is an ES module bundled by Next; read its url/date pairs as text.
function articleEntries() {
    const source = fs.readFileSync(path.join(ROOT, 'src/components/details.js'), 'utf8')
    const entries = []
    for (const block of source.split(/\n\s*\{\s*\n/).slice(1)) {
        const url = /url:\s*'([^']+)'/.exec(block)?.[1]
        const date = /date:\s*'([^']+)'/.exec(block)?.[1]
        if (url) entries.push({loc: url, lastmod: isoFromHumanDate(date), changefreq: 'yearly'})
    }
    return entries
}

function approvedIssues(dir) {
    const full = path.join(ROOT, dir)
    if (!fs.existsSync(full)) return []
    return fs.readdirSync(full)
        .filter((file) => file.endsWith('.md') && !file.startsWith('_'))
        .map((file) => ({slug: file.replace(/\.md$/, ''), data: matter(fs.readFileSync(path.join(full, file), 'utf8')).data}))
        .filter(({data}) => data.reviewStatus === 'approved' && !data.demo)
        .map(({slug, data}) => ({loc: `/eureka/${slug}`, lastmod: (data.dateModified || data.datePublished || '').slice(0, 10), changefreq: 'monthly', image: data.hero?.src ? SITE + data.hero.src : null}))
}

const escapeXml = (text) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function main() {
    const issues = [...approvedIssues('content/digest'), ...approvedIssues('content/faith')]
    const hub = issues.length ? [{loc: '/eureka', lastmod: issues.map((i) => i.lastmod).sort().at(-1), changefreq: 'daily'}] : []
    const urls = [...STATIC_PAGES, ...hub, ...issues, ...articleEntries()]

    const seen = new Set()
    const body = urls
        .filter((url) => !seen.has(url.loc) && seen.add(url.loc))
        .map((url) => [
            '    <url>',
            `        <loc>${escapeXml(SITE + (url.loc === '/' ? '' : url.loc))}</loc>`,
            url.lastmod ? `        <lastmod>${url.lastmod}</lastmod>` : null,
            `        <changefreq>${url.changefreq}</changefreq>`,
            url.image ? `        <image:image><image:loc>${escapeXml(url.image)}</image:loc></image:image>` : null,
            '    </url>',
        ].filter(Boolean).join('\n'))
        .join('\n')

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${body}\n</urlset>\n`
    fs.writeFileSync(path.join(ROOT, 'public/sitemap.xml'), xml)
    console.log(`sitemap.xml: ${seen.size} URLs (${issues.length} approved Eureka Reports issues)`)
}

main()
