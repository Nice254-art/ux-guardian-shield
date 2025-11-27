import { Link, useLocation } from 'react-router-dom';
import { Shield, Bell, Settings as SettingsIcon, LifeBuoy, Sun, Moon, X } from 'lucide-react';

const NavLink = ({ to, icon: Icon, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-colors duration-200 ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      <Icon className="w-6 h-6 mr-4" />
      {children}
    </Link>
  );
};

export default function Sidebar({ isOpen, setIsOpen }) {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <aside className={`bg-white dark:bg-gray-800 shadow-lg flex flex-col justify-between p-6 transition-all duration-300 z-20 ${isOpen ? 'w-72' : 'w-0 p-0'} overflow-hidden md:w-72 md:p-6`}>
      <div>
        <div className="flex items-center justify-between mb-10">
            <div className="flex items-center">
                <Shield className="w-10 h-10 text-blue-600"/>
                <h1 className="text-2xl font-bold ml-3 whitespace-nowrap">Umoja Shield</h1>
            </div>
            <button onClick={() => setIsOpen(false)} className="md:hidden p-1">
                <X className="w-6 h-6" />
            </button>
        </div>
        <nav className="space-y-4">
          <NavLink to="/" icon={Shield}>Dashboard</NavLink>
          <NavLink to="/alerts" icon={Bell}>Threat Alerts</NavLink>
          <NavLink to="/settings" icon={SettingsIcon}>Settings</NavLink>
        </nav>
      </div>
      <div>
        <button 
          onClick={toggleTheme}
          className="flex items-center w-full px-4 py-3 text-lg font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap"
        >
          <Sun className="w-6 h-6 mr-4 dark:hidden" />
          <Moon className="w-6 h-6 mr-4 hidden dark:inline" />
          Toggle Theme
        </button>
        <a href="#" className="flex items-center px-4 py-3 mt-2 text-lg font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 whitespace-nowrap">
            <LifeBuoy className="w-6 h-6 mr-4"/>
            Help & Support
        </a>
      </div>
    </aside>
  );
}
