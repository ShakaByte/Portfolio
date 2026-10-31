const education = [
    {
        title: "BE in Computer Science & Engineering",
        place: "Rao Bahadur Y Mahabaleshwarappa Engineering College, VTU",
        period: "2023 - Present",
        note: "Final year | 7.82",
    },
    {
        title: "12th / Higher Secondary",
        place: "Jindal Vidya Mandir, CBSE",
        period: "2021 - 2022",
        note: "PCMC | 63%",
    },
    {
        title: "10th / Secondary School",
        place: "Jindal Vidya Mandir, CBSE",
        period: "2020 - 2019",
        note: "79.8%",
    },
];

const experience = [
    {
        title: "Hackathon Participant (24 hours)",
        place: "Brain and Bytes, Nirmith Labs",
        period: "September 2025",
        note: "Built a pet care web app with an AI chatbot in a team, using Firebase and the Gemini API.",
    },
    {
        title: "Virtual Internship, Mobile App Development",
        place: "CodSoft",
        period: "1 month, July 2026 - August 2026",
        note: "Built 3 basic Android mobile apps during the internship.",
    },
    {
        title: "Job Simulation: Company Name",
        place: "Forage",
        period: "July 2026",
        note: "",
    },
    {
        title: "Job Simulation: Company Name",
        place: "Forage",
        period: "July 2026",
        note: "",
    },
];

function TimelineColumn({ heading, items }) {
    return (
        <div className="flex flex-col gap-6">
            <h3 className="reveal font-mono text-sm font-medium text-neon-cyan">
                {heading}
            </h3>

            <div className="timeline">
                {items.map((item, i) => (
                    <div key={i} className="reveal timeline-item">
                        <p className="font-mono text-xs text-neon-violet">
                            {item.period}
                        </p>
                        <h4 className="text-lg font-semibold mt-1 leading-snug">
                            {item.title}
                        </h4>
                        <p className="text-sm text-text-soft mt-0.5">
                            {item.place}
                        </p>
                        <p className="text-sm text-text-soft/80 mt-2 leading-relaxed">
                            {item.note}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Journey() {
    return (
        <section id="Journey" className="section">
            <div className="container-x flex flex-col gap-10">
                <div className="reveal flex flex-col gap-2">
                    <h2 className="section-title">Journey</h2>
                    <p className="text-text-soft">
                        Where I've studied and what I've done so far.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    <TimelineColumn heading="~/education" items={education} />
                    <TimelineColumn heading="~/experience" items={experience} />
                </div>
            </div>
        </section>
    );
}

export default Journey;
