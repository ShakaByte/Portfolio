import { useState, useEffect, useRef } from "react";

// Edit the numbers / labels here whenever something changes
const stats = [
    { value: 8, suffix: "", label: "Projects built" },
    { value: 10, suffix: "+", label: "Certificates earned" },
    { value: 25, suffix: "+", label: "Technologies used" },
    { value: 1, suffix: "", label: "Hackathon participated" },
];

// Counts from 0 up to `end` once it scrolls into view
function Counter({ end, suffix }) {
    const ref = useRef(null);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const el = ref.current;

        // reduced-motion users just see the final number
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setValue(end);
            return;
        }

        let frame;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;
                observer.disconnect();

                const start = performance.now();
                const duration = 1400;

                const tick = (now) => {
                    const t = Math.min((now - start) / duration, 1);
                    const eased = 1 - Math.pow(1 - t, 3); // slows down near the end
                    setValue(Math.round(eased * end));
                    if (t < 1) frame = requestAnimationFrame(tick);
                };
                frame = requestAnimationFrame(tick);
            },
            { threshold: 0.5 },
        );

        observer.observe(el);
        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [end]);

    return (
        <span ref={ref} className="stat-number">
            {value}
            {suffix}
        </span>
    );
}

function Stats() {
    return (
        <section className="px-5 md:px-24 py-8">
            <div className="reveal container-x grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
                {stats.map((stat, i) => (
                    <div
                        key={i}
                        className="bg-surface px-4 py-7 text-center flex flex-col gap-1"
                    >
                        <Counter end={stat.value} suffix={stat.suffix} />
                        <span className="font-mono text-xs md:text-sm text-text-soft">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Stats;
