import { motion } from 'framer-motion'
import { Shield, Zap, Cpu, Infinity } from 'lucide-react'

const features = [
  {
    title: 'Parallax depth',
    desc: 'Layers glide with subtle parallax to create a sense of space and motion.',
    icon: Infinity,
    grad: 'from-cyan-500/30 to-fuchsia-500/30',
  },
  {
    title: 'Iridescent accents',
    desc: 'Futuristic glow and prism effects that feel premium and alive.',
    icon: Zap,
    grad: 'from-fuchsia-500/30 to-purple-500/30',
  },
  {
    title: 'Secure & scalable',
    desc: 'Enterprise-grade security with auto-scaling across regions.',
    icon: Shield,
    grad: 'from-purple-500/30 to-cyan-500/30',
  },
  {
    title: 'GPU optimized',
    desc: 'Smooth, high-FPS 3D rendering tuned for all modern devices.',
    icon: Cpu,
    grad: 'from-cyan-500/30 to-violet-500/30',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-28">
      {/* parallax decor */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 left-1/3 h-40 w-40 rounded-full blur-3xl bg-cyan-500/10" />
        <div className="absolute bottom-0 right-1/4 h-56 w-56 rounded-full blur-3xl bg-fuchsia-500/10" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          Designed with Paraplex Motion
        </motion.h2>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 overflow-hidden"
            >
              <div className={`absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br ${f.grad} blur-3xl`} />
              <div className="relative z-10">
                <div className="h-12 w-12 rounded-xl bg-white/10 grid place-items-center border border-white/10 text-white">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-white font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-cyan-100/80">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
