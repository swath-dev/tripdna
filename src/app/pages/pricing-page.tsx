import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GlassCard } from '../components/glass-card';
import { PrimaryButton } from '../components/primary-button';
import { Sparkles, Check, Zap, Crown, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import * as Dialog from '@radix-ui/react-dialog';

export function PricingPage() {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    {
      name: 'Free',
      icon: Sparkles,
      price: '$0',
      period: 'forever',
      description: 'Perfect for trying out TripDNA',
      features: [
        'Basic Travel DNA Profile',
        '1 Destination Match',
        'Community Support',
        'Basic Personality Analysis'
      ],
      limitations: [
        'No PDF Downloads',
        'No Detailed Itineraries',
        'Limited Destinations'
      ],
      buttonText: 'Current Plan',
      highlighted: false,
      disabled: true
    },
    {
      name: 'Pro',
      icon: Zap,
      price: '$12',
      period: 'per trip',
      description: 'For the occasional adventurer',
      features: [
        'Complete Travel DNA Profile',
        'Top 10 Destination Matches',
        '7-Day Detailed Itinerary',
        'PDF Download',
        'Hotel Recommendations',
        'Flight Price Tracking',
        'Priority Support',
        '30-Day Itinerary Access'
      ],
      buttonText: 'Upgrade to Pro',
      highlighted: true,
      disabled: false
    },
    {
      name: 'Explorer',
      icon: Crown,
      price: '$29',
      period: 'per month',
      description: 'For serious travel enthusiasts',
      features: [
        'Everything in Pro',
        'Unlimited Destination Matches',
        'Unlimited Itineraries',
        'Advanced AI Recommendations',
        'Real-time Collaboration',
        'Exclusive Travel Deals',
        'Concierge Support',
        'Lifetime Profile Access',
        'Early Access to New Features'
      ],
      buttonText: 'Go Explorer',
      highlighted: false,
      disabled: false
    }
  ];

  const handleUpgrade = (planName: string) => {
    setSelectedPlan(planName);
    setShowConfirmation(true);
  };

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
        <PrimaryButton onClick={() => navigate(-1)} variant="secondary">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </PrimaryButton>
      </nav>

      <div className="relative z-10 px-8 py-12 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-teal-600/20 border border-white/20 mb-4">
            <span className="text-sm">Flexible Pricing Plans</span>
          </div>
          <h1 className="text-6xl font-bold mb-4">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">
              Adventure Level
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From casual explorers to travel addicts, we've got a plan for everyone
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={plan.highlighted ? 'md:-mt-8' : ''}
            >
              <GlassCard
                className={`p-8 h-full flex flex-col relative ${
                  plan.highlighted ? 'border-2 border-violet-500' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-violet-600 to-teal-600 flex items-center justify-center mb-4">
                    <plan.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-gray-400">/{plan.period}</span>
                  </div>
                </div>

                <div className="flex-1 mb-6">
                  <div className="space-y-3 mb-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  {plan.limitations && (
                    <div className="space-y-2 pt-4 border-t border-white/10">
                      {plan.limitations.map((limitation, i) => (
                        <div key={i} className="flex items-start gap-3 opacity-50">
                          <span className="text-sm line-through">{limitation}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <PrimaryButton
                  onClick={() => handleUpgrade(plan.name)}
                  variant={plan.highlighted ? 'primary' : 'secondary'}
                  className="w-full"
                  disabled={plan.disabled}
                  glow={plan.highlighted}
                >
                  {plan.buttonText}
                </PrimaryButton>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Features Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <GlassCard className="p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Upgrade?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">
                  10x
                </div>
                <p className="text-gray-400">More destination matches</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-teal-400 bg-clip-text text-transparent mb-2">
                  AI-Powered
                </div>
                <p className="text-gray-400">Personalized itineraries</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <p className="text-gray-400">Priority support</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400">
            Have questions?{' '}
            <button className="text-violet-400 hover:text-violet-300 underline">
              View our FAQ
            </button>
            {' '}or{' '}
            <button className="text-violet-400 hover:text-violet-300 underline">
              contact support
            </button>
          </p>
        </motion.div>
      </div>

      {/* Payment Confirmation Modal */}
      <Dialog.Root open={showConfirmation} onOpenChange={setShowConfirmation}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md">
            <GlassCard className="p-8 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-10 h-10 text-white" />
              </motion.div>
              <Dialog.Title className="text-3xl font-bold mb-4">
                Payment Confirmed!
              </Dialog.Title>
              <Dialog.Description className="text-gray-300 mb-6">
                You've successfully upgraded to {selectedPlan}. Get ready to unlock your full travel potential!
              </Dialog.Description>
              <div className="space-y-3">
                <PrimaryButton
                  onClick={() => {
                    setShowConfirmation(false);
                    navigate('/dashboard');
                  }}
                  className="w-full"
                  size="lg"
                >
                  Go to Dashboard
                </PrimaryButton>
                <PrimaryButton
                  onClick={() => {
                    setShowConfirmation(false);
                    navigate('/results');
                  }}
                  variant="secondary"
                  className="w-full"
                >
                  View My Profile
                </PrimaryButton>
              </div>
            </GlassCard>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
