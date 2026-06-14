import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export function AboutSnippet() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop" 
                alt="Nate Stowe Coaching" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gray-900/10 mix-blend-multiply" />
            </div>
            
            {/* Overlay Experience Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 md:-right-12 bg-white p-8 rounded-3xl shadow-[0_20px_40px_rgb(0,0,0,0.08)] hidden md:block max-w-xs border border-gray-50"
            >
              <div className="text-4xl font-bold font-display text-primary mb-2">10+</div>
              <div className="text-sm font-semibold tracking-widest uppercase text-gray-500 mb-2">Years Experience</div>
              <p className="text-gray-600 text-sm leading-relaxed">Dedicated to transforming lives through sustainable fitness practices.</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:pl-10"
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Meet The Coach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-display leading-[1.1]">
              Hi, I'm Nate.
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
              <p>
                As the founder of Stowe Personal Training, my mission is simple: to help you build a stronger, healthier, and more resilient body without the fads. We focus on real science, sustainable habits, and proven methodologies.
              </p>
              <p>
                Whether you're recovering from an injury, looking to lose weight, or aiming for peak athletic performance, our training systems are designed to adapt to your unique physiology and lifestyle.
              </p>
            </div>
            
            <Link 
              to="/about" 
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/10"
            >
              Read My Full Story
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
