function About() {
    return (
        <div id="About" className="section bg-slate-50 text-slate-800 px-4 md:px-24 h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 pt-20 md:pt-0">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
                <p className="text-slate-600 leading-relaxed">I'm a Computer Science student passionate about building things with code. I enjoy working across the stack, learning new technologies, and solving real-world problems through software. My goal is to grow into a skilled software developer and contribute to impactful projects.</p>
            </div>
  
            <div>
                <img src="/profile.jpg" alt="Vedant N Pokale" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-slate-200"/>
            </div>
        </div>
    )
}
export default About