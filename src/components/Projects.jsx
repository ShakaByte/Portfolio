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
            Title: "Lost and found portal",
            Image: "src/assets/lp.png",
            TechStack: "html",
            Description: "crud ops",
            gitlink: "https://www.github.com/ShakaByte"
        },
        {
            Title: "Pet Health and Care",
            Image: "src/assets/lp.png",
            TechStack: "gemini api",
            Description: "live location | med record tracking",
            gitlink: "https://www.github.com/ShakaByte"
        },
        {
            Title: "Secure File Sharing Portal",
            Image: "src/assets/lp.png",
            TechStack: "React",
            Description: "Secure | OTP Login",
            gitlink: "https://www.github.com/ShakaByte"
        },
        {
            Title: "HemoLynk- Blood Bank Redistribution Engine",
            Image: "src/assets/lp.png",
            TechStack: "Flutter",
            Description: "Smart Predictions | Smart Alerts",
            gitlink: "https://www.github.com/ShakaByte"
        },
        {
            Title: "Solo travel",
            Image: "src/assets/lp.png",
            TechStack: "Flutter",
            Description: "SOS Signal | Volunteer Traveller Face Recognition",
            gitlink: "https://www.github.com/ShakaByte"
        }
    ]

    return (
        <div className="section bg-slate-50 text-slate-800 px-4 md:px-24 flex flex-col justify-start md:justify-center pt-20 md:pt-0 h-screen">
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