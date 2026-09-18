/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,jsx}',
        './src/components/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            colors: {
                page: 'rgb(var(--page) / <alpha-value>)',
                surface: 'rgb(var(--surface) / <alpha-value>)',
                raised: 'rgb(var(--raised) / <alpha-value>)',
                border: 'rgb(var(--border) / <alpha-value>)',
                fg: 'rgb(var(--fg) / <alpha-value>)',
                muted: 'rgb(var(--muted) / <alpha-value>)',
                brand: {
                    DEFAULT: 'rgb(var(--brand) / <alpha-value>)',
                    light: 'rgb(var(--brand-light) / <alpha-value>)',
                    dark: 'rgb(var(--brand-dark) / <alpha-value>)',
                },
                accent: 'rgb(var(--accent) / <alpha-value>)',
                // legacy alias so any leftover `bg-ink` usage still resolves to the page color
                ink: 'rgb(var(--page) / <alpha-value>)',
            },
            backgroundImage: {
                'brand-glow': 'radial-gradient(60% 60% at 50% 0%, rgb(var(--brand) / 0.25) 0%, rgb(var(--accent) / 0.08) 45%, rgb(var(--accent) / 0) 80%)',
            },
        },
    },
    plugins: [],
}
