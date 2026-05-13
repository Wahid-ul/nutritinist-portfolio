import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'

const recipes = [
  {
    title: 'Glow Bowl with Tahini Citrus Dressing',
    detail: 'Vibrant superfood bowl with roasted veggies, grains, and a creamy citrus dressing.'
  },
  {
    title: 'Spiced Lentil Stew with Fresh Herbs',
    detail: 'Comforting plant-powered stew with warming spices and nutrient-rich greens.'
  },
  {
    title: 'Berry Chia Parfait with Almond Crunch',
    detail: 'A layered breakfast ritual that balances protein, fiber, and fresh fruit sweetness.'
  }
]

export function Recipe() {
  return (
    <section className="space-y-12">
      <SectionHeading title="Recipe" description="A curated recipe atelier built to inspire mindful and delicious eating." />

      <div className="grid gap-6 lg:grid-cols-3">
        {recipes.map(({ title, detail }) => (
          <motion.article
            key={title}
            whileHover={{ y: -8 }}
            className="rounded-[2.25rem] border border-white/10 bg-slate-900/85 p-6 shadow-soft transition-transform duration-300"
          >
            <div className="mb-4 inline-flex rounded-full bg-fuchsia-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-fuchsia-300">
              nourishing
            </div>
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{detail}</p>
            <div className="mt-6 flex items-center justify-between text-sm font-semibold text-white/80">
              <span>Prep 25 min</span>
              <span>Serves 2</span>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-[3rem] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/95 p-8 shadow-glow"
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-400">Meal plan highlight</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">Easy nourishing menus for emotional balance.</h3>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            Every recipe collection is built around simple, high-impact ingredients that feel luxe and accessible.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
