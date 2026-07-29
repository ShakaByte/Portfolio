function CertCard({Title, Image, DateIssued, SkillsGained, Description, verifylink}) {
    return (
        <div className="flex flex-col h-full p-5 gap-3">
            <h3 className="text-lg font-semibold leading-snug line-clamp-2">{Title}</h3>
            <img src={Image} alt={Title} className="h-32 w-full object-cover rounded-md" />
            <p className="text-sm font-medium text-sky-600">{DateIssued}</p>
            <p className="text-sm font-medium text-sky-600">{SkillsGained}</p>
            <p className="text-sm text-slate-500 line-clamp-3 flex-1">{Description}</p>
            <a href={verifylink} className="self-end text-sm font-medium text-sky-600 hover:underline transition-colors">Verify →</a>
        </div>
    )
}

export default CertCard