import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah M.",
    role: "Client since 2021",
    quote: "Nate's approach is completely different. He didn't just give me a workout plan; he fundamentally changed how I view fitness and nutrition. I feel stronger in my 40s than I did in my 20s.",
  },
  {
    name: "David K.",
    role: "Marathon Runner",
    quote: "I came to Stowe Personal Training after a knee injury. The careful, science-based programming not only got me back to running, but improved my PR significantly. Truly a premium experience.",
  }
];

export function TestimonialSection() {
  return (
    <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* Abstract Background Design */}
      <div className="absolute inset-0 opacity-10">
        <svg fill="none" viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="url(#gradient)" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1e3a8a" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight text-white">
              Don't Just Take <br className="hidden md:block" /> Our Word For It.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-10 relative group hover:bg-gray-800 transition-colors"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-gray-700 group-hover:text-primary transition-colors duration-500" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center font-bold text-xl text-primary">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white">{t.name}</h4>
                  <p className="text-gray-400 text-sm tracking-wide">{t.role}</p>
                </div>
              </div>
              
              <p className="text-xl leading-relaxed text-gray-300 font-light">
                "{t.quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
