import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1000"
                alt="Ayurvedic Herbs"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-600 rounded-[2rem] p-8 text-white hidden md:block">
              <p className="text-3xl font-serif font-bold mb-2">35+</p>
              <p className="text-emerald-100 font-medium">Years of clinical excellence in traditional Ayurveda.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif font-bold text-stone-900 mb-6 leading-tight">
              Preetha Sivaramakrishnan Trust: <span className="text-emerald-600 italic">Caring For Your Health</span>
            </h2>
            <p className="text-stone-600 mb-8 leading-relaxed">
              Amritavarshini Ayurveda is a non-profit Public Charitable Trust dedicated to providing 
              holistic healthcare services. Under the guidance of Dr. K T Jayakrishnan and our expert 
              team, we combine traditional wisdom with modern clinical standards.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Qualified professionals and experienced therapists",
                "Holistic approach for preventing and reversing diseases",
                "Medical, research, and training units",
                "Free services for the deserving individuals",
                "Specialized care for Autistic children"
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
                  <span className="text-stone-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button className="bg-stone-900 text-white px-8 py-4 rounded-full font-bold hover:bg-stone-800 transition-all shadow-lg shadow-stone-200">
              Learn More About Our Trust
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
