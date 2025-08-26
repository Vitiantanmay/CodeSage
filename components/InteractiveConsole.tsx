
import React from 'react';
import { ClockIcon } from './Icons';

interface InteractiveConsoleProps {
  output: string[];
  error: string | null;
  executionTime: number | null;
  stdin: string;
  onStdinChange: (value: string) => void;
  isLoading: boolean;
}

const InteractiveConsole: React.FC<InteractiveConsoleProps> = ({ output, error, executionTime, stdin, onStdinChange, isLoading }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Output Area */}
      <div className="flex-grow p-3 font-mono text-sm overflow-y-auto text-gray-900 dark:text-gray-100">
        {output.length === 0 && !error && !isLoading && <span className="text-gray-500 dark:text-gray-400">Console output will appear here...</span>}
        {output.map((line, index) => (
          <div key={index} className="whitespace-pre-wrap">{`> ${line}`}</div>
        ))}
        {error && <div className="text-red-600 dark:text-red-500 whitespace-pre-wrap">{error}</div>}
      </div>

      {/* Execution Time */}
      {executionTime !== null && (
          <div className="flex items-center justify-end gap-1.5 text-xs text-gray-500 dark:text-gray-400 px-3 py-1 border-t border-black/10 dark:border-white/10 flex-shrink-0">
            <ClockIcon />
            <span>Finished in {executionTime.toFixed(2)} ms</span>
          </div>
      )}

      {/* Input Area */}
      <div className="border-t border-black/10 dark:border-white/10 p-3 bg-black/5 dark:bg-white/5 flex-shrink-0">
        <label htmlFor="stdin" className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-2">
          Input (stdin) - Each line is a separate input for prompts or readers.
        </label>
        <textarea
          id="stdin"
          value={stdin}
          onChange={(e) => onStdinChange(e.target.value)}
          disabled={isLoading}
          placeholder="Enter input for your code here..."
          className="w-full h-24 bg-white/80 dark:bg-neutral-800/80 font-mono text-sm text-gray-900 dark:text-gray-100 border border-gray-300/80 dark:border-neutral-600/80 rounded-md p-2 focus:ring-2 focus:ring-brand-primary focus:outline-none resize-y"
          spellCheck="false"
        />
      </div>
    </div>
  );
};

export default InteractiveConsole;