import { motion } from 'motion/react';
import { ArrowRight, Dumbbell, HeartPulse, Activity } from 'lucide-react';

const services = [
  {
    icon: <Dumbbell className="w-8 h-8 text-primary" />,
    title: "1-on-1 Personal Training",
    description: "Completely customized training programs designed specifically for your body type, goals, and lifestyle. Perfect for those who want maximum accountability and results.",
    delay: 0.1,
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-primary" />,
    title: "Online Coaching",
    description: "Get expert guidance customized to your schedule, wherever you are. Includes weekly check-ins, form reviews, and nutritional support.",
    delay: 0.2,
  },
  {
    icon: <Activity className="w-8 h-8 text-primary" />,
    title: "Small Group Training",
    description: "Experience the energy of a small group while still receiving individualized attention. A cost-effective way to train with expert supervision.",
    delay: 0.3,
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Premium Training <br /> Engineered for Results
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We focus on science-backed methodologies to build resilience, strength, and confidence that lasts a lifetime.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: service.delay }}
              className="bg-white rounded-3xl p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group relative overflow-hidden"
            >
              {/* Card Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/0 group-hover:from-primary/[0.03] transition-colors duration-500" />
              
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-6 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                {service.description}
              </p>
              
              <a href="#contact" className="inline-flex items-center text-primary font-semibold group-hover:text-primary-700 transition-colors">
                Learn More 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
