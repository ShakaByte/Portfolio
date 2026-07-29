import CertCard from "./certcard"
import { useState, useEffect } from "react"

function Certificates () {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [visibleCount, setVisibleCount] = useState(window.innerWidth < 768 ? 1 : 3)

    const nextSlide = () => {
        setCurrentIndex(prev => Math.min(prev + 1, certificates.length - visibleCount))
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

    const certificates = [
        {
            Title: "Front End",
            Image: "",
            DateIssued: "10.2026",
            SkillsGained: "xyz",
            Description: "abc",
            verifylink: "https://"
        },
        {
            Title: "backend",
            Image: "",
            DateIssued: "9",
            SkillsGained: "xyz",
            Description: "abc",
            verifylink: "https://"
        },
        {
            Title: "backend",
            Image: "",
            DateIssued: "9",
            SkillsGained: "xyz",
            Description: "abc",
            verifylink: "https://"
        },
        {
            Title: "backend",
            Image: "",
            DateIssued: "9",
            SkillsGained: "xyz",
            Description: "abc",
            verifylink: "https://"
        },
        {
            Title: "backend",
            Image: "",
            DateIssued: "9",
            SkillsGained: "xyz",
            Description: "abc",
            verifylink: "https://"
        },
    ]

    return (
        <div className="section bg-slate-900 text-slate-100 px-4 md:px-24 flex flex-col justify-start md:justify-center pt-20 md:pt-0 h-screen">
            <h2 className="text-4xl md:text-6xl font-bold text-center leading-[3] mb-3">Certifications</h2>
            <div className="flex items-center justify-center gap-2 md:gap-6">
                <button className="w-14 h-14 flex items-center justify-center text-2xl rounded-full bg-sky-600 hover:bg-sky-700 text-white shrink-0 transition-colors" onClick={prevSlide}>←</button>
                <div className="flex gap-9 justify-center">
                    {certificates.slice(currentIndex, currentIndex + visibleCount).map((certificate, i) => (
                        <div key={i} className="shrink-0 w-72 h-96 bg-slate-800 border border-slate-700 rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col overflow-hidden">
                            <CertCard
                                Title={certificate.Title}
                                Image={certificate.Image}
                                DateIssued={certificate.DateIssued}
                                SkillsGained={certificate.SkillsGained}
                                Description={certificate.Description}
                                verifylink={certificate.verifylink}
                            />
                        </div>
                    ))}
                </div>
                <button className="w-14 h-14 flex items-center justify-center text-2xl rounded-full bg-sky-600 hover:bg-sky-700 text-white shrink-0 transition-colors" onClick={nextSlide}>→</button>
            </div>
        </div>

    )
}

export default Certificates