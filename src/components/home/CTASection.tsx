import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-primary">
      {/* Background radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-white/80 font-bold tracking-widest uppercase text-xs mb-6 block drop-shadow-md">
            Ready To Begin?
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-display leading-[1.1]">
             Redefine Your Limits.
          </h2>
          <p className="text-xl text-white/90 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Schedule a comprehensive consultation and movement assessment today. Start your journey towards peak performance.
          </p>
          
          <Link 
            to="/contact" 
            className="inline-flex justify-center items-center px-10 py-5 bg-white text-primary font-bold rounded-full hover:bg-gray-50 transition-all duration-300 text-lg shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] hover:-translate-y-1"
          >
            Schedule Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
