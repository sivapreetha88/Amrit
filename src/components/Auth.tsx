import React from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Leaf } from 'lucide-react';

export const Auth = () => {
  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-stone-50 flex items-center justify-center">
      <div className="max-w-md w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-stone-200/50 border border-stone-100"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6">
              <Leaf className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-stone-900 mb-2">
              {isLogin ? 'Welcome Back' : 'Join Amritavarshini'}
            </h2>
            <p className="text-stone-500">
              {isLogin ? 'Sign in to manage your appointments' : 'Create an account for personalized care'}
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm font-bold text-stone-700">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                  <input
                    type="text"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}
            <div className="space-y-2">
              <label className="text-sm font-bold text-stone-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                <input
                  type="email"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-stone-700">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-stone-400" />
                <input
                  type="password"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-stone-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 flex items-center justify-center group"
            >
              <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-stone-100 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-stone-600 hover:text-emerald-600 font-medium transition-colors"
            >
              {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
