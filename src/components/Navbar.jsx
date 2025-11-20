import { useEffect, useState } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 right-0 z-30 transition-all ${scrolled ? 'backdrop-blur-md bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-semibold text-lg tracking-tight">NovaSpark</a>
        <div className="flex items-center gap-3">
          <a href="#features" className="text-slate-200/80 hover:text-white text-sm">Features</a>
          <a href="#contact" className="text-slate-900 bg-white hover:bg-slate-100 text-sm font-medium px-3 py-1.5 rounded-md transition">Get in touch</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
