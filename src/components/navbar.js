import Image from "next/image";
import Link from "next/link";
import logoDark from "@/images/WebLogo.webp";
import logoLight from "@/images/WebLogo-light.webp";
import {useState} from "react";
import ThemeToggle from "@/components/theme-toggle";

function LinkedInIcon(props) {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" {...props}>
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
        </svg>
    )
}

export default function Pagenav() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border/80 bg-page/90 backdrop-blur">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
                <Link href="/" className="flex items-center gap-2 text-lg font-bold text-fg">
                    <Image width={30} height={30} src={logoLight} alt="Webminers AI logo" className="rounded dark:hidden"/>
                    <Image width={30} height={30} src={logoDark} alt="Webminers AI logo" className="hidden rounded dark:block"/>
                    Webminers AI
                </Link>

                <div className="flex items-center gap-1 lg:hidden">
                    <ThemeToggle/>
                    <button
                        onClick={() => setOpen(!open)}
                        className="rounded-md p-2 text-muted hover:text-fg"
                        aria-controls="primary-nav"
                        aria-expanded={open}
                    >
                        <span className="sr-only">Toggle menu</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {open
                                ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round"/>
                                : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round"/>}
                        </svg>
                    </button>
                </div>

                <div id="primary-nav" className="hidden items-center gap-8 lg:flex">
                    <Link href="/articles" className="text-sm font-medium text-muted transition hover:text-fg">
                        Articles
                    </Link>
                    <a
                        href="https://www.linkedin.com/in/jusrogers"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        className="text-muted transition hover:text-brand-light"
                    >
                        <LinkedInIcon/>
                    </a>
                    <ThemeToggle/>
                </div>
            </nav>

            {open && (
                <div className="border-t border-border bg-page px-4 py-4 lg:hidden">
                    <div className="flex flex-col gap-4">
                        <Link href="/articles" className="text-sm font-medium text-muted hover:text-fg" onClick={() => setOpen(false)}>
                            Articles
                        </Link>
                        <a
                            href="https://www.linkedin.com/in/jusrogers"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="w-fit text-muted hover:text-brand-light"
                        >
                            <LinkedInIcon/>
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}
