
import React from 'react';

interface WindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  actions?: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ title, children, className = '', actions }) => {
  return (
    <div className={`glassmorphism rounded-xl shadow-macos flex flex-col ${className}`}>
      <div className="flex items-center px-3 py-2 border-b border-white/20 dark:border-white/10 flex-shrink-0">
        <div className="flex items-center gap-2 w-14">
          <span className="w-3 h-3 bg-brand-red rounded-full"></span>
          <span className="w-3 h-3 bg-brand-yellow rounded-full"></span>
          <span className="w-3 h-3 bg-brand-green rounded-full"></span>
        </div>
        <div className="flex-grow text-center">
          <h2 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
        </div>
        <div className="w-14 flex items-center justify-end">{actions}</div>
      </div>
      <div className="flex-grow overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Window;
