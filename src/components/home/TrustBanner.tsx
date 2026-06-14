import { motion } from 'motion/react';

const credentials = [
  "NSCA Certified Strength & Conditioning",
  "B.S. Kinesiology & Exercise Science",
  "Functional Movement Screen (FMS)",
  "Precision Nutrition Level 1"
];

export function TrustBanner() {
  return (
    <div className="bg-gray-900 border-y border-gray-800 py-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <p className="text-center text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-8 opacity-80 mt-2">Backed By Industry Leading Certifications</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {credentials.map((cred, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-gray-300 font-medium text-sm md:text-base text-center"
            >
              {cred}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
