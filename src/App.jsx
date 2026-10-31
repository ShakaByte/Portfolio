import { useEffect } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Stats from "./components/stats";
import Skills from "./components/Skills";
import Journey from "./components/journey";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import ResumeContact from "./components/resumecontact";

import "./App.css";

function App() {
    // Scroll-reveal: any element with className="reveal" fades in
    // (gets the "visible" class) when it enters the screen.
    useEffect(() => {
        const items = document.querySelectorAll(".reveal");

        // very old browsers: just show everything
        if (!("IntersectionObserver" in window)) {
            items.forEach((el) => el.classList.add("visible"));
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target); // animate only once
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
        );

        items.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* animated grid + glowing blobs (styles are in App.css) */}
            <div className="bg-layer" aria-hidden="true">
                <div className="blob blob-1" />
                <div className="blob blob-2" />
                <div className="blob blob-3" />
            </div>

            <Navbar />

            <main>
                <Hero />
                <Stats />
                <Skills />
                <Journey />
                <Projects />
                <Certificates />
                <ResumeContact />
            </main>
        </>
    );
}

export default App;
