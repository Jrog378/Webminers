import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Server-only: import this from getStaticProps/getStaticPaths, never from a component.
const DIGEST_DIR = path.join(process.cwd(), 'content/digest')

const WORDS_PER_MINUTE = 230

const SECTION_KINDS = {
    'Research': 'research',
    'News': 'news',
    'Cool Invention': 'invention',
}

const readingMinutes = (text) =>
    Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE))

// Split the markdown body on H2s. "Research: …", "News: …" and "Cool Invention: …"
// become the three deep-dive sections; any other H2 becomes the closing thread.
function parseSections(body, sectionMeta = {}) {
    return body
        .split(/^## /m)
        .slice(1)
        .map((chunk) => {
            const newline = chunk.indexOf('\n')
            const heading = chunk.slice(0, newline).trim()
            const markdown = chunk.slice(newline + 1).trim()
            const prefix = heading.split(':')[0]
            const kind = SECTION_KINDS[prefix] || 'closing'
            const title = kind === 'closing' ? heading : heading.slice(prefix.length + 1).trim()
            const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
            return {
                id,
                kind,
                label: kind === 'closing' ? null : prefix,
                title,
                markdown,
                minutes: readingMinutes(markdown),
                claimStatus: sectionMeta[kind]?.claimStatus || null,
            }
        })
}

export function getDigestSlugs() {
    if (!fs.existsSync(DIGEST_DIR)) return []
    return fs.readdirSync(DIGEST_DIR)
        .filter((file) => file.endsWith('.md') && !file.startsWith('_'))
        .map((file) => file.replace(/\.md$/, ''))
}

export function getDigestIssue(slug) {
    const raw = fs.readFileSync(path.join(DIGEST_DIR, `${slug}.md`), 'utf8')
    const {data, content} = matter(raw)
    return {
        ...data,
        slug,
        sections: parseSections(content, data.sections),
    }
}

export function getAllDigestIssues() {
    return getDigestSlugs()
        .map(getDigestIssue)
        .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
}
