import React from 'react';
import { motion } from 'motion/react';
import { ClipboardList, Pill, Users, BookOpen, Heart, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "Consultancy",
    description: "Personalized health assessments and dietary advice from senior Ayurvedic experts.",
    icon: ClipboardList,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "Medicine",
    description: "Pure, authentic Ayurvedic formulations prepared following traditional methods.",
    icon: Pill,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "Therapy Services",
    description: "Traditional treatments like Abhyanga, Shirodhara, and Panchakarma therapies.",
    icon: Heart,
    color: "bg-rose-50 text-rose-600"
  },
  {
    title: "Autism Care",
    description: "Specialized guidance and treatments for children with Autism, led by Vaidya M Prasad.",
    icon: ShieldCheck,
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    title: "Awareness Sessions",
    description: "Health awareness programs and community workshops on Ayurvedic lifestyle.",
    icon: Users,
    color: "bg-amber-50 text-amber-600"
  },
  {
    title: "Self-Care Training",
    description: "Learn traditional self-care techniques and daily routines for long-term health.",
    icon: BookOpen,
    color: "bg-teal-50 text-teal-600"
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-stone-900 mb-4"
          >
            Our Holistic Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-stone-600 max-w-2xl mx-auto"
          >
            We provide a comprehensive range of Ayurvedic services to help you achieve 
            optimal health and well-being through natural means.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-stone-100 bg-stone-50/50 hover:bg-white hover:shadow-xl hover:shadow-stone-200/50 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h3>
              <p className="text-stone-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
