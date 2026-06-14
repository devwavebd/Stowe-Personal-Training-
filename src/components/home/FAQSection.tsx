import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do I need to be in shape to start training?",
    answer: "Absolutely not. Our programs are scaled to your exact current abilities. Whether you are recovering from an injury, haven't worked out in years, or are an advanced athlete, we meet you where you are and build from there."
  },
  {
    question: "How long does it take to see results?",
    answer: "While neurological adaptations (feeling stronger and more coordinated) often happen within the first two weeks, visible physiological changes typically take 4-6 weeks of consistent adherence to the training and nutrition protocols."
  },
  {
    question: "Is nutrition coaching included?",
    answer: "Yes. You cannot out-train a poor diet. Comprehensive nutritional guidance, macronutrient structuring, and habit-building are core components of our premium training packages."
  },
  {
    question: "What if I have old injuries?",
    answer: "Nate's extensive background in movement screening and biomechanics ensures that we program around your limitations while actively working to rehabilitate them. Safety and longevity are our primary concerns."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Clarity</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
              Frequently Asked Questions
            </h2>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:border-primary/50 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none bg-white"
                >
                  <span className="text-lg md:text-xl font-bold font-display text-gray-900 pr-8">{faq.question}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? 'bg-primary text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-6 md:p-8 pt-0 text-gray-600 leading-relaxed bg-white">
                        <div className="h-px w-full bg-gray-100 mb-6" />
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
