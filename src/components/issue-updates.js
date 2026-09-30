// "Updates and corrections" list at the foot of an issue. Reads the issue's `updates` frontmatter:
//   updates:
//     - date: "2026-11-01"
//       type: correction        # correction | update
//       note: "What changed and why, with a source link if relevant."
// Added by the monthly audit (or by hand); newest first.
import ReactMarkdown from "react-markdown";

export default function IssueUpdates({updates}) {
    if (!updates?.length) return null
    const sorted = [...updates].sort((a, b) => String(b.date).localeCompare(String(a.date)))
    return (
        <section id="updates" className="rounded-2xl border !border-border bg-surface p-6">
            <h2 className="text-xl font-semibold text-fg">Updates and corrections</h2>
            <ul className="mt-4 space-y-3 text-sm text-dim">
                {sorted.map((entry, i) => (
                    <li key={i}>
                        <span className="mr-2 font-semibold text-fg">{entry.date}</span>
                        <span className={entry.type === 'correction'
                            ? 'mr-2 rounded bg-amber-500/15 px-1.5 py-0.5 text-xs font-semibold uppercase text-fg'
                            : 'mr-2 rounded bg-accent/15 px-1.5 py-0.5 text-xs font-semibold uppercase text-accent'}>
                            {entry.type === 'correction' ? 'Correction' : 'Update'}
                        </span>
                        <span className="[&_a]:font-semibold [&_a]:text-accent [&_p]:inline">
                            <ReactMarkdown>{entry.note}</ReactMarkdown>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
