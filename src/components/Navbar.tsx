import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://storage.googleapis.com/siprsw/logo.png" 
              alt="Amritavarshini Logo" 
              className="h-12 w-auto"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Fallback to Leaf icon if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden">
              <Leaf className="h-8 w-8 text-emerald-600" />
            </div>
            <span className="text-xl font-serif font-bold text-stone-900 tracking-tight">Amritavarshini</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-stone-600 hover:text-emerald-600 transition-colors font-medium">Home</Link>
            <Link to="/services" className="text-stone-600 hover:text-emerald-600 transition-colors font-medium">Services</Link>
            <Link to="/doctors" className="text-stone-600 hover:text-emerald-600 transition-colors font-medium">Our Doctors</Link>
            <Link to="/login" className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700 transition-all shadow-sm">
              <User className="h-4 w-4" />
              <span>Login / Register</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <Link to="/" onClick={() => setIsOpen(false)} className="block text-stone-600 font-medium">Home</Link>
              <Link to="/services" onClick={() => setIsOpen(false)} className="block text-stone-600 font-medium">Services</Link>
              <Link to="/doctors" onClick={() => setIsOpen(false)} className="block text-stone-600 font-medium">Our Doctors</Link>
              <Link to="/login" onClick={() => setIsOpen(false)} className="block bg-emerald-600 text-white px-4 py-2 rounded-full text-center font-medium">
                Login / Register
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
