
import React, { useState } from 'react';
import type { AnalysisResult, Suggestion, Optimization } from '../types';
import { LightbulbIcon, WrenchIcon, ZapIcon, SparklesIcon } from './Icons';

interface OutputDisplayProps {
  result: AnalysisResult | null;
  isLoading: boolean;
  error: string | null;
}

type Tab = 'explanation' | 'suggestions' | 'optimizations';

const DiffViewer: React.FC<{ diff: string }> = ({ diff }) => {
  const lines = diff.split('\\n');
  return (
    <pre className="bg-gray-100 dark:bg-neutral-800 rounded-lg p-3 font-mono text-xs overflow-x-auto border border-gray-200 dark:border-neutral-700">
      {lines.map((line, index) => {
        let color = 'text-gray-900 dark:text-gray-200';
        if (line.startsWith('+')) color = 'text-green-600 dark:text-green-500';
        if (line.startsWith('-')) color = 'text-red-600 dark:text-red-500';
        if (line.startsWith('@@') || line.startsWith('---') || line.startsWith('+++')) color = 'text-yellow-600 dark:text-yellow-500';
        return <div key={index} className={color}>{line}</div>;
      })}
    </pre>
  );
};

const OutputDisplay: React.FC<OutputDisplayProps> = ({ result, isLoading, error }) => {
  const [activeTab, setActiveTab] = useState<Tab>('explanation');

  if (isLoading) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center p-6 h-full">
        <svg className="animate-spin h-8 w-8 text-brand-primary mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <p className="text-gray-900 dark:text-gray-100 font-semibold">AI is thinking...</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Analyzing your code.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-grow p-6 text-red-600 dark:text-red-500 h-full">
        <h3 className="font-bold mb-2">Analysis Failed</h3>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center p-6 h-full">
        <SparklesIcon className="w-10 h-10 text-gray-400 dark:text-gray-500 mb-3"/>
        <p className="text-gray-900 dark:text-gray-100 font-semibold">Ready to Analyze</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 text-center">Click "Run & Analyze" to see AI insights.</p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <div className="p-2 flex-shrink-0">
        <div className="flex bg-gray-200/70 dark:bg-neutral-800/70 p-1 rounded-lg">
          <TabButton icon={<LightbulbIcon />} label="Explanation" isActive={activeTab === 'explanation'} onClick={() => setActiveTab('explanation')} />
          <TabButton icon={<WrenchIcon />} label="Suggestions" count={result.suggestions.length} isActive={activeTab === 'suggestions'} onClick={() => setActiveTab('suggestions')} />
          <TabButton icon={<ZapIcon />} label="Optimizations" count={result.optimizations.length} isActive={activeTab === 'optimizations'} onClick={() => setActiveTab('optimizations')} />
        </div>
      </div>
      <div className="px-3 pb-3 pt-0 overflow-y-auto flex-grow">
        {activeTab === 'explanation' && (
          <div className="space-y-4">
            <p className="text-gray-800 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">{result.explanation}</p>
          </div>
        )}
        {activeTab === 'suggestions' && (
          <div className="space-y-4">
            {result.suggestions.length > 0 ? result.suggestions.map((s, i) => (
              <div key={i} className="border border-gray-200 dark:border-neutral-700 rounded-lg overflow-hidden">
                <h4 className="font-semibold p-3 bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-gray-100">{s.title}</h4>
                <DiffViewer diff={s.diff} />
              </div>
            )) : <p className="text-gray-500 dark:text-gray-400 text-center p-4">No specific fix suggestions found.</p>}
          </div>
        )}
        {activeTab === 'optimizations' && (
          <div className="space-y-4">
             {result.optimizations.length > 0 ? result.optimizations.map((o, i) => (
              <div key={i} className="border border-gray-200 dark:border-neutral-700 rounded-lg">
                <h4 className="font-semibold p-3 bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-gray-100">{o.title}</h4>
                <p className="text-sm p-3 text-gray-800 dark:text-gray-300">{o.description}</p>
                <DiffViewer diff={o.diff} />
              </div>
            )) : <p className="text-gray-500 dark:text-gray-400 text-center p-4">No specific optimizations found.</p>}
          </div>
        )}
      </div>
    </div>
  );
};

interface TabButtonProps {
    icon: React.ReactNode;
    label: string;
    isActive: boolean;
    onClick: () => void;
    count?: number;
}

const TabButton: React.FC<TabButtonProps> = ({ icon, label, isActive, onClick, count }) => {
    const baseClasses = "flex-1 flex items-center justify-center gap-2 px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-md";
    const activeClasses = "bg-white/80 dark:bg-neutral-900/80 text-brand-primary dark:text-blue-400 shadow-sm";
    const inactiveClasses = "text-gray-800 dark:text-gray-300 hover:bg-black/5 dark:hover:bg-white/5";

    return (
        <button onClick={onClick} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
            {icon}
            <span>{label}</span>
            {count !== undefined && count > 0 && <span className={`text-xs px-1.5 py-0.5 rounded-full ${isActive ? 'bg-brand-primary text-white' : 'bg-gray-400/50 dark:bg-neutral-600/50 text-gray-900 dark:text-gray-100'}`}>{count}</span>}
        </button>
    )
}


export default OutputDisplay;