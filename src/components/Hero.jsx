function Hero() {
    return (
        <div id="Hero" className="section bg-slate-900 text-slate-100 px-4 md:px-24 h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 pt-20 md:pt-0">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 max-w-xl">
                <h1 className="text-4xl md:text-6xl font-bold">Vedant N Pokale</h1>
                <p className="text-xl md:text-2xl text-sky-500 font-medium">Aspiring Software Developer</p>
                <p className="text-slate-400">Student / Fresher</p>
            </div>
  
            <div>
                <img src="/profile.jpg" alt="Vedant N Pokale" className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-slate-700"/>
            </div>
        </div>
    )
}
  
export default Hero