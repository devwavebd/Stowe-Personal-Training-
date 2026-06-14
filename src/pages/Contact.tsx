import { motion } from 'motion/react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white">
      <section className="pt-32 pb-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Take The First Step</span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-display leading-[1.1]">
              Start Your Journey.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Ready to transform your health? Schedule your initial consultation and let's craft a plan engineered for your goals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Let's connect</h2>
                <p className="text-gray-600 text-lg leading-relaxed font-light mb-8">
                  Fill out the form to request a consultation. We typically respond within 24 business hours to discuss your goals, answer questions, and schedule your initial assessment.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Our Location</h4>
                    <p className="text-gray-600">Austin, Texas<br/>Available by appointment only</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Email Us</h4>
                    <a href="mailto:info@stowetraining.com" className="text-gray-600 hover:text-primary transition-colors">info@stowetraining.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">Call Us</h4>
                    <a href="tel:+10000000000" className="text-gray-600 hover:text-primary transition-colors">Contact for details</a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Premium Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-[0_20px_40px_rgb(0,0,0,0.06)]">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="goal" className="text-sm font-medium text-gray-700">Primary Goal</label>
                    <select 
                      id="goal" 
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-gray-700"
                    >
                      <option value="">Select your primary goal</option>
                      <option value="weight_loss">Weight Loss & Fat Reduction</option>
                      <option value="muscle_gain">Muscle Building & Hypertrophy</option>
                      <option value="injury_rehab">Injury Rehabilitation</option>
                      <option value="athletic_performance">Athletic Performance</option>
                      <option value="general_health">General Health & Longevity</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">Tell us more about your situation</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                      placeholder="Share any specific challenges, past injuries, or exact goals you'd like to achieve..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-secondary transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
                  >
                    Submit Request
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
