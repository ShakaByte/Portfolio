import { FaCode, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const MAX_TAGS = 4;

function ProjectCard({
    Title,
    Image,
    TechStack,
    Description,
    gitlink,
    liveLink,
    tabbable = true,
}) {
    // "HTML, CSS, REACT" -> ["HTML", "CSS", "REACT"]
    const tags = TechStack.split(",")
        .map((t) => t.trim())
        .filter(Boolean);
    const shownTags = tags.slice(0, MAX_TAGS);
    const extra = tags.length - shownTags.length;

    return (
        <div className="glow-card h-full flex flex-col overflow-hidden">
            {/* Image, or a styled placeholder when the project has no image yet */}
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
                            "linear-gradient(135deg, rgba(139,92,246,0.30), rgba(59,130,246,0.18) 55%, rgba(34,211,238,0.14))",
                    }}
                    aria-hidden="true"
                >
                    <FaCode size={40} className="text-neon-cyan opacity-80" />
                </div>
            )}

            <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="text-lg font-semibold leading-snug line-clamp-2">
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

                {liveLink || gitlink ? (
                    <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2">
                        {/* Live demo button: only shows if the project has a liveLink */}
                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noreferrer"
                                tabIndex={tabbable ? 0 : -1}
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #8b5cf6, #3b82f6)",
                                    boxShadow:
                                        "0 0 18px -6px rgba(139,92,246,0.9)",
                                }}
                            >
                                <FaExternalLinkAlt size={12} />
                                Live demo
                            </a>
                        )}

                        {gitlink && (
                            <a
                                href={gitlink}
                                target="_blank"
                                rel="noreferrer"
                                tabIndex={tabbable ? 0 : -1}
                                className="inline-flex items-center gap-2 text-sm font-medium text-neon-violet hover:text-neon-cyan transition-colors"
                            >
                                <FaGithub size={16} />
                                GitHub
                            </a>
                        )}
                    </div>
                ) : (
                    <span className="mt-auto font-mono text-xs text-text-soft">
                        // code coming soon
                    </span>
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
