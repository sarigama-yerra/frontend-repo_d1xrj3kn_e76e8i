import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import LeadForm from './components/LeadForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <LeadForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
