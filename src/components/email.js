import {useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";

export default function Email() {
    const [mail, setMail] = useState(null);
    const [loading, setLoading] = useState(false);
    const [subscribed, setSubscribed] = useState(false)

    const handleKeypress = e => {
        if (e.keyCode === 13) {
            subscribe();
        }
    };

    const subscribe = () => {
        setLoading(true);
        axios.put("/api/mailingList", {mail,}).then((result) => {
            if (result.status === 200) {
                toast.success(result.data.message);
                setLoading(false);
                setSubscribed(true)
            }
        })
            .catch((err) => {
                console.log(err);
                setLoading(false);
                setSubscribed(true)
            });
    };

    if (subscribed) {
        return (
            <div className="rounded-2xl border border-border bg-raised p-6 text-center">
                <p className="font-semibold text-fg">Thanks for subscribing.</p>
                <p className="text-sm text-dim">We&apos;ll be in touch soon.</p>
            </div>
        )
    }

    return (
        <div className="rounded-2xl border border-border bg-raised p-6">
            <h3 className="text-center text-lg font-semibold text-fg">
                New articles on applying AI, straight to your inbox
            </h3>
            <p className="mt-2 text-center text-sm text-dim">
                No noise, just practical write-ups on how to put AI to work.
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                    onChange={(e) => setMail(e.target.value)}
                    onKeyDown={handleKeypress}
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-full border border-border bg-page px-4 py-2 text-center text-sm text-fg placeholder:text-dim focus:border-brand focus:outline-none"
                />
                <button
                    onClick={subscribe}
                    disabled={loading}
                    className="shrink-0 rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-light disabled:opacity-60"
                >
                    {loading ? "Joining..." : "Subscribe"}
                </button>
            </div>
        </div>
    );
}
