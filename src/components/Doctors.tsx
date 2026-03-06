import React from 'react';
import { motion } from 'motion/react';
import { Award, Clock, Star } from 'lucide-react';

const doctors = [
  {
    name: "Dr. K T Jayakrishnan",
    role: "Chief Consultant",
    experience: "35+ Years",
    specialization: "Senior Ayurvedic Physician",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dr. Shyamala",
    role: "Senior Consultant",
    experience: "20+ Years",
    specialization: "Clinical Ayurveda",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Dr. Lakshmi Jayakrishnan",
    role: "Senior Consultant",
    experience: "10+ Years",
    specialization: "Ayurvedic Medicine",
    image: "https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=400"
  },
  {
    name: "Vaidya M Prasad",
    role: "Advisor",
    experience: "30+ Years",
    specialization: "Autism Care Specialist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400"
  }
];

export const Doctors = () => {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-stone-900 mb-4"
          >
            Meet Our Experts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-stone-600 max-w-2xl mx-auto"
          >
            Our team of highly qualified and experienced doctors is dedicated to 
            providing you with the best Ayurvedic care.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                    {doctor.role}
                  </span>
                  <div className="flex items-center text-amber-500">
                    <Star className="h-3 w-3 fill-current" />
                    <span className="text-xs font-bold ml-1">4.9</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-1">{doctor.name}</h3>
                <p className="text-sm text-stone-500 mb-4">{doctor.specialization}</p>
                
                <div className="flex items-center justify-between pt-4 border-t border-stone-50">
                  <div className="flex items-center text-stone-400 text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{doctor.experience} Exp.</span>
                  </div>
                  <div className="flex items-center text-stone-400 text-xs">
                    <Award className="h-3 w-3 mr-1" />
                    <span>Certified</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
