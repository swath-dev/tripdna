import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GlassCard } from '../components/glass-card';
import { PrimaryButton } from '../components/primary-button';
import { Sparkles, MapPin, Download, RotateCcw, Lock, Check } from 'lucide-react';
import { motion } from 'motion/react';
import * as Dialog from '@radix-ui/react-dialog';

export function ResultsPage() {
  const navigate = useNavigate();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const travelType = {
    name: 'Cultural Deep Diver',
    description: 'You seek authentic experiences and meaningful connections with local cultures.',
    color: 'from-violet-600 to-blue-600'
  };

  const scores = [
    { name: 'Budget Elasticity', value: 7, max: 10, color: 'from-blue-600 to-teal-600' },
    { name: 'Social Energy', value: 6, max: 10, color: 'from-violet-600 to-pink-600' },
    { name: 'Risk Tolerance', value: 8, max: 10, color: 'from-teal-600 to-green-600' }
  ];

  const travelVibe = {
    primary: 'Immersive & Authentic',
    secondary: 'Adventurous Explorer',
    traits: ['Culture-focused', 'Moderately social', 'Flexible budget', 'Spontaneous']
  };

  const destinations = [
    {
      name: 'Kyoto, Japan',
      match: 96,
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
      reason: 'Perfect for cultural immersion with temples, traditional tea houses, and authentic experiences.'
    },
    {
      name: 'Oaxaca, Mexico',
      match: 94,
      image: 'https://images.unsplash.com/photo-1518659095309-7b4c18b01548?w=800&q=80',
      reason: 'Rich indigenous culture, vibrant markets, and unique culinary traditions await.'
    },
    {
      name: 'Marrakech, Morocco',
      match: 91,
      image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80',
      reason: 'Sensory overload in the best way - souks, riads, and ancient storytelling culture.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-teal-600/10 blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="w-8 h-8 text-violet-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">
            TripDNA
          </span>
        </div>
        <PrimaryButton onClick={() => navigate('/dashboard')} variant="secondary">
          Back to Dashboard
        </PrimaryButton>
      </nav>

      <div className="relative z-10 px-8 py-12 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-teal-600/20 border border-white/20 mb-4">
            <span className="text-sm">Your Travel DNA Results</span>
          </div>
          <h1 className="text-6xl font-bold mb-4">
            You're a{' '}
            <span className={`bg-gradient-to-r ${travelType.color} bg-clip-text text-transparent`}>
              {travelType.name}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {travelType.description}
          </p>
        </motion.div>

        {/* Scores Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Your Travel Personality Scores</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {scores.map((score, index) => (
              <GlassCard key={index} className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold">{score.name}</h3>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                    {score.value}/{score.max}
                  </span>
                </div>
                <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(score.value / score.max) * 100}%` }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${score.color} rounded-full`}
                  />
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Travel Vibe */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Your Recommended Travel Vibe</h2>
          <GlassCard className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  {travelVibe.primary}
                </div>
                <div className="text-xl text-gray-300 mb-6">{travelVibe.secondary}</div>
                <div className="flex flex-wrap gap-3">
                  {travelVibe.traits.map((trait, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm"
                    >
                      <Check className="w-4 h-4 inline mr-2 text-green-400" />
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Destinations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Top 3 Suggested Destinations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <GlassCard key={index} hover className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 font-bold">
                    {dest.match}% Match
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-violet-400" />
                    {dest.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    <span className="font-semibold text-white">Why this matches you:</span> {dest.reason}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <PrimaryButton
            onClick={() => navigate('/itinerary')}
            size="lg"
            glow
          >
            Generate AI Itinerary
          </PrimaryButton>
          <PrimaryButton
            onClick={() => setShowUpgradeModal(true)}
            variant="secondary"
            size="lg"
          >
            <Lock className="w-5 h-5 mr-2" />
            Download Travel DNA PDF
          </PrimaryButton>
          <PrimaryButton
            onClick={() => navigate('/quiz')}
            variant="outline"
            size="lg"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Retake Quiz
          </PrimaryButton>
        </motion.div>
      </div>

      {/* Upgrade Modal */}
      <Dialog.Root open={showUpgradeModal} onOpenChange={setShowUpgradeModal}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md">
            <GlassCard className="p-8">
              <Dialog.Title className="text-3xl font-bold mb-4">
                Upgrade to Pro
              </Dialog.Title>
              <Dialog.Description className="text-gray-300 mb-6">
                Download your complete Travel DNA profile as a beautiful PDF. Includes detailed personality analysis and personalized recommendations.
              </Dialog.Description>
              <div className="space-y-4">
                <PrimaryButton
                  onClick={() => {
                    setShowUpgradeModal(false);
                    navigate('/pricing');
                  }}
                  className="w-full"
                  size="lg"
                >
                  View Pricing Plans
                </PrimaryButton>
                <PrimaryButton
                  onClick={() => setShowUpgradeModal(false)}
                  variant="outline"
                  className="w-full"
                >
                  Maybe Later
                </PrimaryButton>
              </div>
            </GlassCard>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
