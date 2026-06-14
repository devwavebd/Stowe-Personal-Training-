import { motion } from 'motion/react';
import { Download, FileText, PlayCircle } from 'lucide-react';

const resources = [
  {
    title: "The Ultimate Guide to Macro Tracking",
    type: "eBook",
    icon: <FileText className="w-8 h-8 text-primary" />,
    description: "A comprehensive 40-page guide breaking down how to effectively calculate and track your macronutrients for sustainable fat loss and muscle gain without giving up the foods you love.",
    color: "bg-blue-50"
  },
  {
    title: "15-Minute Daily Mobility Routine",
    type: "Video Series",
    icon: <PlayCircle className="w-8 h-8 text-primary" />,
    description: "Follow along with Nate in this foundational mobility series designed to undo the damage of sitting at a desk all day. Perfect for beginners and advanced athletes alike.",
    color: "bg-indigo-50"
  },
  {
    title: "Grocery Shopping Cheat Sheet",
    type: "PDF Template",
    icon: <Download className="w-8 h-8 text-primary" />,
    description: "Take the guesswork out of meal prep with our categorized grocery list. Includes staple proteins, healthy fats, and high-volume carbohydrates to keep you full and fueled.",
    color: "bg-emerald-50"
  }
];

export default function Resources() {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Free Tools</span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-display leading-[1.1]">
              Client Resources.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Downloadable guides, templates, and video routines to support your training outside the gym.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-8">
            {resources.map((resource, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-8 md:p-10 bg-white border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-8"
              >
                
                {/* Decorative background circle */}
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full ${resource.color} blur-3xl -mr-20 -mt-20 opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  {resource.icon}
                </div>
                
                <div className="relative z-10 flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-light">
                    {resource.description}
                  </p>
                </div>
                
                <div className="relative z-10 flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
                  <button className="w-full md:w-auto inline-flex justify-center items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-primary transition-colors shadow-lg">
                    Access Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 p-10 bg-primary rounded-3xl text-center relative overflow-hidden"
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50" />
             <div className="relative z-10">
               <h3 className="text-3xl font-bold text-white mb-4 font-display">Need something specific?</h3>
               <p className="text-white/80 mb-8 max-w-xl mx-auto font-light">Current clients can access the full library of premium resources via the client portal.</p>
               <button className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-gray-50 transition-colors shadow-lg">Login to Portal</button>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
