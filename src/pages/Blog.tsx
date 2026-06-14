import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';

const mockPosts = [
  {
    title: "The Truth About Fasted Cardio",
    category: "Nutrition",
    date: "Oct 12, 2023",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=2574&auto=format&fit=crop",
    excerpt: "Does working out on an empty stomach really burn more fat? We break down the latest research on fasted training and its impact on body composition."
  },
  {
    title: "5 Mobility Drills Every Powerlifter Needs",
    category: "Training",
    date: "Sep 28, 2023",
    image: "https://images.unsplash.com/photo-1526506114636-628d05b58de3?q=80&w=2574&auto=format&fit=crop",
    excerpt: "Improve your squat depth, protect your shoulders during bench, and optimize your deadlift positioning with these essential daily mobility exercises."
  },
  {
    title: "Sleep: The Missing Link in Your Recovery",
    category: "Recovery",
    date: "Sep 15, 2023",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=2660&auto=format&fit=crop",
    excerpt: "Why 8 hours isn't always enough, and how optimizing your sleep architecture might be more important than your actual programming."
  }
];

export default function Blog() {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Knowledge Base</span>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-display leading-[1.1]">
              The Training Journal.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Research-backed insights on training, nutrition, and recovery. No fads, just science and practical application.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {mockPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col"
              >
                <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative bg-gray-100">
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-2xl font-bold font-display text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 font-light flex-grow">
                  {post.excerpt}
                </p>
                
                <a href="#read" className="inline-flex items-center text-primary font-semibold group-hover:text-primary-700 transition-colors mt-auto">
                  Read Article
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
