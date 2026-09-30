// Hero image with its license credit. Reads the issue's `hero` frontmatter (set from the
// image finder's image.json): {src, width, height, alt, credit: {title, author, authorUrl,
// license, licenseUrl, sourceName, sourceUrl, modified}}.
import Image from "next/image";

export const heroUrl = (hero) => hero?.src ? `https://webminers.dev${hero.src}` : null

// schema.org ImageObject with licensing fields, so Google Images can show credit and license details.
export function heroSchema(hero) {
    if (!hero?.src) return null
    const credit = hero.credit || {}
    return {
        "@type": "ImageObject",
        "url": heroUrl(hero),
        "contentUrl": heroUrl(hero),
        "width": hero.width,
        "height": hero.height,
        "caption": hero.caption || hero.alt,
        ...(credit.author ? {"creator": {"@type": "Person", "name": credit.author}} : {}),
        "creditText": [credit.author, credit.sourceName].filter(Boolean).join(' / ') || undefined,
        ...(credit.licenseUrl ? {"license": credit.licenseUrl} : {}),
        ...(credit.sourceUrl ? {"acquireLicensePage": credit.sourceUrl} : {}),
        "copyrightNotice": credit.author ? `${credit.author}, ${credit.license}` : credit.license,
    }
}

export default function HeroImage({hero, priority = true}) {
    if (!hero?.src) return null
    const {credit = {}} = hero
    const link = (href, text) => href
        ? <a href={href} target="_blank" rel="noopener noreferrer" className="underline hover:text-fg">{text}</a>
        : text
    return (
        <figure>
            <Image
                src={hero.src}
                width={hero.width}
                height={hero.height}
                alt={hero.alt}
                priority={priority}
                sizes="(min-width: 768px) 768px, 100vw"
                className="h-auto w-full rounded-2xl"
            />
            <figcaption className="mt-2 text-xs text-dim">
                {hero.caption && <span className="mb-1 block text-sm text-fg">{hero.caption}</span>}
                {credit.title ? <>{link(credit.sourceUrl, credit.title)}</> : link(credit.sourceUrl, 'Image')}
                {credit.author && <> by {link(credit.authorUrl, credit.author)}</>}
                {credit.sourceName && <>, via {credit.sourceName}</>}
                {credit.license && <>, {link(credit.licenseUrl, credit.license)}</>}
                {credit.modified && <>. {credit.modified}</>}.
            </figcaption>
        </figure>
    )
}

// Unnumbered "Image" entry for the Sources list, so the photo's origin and license sit with the citations.
export function ImageSourceEntry({hero}) {
    if (!hero?.src) return null
    const c = hero.credit || {}
    return (
        <li className="flex gap-3">
            <span className="flex w-6 shrink-0 items-start pt-0.5 text-dim" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <path d="M21 15l-5-5L5 21"/>
                </svg>
            </span>
            <span className="text-dim">
                <span className="mr-2 rounded bg-surface px-1.5 py-0.5 text-xs font-semibold uppercase text-fg">Image</span>
                {c.author ? `${c.author}, ` : ''}
                <a href={c.sourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">{c.title || 'Hero image'}</a>
                {c.sourceName ? `, ${c.sourceName}` : ''}
                {c.license && <>, <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">{c.license}</a></>}
            </span>
        </li>
    )
}
