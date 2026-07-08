import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Resume from './components/Resume'
import Contact from './components/Contact'

import './App.css'

function App() {
  return (
    <div className='scroll-container'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
