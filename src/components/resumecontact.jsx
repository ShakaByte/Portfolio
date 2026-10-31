import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
//import { SiLeetcode } from 'react-icons/si'

const RESUME_FILE = "/Vedant-N-Pokale-Resume-V_8.pdf";

// Add / remove contact links here
const contacts = [
    {
        label: "Email",
        value: "vedant.pokale.work@gmail.com",
        href: "mailto:vedant.pokale.work@gmail.com",
        icon: MdEmail,
    },
    {
        label: "GitHub",
        value: "github.com/ShakaByte",
        href: "https://github.com/ShakaByte",
        icon: FaGithub,
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/vedant-pokale",
        href: "https://linkedin.com/in/vedant-pokale-471937220/",
        icon: FaLinkedin,
    },
    // {
    //     label: "LeetCode",
    //     value: "leetcode.com/u/ShakaByte-Ved",
    //     href: "https://leetcode.com/u/ShakaByte-Ved",
    //     icon: SiLeetcode,
    // },
];

const footerLinks = [
    { label: "Home", href: "#Hero" },
    { label: "Skills", href: "#Skills" },
    { label: "Journey", href: "#Journey" },
    { label: "Projects", href: "#Projects" },
    { label: "Certificates", href: "#Certificates" },
    { label: "Contact", href: "#ResumeContact" },
];

function ResumeContact() {
    return (
        <section id="ResumeContact" className="section">
            <div className="container-x flex flex-col gap-10">
                <div className="reveal flex flex-col gap-2">
                    <h2 className="section-title">Contact</h2>
                    <p className="text-text-soft">
                        Feel free to reach out or check out my work.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">
                    {/* Contact links */}
                    <ul className="reveal reveal-left flex flex-col gap-4">
                        {contacts.map(({ label, value, href, icon: Icon }) => {
                            const external = !href.startsWith("mailto:");
                            return (
                                <li key={label}>
                                    <a
                                        href={href}
                                        {...(external
                                            ? {
                                                  target: "_blank",
                                                  rel: "noreferrer",
                                              }
                                            : {})}
                                        className="flex items-center gap-4 px-5 py-4 rounded-xl border border-line bg-surface transition-all hover:border-neon-cyan hover:translate-x-1"
                                    >
                                        <Icon
                                            size={22}
                                            className="text-neon-violet shrink-0"
                                        />
                                        <span className="min-w-0 flex flex-col">
                                            <span className="font-mono text-xs text-text-soft">
                                                {label}
                                            </span>
                                            <span className="text-white break-words">
                                                {value}
                                            </span>
                                        </span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Resume: terminal-style card */}
                    <div className="reveal reveal-right glass rounded-xl overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-line">
                            <span className="w-3 h-3 rounded-full bg-neon-violet" />
                            <span className="w-3 h-3 rounded-full bg-neon-blue" />
                            <span className="w-3 h-3 rounded-full bg-neon-cyan" />
                            <span className="ml-3 font-mono text-xs text-text-soft">
                                resume.pdf
                            </span>
                        </div>

                        <div className="p-6 flex flex-col gap-4">
                            <p className="font-mono text-sm text-neon-cyan">
                                $ open resume
                            </p>
                            <p className="text-text-soft leading-relaxed">
                                Take a look at my resume or download a copy.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-1">
                                <a
                                    href={RESUME_FILE}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-neon"
                                >
                                    View
                                </a>
                                <a
                                    href={RESUME_FILE}
                                    download
                                    className="btn-ghost"
                                >
                                    Download
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="reveal mt-10 pt-6 border-t border-line flex flex-col items-center gap-4 text-sm">
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {footerLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-text-soft hover:text-neon-cyan transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex gap-5">
                        {contacts.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                {...(!href.startsWith("mailto:")
                                    ? { target: "_blank", rel: "noreferrer" }
                                    : {})}
                                className="text-text-soft hover:text-neon-violet transition-colors"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>

                    <p className="font-mono text-xs text-text-soft">
                        © 2026 Vedant N Pokale. All rights reserved.
                    </p>
                </footer>
            </div>
        </section>
    );
}

export default ResumeContact;
