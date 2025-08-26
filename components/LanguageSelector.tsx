
import React, { useState, useRef, useEffect } from 'react';
import type { Language } from '../types';
import { LANGUAGES } from '../constants';

interface LanguageSelectorProps {
  selected: Language;
  onChange: (language: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const handleSelect = (language: Language) => {
    onChange(language);
    setIsOpen(false);
  };
  
  const SelectedIcon = selected.icon;

  return (
    <div className="relative w-48" ref={wrapperRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 bg-gray-200/70 dark:bg-neutral-700/70 border border-gray-300/80 dark:border-neutral-600/80 text-gray-900 dark:text-gray-100 text-sm rounded-md focus:ring-2 focus:ring-brand-primary focus:border-brand-primary py-2 pl-3 pr-10 outline-none cursor-pointer"
      >
        <SelectedIcon className="w-5 h-5" />
        <span className="flex-grow text-left font-medium">{selected.label}</span>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
            <svg className={`fill-current h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full glassmorphism rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none p-1">
          {LANGUAGES.map((lang) => {
            const LangIcon = lang.icon;
            return (
              <button
                key={lang.value}
                onClick={() => handleSelect(lang)}
                className="w-full flex items-center gap-2 p-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-brand-primary/80 hover:text-white rounded-md cursor-pointer"
              >
                <LangIcon className="w-5 h-5" />
                {lang.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;