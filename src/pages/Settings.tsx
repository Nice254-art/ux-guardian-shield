import { Twitter, MessageSquare, Facebook } from 'lucide-react';
import SensitivitySlider from '../components/SensitivitySlider';

const SettingsSection = ({ title, children }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="space-y-6">{children}</div>
    </div>
);

const ToggleSetting = ({ label, description, checked = true }) => (
    <div className="flex justify-between items-center">
        <div>
            <h4 className="font-semibold text-lg">{label}</h4>
            <p className="text-gray-500 dark:text-gray-400">{description}</p>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" defaultChecked={checked} />
            <div className="w-14 h-8 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
    </div>
);

const ConnectedAccount = ({ icon: Icon, name, username }) => (
    <div className="flex justify-between items-center bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
        <div className="flex items-center">
            <Icon className="w-6 h-6 mr-4 text-gray-600 dark:text-gray-300"/>
            <div>
                <h4 className="font-semibold text-lg">{name}</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">{username}</p>
            </div>
        </div>
        <button className="px-4 py-2 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition">Disconnect</button>
    </div>
);

export default function Settings() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold">Settings</h1>

      <SettingsSection title="Connected Accounts">
        <ConnectedAccount icon={Twitter} name="Twitter" username="@umoja_user" />
        <ConnectedAccount icon={MessageSquare} name="Reddit" username="u/umoja_user" />
        <ConnectedAccount icon={Facebook} name="Facebook" username="/umoja.user" />
        <button className="w-full py-3 mt-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Connect New Account</button>
      </SettingsSection>

      <SettingsSection title="Sensitivity Level">
        <p className="text-gray-500 dark:text-gray-400 mb-4">Adjust the AI's sensitivity for detecting threats. Higher sensitivity may result in more false positives.</p>
        <SensitivitySlider />
      </SettingsSection>

      <SettingsSection title="Notification Preferences">
        <ToggleSetting label="Email Alerts" description="Receive email summaries of detected threats." />
        <ToggleSetting label="Desktop Notifications" description="Get real-time alerts on your desktop." />
      </SettingsSection>

      <SettingsSection title="Privacy & Security">
        <div className="flex justify-between items-center">
            <div>
                <h4 className="font-semibold text-lg">Manage Blocklist</h4>
                <p className="text-gray-500 dark:text-gray-400">View and manage accounts you have blocked.</p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Manage</button>
        </div>
         <div className="flex justify-between items-center">
            <div>
                <h4 className="font-semibold text-lg">Privacy Policy</h4>
                <p className="text-gray-500 dark:text-gray-400">Read our commitment to your privacy.</p>
            </div>
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">View</button>
        </div>
      </SettingsSection>
    </div>
  );
}
