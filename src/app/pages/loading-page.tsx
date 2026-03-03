import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Sparkles, Brain, Compass, Zap } from 'lucide-react';

export function LoadingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/results');
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const steps = [
    { icon: Brain, label: 'Analyzing personality traits', delay: 0 },
    { icon: Compass, label: 'Mapping travel preferences', delay: 1 },
    { icon: Zap, label: 'Matching destinations', delay: 2 },
    { icon: Sparkles, label: 'Generating your Travel DNA', delay: 3 }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-600 via-violet-600 to-teal-600 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8">
        {/* Animated Logo */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-12 inline-block"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 via-violet-600 to-teal-600 flex items-center justify-center shadow-2xl shadow-violet-600/50">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
        </motion.div>

        <h1 className="text-5xl font-bold mb-4">
          Analyzing Your Travel Personality
        </h1>
        <p className="text-gray-400 text-xl mb-12">
          This will only take a moment...
        </p>

        {/* Progress Steps */}
        <div className="max-w-md mx-auto space-y-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: step.delay, duration: 0.5 }}
              className="flex items-center gap-4"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  delay: step.delay,
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/30 to-violet-600/30 border border-white/20 flex items-center justify-center"
              >
                <step.icon className="w-6 h-6 text-violet-400" />
              </motion.div>
              <div className="flex-1 text-left">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: step.delay + 0.5, duration: 0.8 }}
                  className="h-2 bg-gradient-to-r from-blue-600 via-violet-600 to-teal-600 rounded-full"
                />
                <p className="text-gray-400 mt-2">{step.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estimated Time */}
        <div className="text-gray-500 text-sm">
          Estimated time: 3-5 seconds
        </div>
      </div>
    </div>
  );
}
