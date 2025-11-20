import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background gradient accents */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/60 to-slate-950"></div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 py-24">
        <div className="text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-3 py-1 text-xs text-slate-200 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            Now accepting early access signups
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-tight">
            Launch faster with a playful, modern product studio
          </h1>
          <p className="mt-5 text-slate-200/80 max-w-xl">
            We craft interactive experiences and ship MVPs in days, not months. Designers, engineers, and AI working in sync.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#lead" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 hover:bg-slate-100 px-5 py-3 font-medium shadow">
              Join the waitlist
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-transparent border border-white/20 hover:border-white/40 text-white px-5 py-3 font-medium">
              Explore features
            </a>
          </div>
        </div>
      </div>

      {/* soft overlay so text is readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/80" />
    </section>
  )
}

export default Hero
