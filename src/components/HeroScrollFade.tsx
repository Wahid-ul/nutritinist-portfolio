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
        video.muted = true
        video.playsInline = true
        video.autoplay = true

        const playVideo = async () => {
          try {
            await video.play()
          } catch (error) {
            console.debug('Video autoplay blocked, user interaction may be required.', error)
          }
        }

        const onLoadedData = () => {
          void playVideo()
        }

        if (video.readyState >= 2) {
          void playVideo()
        } else {
          video.addEventListener('loadeddata', onLoadedData, { once: true })
        }

        return () => {
          video.removeEventListener('loadeddata', onLoadedData)
        }
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
        loop
        preload="auto"
        controls={false}
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


    </section>
  )
}
