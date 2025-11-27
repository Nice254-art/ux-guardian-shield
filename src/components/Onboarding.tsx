import { useState } from 'react';
import { Shield, Zap, Lock, PartyPopper } from 'lucide-react';

const steps = [
  {
    icon: Shield,
    title: 'Welcome to Umoja Shield!',
    description: 'Your personal AI-powered guardian against online harassment. We are here to help you reclaim your digital space.',
  },
  {
    icon: Zap,
    title: 'How It Works',
    description: 'Umoja Shield uses advanced AI to detect patterns of coordinated harassment and toxic behavior across your connected social platforms, without ever reading your private messages.',
  },
  {
    icon: Lock,
    title: 'Your Privacy is Our Priority',
    description: 'All analysis happens directly on your device. No personal data, messages, or contact information ever leaves your machine. Your privacy is non-negotiable.',
  },
  {
    icon: PartyPopper,
    title: 'You are all set!',
    description: 'You can now explore your dashboard and configure your settings. Umoja Shield is now actively monitoring for threats.',
  },
];

export default function Onboarding({ onFinish }) {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (isLastStep) {
      onFinish();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const { icon: Icon, title, description } = steps[currentStep];

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 ease-in-out">
        <div className="p-8 text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full">
              <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-3">{title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 min-h-[60px]">{description}</p>

          <div className="flex justify-center items-center space-x-2 mb-8">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentStep === index ? 'bg-blue-600 w-6' : 'bg-gray-300 dark:bg-gray-600'}`}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
             <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="px-6 py-3 text-lg font-semibold rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-6 py-3 text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              {isLastStep ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
