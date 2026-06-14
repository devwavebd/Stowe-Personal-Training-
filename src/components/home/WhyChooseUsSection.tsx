import { motion } from 'motion/react';
import { Target, Activity, Zap, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Target className="w-6 h-6 text-white" />,
    title: "Precision Protocols",
    description: "No cookie-cutter routines. Every movement, set, and rest interval is calculated for your specific physiological response."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
    title: "Injury Resilience",
    description: "By addressing muscular imbalances and optimizing joint mechanics, we bulletproof your body against future injuries."
  },
  {
    icon: <Activity className="w-6 h-6 text-white" />,
    title: "Data-Driven Progress",
    description: "We utilize measurable metrics—from body composition to strength markers—to guarantee objective, linear progression."
  },
  {
    icon: <Zap className="w-6 h-6 text-white" />,
    title: "Holistic Integration",
    description: "Training is just the stimulus. We manage nutrition, sleep hygiene, and stress mitigation to accelerate recovery."
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-30"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">The Advantage</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-[1.1]">
              Engineered For <br /> Maximum ROI.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Your time is valuable. We eliminate the guesswork and integrate elite-level athletic strategies into your lifestyle, ensuring every minute spent training yields a return.
            </p>
            <div className="space-y-8">
              {features.map((feature, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/20 group-hover:-translate-y-1 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold font-display text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl lg:ml-10">
              <img 
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2670&auto=format&fit=crop" 
                alt="Detailed Gym Training" 
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent flex flex-col justify-end p-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-max max-w-full">
                  <div className="text-3xl font-display font-bold text-white mb-1">100%</div>
                  <div className="text-white/80 text-sm font-medium tracking-wide">Customized Methodology</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
