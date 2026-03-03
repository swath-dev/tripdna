import { useNavigate } from 'react-router';
import { GlassCard } from '../components/glass-card';
import { PrimaryButton } from '../components/primary-button';
import { Compass, Brain, Map, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function LandingPage() {
  const navigate = useNavigate();

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    {
      icon: Brain,
      title: 'Personality Mapping',
      description: 'Advanced AI analyzes your travel preferences to create your unique Travel DNA profile.'
    },
    {
      icon: Compass,
      title: 'Smart Destination Matching',
      description: 'Get perfectly matched destinations based on your personality, budget, and travel style.'
    },
    {
      icon: Map,
      title: 'AI Itinerary Builder',
      description: 'Personalized day-by-day itineraries crafted specifically for how you love to travel.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
      {/* Animated Background Gradient */}
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
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/20 via-violet-600/20 to-teal-600/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-violet-600/20 via-blue-600/20 to-teal-600/20 blur-3xl"
        />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-violet-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">
            TripDNA
          </span>
        </div>
        <div className="flex gap-6 items-center">
          <button className="text-gray-300 hover:text-white transition-colors">About</button>
          <button onClick={() => navigate('/pricing')} className="text-gray-300 hover:text-white transition-colors">Pricing</button>
          <button onClick={() => navigate('/login')} className="text-gray-300 hover:text-white transition-colors">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-8 py-20 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Discover How You're
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">
              Meant to Travel
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            AI-powered travel personality engine that maps your unique travel DNA and matches you with perfect destinations.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <PrimaryButton
              onClick={() => navigate('/quiz')}
              size="lg"
              glow
            >
              Start My Travel Profile
            </PrimaryButton>
            <PrimaryButton
              onClick={scrollToFeatures}
              variant="secondary"
              size="lg"
            >
              See How It Works
            </PrimaryButton>
          </div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: '50K+', label: 'Travelers' },
            { value: '180+', label: 'Destinations' },
            { value: '95%', label: 'Satisfaction' }
          ].map((stat, i) => (
            <GlassCard key={i} className="p-6">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 mt-2">{stat.label}</div>
            </GlassCard>
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 px-8 py-20 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 text-lg">Three powerful features to transform your travel planning</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <GlassCard hover className="p-8 h-full">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 via-violet-600 to-teal-600 flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 px-8 py-20 max-w-4xl mx-auto">
        <GlassCard className="p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Find Your Travel DNA?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join thousands of travelers who've discovered their perfect travel style
          </p>
          <PrimaryButton onClick={() => navigate('/quiz')} size="lg">
            Get Started Free
          </PrimaryButton>
        </GlassCard>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-8 py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-violet-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">
              TripDNA
            </span>
          </div>
          <div className="flex gap-8 text-gray-400">
            <button className="hover:text-white transition-colors">About</button>
            <button onClick={() => navigate('/pricing')} className="hover:text-white transition-colors">Pricing</button>
            <button onClick={() => navigate('/login')} className="hover:text-white transition-colors">Login</button>
            <button className="hover:text-white transition-colors">Privacy</button>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-8">
          © 2026 TripDNA. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
