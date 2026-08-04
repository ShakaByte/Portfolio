import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import ResumeContact from './components/resumecontact'
import Navbar from './components/navbar'

import './App.css'

function App() {
  return (
    <>
        <Navbar />
        <div className='scroll-container'>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <ResumeContact />
        </div>
    </>
  )
}

export default App
