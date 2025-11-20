import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function LeadForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', consent: true })
  const [status, setStatus] = useState({ loading: false, ok: null, msg: '' })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, ok: null, msg: '' })
    try {
      const res = await fetch(`${API_BASE}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: window.location.pathname + window.location.search })
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Submission failed')
      setStatus({ loading: false, ok: true, msg: 'Thanks! You are on the list.' })
      setForm({ name: '', email: '', company: '', message: '', consent: true })
    } catch (err) {
      setStatus({ loading: false, ok: false, msg: err.message })
    }
  }

  return (
    <section id="lead" className="relative bg-slate-950 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.12),rgba(2,6,23,0))]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">Join the early access</h2>
          <p className="mt-3 text-slate-300/80 max-w-prose">Be first to try new drops, get build slots, and receive product updates. No spam.</p>
          <ul className="mt-8 space-y-3 text-slate-300/80 list-disc list-inside">
            <li>Priority onboarding</li>
            <li>Founders-only updates</li>
            <li>Beta feature access</li>
          </ul>
        </div>
        <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-6 py-6 sm:p-8 text-white">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-slate-300">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Doe" className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com" className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-slate-300">Company</label>
            <input name="company" value={form.company} onChange={handleChange} placeholder="Acme Inc" className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="mt-4">
            <label className="text-sm text-slate-300">Message (optional)</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows="4" placeholder="Tell us about your project" className="mt-1 w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <label className="mt-4 flex items-center gap-2 text-slate-300 text-sm">
            <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="rounded border-white/20 bg-slate-900/60" />
            I agree to receive updates and be contacted about early access.
          </label>
          <button disabled={status.loading} className="mt-6 w-full rounded-md bg-white text-slate-900 hover:bg-slate-100 font-medium py-2.5 disabled:opacity-60">
            {status.loading ? 'Submitting...' : 'Join the waitlist'}
          </button>
          {status.msg && (
            <p className={`mt-3 text-sm ${status.ok ? 'text-emerald-400' : 'text-rose-400'}`}>{status.msg}</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default LeadForm
