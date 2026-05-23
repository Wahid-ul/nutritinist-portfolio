import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { InteractiveCard } from '../components/InteractiveCard'
import { Testimonials } from '../components/Testimonials'

export function Home() {
  return (
    <>
      <section className="relative overflow-hidden rounded-[3rem] border border-white/10 p-4 sm:p-6 md:p-8 lg:p-12 h-[calc(100vh-112px)] max-h-[calc(100vh-112px)] shadow-glow">
      {/* Animated Background Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute inset-0 rounded-[3rem] overflow-hidden"
      >
        <img
          src="/assets/shalini_goswami_1.jpeg"
          alt="Shalini Goswami - Nutritionist"
          className="absolute inset-0 h-full w-full object-cover object-[30%_70%] sm:object-[20%_70%]"
        />
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-xs" />
      </motion.div>

      {/* Animated Gradient Overlays */}
      <div className="absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto grid h-full min-h-0 max-h-full overflow-hidden max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="flex h-full min-h-0 flex-col justify-between"
        >
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-fuchsia-300 shadow-soft">
              Nutrition with intention
            </div>
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.35em] text-fuchsia-400">Hello, I am Shalini</p>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl"></h1>
            </div>
          </div>

          <div className="space-y-8 mt-16">
            <p className="max-w-xl text-base leading-7 text-slate-300">
              Discover a high-energy yet calming digital experience designed for modern nutrition guidance. Every interaction is polished, playful, and supportive of holistic health.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                to="/recipe"
                className="inline-flex items-center justify-center rounded-3xl bg-fuchsia-500 px-5 py-3 text-xs font-semibold text-white transition hover:bg-fuchsia-400"
              >
                Explore recipes
              </Link>
              <Link
                to="/vlog"
                className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold text-slate-100 transition hover:bg-white/10"
              >
                Watch the vlog
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          className="grid h-full min-h-0 gap-5"
        >
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/50 backdrop-blur-xl p-4 shadow-soft max-w-md">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-fuchsia-300">Daily tip</p>
                <h2 className="mt-2 text-lg font-semibold text-white">Energy balance in every meal</h2>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-full bg-white/5 text-fuchsia-300">✓</div>
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-300">
              Build each plate around color, fiber, and plant-based proteins for long-lasting energy and joyful eating.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <InteractiveCard
              title="Seasonal recipe labs"
              subtitle="Taste-driven"
              description="Designed to make whole foods feel both nourishing and exciting with beautiful flavor combinations."
              accent="bg-fuchsia-500/15 text-fuchsia-200"
            />
            <InteractiveCard
              title="Vlog rituals"
              subtitle="Story-led"
              description="Guided meal prep, mindful movement, and wellness reflections delivered in immersive video form."
              accent="bg-sky-500/15 text-sky-200"
            />
          </div>
        </motion.div>
      </div>
    </section>
    <Testimonials />
    </>
  )
}
