import {
    FacebookIcon,
    FacebookShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    RedditIcon,
    RedditShareButton, TwitterIcon, TwitterShareButton
} from "next-share";

const Outline = ({article, url}) => {
    return (
        <div className="rounded-2xl border border-border bg-raised p-6">
            <h3 className="text-center text-xl font-semibold text-fg">
                Article Outline
            </h3>
            <div className="mt-4 space-y-2 text-center">
                {article.map(content => (
                    <a
                        key={content.id}
                        href={`#${content.id}`}
                        className="block text-muted transition hover:text-brand-light"
                    >
                        - {content.title !== '' ? content.title : 'Introduction'}
                    </a>
                ))}
            </div>
            <div className="mt-5 flex justify-center gap-3">
                <TwitterShareButton url={'https://webminers.dev' + url} blankTarget={true}>
                    <TwitterIcon size={32} round/>
                </TwitterShareButton>
                <FacebookShareButton url={'https://webminers.dev' + url} blankTarget={true}>
                    <FacebookIcon size={32} round/>
                </FacebookShareButton>
                <RedditShareButton url={'https://webminers.dev' + url} blankTarget={true}>
                    <RedditIcon size={32} round/>
                </RedditShareButton>
                <LinkedinShareButton url={'https://webminers.dev' + url} blankTarget={true}>
                    <LinkedinIcon size={32} round/>
                </LinkedinShareButton>
            </div>
        </div>
    )
}

export default Outline
