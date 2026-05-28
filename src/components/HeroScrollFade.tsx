import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

export function HeroScrollFade() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const video = videoRef.current
      if (video) {
        const playVideo = async () => {
          try {
            await video.play()
          } catch (error) {
            console.debug('Video autoplay blocked, user interaction may be required.', error)
          }
        }

        void playVideo()
      }

      gsap.fromTo(
        videoRef.current,
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
      <video
        ref={videoRef}
        src="/assets/promogranate_video.mp4"
        className="absolute inset-0 h-full w-full object-cover"
        muted
        playsInline
        autoPlay
        preload="auto"
        onEnded={() => {
          videoRef.current?.pause()
        }}
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

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 2.4 }}
        className="absolute top-0 right-0 z-20 flex h-full w-full max-w-full flex-col justify-center rounded-none border-l border-white/10 bg-slate-950/60 p-8 text-left text-sm text-slate-100 shadow-[0_30px_90px_rgba(15,23,42,0.55)] backdrop-blur-3xl md:w-2/5 lg:w-1/3"
      >
        <div className="max-w-md">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-200">Diet note</p>
          <h3 className="mt-4 text-lg font-semibold text-white">Smart nutrition, strong results.</h3>
          <p className="mt-4 leading-7 text-slate-200">
            Embrace whole foods, clean energy, and mindful portions to support sustained vitality without compromise.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
