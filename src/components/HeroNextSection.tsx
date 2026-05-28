import { motion } from 'framer-motion'

export function HeroNextSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -24 }}
      transition={{ duration: 0.85, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-slate-950/90 p-4 sm:p-6 md:p-8 lg:p-12 h-[calc(100vh-112px)] max-h-[calc(100vh-112px)] shadow-glow"
    >
      <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-slate-950/95" />
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative flex h-full flex-col items-center justify-center gap-8 text-center px-6">
        <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-slate-950/80 px-8 py-10 shadow-soft backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-300">Next step</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Your personalized nutrition journey begins here.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Dive deeper into meal plans, wellness coaching, and tools that help you feel confident and energized every day.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-5 text-left shadow-soft">
            <p className="text-xs uppercase tracking-[0.35em] text-sky-300">Meal guidance</p>
            <p className="mt-3 text-sm text-slate-200">Smart, seasonal meals with flexible prep routines.</p>
          </div>
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 px-5 py-5 text-left shadow-soft">
            <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-300">Mindful habits</p>
            <p className="mt-3 text-sm text-slate-200">Support for small shifts that make a big impact.</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
