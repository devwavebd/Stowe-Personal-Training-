import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                src="https://i0.wp.com/stowetraining.com/wp-content/uploads/2025/05/stowe-personal-training-austin-logo.png?resize=2048%2C1195&ssl=1" 
                alt="Stowe Personal Training" 
                className="h-12 brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Premium personal training in Austin, Texas. Elevate your fitness journey with expert guidance, customized programming, and unwavering support.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/StoweTraining/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/stowe_training_systems/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-lg">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Nate</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors text-sm">Resources</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-lg">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">Austin, TX</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <a href="tel:+10000000000" className="hover:text-white transition-colors text-sm">Contact for details</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <a href="mailto:info@stowetraining.com" className="hover:text-white transition-colors text-sm">info@stowetraining.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-lg">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to receive fitness tips, updates, and exclusive offers.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border items-center border-gray-700 text-white px-4 py-2.5 rounded-l-lg w-full focus:outline-none focus:border-primary text-sm transition-colors"
                required
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-secondary text-white px-4 py-2.5 rounded-r-lg font-medium transition-colors text-sm shadow-md"
              >
                Sign Up
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Stowe Personal Training. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
