import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'

export function About() {
  return (
    <section className="space-y-12">
      <SectionHeading
        title="About"
        description="Meet Shallini, the nutritionist who blends scientific care with soulful culinary creativity."
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-slate-900/90 p-8 shadow-soft md:grid-cols-[1.2fr_0.8fr]"
      >
        <div className="space-y-6 text-slate-300">
          <p className="text-lg leading-8">
            With a background in clinical nutrition and holistic wellness coaching, Shallini helps people create nourishing routines that feel elevating rather than restrictive.
          </p>
          <p className="text-lg leading-8">
            Her coaching centers on intuitive meal design, emotional well-being, and practical habit building — all wrapped in chic visuals, playful interaction, and real-world support.
          </p>
          <p className="text-lg leading-8 text-slate-400">
            Every recipe, video, and guide is crafted to inspire sustainable change through beautiful experience design.
          </p>
        </div>

        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-fuchsia-500/10 via-sky-500/10 to-slate-800/20 p-6 backdrop-blur-xl">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300">Core strengths</p>
            <ul className="space-y-3 text-sm text-slate-200">
              <li>• Personalized meal plans that boost energy and glow.</li>
              <li>• Recipe styling for everyday nourishment.</li>
              <li>• Vlog-led coaching for confident and mindful living.</li>
            </ul>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-slate-950/80 p-5 text-sm text-slate-200">
              <p className="text-xl font-semibold text-white">10+</p>
              <p className="mt-2 text-slate-400">Years of nutrition experience</p>
            </div>
            <div className="rounded-3xl bg-slate-950/80 p-5 text-sm text-slate-200">
              <p className="text-xl font-semibold text-white">300+</p>
              <p className="mt-2 text-slate-400">Happy clients and glowing stories</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
