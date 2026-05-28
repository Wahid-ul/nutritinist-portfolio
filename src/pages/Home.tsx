import { useEffect, useRef, useState, type WheelEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HeroSection } from '../components/HeroSection'
import { HeroScrollFade } from '../components/HeroScrollFade'
import { HeroNextSection } from '../components/HeroNextSection'
import { Testimonials } from '../components/Testimonials'

export function Home() {
  const [stage, setStage] = useState<'hero' | 'fade' | 'afterFade' | 'unlocked'>('hero')
  const isTransitioning = useRef(false)
  const heroWrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = stage === 'unlocked' ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [stage])

  useEffect(() => {
    if (stage === 'unlocked' && heroWrapperRef.current) {
      window.scrollTo({
        top: heroWrapperRef.current.offsetTop + heroWrapperRef.current.offsetHeight,
        behavior: 'smooth',
      })
    }
  }, [stage])

  const handleWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (event.deltaY <= 0) return
    if (isTransitioning.current) {
      event.preventDefault()
      return
    }

    if (stage === 'hero') {
      event.preventDefault()
      isTransitioning.current = true
      setStage('fade')
      window.setTimeout(() => {
        isTransitioning.current = false
      }, 900)
    } else if (stage === 'fade') {
      event.preventDefault()
      isTransitioning.current = true
      setStage('afterFade')
      window.setTimeout(() => {
        isTransitioning.current = false
      }, 900)
    } else if (stage === 'afterFade') {
      event.preventDefault()
      isTransitioning.current = true
      setStage('unlocked')
      window.setTimeout(() => {
        isTransitioning.current = false
      }, 900)
    }
  }

  return (
    <>
      <div
        ref={heroWrapperRef}
        onWheel={handleWheel}
        className="relative overflow-hidden border-none"
        style={{ minHeight: 'calc(100vh - 112px)', maxHeight: stage === 'unlocked' ? 'auto' : 'calc(100vh - 112px)' }}
      >
        <AnimatePresence mode="wait">
          {stage === 'hero' && (
            <motion.div
              key="hero-section"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
            >
              <HeroSection />
            </motion.div>
          )}

          {stage === 'fade' && (
            <motion.div
              key="hero-scroll-fade"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HeroScrollFade />
            </motion.div>
          )}

          {stage === 'afterFade' && (
            <motion.div
              key="hero-next-section"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HeroNextSection />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Testimonials />
    </>
  )
}
