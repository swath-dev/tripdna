import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GlassCard } from '../components/glass-card';
import { PrimaryButton } from '../components/primary-button';
import { Sparkles, Mail, Lock, Globe, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

export function LoginPage() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/signup
    navigate('/dashboard');
  };

  const socialLogins = [
    { name: 'Google', icon: '🌐', color: 'from-blue-600 to-blue-700' },
    { name: 'Facebook', icon: '📘', color: 'from-blue-700 to-blue-800' },
    { name: 'Apple', icon: '🍎', color: 'from-gray-700 to-gray-900' }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-teal-600/20 blur-3xl"
        />
      </div>

      {/* Back Button */}
      <div className="relative z-10 px-8 py-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 py-12 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-12 h-12 text-violet-400" />
              <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">
                TripDNA
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Your Journey to
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">
                Perfect Travel
              </span>
              <br />
              Starts Here
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of travelers who've discovered their unique travel DNA and found their dream destinations.
            </p>
            <div className="space-y-4">
              {[
                'AI-powered personality analysis',
                'Personalized destination matching',
                'Custom itinerary generation',
                'Exclusive travel insights'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">
                  {isSignUp ? 'Create Account' : 'Welcome Back'}
                </h2>
                <p className="text-gray-400">
                  {isSignUp
                    ? 'Start your personalized travel journey'
                    : 'Continue your travel adventure'}
                </p>
              </div>

              {/* Social Login */}
              <div className="space-y-3 mb-6">
                {socialLogins.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => navigate('/dashboard')}
                    className={`w-full p-4 rounded-xl bg-gradient-to-r ${social.color} hover:opacity-90 transition-opacity flex items-center justify-center gap-3 font-semibold`}
                  >
                    <span className="text-2xl">{social.icon}</span>
                    Continue with {social.name}
                  </button>
                ))}
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#0F172A] text-gray-400">Or continue with email</span>
                </div>
              </div>

              {/* Email/Password Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm mb-2 text-gray-300">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-500 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>

                {!isSignUp && (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-white/20 bg-white/5"
                      />
                      <span className="text-gray-400">Remember me</span>
                    </label>
                    <button type="button" className="text-violet-400 hover:text-violet-300">
                      Forgot password?
                    </button>
                  </div>
                )}

                <PrimaryButton type="submit" className="w-full" size="lg">
                  {isSignUp ? 'Sign Up' : 'Sign In'}
                </PrimaryButton>
              </form>

              {/* Toggle Sign Up/Login */}
              <div className="mt-6 text-center text-sm">
                <span className="text-gray-400">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                </span>
                {' '}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-violet-400 hover:text-violet-300 font-semibold"
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </div>

              {/* Terms */}
              {isSignUp && (
                <p className="mt-6 text-xs text-center text-gray-500">
                  By signing up, you agree to our{' '}
                  <button className="text-violet-400 hover:text-violet-300">Terms of Service</button>
                  {' '}and{' '}
                  <button className="text-violet-400 hover:text-violet-300">Privacy Policy</button>
                </p>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
