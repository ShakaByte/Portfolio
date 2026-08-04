import Resume from './Resume'
import Contact from './Contact'
import Footer from './footer'

function ResumeContact() {
  return (
    <div id='ResumeContact' className="section bg-slate-50 text-slate-800 px-4 md:px-24 h-screen flex flex-col justify-start pt-20 pb-6">
  <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-16 md:gap-24">
    <Resume />
    <Contact />
  </div>
  <Footer />
</div>
  )
}

export default ResumeContact