import { motion } from 'motion/react';
import { Award, CheckCircle } from 'lucide-react';

export default function AboutNate() {
  return (
    <div className="bg-white">
      {/* High-end Header */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">About the Founder</span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-display leading-[1.1]">
              Meet Nate Stowe.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              A decade of experience distilled into a premium, science-backed approach to human performance and longevity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Biography Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Story / Content */}
            <div className="lg:col-span-7 space-y-8 text-lg text-gray-600 leading-relaxed font-light">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">The Journey to Better Health</h2>
                <p className="mb-6">
                  For over 10 years, I've dedicated my life to understanding the human body. What started as a personal passion for athletics evolved into a relentless pursuit of knowledge in biomechanics, nutrition, and exercise physiology. 
                </p>
                <p className="mb-6">
                  Early in my career, I noticed a frustrating trend in the fitness industry: a heavy reliance on fads, generic programs, and a "no pain, no gain" mentality that often led to injury and burnout. I knew there had to be a better way.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="pl-8 border-l-2 border-primary my-12"
              >
                <p className="text-2xl text-gray-900 font-display font-medium italic">
                  "My philosophy is built on creating sustainable, pain-free strength that enhances every aspect of your life—not just your aesthetic."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">A Science-First Approach</h3>
                <p className="mb-6">
                  At Stowe Personal Training, we don't guess. We assess. Every client starts with a comprehensive movement screening and lifestyle analysis. We build the foundation first—correcting imbalances and optimizing mobility—before loading the body to build strength and resilience.
                </p>
              </motion.div>
            </div>

            {/* Sticky Sidebar / Image & Credentials */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-32 space-y-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=2574&auto=format&fit=crop" 
                    alt="Nate Stowe Training Client" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 border border-gray-100 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="text-primary w-6 h-6" />
                    <h3 className="text-xl font-bold font-display text-gray-900">Credentials</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      "Certified Strength & Conditioning Specialist (CSCS)",
                      "B.S. in Kinesiology & Exercise Science",
                      "Precision Nutrition Level 1 (PN1)",
                      "Functional Movement Screen (FMS) Certified"
                    ].map((cred, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{cred}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
