import { useState } from 'react';
import { useNavigate } from 'react-router';
import { GlassCard } from '../components/glass-card';
import { PrimaryButton } from '../components/primary-button';
import { Sparkles, ArrowLeft, ArrowRight, X } from 'lucide-react';
import * as Progress from '@radix-ui/react-progress';
import * as Slider from '@radix-ui/react-slider';
import * as Switch from '@radix-ui/react-switch';
import { motion, AnimatePresence } from 'motion/react';

interface QuizAnswer {
  question1?: string;
  question2?: number;
  question3?: string;
  question4?: string;
  question5?: string;
}

export function QuizPage() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<QuizAnswer>({
    question2: 5
  });

  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const questions = [
    {
      id: 'question1',
      title: 'How do you prefer to travel?',
      type: 'choice',
      options: [
        { value: 'structured', label: 'Structured Plans', description: 'I like detailed itineraries' },
        { value: 'spontaneous', label: 'Go with the Flow', description: 'I prefer spontaneous adventures' }
      ]
    },
    {
      id: 'question2',
      title: 'What\'s your budget flexibility?',
      type: 'slider',
      min: 1,
      max: 10,
      description: 'From budget-conscious to luxury'
    },
    {
      id: 'question3',
      title: 'How do you handle crowded places?',
      type: 'choice',
      options: [
        { value: 'low', label: 'Avoid Crowds', description: 'I prefer quiet, peaceful spots' },
        { value: 'medium', label: 'Some crowds OK', description: 'Balanced experiences' },
        { value: 'high', label: 'Love the Energy', description: 'The more people, the better' }
      ]
    },
    {
      id: 'question4',
      title: 'Food preference while traveling?',
      type: 'toggle',
      options: [
        { value: 'street', label: 'Street Food Explorer' },
        { value: 'fine', label: 'Fine Dining Enthusiast' }
      ]
    },
    {
      id: 'question5',
      title: 'When are you most active?',
      type: 'toggle',
      options: [
        { value: 'morning', label: 'Early Morning Person' },
        { value: 'night', label: 'Nightlife Lover' }
      ]
    }
  ];

  const currentQuestion = questions[currentStep - 1];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/loading');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateAnswer = (questionId: string, value: any) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const isAnswered = answers[currentQuestion.id as keyof QuizAnswer] !== undefined;

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
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
          Exit Quiz
        </button>
      </nav>

      {/* Progress Bar */}
      <div className="relative z-10 px-8 max-w-3xl mx-auto mb-8">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Step {currentStep} of {totalSteps}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress.Root
          className="relative h-3 w-full overflow-hidden rounded-full bg-white/10"
          value={progress}
        >
          <Progress.Indicator
            className="h-full bg-gradient-to-r from-blue-600 via-violet-600 to-teal-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </Progress.Root>
      </div>

      {/* Question Card */}
      <div className="relative z-10 px-8 max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <GlassCard className="p-12">
              <h2 className="text-4xl font-bold mb-6">{currentQuestion.title}</h2>
              {currentQuestion.description && (
                <p className="text-gray-400 mb-8">{currentQuestion.description}</p>
              )}

              {/* Choice Type */}
              {currentQuestion.type === 'choice' && (
                <div className="space-y-4">
                  {currentQuestion.options?.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateAnswer(currentQuestion.id, option.value)}
                      className={`
                        w-full p-6 rounded-xl border-2 transition-all text-left
                        ${answers[currentQuestion.id as keyof QuizAnswer] === option.value
                          ? 'border-violet-500 bg-violet-500/20'
                          : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                        }
                      `}
                    >
                      <div className="font-semibold text-lg">{option.label}</div>
                      {option.description && (
                        <div className="text-gray-400 text-sm mt-1">{option.description}</div>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Slider Type */}
              {currentQuestion.type === 'slider' && (
                <div className="py-8">
                  <div className="flex justify-between mb-4">
                    <span className="text-gray-400">Budget-Conscious</span>
                    <span className="text-2xl font-bold text-violet-400">
                      {answers.question2 || 5}
                    </span>
                    <span className="text-gray-400">Luxury</span>
                  </div>
                  <Slider.Root
                    className="relative flex items-center select-none touch-none w-full h-5"
                    value={[answers.question2 || 5]}
                    onValueChange={(value) => updateAnswer('question2', value[0])}
                    min={1}
                    max={10}
                    step={1}
                  >
                    <Slider.Track className="bg-white/10 relative grow rounded-full h-2">
                      <Slider.Range className="absolute bg-gradient-to-r from-blue-600 via-violet-600 to-teal-600 rounded-full h-full" />
                    </Slider.Track>
                    <Slider.Thumb
                      className="block w-6 h-6 bg-white rounded-full shadow-lg hover:bg-violet-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                      aria-label="Budget"
                    />
                  </Slider.Root>
                </div>
              )}

              {/* Toggle Type */}
              {currentQuestion.type === 'toggle' && (
                <div className="grid grid-cols-2 gap-6">
                  {currentQuestion.options?.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => updateAnswer(currentQuestion.id, option.value)}
                      className={`
                        p-8 rounded-xl border-2 transition-all
                        ${answers[currentQuestion.id as keyof QuizAnswer] === option.value
                          ? 'border-violet-500 bg-violet-500/20'
                          : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                        }
                      `}
                    >
                      <div className="font-semibold text-lg text-center">{option.label}</div>
                    </button>
                  ))}
                </div>
              )}
            </GlassCard>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <PrimaryButton
                onClick={handleBack}
                variant="secondary"
                disabled={currentStep === 1}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
              </PrimaryButton>
              <PrimaryButton
                onClick={handleNext}
                disabled={!isAnswered}
              >
                {currentStep === totalSteps ? 'Generate My Travel DNA' : 'Next'}
                {currentStep < totalSteps && <ArrowRight className="w-5 h-5 ml-2" />}
              </PrimaryButton>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}