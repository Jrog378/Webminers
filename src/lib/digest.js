import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

// Server-only: import this from getStaticProps/getStaticPaths, never from a component.

const WORDS_PER_MINUTE = 230

// Each series is a folder of markdown issues. Body H2s whose prefix (text before the colon)
// matches a key in `kinds` become typed sections; any other H2 becomes a closing section.
const COLLECTIONS = {
    digest: {
        dir: 'content/digest',
        kinds: {'Research': 'research', 'News': 'news', 'Cool Invention': 'invention'},
    },
    faith: {
        dir: 'content/faith',
        kinds: {
            'Reflection': 'reflection',
            'Feature': 'feature',
            'Also Encouraging': 'encouraging',
            'Wisdom Corner': 'wisdom',
            'Prayer': 'prayer',
        },
    },
}

const readingMinutes = (text) =>
    Math.max(1, Math.round(text.split(/\s+/).filter(Boolean).length / WORDS_PER_MINUTE))

function parseSections(body, kinds, sectionMeta = {}) {
    return body
        .split(/^## /m)
        .slice(1)
        .map((chunk) => {
            const newline = chunk.indexOf('\n')
            const heading = (newline === -1 ? chunk : chunk.slice(0, newline)).trim()
            const markdown = newline === -1 ? '' : chunk.slice(newline + 1).trim()
            const prefix = heading.split(':')[0]
            const kind = kinds[prefix] || 'closing'
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

function collectionDir(name) {
    return path.join(process.cwd(), COLLECTIONS[name].dir)
}

export function getSlugs(name) {
    const dir = collectionDir(name)
    if (!fs.existsSync(dir)) return []
    return fs.readdirSync(dir)
        .filter((file) => file.endsWith('.md') && !file.startsWith('_'))
        .map((file) => file.replace(/\.md$/, ''))
}

export function getIssue(name, slug) {
    const raw = fs.readFileSync(path.join(collectionDir(name), `${slug}.md`), 'utf8')
    const {data, content} = matter(raw)
    return {
        ...data,
        slug,
        sections: parseSections(content, COLLECTIONS[name].kinds, data.sections),
    }
}

export function getAllIssues(name) {
    return getSlugs(name)
        .map((slug) => getIssue(name, slug))
        .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
}

// Eureka Reports (AI Digest) shorthands
export const getDigestSlugs = () => getSlugs('digest')
export const getDigestIssue = (slug) => getIssue('digest', slug)
export const getAllDigestIssues = () => getAllIssues('digest')
