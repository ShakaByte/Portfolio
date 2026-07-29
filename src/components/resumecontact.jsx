import Resume from './Resume'
import Contact from './Contact'

function ResumeContact() {
  return (
    <div className="section bg-slate-50 text-slate-800 px-4 md:px-24 h-screen flex flex-col justify-start md:justify-center pt-20 md:pt-0">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        <Resume />
        <Contact />
      </div>
    </div>
  )
}

export default ResumeContact