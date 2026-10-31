import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "./projcard";

const GAP = "1.5rem"; // space between cards

/* ----------------------------------------------------------
   PROJECT TEMPLATE: copy this block, paste it into the list
   below, and fill in your details. Leave Image: "" if you
   don't have a screenshot yet (a styled placeholder shows).
   Leave gitlink: "" if there's no repo yet.
   Add liveLink: "https://..." ONLY if the project is deployed
   (a "Live demo" button appears). Leave "" if it isn't.

        {
            Title: "Project name",
            Image: "image-name.jpg",
            TechStack: "REACT, NODE.JS, MYSQL",
            Description: "One or two lines about what it does and your role.",
            gitlink: "https://github.com/ShakaByte/your-repo",
            liveLink: ""
        },
   ---------------------------------------------------------- */
const projects = [
    {
        Title: "HemoLynk - AI Driven Blood Bank Inventory Management with Risk Redistribution Engine",
        Image: "",
        TechStack:
            "FLUTTER, PYTHON, FIREBASE, FASTAPI, RANDOM FOREST, DIJKSTRA, GREEDY SCORING",
        Description:
            "Developed A cross-platform app with role-based access for admins, donors, and employees to track inventory across 54 facilities in 6 districts, using synthetic data (1000+ records, 1000 donors).",
        gitlink: "https://github.com/ShakaByte/HemoLynk",
        liveLink: "",
    },
    {
        Title: "AniPet",
        Image: "",
        TechStack:
            "NEXT.JS, REACT, JAVASCRIPT, TAILWIND CSS, GEMINI API, GROQ API, UPSTASH REDIS, GITHUB ACTIONS",
        Description:
            "A web app that gives new and prospective pet owners a complete, easy-to-read care profile for a chosen animal breed.",
        gitlink: "https://github.com/ShakaByte/AniPet",
        liveLink: "https://ani-pet.vercel.app",
    },
    {
        Title: "KnowledgeDrop - Secure File Sharing Portal for College",
        Image: "",
        TechStack: "REACT, SUPABASE",
        Description:
            "Developed A secure file sharing platform for college students with OTP-based login, file upload across 2 storage buckets, a 6-table database, and role-based access for admins, teachers, and students. Tested with 3 accounts, one per role.",
        gitlink: "https://github.com/ShakaByte/Knowledge-Drop",
        liveLink: "",
    },
    {
        Title: "Android App Development - CodSoft Internship",
        Image: "",
        TechStack: "KOTLIN, ANDROID STUDIO, JETPACK COMPOSE, ROOMDB, SQLITE",
        Description:
            "As a part of CodSoft Internship, built three Android apps in Kotlin: Quote of the Day app (quotes loaded from a local JSON file), Quiz app with multiple categories, difficulty levels, final scoring, and a saved attempts history, and To-Do List app.",
        gitlink: "https://github.com/ShakaByte/CODSOFT_TASKS",
        liveLink: "",
    },

    {
        Title: "Pet Health and Care Web App with AI Chatbot",
        Image: "petcare.jpg",
        TechStack:
            "HTML, CSS, JAVASCRIPT, GEMINI API, FIREBASE, FIREBASE REALSTORE",
        Description:
            "Built Pet health and care web app with multi-pet profiles, medical history tracking, reminders, and an AI chatbot.",
        gitlink: "https://www.github.com/ShakaByte/Pet-Care-App",
        liveLink: "",
    },
    {
        Title: "Lost and Found Portal for College",
        Image: "lostfound.jpg",
        TechStack: "HTML, CSS, MYSQL, PHP, XAMPP, VS CODE",
        Description:
            "Developed a mini project developed in 2nd year for Database Management Systems course. It is a web based Lost and Found Portal for college campus, enabling students to report, search and claim lost items efficiently. Features include item categorization, image uploads and user authentication.",
        gitlink: "https://www.github.com/ShakaByte/Lost-Found-Portal-College",
        liveLink: "",
    },
];

function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(
        window.innerWidth < 768 ? 1 : 3,
    );
    const sectionRef = useRef(null);

    const maxIndex = Math.max(projects.length - visibleCount, 0);

    const nextSlide = () =>
        setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

    // Arrow keys only work while this section is on screen
    useEffect(() => {
        const handleKeyPress = (e) => {
            const rect = sectionRef.current?.getBoundingClientRect();
            if (!rect) return;
            const inView =
                rect.top < window.innerHeight * 0.6 &&
                rect.bottom > window.innerHeight * 0.4;
            if (!inView) return;

            if (e.key === "ArrowRight") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [visibleCount]);

    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(window.innerWidth < 768 ? 1 : 3);
            setCurrentIndex(0);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const arrowBtn =
        "w-11 h-11 flex items-center justify-center rounded-full border border-line bg-surface text-white transition-all hover:border-neon-violet hover:text-neon-cyan disabled:opacity-30 disabled:pointer-events-none";

    return (
        <section id="Projects" ref={sectionRef} className="section">
            <div className="container-x flex flex-col gap-8">
                {/* Header */}
                <div className="reveal flex items-end justify-between gap-4">
                    <div className="flex flex-col gap-2 flex-1">
                        <h2 className="section-title">Projects</h2>
                        <p className="text-text-soft">
                            Things I've built, from college portals to AI apps.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:inline font-mono text-xs text-text-soft">
                            {currentIndex + 1}-
                            {Math.min(
                                currentIndex + visibleCount,
                                projects.length,
                            )}{" "}
                            / {projects.length}
                        </span>
                    </div>
                </div>

                {/* Arrows sit left and right of the cards on desktop, below them on phones */}
                <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-6">
                    <button
                        className={`${arrowBtn} order-2 md:order-1`}
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        aria-label="Previous projects"
                    >
                        <FaArrowLeft size={14} />
                    </button>

                    {/* Sliding track (extra padding keeps hover glow from being clipped) */}
                    <div className="reveal delay-1 order-1 md:order-2 w-full md:w-auto md:flex-1 min-w-0 overflow-hidden py-8 -my-8 md:px-4 md:-mx-4">
                        <div
                            className="flex transition-transform duration-500 ease-out"
                            style={{
                                gap: GAP,
                                transform: `translateX(calc(${-currentIndex} * (100% + ${GAP}) / ${visibleCount}))`,
                            }}
                        >
                            {projects.map((project, i) => (
                                <div
                                    key={project.Title}
                                    className="shrink-0"
                                    style={{
                                        width: `calc((100% - ${visibleCount - 1} * ${GAP}) / ${visibleCount})`,
                                    }}
                                >
                                    <ProjectCard
                                        Title={project.Title}
                                        Image={project.Image}
                                        TechStack={project.TechStack}
                                        Description={project.Description}
                                        gitlink={project.gitlink}
                                        liveLink={project.liveLink}
                                        tabbable={
                                            i >= currentIndex &&
                                            i < currentIndex + visibleCount
                                        }
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        className={`${arrowBtn} order-3`}
                        onClick={nextSlide}
                        disabled={currentIndex >= maxIndex}
                        aria-label="Next projects"
                    >
                        <FaArrowRight size={14} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects;
