import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gray-900 overflow-hidden">
      {/* Background Image / Overlay Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-neutral-900/90 z-10 mix-blend-multiply" />
        <img 
          src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2670&auto=format&fit=crop" 
          alt="Premium Gym Environment" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Modern radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-white text-xs font-semibold tracking-widest uppercase">Austin's Premier Personal Training</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight font-display">
              Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 italic font-medium">Fitness</span> Journey.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-xl text-gray-300 font-light mb-10 max-w-xl leading-relaxed">
              Expert guidance, customized programming, and unwavering support to help you achieve your ultimate physical potential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="/contact" 
              className="inline-flex justify-center items-center px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 text-lg shadow-xl shadow-primary/20"
            >
              Start Training Today
            </Link>
            <a 
              href="#services" 
              className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-all duration-300 text-lg group"
            >
              Explore Services
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Down indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-px h-16 bg-white/20 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-primary absolute top-0"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
