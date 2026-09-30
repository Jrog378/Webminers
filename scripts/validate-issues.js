// Build-time checks for Eureka Reports issues (runs in the npm "prebuild" script, before the sitemap).
// Fails the build if a published issue is missing what every report must carry, so a scheduled
// run can never publish one without it.
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const ROOT = path.join(__dirname, '..')
const DIRS = ['content/digest', 'content/faith']
const errors = []

for (const dir of DIRS) {
    const full = path.join(ROOT, dir)
    if (!fs.existsSync(full)) continue
    for (const file of fs.readdirSync(full).filter((f) => f.endsWith('.md') && !f.startsWith('_'))) {
        const where = `${dir}/${file}`
        const {data, content} = matter(fs.readFileSync(path.join(full, file), 'utf8'))
        const need = (ok, message) => { if (!ok) errors.push(`${where}: ${message}`) }

        // The AI disclosure must name the models that made the issue.
        need(Array.isArray(data.models) && data.models.length > 0, 'missing `models` (AI models used) — every report must list them')
        for (const entry of data.models || []) {
            need(entry.model && Array.isArray(entry.roles) && entry.roles.length, 'each `models` entry needs `model` and a non-empty `roles` list')
        }
        need(['pending', 'approved'].includes(data.reviewStatus), '`reviewStatus` must be pending or approved')
        need(data.reviewStatus === 'approved' || !data.editorsNote, 'an Editor\'s note is only written by Justin on approval')
        need(data.datePublished && /[+-]\d\d:\d\d$/.test(data.datePublished), '`datePublished` must be ISO 8601 with a UTC offset')
        need(Array.isArray(data.sources) && data.sources.length > 0, 'missing `sources`')
        const cited = [...content.matchAll(/\(#source-(\d+)\)/g)].map((m) => +m[1])
        need(cited.every((n) => n >= 1 && n <= (data.sources || []).length), 'a citation points past the end of `sources`')
        if (dir === 'content/faith') need(data.verse?.text && data.verse?.url, 'Sunday articles need `verse` text and its bible-api.com url')
    }
}

if (errors.length) {
    console.error(`Eureka Reports validation failed:\n- ${errors.join('\n- ')}`)
    process.exit(1)
}
console.log('Eureka Reports issues: all required fields present')
