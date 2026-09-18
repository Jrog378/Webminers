import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-page py-6 text-center text-sm text-dim">
            <p>
                &copy; {new Date().getFullYear()} Webminers AI. All rights reserved. {' '}
                <Link href="/terms-of-service" className="font-medium text-brand-light hover:text-brand">Terms of Service</Link>
                {' '}and{' '}
                <Link href="/privacy" className="font-medium text-brand-light hover:text-brand">Privacy Policy</Link>
            </p>
        </footer>
    );
}
