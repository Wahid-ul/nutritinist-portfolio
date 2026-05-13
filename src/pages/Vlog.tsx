import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'

const episodes = [
  {
    title: 'Morning Rituals for Balanced Energy',
    description: 'A guided routine that blends hydration, nourishing breakfast, and mindset practices.'
  },
  {
    title: 'Meal Prep for the Week Ahead',
    description: 'Practical steps to create beautiful plates, save time, and stay energized all week.'
  },
  {
    title: 'Mindful Eating & Flavor Exploration',
    description: 'Learn how to taste deeply, slow down, and make every meal feel restorative.'
  }
]

export function Vlog() {
  return (
    <section className="space-y-12">
      <SectionHeading title="Vlog" description="Watch the stories and rituals that bring nutrition to life." />

      <div className="grid gap-6 lg:grid-cols-3">
        {episodes.map((episode) => (
          <motion.article
            key={episode.title}
            whileHover={{ scale: 1.02 }}
            className="group rounded-[2.25rem] border border-white/10 bg-slate-900/85 p-6 shadow-soft"
          >
            <div className="rounded-3xl bg-slate-950/80 p-5">
              <div className="mb-5 h-44 rounded-[2rem] bg-gradient-to-br from-fuchsia-500/15 to-sky-500/15 p-6 text-white">
                <div className="flex h-full items-end justify-between">
                  <span className="uppercase tracking-[0.35em] text-xs text-slate-300">Vlog</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white">▶</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white">{episode.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{episode.description}</p>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-[3rem] border border-white/10 bg-slate-900/90 p-8 shadow-glow"
      >
        <div className="space-y-4 text-slate-300">
          <p className="uppercase tracking-[0.35em] text-fuchsia-400">Video journey</p>
          <h3 className="text-3xl font-semibold text-white">Recipes, rituals, and radiant wellness moments.</h3>
          <p className="max-w-3xl text-sm leading-7">
            Immerse yourself in supportive coaching that helps you feel more energized, more confident, and more aligned with nourishing living.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
