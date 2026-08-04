function Skills() {
    const technicalSkills = ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Node.js", "Kotlin", "Firebase", "Supabase", "MySQL", "C", "Python", "Git/Github", "Android Studio"]
    const softSkills = ["Creativity", "Communication", "Problem Solving", "Adaptability", "Quick Learning Ability", "Leadership", "Disciplined work ethics", "Collaborative Team Player", "Solution Oriented"]
    return (
        <div id="Skills" className="section bg-slate-900 text-slate-100 px-4 md:px-24 h-screen flex flex-col justify-start md:justify-center pt-20 md:pt-0">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-12">Skills</h2>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center gap-12 md:gap-20 w-full">
                <div className="flex flex-col items-center md:items-start gap-4">
                    <h3 className="text-xl font-semibold">Technical Skills</h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        {technicalSkills.map((skill, i) => (
                            <span key={i} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm font-medium hover:border-sky-600 transition-colors">{skill}</span>
                        ))}
                    </div>
                </div>
      
                <div className="flex flex-col items-center md:items-start gap-4">
                    <h3 className="text-xl font-semibold">Soft Skills</h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        {softSkills.map((skill, i) => (
                            <span key={i} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm font-medium hover:border-sky-600 transition-colors">{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills
    