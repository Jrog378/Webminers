// "Made with …" line for AI-generated Eureka Reports issues. Reads the issue's `models` frontmatter:
//   models:
//     - model: "Claude Opus 5.5"
//       roles: [research, writing, editing]
export default function ModelsUsed({models}) {
    if (!models?.length) return null
    const parts = models.map((entry) => `${entry.model} (${entry.roles.join(', ')})`)
    const sentence = parts.length > 1
        ? `${parts.slice(0, -1).join(', ')} and ${parts.at(-1)}`
        : parts[0]
    return (
        <p className="mt-2">
            <span className="font-semibold text-fg">AI models used:</span> {sentence}.
        </p>
    )
}

// Compact version for the byline row: "Made with Claude Opus 5.5 and Claude Sonnet 5.5"
export function ModelsByline({models}) {
    if (!models?.length) return null
    const names = models.map((entry) => entry.model)
    const list = names.length > 1 ? `${names.slice(0, -1).join(', ')} and ${names.at(-1)}` : names[0]
    return <span>Made with <span className="font-semibold text-fg">{list}</span></span>
}
