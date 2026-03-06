import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, RefreshCw, Leaf } from 'lucide-react';
import { getAyurvedicTips } from '../services/gemini';

export const HealthTips = () => {
  const [tips, setTips] = React.useState<string[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [concern, setConcern] = React.useState('General Wellness');

  const fetchTips = async () => {
    setLoading(true);
    const newTips = await getAyurvedicTips(concern);
    setTips(newTips);
    setLoading(false);
  };

  React.useEffect(() => {
    fetchTips();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-emerald-800 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-700 rounded-full blur-3xl opacity-20" />

          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="h-6 w-6 text-emerald-300" />
              </div>
              <h2 className="text-3xl font-serif font-bold">AI-Powered Ayurvedic Insights</h2>
            </div>

            <div className="grid md:grid-cols-[1fr_auto] gap-6 mb-12">
              <div className="space-y-2">
                <label className="text-sm font-bold text-emerald-200 uppercase tracking-wider">Ask for Advice</label>
                <div className="flex space-x-3">
                  <input
                    type="text"
                    value={concern}
                    onChange={(e) => setConcern(e.target.value)}
                    className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400 transition-all placeholder:text-white/30"
                    placeholder="e.g. Better sleep, Digestion, Skin health..."
                  />
                  <button
                    onClick={fetchTips}
                    disabled={loading}
                    className="bg-white text-emerald-900 px-6 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-all disabled:opacity-50 flex items-center space-x-2"
                  >
                    {loading ? <RefreshCw className="h-5 w-5 animate-spin" /> : <RefreshCw className="h-5 w-5" />}
                    <span>Refresh</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {tips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm flex items-start space-x-4 group hover:bg-white/10 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-400/20 flex items-center justify-center shrink-0 mt-1">
                    <Leaf className="h-4 w-4 text-emerald-300" />
                  </div>
                  <p className="text-emerald-50 leading-relaxed font-medium">{tip}</p>
                </motion.div>
              ))}
            </div>
            
            <p className="mt-8 text-xs text-emerald-300/60 italic text-center">
              Disclaimer: These AI-generated tips are for informational purposes only. 
              Always consult with our qualified doctors for personalized medical advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
