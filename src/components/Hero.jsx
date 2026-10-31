import { useState, useEffect } from "react";

// Edit these lines to change what the typing animation says
const roles = [
    "Aspiring Software Developer",
    "Final Year CSE Student",
    "React & Kotlin Builder",
];

function Hero() {
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    // Typing / deleting loop
    useEffect(() => {
        const current = roles[roleIndex];
        let timeout;

        if (!deleting && text === current) {
            timeout = setTimeout(() => setDeleting(true), 1600); // pause when fully typed
        } else if (deleting && text === "") {
            setDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length); // move to next role
        } else {
            timeout = setTimeout(
                () => {
                    setText(
                        deleting
                            ? current.slice(0, text.length - 1)
                            : current.slice(0, text.length + 1),
                    );
                },
                deleting ? 40 : 80,
            );
        }

        return () => clearTimeout(timeout);
    }, [text, deleting, roleIndex]);

    return (
        <section id="Hero" className="section">
            <div className="container-x flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">
                {/* Text side */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5 max-w-xl">
                    <p className="reveal font-mono text-sm text-neon-cyan">
                        &gt; hello, world
                    </p>

                    <h1 className="reveal delay-1 text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                        I'm{" "}
                        <span className="text-gradient">Vedant N Pokale</span>
                    </h1>

                    {/* fixed height so the layout doesn't jump while typing */}
                    <p className="reveal delay-2 h-8 font-mono text-lg md:text-xl text-neon-violet">
                        <span className="typing-cursor">{text}</span>
                    </p>

                    <p className="reveal delay-3 text-text-soft leading-relaxed">
                        I'm a final year Computer Science student who loves
                        building things with code. I enjoy working across the
                        stack, learning new technologies, and solving real-world
                        problems through software. My goal is to grow into a
                        skilled developer and contribute to impactful projects.
                    </p>

                    <div className="reveal delay-4 flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                        <a href="#Projects" className="btn-neon">
                            View Projects
                        </a>
                        <a href="#ResumeContact" className="btn-ghost">
                            Contact Me
                        </a>
                    </div>
                </div>

                {/* Photo side */}
                <div className="reveal reveal-right float-slow shrink-0">
                    <div className="avatar-ring">
                        <img
                            src="/profile.jpg"
                            alt="Vedant N Pokale"
                            className="w-48 h-48 md:w-72 md:h-72 object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
