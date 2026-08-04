import ProjectCard from "./projcard"
import { useState, useEffect } from "react"

function Projects () {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleCount, setVisibleCount] = useState(window.innerWidth < 768 ? 1 : 3)

    const nextSlide = () => {
        setCurrentIndex(prev => Math.min(prev + 1, projects.length - visibleCount))
    }

    const prevSlide = () => {
        setCurrentIndex(prev => Math.max(prev - 1, 0))
    }

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowRight') nextSlide()
            if (e.key === 'ArrowLeft') prevSlide()
        }

        window.addEventListener('keydown', handleKeyPress)

        return () => window.removeEventListener('keydown', handleKeyPress)
    }, [visibleCount])

    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(window.innerWidth < 768 ? 1 : 3)
            setCurrentIndex(0)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const projects = [
        {
            Title: "Lost and Found Portal for College",
            Image: "lostfound.jpg",
            TechStack: "HTML, CSS, MYSQL, PHP, XAMPP, VS CODE",
            Description: "Developed a web-based system to manage lost and found items on campus using PHP and MySQL. Improved item reporting and search efficiency while coordinating project planning and task execution.",
            gitlink: "https://www.github.com/ShakaByte/Lost-Found-Portal-College"
        },
        {
            Title: "Pet Health and Care Web App with AI Chatbot",
            Image: "petcare.jpg",
            TechStack: "HTML, CSS, JAVASCRIPT, GEMINI API, FIREBASE, FIREBASE REALSTORE",
            Description: "Built a responsive pet care web application with Firebase as auth and backend support and Gemini API integration for AI chatbot. Collaborated in a 24-Hour hackathon, contributing to development, teamwork and problem solving.",
            gitlink: "https://www.github.com/ShakaByte/Pet-Care-App"
        },
        {
            Title: "Secure File Sharing Portal for College(in progress)",
            Image: "",
            TechStack: "REACT, SUPABASE, RESEND",
            Description: "Developed a secure file sharing platform with file upload/storage using Supabase and a role-based interface. Led module development and coordinated front-end/back-end integration with a focus on usability.",
            gitlink: ""
        },
        {
            Title: "HemoLynk- AI Driven Blood Bank Inventory Management with Risk Redistribution Engine(in progress)",
            Image: "",
            TechStack: "FLUTTER, PYTHON, FIREBASE, FIREBASE REALSTORE, GOOGLE MAPS API",
            Description: "Developed an AI-driven blood bank inventory management system that uses a risk-redistribution engine to cut wastage in surplus areas and route blood supply to underserved \"blood desert\" regions in near real-time.",
            gitlink: ""
        },
        {
            Title: "Protfolio",
            Image: "portfolio.jpg",
            TechStack: "REACT, TAILWIND CSS",
            Description: "Developed a personal portfolio with React and Tailwind CSS, showcasing my skills, projects and certifications through a fast, responsive, and modern UI maintaining the consistency.",
            gitlink: "https://github.com/ShakaByte/Portfolio"
        }
    ]

    return (
        <div id="Projects" className="section bg-slate-50 text-slate-800 px-4 md:px-24 flex flex-col justify-start md:justify-center pt-20 md:pt-0 h-screen">
            <h2 className="text-4xl md:text-6xl font-bold text-center leading-[3] mb-3">My Projects</h2>
            <div className="flex items-center justify-center gap-2 md:gap-6">
                <button className="w-14 h-14 flex items-center justify-center text-2xl rounded-full bg-sky-600 hover:bg-sky-700 text-white shrink-0 transition-colors" onClick={prevSlide}>←</button>
                <div className="flex gap-9 justify-center">
                    {projects.slice(currentIndex, currentIndex + visibleCount).map((project, i) => (
                        <div key={i} className="shrink-0 w-72 h-96 bg-slate-100 border border-slate-200 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col overflow-hidden">
                            <ProjectCard
                                Title={project.Title}
                                Image={project.Image}
                                TechStack={project.TechStack}
                                Description={project.Description}
                                gitlink={project.gitlink}
                            />
                        </div>
                    ))}
                </div>
                <button className="w-14 h-14 flex items-center justify-center text-2xl rounded-full bg-sky-600 hover:bg-sky-700 text-white shrink-0 transition-colors" onClick={nextSlide}>→</button>
            </div>
        </div>
    )
}

export default Projects