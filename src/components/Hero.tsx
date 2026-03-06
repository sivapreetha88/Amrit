import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#fdfcf9]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-stone-100 rounded-full blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              <span>Holistic Healing Since 1985</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 leading-[1.1] mb-6">
              Ancient Wisdom for <span className="text-emerald-600 italic">Modern Living</span>
            </h1>
            <p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
              Experience the transformative power of Ayurveda at Amritavarshini. 
              Our expert consultants provide personalized care to restore balance 
              to your mind, body, and spirit.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/login"
                className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 group"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center bg-white text-stone-900 border border-stone-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-stone-50 transition-all"
              >
                Explore Treatments
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000"
                alt="Ayurvedic Treatment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px] border border-stone-100"
            >
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <span className="font-bold text-stone-900 text-sm">Natural Care</span>
              </div>
              <p className="text-xs text-stone-500">100% Organic medicines and traditional therapies.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Leaf = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.2a7 7 0 0 1-9 8.8Z" />
    <path d="M11 20c-1.5-3-2.5-6-2-9" />
  </svg>
);
