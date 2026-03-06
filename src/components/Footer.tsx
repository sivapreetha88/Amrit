import React from 'react';
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3 text-white">
              <img 
                src="https://storage.googleapis.com/siprsw/logo.png" 
                alt="Amritavarshini Logo" 
                className="h-14 w-auto brightness-0 invert"
                referrerPolicy="no-referrer"
              />
              <span className="text-2xl font-serif font-bold tracking-tight">Amritavarshini</span>
            </div>
            <p className="text-stone-400 leading-relaxed">
              Restoring balance and health through the ancient wisdom of Ayurveda. 
              A unit of Preetha Sivaramakrishnan Trust.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Our Services</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Doctors</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Book Appointment</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Consultancy</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Traditional Therapy</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Autism Care</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Panchakarma</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Self-Care Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>Amritavarshini Ayurveda, Kerala, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-500 shrink-0" />
                <span>info@amritavarshini-ayurveda.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-stone-500">
          <p>© 2024 Amritavarshini Ayurveda. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
