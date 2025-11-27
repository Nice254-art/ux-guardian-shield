import { useState, useEffect } from 'react';
import { ShieldCheck, Lock, UserX, CheckCircle, BarChart2, HelpCircle } from 'lucide-react';
import Onboarding from '../components/Onboarding';

const InfoCard = ({ icon: Icon, title, children, color }) => (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex`}>
        <div className={`mr-5 text-${color}-500`}>
            <Icon className="w-8 h-8" />
        </div>
        <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <div className="text-gray-600 dark:text-gray-400 space-y-2">{children}</div>
        </div>
    </div>
);

export default function Dashboard() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const onboardingComplete = localStorage.getItem('onboardingComplete');
    if (!onboardingComplete) {
      setShowOnboarding(true);
    }
  }, []);

  const handleOnboardingFinish = () => {
    localStorage.setItem('onboardingComplete', 'true');
    setShowOnboarding(false);
  };

  return (
    <div className="space-y-8">
      {showOnboarding && <Onboarding onFinish={handleOnboardingFinish} />}

        <div className="flex justify-between items-center">
            <h1 className="text-4xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
                <button onClick={() => setShowOnboarding(true)} className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <HelpCircle className="w-5 h-5"/>
                    Show Onboarding Guide
                </button>
                <div className="flex items-center p-3 rounded-lg bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300">
                    <CheckCircle className="w-6 h-6 mr-2"/>
                    <span className="font-semibold">Umoja Shield is Active</span>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard title="Real-time Monitoring" icon={BarChart2} color="blue">
                <p>No active threats have been detected in the last 24 hours.</p>
            </InfoCard>

            <InfoCard title="Security Status" icon={ShieldCheck} color="green">
                <p className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500"/> End-to-End Encryption</p>
                <p className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500"/> Local Data Processing</p>
            </InfoCard>

            <InfoCard title="Privacy Overview" icon={UserX} color="purple">
                <p className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500"/> On-Device Analysis</p>
                <p className="flex items-center"><CheckCircle className="w-5 h-5 mr-2 text-green-500"/> No Personal Data Collected</p>
            </InfoCard>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
            <p className="text-gray-500 dark:text-gray-400">No unusual activity to report. Your accounts are secure.</p>
        </div>
    </div>
  );
}
