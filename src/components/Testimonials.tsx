import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Fitness Enthusiast',
    feedback: "Shalini completely transformed my approach to nutrition. Her personalized meal plans are not just healthy—they're absolutely delicious. I feel more energized than ever!",
    rating: 5
  },
  {
    name: 'Wahid-ul Alam',
    role: 'Software Engineer',
    feedback: "After a bike accident, I suffered a hand injury and had no idea how to recover quickly. Shalin's personalized meal plan and nutrition guidance helped speed up my healing process. Drinking Chae regularly also played a big role in my recovery and overall energy levels.",
    rating: 5
},  
  {
    name: 'Rajesh Patel',
    role: 'Corporate Professional',
    feedback: "After struggling with energy crashes, Shalini's guidance on balanced nutrition has been a game-changer. Her vlog series is incredibly insightful and easy to follow.",
    rating: 5
  },
  {
    name: 'Anaya Singh',
    role: 'Yoga Instructor',
    feedback: "The mindfulness-focused approach to nutrition resonates deeply with my wellness philosophy. Shalini understands that food is medicine and joy combined.",
    rating: 5
  },
  {
    name: 'Vikram Desai',
    role: 'Entrepreneur',
    feedback: "I've worked with many nutritionists, but Shallini's holistic approach and beautiful presentation of recipes make nutrition coaching feel accessible and enjoyable.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-400">Success Stories</p>
          <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
            What my clients are saying
          </h2>
        </div>

        {/* Horizontal Scrolling Testimonials */}
        <div className="overflow-x-auto scrollbar-hide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex gap-6 pb-4 md:gap-8"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                whileHover={{ translateY: -8 }}
                transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                className="flex-shrink-0 w-80 sm:w-96 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-950/95 to-slate-900/90 p-6 shadow-soft backdrop-blur-xl"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-fuchsia-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                <p className="mb-6 text-sm leading-7 text-slate-300">
                  "{testimonial.feedback}"
                </p>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="mt-1 text-xs text-slate-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <div className="mt-6 text-center text-xs text-slate-400 md:hidden">
          ← Scroll to see more →
        </div>
      </div>
    </section>
  )
}
