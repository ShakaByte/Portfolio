import { MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

function Contact() {
    return (
        <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Contact</h2>
            <p className="text-slate-500 text-center md:text-left">Feel free to reach out or check out my work.</p>

            <ul className="flex flex-col gap-3">
                <li>
                    <a href="mailto:vedu.pokale2004@gmail.com" className="flex items-center gap-3 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">
                        <MdEmail size={20} className="text-sky-600" />
                        <span>vedu.pokale2004@gmail.com</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ShakaByte" target="_blank" className="flex items-center gap-3 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">
                        <FaGithub size={20} className="text-sky-600" />
                        <span>GitHub</span>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/vedant-pokale-471937220/" target="_blank" className="flex items-center gap-3 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">
                        <FaLinkedin size={20} className="text-sky-600" />
                        <span>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="https://leetcode.com/u/ShakaByte-Ved" target="_blank" className="flex items-center gap-3 px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-100 transition-colors">
                        <SiLeetcode size={20} className="text-sky-600" />
                        <span>LeetCode</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Contact