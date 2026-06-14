import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Nate', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Resources', path: '/resources' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-lg border-b border-gray-100 shadow-sm py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img
              src="https://i0.wp.com/stowetraining.com/wp-content/uploads/2025/05/stowe-personal-training-austin-logo.png?resize=2048%2C1195&ssl=1"
              alt="Stowe Personal Training"
              className={cn("transition-all duration-300", isScrolled ? "h-10" : "h-14")}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors relative group',
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary'
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-secondary transition-colors shadow-lg shadow-primary/20"
            >
              Start Your Journey
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-900 z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 z-40 bg-white pt-24 px-6 pb-6 flex flex-col gap-6"
          >
            <nav className="flex flex-col gap-6 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'text-xl font-semibold tracking-wide transition-colors',
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-gray-900'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="w-full h-px bg-gray-100 my-4" />
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-primary text-white px-6 py-4 rounded-xl text-lg font-semibold tracking-wide hover:bg-secondary transition-colors"
              >
                Start Your Journey
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
