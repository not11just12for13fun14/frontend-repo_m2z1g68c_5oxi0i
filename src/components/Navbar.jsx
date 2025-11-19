import { Menu, Star, Rocket, Gem } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="relative">
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-fuchsia-500 grid place-items-center shadow-lg shadow-cyan-500/20">
            <Rocket className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-white font-semibold leading-tight">Paraplex</div>
            <div className="text-xs text-cyan-200/80">3D SaaS Experiences</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {[
            { label: 'Features', href: '#features' },
            { label: 'Showcase', href: '#showcase' },
            { label: 'Pricing', href: '#pricing' },
          ].map((item) => (
            <a key={item.href} href={item.href} className="text-cyan-100/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-cyan-100/80 hover:text-white text-sm">Sign in</a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            href="#pricing"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl border border-white/10 backdrop-blur-md transition"
          >
            <Star className="h-4 w-4 text-yellow-300" />
            Get started
          </motion.a>
        </div>

        <button className="md:hidden p-2 rounded-lg bg-white/10 border border-white/10">
          <Menu className="h-5 w-5 text-white" />
        </button>
      </div>
    </header>
  )
}
