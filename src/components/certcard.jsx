import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const MAX_TAGS = 3;

function CertCard({
    Title,
    Image,
    DateIssued,
    SkillsGained,
    Description,
    verifylink,
    tabbable = true,
}) {
    // "Web development | HTML | CSS" -> ["Web development", "HTML", "CSS"]
    const tags = SkillsGained.split("|")
        .map((t) => t.trim())
        .filter(Boolean);
    const shownTags = tags.slice(0, MAX_TAGS);
    const extra = tags.length - shownTags.length;

    return (
        <div className="glow-card h-full flex flex-col overflow-hidden">
            {/* Image, or a styled placeholder when there's no image yet */}
            {Image ? (
                <img
                    src={Image}
                    alt={Title}
                    className="h-36 w-full object-cover"
                />
            ) : (
                <div
                    className="h-36 w-full flex items-center justify-center"
                    style={{
                        background:
                            "linear-gradient(135deg, rgba(34,211,238,0.18), rgba(59,130,246,0.18) 50%, rgba(139,92,246,0.30))",
                    }}
                    aria-hidden="true"
                >
                    <FaCertificate
                        size={40}
                        className="text-neon-cyan opacity-80"
                    />
                </div>
            )}

            <div className="flex flex-col gap-3 p-5 flex-1">
                {DateIssued && (
                    <p className="font-mono text-xs text-neon-violet">
                        {DateIssued}
                    </p>
                )}

                <h3 className="text-lg font-semibold leading-snug line-clamp-2 -mt-1">
                    {Title}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                    {shownTags.map((tag) => (
                        <span
                            key={tag}
                            className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-2 text-neon-cyan"
                        >
                            {tag}
                        </span>
                    ))}
                    {extra > 0 && (
                        <span
                            className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-2 text-text-soft"
                            title={tags.join(", ")}
                        >
                            +{extra}
                        </span>
                    )}
                </div>

                <p className="text-sm text-text-soft leading-relaxed line-clamp-4 flex-1">
                    {Description}
                </p>

                {verifylink && (
                    <a
                        href={verifylink}
                        target="_blank"
                        rel="noreferrer"
                        tabIndex={tabbable ? 0 : -1}
                        className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-neon-violet hover:text-neon-cyan transition-colors"
                    >
                        <FaExternalLinkAlt size={12} />
                        Verify certificate
                    </a>
                )}
            </div>
        </div>
    );
}

export default CertCard;
