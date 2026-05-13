import { AnimatePresence, motion } from 'framer-motion'
import { Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Recipe } from './pages/Recipe'
import { Vlog } from './pages/Vlog'
import { Footer } from './components/Footer'
import { Menu } from 'lucide-react'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/recipe', label: 'Recipe' },
  { href: '/vlog', label: 'Vlog' }
]

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-400">Shallini Goswami</p>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `text-sm transition ${isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10 md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <main className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-72 bg-hero-grid opacity-80 pointer-events-none" />
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="relative mx-auto max-w-7xl px-6 pt-10 pb-20"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/recipe" element={<Recipe />} />
              <Route path="/vlog" element={<Vlog />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}

export default App
