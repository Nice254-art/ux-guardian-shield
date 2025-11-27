import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Alerts from './pages/Alerts';
import Settings from './pages/Settings';
import { Menu } from 'lucide-react';

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
        <main className="flex-1 p-6 md:p-10 transition-all duration-300">
          <button 
            onClick={() => setSidebarOpen(!isSidebarOpen)} 
            className="md:hidden mb-4 p-2 rounded-md bg-gray-200 dark:bg-gray-700"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
      <Toaster position="top-right" richColors />
    </BrowserRouter>
  );
}
