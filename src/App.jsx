import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      {/* Iridescent grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(56,189,248,0.6) 2px, transparent 0)', backgroundSize: '50px 50px' }} />

      <Navbar />
      <Hero />
      <Features />
      <Pricing />

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cyan-100/70 text-sm">© {new Date().getFullYear()} Paraplex — Crafted for modern SaaS</p>
          <div className="text-cyan-100/70 text-sm">Futuristic • Interactive • Fast</div>
        </div>
      </footer>
    </div>
  )
}

export default App
