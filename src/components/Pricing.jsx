import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    features: ['3D hero', 'Basic animations', 'Community support'],
  },
  {
    name: 'Pro',
    price: '$29/mo',
    features: ['Advanced parallax', 'Custom scenes', 'Analytics'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Let’s talk',
    features: ['SLA + SSO', 'Dedicated support', 'Custom integrations'],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white text-center"
        >
          Simple, transparent pricing
        </motion.h2>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative rounded-2xl border ${t.highlight ? 'border-cyan-400/50 bg-cyan-500/10' : 'border-white/10 bg-white/5'} backdrop-blur-sm p-6`}
            >
              <div className="text-white text-xl font-semibold">{t.name}</div>
              <div className="mt-2 text-3xl font-extrabold text-white">{t.price}</div>
              <ul className="mt-6 space-y-2 text-cyan-100/85 text-sm">
                {t.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <a href="#" className={`mt-6 inline-block px-5 py-2 rounded-xl text-white ${t.highlight ? 'bg-cyan-500 hover:bg-cyan-400' : 'bg-white/10 hover:bg-white/20'} transition`}>
                {t.highlight ? 'Upgrade' : 'Get started'}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
