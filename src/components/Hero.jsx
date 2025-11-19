import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.15),transparent_60%)] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-[60rem] w-[60rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.15),transparent_60%)] pointer-events-none" />
      </div>

      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(8,145,178,0.35)]"
          >
            Build ultra-modern 3D SaaS sites
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-cyan-100/85 max-w-xl"
          >
            Paraplex blends interactive 3D, iridescent visuals and silky animations to showcase your product with depth and clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#pricing" className="px-6 py-3 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-white font-semibold shadow-lg shadow-cyan-500/30 transition">
              Start free
            </a>
            <a href="#features" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md transition">
              See features
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 text-cyan-100/80"
          >
            {[
              ['99.99%', 'Uptime'],
              ['<50ms', 'API Latency'],
              ['SOC 2', 'Compliance'],
              ['24/7', 'Support'],
            ].map(([k, v]) => (
              <div key={k} className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-white">{k}</div>
                <div className="text-xs uppercase tracking-wide">{v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
