import Details from "@/components/details";
import Image from "next/image";
import Link from "next/link";

const Find = ({number}) => {
    const num = Details.length - number
    const article = Details[num]

    return (
        <Link
            href={article.url}
            className="group block overflow-hidden rounded-2xl border border-border bg-raised transition hover:border-brand"
        >
            <Image
                src={require(`@/images/articleimages/${article.img}`)}
                alt={article.alt}
                className="h-40 w-full object-cover"
                placeholder={'blur'}
            />
            <div className="p-4">
                <p className="text-lg font-semibold text-fg group-hover:text-brand-light">{article.title}</p>
                <p className="mt-1 text-right text-sm italic text-dim">{article.date}</p>
            </div>
        </Link>
    )
}
export default Find
