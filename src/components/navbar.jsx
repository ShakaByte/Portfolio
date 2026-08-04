import { useState } from 'react'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const links = [
        { label: "Home", href: "#Hero" },
        { label: "About", href: "#About" },
        { label: "Skills", href: "#Skills" },
        { label: "Projects", href: "#Projects" },
        { label: "Certificates", href: "#Certificates" },
        { label: "Contact", href: "#ResumeContact" },
    ]

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
            <div className="flex items-center justify-between px-4 md:px-24 h-16">
                <span className="text-lg font-bold text-slate-100">Vedant N Pokale</span>
                {/* Desktop links */}

                <div className="hidden md:flex items-center gap-8">
                    {links.map((link, i) => (
                        <a key={i} href={link.href} className="text-sm font-medium text-slate-300 hover:text-sky-500 transition-colors">{link.label}</a>
                    ))}
                </div>
                {/* Mobile hamburger button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-100 text-2xl">☰</button>
            </div>

            

            {/* Mobile menu, only shows when isOpen is true */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-slate-900 border-t border-slate-700">
                    {links.map((link, i) => (
                        <a key={i} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-sky-500 transition-colors">
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar