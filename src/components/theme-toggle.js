import {useEffect, useState} from "react";

export default function ThemeToggle({className = ""}) {
    const [dark, setDark] = useState(null);

    useEffect(() => {
        setDark(document.documentElement.classList.contains('dark'));
    }, []);

    const toggle = () => {
        const next = !document.documentElement.classList.contains('dark');
        document.documentElement.classList.toggle('dark', next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
        setDark(next);
    };

    if (dark === null) {
        return <span className={`inline-block h-9 w-9 ${className}`}/>
    }

    return (
        <button
            onClick={toggle}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-dim transition hover:text-brand-light ${className}`}
        >
            {dark ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round"/>
                </svg>
            ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.7 15.3a8.5 8.5 0 1 1-10-11 6.7 6.7 0 0 0 10 11z"/>
                </svg>
            )}
        </button>
    )
}
