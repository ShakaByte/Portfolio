// Edit / add skills here. Each group becomes one card.
const skillGroups = [
    {
        title: "frontend",
        color: "text-neon-violet",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Tailwind CSS",
        ],
    },
    {
        title: "backend & database",
        color: "text-neon-blue",
        skills: [
            "FastAPI",
            "Node.js",
            "Firebase",
            "Supabase",
            "MySQL",
            "Redis",
        ],
    },
    {
        title: "mobile",
        color: "text-neon-cyan",
        skills: [
            "Flutter",
            "Kotlin",
            "Jetpack Compose",
            "Android Studio",
            "RoomDB",
            "SQLite",
        ],
    },
    {
        title: "ai & apis",
        color: "text-neon-violet",
        skills: [
            "Gemini API",
            "Groq API",
            "REST APIs",
            "scikit-learn",
            "pandas",
        ],
    },
    {
        title: "languages",
        color: "text-neon-blue",
        skills: ["Python", "Dart", "SQL", "C"],
    },
    {
        title: "tools",
        color: "text-neon-cyan",
        skills: ["Git/Github", "GitHub Actions", "Vercel", "VS Code"],
    },
];
const softSkills = [
    "Creativity",
    "Communication",
    "Problem Solving",
    "Adaptability",
    "Quick Learning Ability",
    "Leadership",
    "Disciplined work ethics",
    "Collaborative Team Player",
    "Solution Oriented",
];

const learning = [
    "Data Structures & Algorithms",
    "JavaScript fundamentals",
    "Python fundamentals",
    "System Design",
];

function Skills() {
    return (
        <section id="Skills" className="section">
            <div className="container-x flex flex-col gap-10">
                <div className="reveal flex flex-col gap-2">
                    <h2 className="section-title">Skills</h2>
                    <p className="text-text-soft">
                        Technologies I've worked with so far.
                    </p>
                </div>

                {/* Technical skill groups */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillGroups.map((group, i) => (
                        <div
                            key={group.title}
                            className={`reveal delay-${i + 1} glow-card p-6 flex flex-col gap-4`}
                        >
                            <h3
                                className={`font-mono text-sm font-medium ${group.color}`}
                            >
                                ~/{group.title}
                            </h3>
                            <div className="flex flex-wrap gap-2.5">
                                {group.skills.map((skill) => (
                                    <span key={skill} className="chip">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Soft skills: compact strip */}
                <div className="reveal flex flex-col gap-3">
                    <h3 className="font-mono text-sm font-medium text-text-soft">
                        ~/soft-skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {softSkills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 rounded-md border border-dashed border-line text-xs md:text-sm text-text-soft hover:text-white hover:border-neon-violet transition-colors"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Currently learning */}
                <div className="reveal flex flex-col gap-3">
                    <h3 className="font-mono text-sm font-medium text-neon-cyan flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
                        ~/currently-learning
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {learning.map((item) => (
                            <span
                                key={item}
                                className="px-3 py-1 rounded-md border border-neon-cyan/40 bg-neon-cyan/5 text-xs md:text-sm text-neon-cyan"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
