import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { MdEmail } from 'react-icons/md'

function Footer() {
  return (
    <footer className="mt-auto pt-4 flex flex-col items-center gap-3 text-sm border-t border-slate-200">
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-1">
        <a href="#Hero" className="text-slate-600 hover:text-sky-600 transition-colors">Home</a>
        <a href="#About" className="text-slate-600 hover:text-sky-600 transition-colors">About</a>
        <a href="#Skills" className="text-slate-600 hover:text-sky-600 transition-colors">Skills</a>
        <a href="#Projects" className="text-slate-600 hover:text-sky-600 transition-colors">Projects</a>
        <a href="#Certificates" className="text-slate-600 hover:text-sky-600 transition-colors">Certificates</a>
        <a href="#ResumeContact" className="text-slate-600 hover:text-sky-600 transition-colors">Contact</a>
      </div>

      <div className="flex gap-4">
        <a href="mailto:vedu.pokale2004@gmail.com" className="text-slate-500 hover:text-sky-600 transition-colors">
          <MdEmail size={18} />
        </a>
        <a href="https://github.com/ShakaByte" target="_blank" className="text-slate-500 hover:text-sky-600 transition-colors">
          <FaGithub size={18} />
        </a>
        <a href="https://linkedin.com/in/vedant-pokale-471937220/" target="_blank" className="text-slate-500 hover:text-sky-600 transition-colors">
          <FaLinkedin size={18} />
        </a>
        <a href="https://leetcode.com/u/ShakaByte-Ved" target="_blank" className="text-slate-500 hover:text-sky-600 transition-colors">
          <SiLeetcode size={18} />
        </a>
      </div>

      <p className="text-slate-500 text-xs pb-2">© 2026 Vedant N Pokale. All rights reserved.</p>
    </footer>
  )
}

export default Footer