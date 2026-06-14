import { motion } from 'motion/react';

const steps = [
  {
    number: "01",
    title: "Comprehensive Assessment",
    description: "We begin with a full-body movement screen and lifestyle analysis to identify limiters, imbalances, and exact starting metrics."
  },
  {
    number: "02",
    title: "Tailored Programming",
    description: "Your unique data forms the blueprint. We engineer a periodized program designed to push your capabilities while preventing injury."
  },
  {
    number: "03",
    title: "Guided Execution",
    description: "Every rep is monitored. In our sessions, we focus meticulously on biomechanics, tempo, and intent to maximize neuromuscular adaptation."
  },
  {
    number: "04",
    title: "Continuous Optimization",
    description: "We don't stagnate. We track progress daily, adjusting variables like volume, intensity, and nutrition to ensure perpetual growth."
  }
];

export function ProcessSection() {
  return (
    <section className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">The Methodology</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              The Stowe Training System
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A systematic, science-driven approach to transforming your physique, performance, and long-term health.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-px bg-gray-200 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 bg-white border border-gray-100 rounded-full flex items-center justify-center mb-8 shadow-xl shadow-gray-200/40 group-hover:border-primary transition-all duration-500 relative">
                <div className="absolute inset-0 rounded-full bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-500" />
                <span className="text-3xl font-bold font-display text-gray-300 group-hover:text-primary transition-colors relative z-10">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-display">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
