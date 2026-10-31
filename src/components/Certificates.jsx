import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CertCard from "./certcard";

const GAP = "1.5rem"; // space between cards

/* ----------------------------------------------------------
   NEW CERTIFICATE TEMPLATE: copy this block, paste it at the
   TOP of the list below (newest first), and fill it in.
   Leave Image: "" if you don't have a picture (a styled
   placeholder shows). Leave verifylink: "" if there's no link.
   Separate skills with " | ".

        {
            Title: "Certificate name, Issuer",
            Image: "",
            DateIssued: "Month 00th 2026",
            SkillsGained: "Skill one | Skill two | Skill three",
            Description: "One or two lines about what you learned or did.",
            verifylink: ""
        },
   ---------------------------------------------------------- */
const certificates = [
    {
        Title: "Coursera- By Meta: Introduction to Front-End Development",
        Image: "apr14.jpg",
        DateIssued: "April 14th 2025",
        SkillsGained: "Web development | HTML | CSS",
        Description:
            "Learned to Distinguish between front-end, back-end, and full-stack developers. Create and style a webpage with HTML and CSS. The benefits of working with UI frameworks.",
        verifylink: "https://coursera.org/verify/YEPJQ1Z9TLN7",
    },
    {
        Title: "Coursera- By Meta: Programming with JavaScript",
        Image: "sep16.jpg",
        DateIssued: "September 16th 2025",
        SkillsGained: "JavaScript | JSON",
        Description:
            "Learned Creating simple JavaScript codes. Creating and manipulating objects and arrays. Writing unit tests using Jest",
        verifylink: "https://coursera.org/verify/OKOQIMJ5VPZI",
    },
    {
        Title: "Commonwealth Bank Tech Explorer Job Simulation on Forage",
        Image: "jul3.jpg",
        DateIssued: "July 3rd 2026",
        SkillsGained: "Design Thinking | Creative Planning | Teamwork",
        Description:
            "Completed a job simulation focused on technology roles across the software engineering, tech analysis, cybersecurity, and data science teams",
        verifylink: "/commonwealthbank.pdf",
    },
    {
        Title: "Deloitte Australia Technology Job Simulation on Forage",
        Image: "jul2.jpg",
        DateIssued: "July 2nd 2026",
        SkillsGained: "Data Analysis | Planning | Software Development",
        Description:
            "Completed a job simulation involving development and coding. Wrote a proposal for creating a dashboard ",
        verifylink: "/deloitte.pdf",
    },
    {
        Title: "Brain and Bytes Hackathon, Dept. of CSE (RYMEC)",
        Image: "hackathon.jpeg",
        DateIssued: "September 2025",
        SkillsGained: "JavaScript | API Integration",
        Description:
            "Developed Pet health and care web app with multi-pet profiles, medical history tracking, reminders, and an AI chatbot.",
        verifylink: "/hackathon.pdf",
    },
    {
        Title: "FullStack Web Development, Coding Club (Dept. of CSE)",
        Image: "fullstack.jpeg",
        DateIssued: "December 2024",
        SkillsGained: "Figma | React | Web Development | FullStack Development",
        Description:
            "Attended Fullstack Development program one month learning journey.",
        verifylink: "/fullstack.pdf",
    },
];

function Certificates() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(
        window.innerWidth < 768 ? 1 : 3,
    );
    const sectionRef = useRef(null);

    const maxIndex = Math.max(certificates.length - visibleCount, 0);

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
        <section id="Certificates" ref={sectionRef} className="section">
            <div className="container-x flex flex-col gap-8">
                {/* Header */}
                <div className="reveal flex items-end justify-between gap-4">
                    <div className="flex flex-col gap-2 flex-1">
                        <h2 className="section-title">Certificates</h2>
                        <p className="text-text-soft">
                            Courses, job simulations and programs I've
                            completed.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:inline font-mono text-xs text-text-soft">
                            {currentIndex + 1}-
                            {Math.min(
                                currentIndex + visibleCount,
                                certificates.length,
                            )}{" "}
                            / {certificates.length}
                        </span>
                    </div>
                </div>

                {/* Arrows sit left and right of the cards on desktop, below them on phones */}
                <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-6">
                    <button
                        className={`${arrowBtn} order-2 md:order-1`}
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                        aria-label="Previous certificates"
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
                            {certificates.map((certificate, i) => (
                                <div
                                    key={certificate.Title}
                                    className="shrink-0"
                                    style={{
                                        width: `calc((100% - ${visibleCount - 1} * ${GAP}) / ${visibleCount})`,
                                    }}
                                >
                                    <CertCard
                                        Title={certificate.Title}
                                        Image={certificate.Image}
                                        DateIssued={certificate.DateIssued}
                                        SkillsGained={certificate.SkillsGained}
                                        Description={certificate.Description}
                                        verifylink={certificate.verifylink}
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
                        aria-label="Next certificates"
                    >
                        <FaArrowRight size={14} />
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Certificates;
