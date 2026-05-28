import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export function HeroScrollFade() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-[calc(100vh-112px)] max-h-[calc(100vh-112px)] overflow-hidden bg-black"
    >
      <img
        src="/assets/pomogranate_burst.gif"
        alt="Pomegranate burst animation"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="flex w-full max-w-3xl flex-col items-center justify-center px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="mb-3 max-w-3xl text-sm uppercase tracking-[0.35em] text-white/80"
          >
            Nourish every meal with balanced, radiant nutrition.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
            className="max-w-3xl text-sm uppercase tracking-[0.35em] text-white/80"
          >
            Fuel your body with purpose and delicious energy.
          </motion.p>
        </div>
      </div>


    </section>
  )
}
