function Resume () {
    return (
        <div className="flex flex-col items-center md:items-start gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Resume</h2>
            <p className="text-slate-500 text-center md:text-left">Take a look at my resume or download a copy.</p>
            <div className="flex gap-4">
                <a href="/resume.pdf" target="_blank" className="px-6 py-2 rounded-lg bg-sky-600 text-white font-medium hover:bg-sky-700 transition-colors">
                    View
                </a>
                <a href="/VedantPokaleResume.pdf" download className="px-6 py-2 rounded-lg border border-slate-200 text-slate-800 font-medium hover:bg-slate-100 transition-colors">
                    Download
                </a>
            </div>
        </div>
    )
}

export default Resume