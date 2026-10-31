import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
    { label: "Home", href: "#Hero", id: "Hero" },
    { label: "Skills", href: "#Skills", id: "Skills" },
    { label: "Journey", href: "#Journey", id: "Journey" },
    { label: "Projects", href: "#Projects", id: "Projects" },
    { label: "Certificates", href: "#Certificates", id: "Certificates" },
    { label: "Contact", href: "#ResumeContact", id: "ResumeContact" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [progress, setProgress] = useState(0);
    const [active, setActive] = useState("Hero");

    useEffect(() => {
        const handleScroll = () => {
            // scroll progress bar (0 - 100%)
            const scrollable =
                document.documentElement.scrollHeight - window.innerHeight;
            setProgress(
                scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0,
            );

            // active link: the last section whose top has passed the navbar
            let current = links[0].id;
            links.forEach((link) => {
                const section = document.getElementById(link.id);
                if (section && section.getBoundingClientRect().top <= 120) {
                    current = link.id;
                }
            });

            // at the very bottom of the page, always highlight the last link
            if (
                window.innerHeight + window.scrollY >=
                document.documentElement.scrollHeight - 4
            ) {
                current = links[links.length - 1].id;
            }
            setActive(current);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <nav className="glass fixed top-0 left-0 w-full z-50 border-x-0 border-t-0">
            <div className="flex items-center justify-between px-4 md:px-24 h-16">
                <a
                    href="#Hero"
                    className="font-mono font-bold text-base md:text-lg text-white"
                >
                    <span className="text-neon-violet">&lt;</span>
                    Vedant N Pokale
                    <span className="text-neon-cyan"> /&gt;</span>
                </a>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className={`nav-link text-sm font-medium ${active === link.id ? "active" : ""}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile hamburger button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    className="md:hidden text-white text-xl p-2"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile menu (slides open/closed) */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen
                        ? "max-h-96 opacity-100 border-t border-line"
                        : "max-h-0 opacity-0"
                }`}
            >
                <div className="flex flex-col items-center gap-5 py-6">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`nav-link text-base font-medium ${active === link.id ? "active" : ""}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>

            {/* Scroll progress bar */}
            <div
                className="scroll-progress"
                style={{ width: `${progress}%` }}
            />
        </nav>
    );
}

export default Navbar;
