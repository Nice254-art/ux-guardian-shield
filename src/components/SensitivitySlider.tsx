import { useState } from 'react';

export default function SensitivitySlider() {
  const [level, setLevel] = useState(2);
  const levels = ['Low', 'Medium', 'High'];

  return (
    <div>
        <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
                {levels.map((label, index) => (
                    <div key={label} className="text-center">
                        <span className={`text-xs uppercase font-semibold ${level >= index ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`}>{label}</span>
                    </div>
                ))}
            </div>
            <div className="relative w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                <div style={{ width: `${(level / (levels.length - 1)) * 100}%` }} className="absolute h-2 rounded-full bg-blue-600"></div>
                <div className="absolute w-full top-0">
                    <div className="flex justify-between">
                    {levels.map((_, index) => (
                        <button key={index} onClick={() => setLevel(index)} className="w-6 h-6 -mt-2 rounded-full bg-white dark:bg-gray-300 border-2 border-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all" style={{ transform: 'translateX(-50%)' }}></button>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
