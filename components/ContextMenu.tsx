
import React, { useEffect, useRef } from 'react';

export interface MenuItem {
  label: string;
  action: () => void;
  icon: React.FC<{ className?: string }>;
  disabled?: boolean;
  isSeparator?: boolean;
}

interface ContextMenuProps {
  x: number;
  y: number;
  show: boolean;
  onClose: () => void;
  items: MenuItem[];
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, show, onClose, items }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!show) {
    return null;
  }
  
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const menuWidth = 240;
  const menuHeight = items.length * 36 + (items.filter(i => i.isSeparator).length * 5);
  const adjustedX = x + menuWidth > screenWidth ? screenWidth - menuWidth - 10 : x;
  const adjustedY = y + menuHeight > screenHeight ? screenHeight - menuHeight - 10 : y;

  return (
    <div
      ref={menuRef}
      className="fixed z-50 w-60 glassmorphism rounded-lg shadow-lg p-1.5"
      style={{ top: `${adjustedY}px`, left: `${adjustedX}px` }}
      onContextMenu={(e) => e.preventDefault()}
    >
      <ul className="space-y-1">
        {items.map((item, index) => {
          if (item.isSeparator) {
            return <hr key={`sep-${index}`} className="border-t border-gray-400/50 dark:border-gray-500/50 my-1" />;
          }
          const Icon = item.icon;
          return (
            <li key={item.label}>
              <button
                onClick={() => {
                  if(!item.disabled) {
                    item.action();
                    onClose();
                  }
                }}
                disabled={item.disabled}
                className="w-full flex items-center gap-3 px-3 py-1.5 text-sm text-gray-900 dark:text-gray-100 rounded-md hover:bg-brand-primary hover:text-white disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-gray-900 dark:disabled:hover:text-gray-100 transition-colors"
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContextMenu;