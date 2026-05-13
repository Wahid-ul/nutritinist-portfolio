import { motion } from 'framer-motion'

interface InteractiveCardProps {
  title: string
  subtitle: string
  description: string
  accent: string
}

export function InteractiveCard({ title, subtitle, description, accent }: InteractiveCardProps) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-soft backdrop-blur-xl"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-fuchsia-500 via-violet-400 to-sky-400 opacity-80" />
      <div className="relative">
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] ${accent}`}>{subtitle}</span>
        <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
      </div>
      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-fuchsia-400">
        <span>Explore more</span>
        <span aria-hidden="true">→</span>
      </div>
    </motion.article>
  )
}
