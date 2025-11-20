function Features() {
  const features = [
    {
      title: 'AI-assisted builds',
      desc: 'From concept to clickable prototype in hours with human-in-the-loop workflows.',
    },
    {
      title: 'Interactive 3D',
      desc: 'Delightful product storytelling with WebGL and 3D scenes that stay performative.',
    },
    {
      title: 'Modern stack',
      desc: 'React, FastAPI, and serverless-friendly architecture ready for scale.',
    },
  ]

  return (
    <section id="features" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),rgba(15,23,42,0))]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 text-slate-200">
              <h3 className="text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-slate-300/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
