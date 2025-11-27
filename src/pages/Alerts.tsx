import { AlertTriangle, Twitter, MessageSquare } from 'lucide-react';

const AlertItem = ({ icon: Icon, platform, content, time }) => (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md flex items-start space-x-4">
        <div>
            <Icon className="w-8 h-8 text-red-500" />
        </div>
        <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
                <h3 className="font-bold text-lg text-red-500">Potential Threat Detected</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{time}</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-2">{content}</p>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <platform.icon className="w-4 h-4 mr-2" />
                <span>{platform.name}</span>
            </div>
        </div>
    </div>
);

export default function Alerts() {
  const alerts = [
    {
        icon: AlertTriangle,
        platform: { name: 'Twitter', icon: Twitter },
        content: 'Detected a coordinated campaign involving multiple accounts with similar messaging targeting your recent posts.',
        time: '2 hours ago'
    },
    {
        icon: AlertTriangle,
        platform: { name: 'Reddit', icon: MessageSquare },
        content: 'Unusual downvote activity on your comments in r/worldnews, potentially indicating a targeted action.',
        time: '5 hours ago'
    }
  ];

  return (
    <div>
        <h1 className="text-4xl font-bold mb-8">Threat Alerts</h1>
        <div className="space-y-6">
            {alerts.map((alert, index) => <AlertItem key={index} {...alert} />)}
        </div>
    </div>
  );
}
