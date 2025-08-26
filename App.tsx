
import React, { useState, useCallback, MouseEvent } from 'react';
import { analyzeCode, simulateExecution } from './services/geminiService';
import type { AnalysisResult, Language } from './types';
import { LANGUAGES } from './constants';
import Editor from './components/CodeInput';
import LanguageSelector from './components/LanguageSelector';
import ActionButton from './components/ActionButton';
import OutputDisplay from './components/OutputDisplay';
import Footer from './components/Footer';
import InteractiveConsole from './components/InteractiveConsole';
import { PlayIcon, TrashIcon, ClipboardIcon, ArrowPathIcon } from './components/Icons';
import Window from './components/Window';
import ContextMenu, { MenuItem } from './components/ContextMenu';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const defaultCode = '// Use window.prompt("Enter your name") to get user input for JS/TS\nconst name = window.prompt("What is your name?");\nconsole.log("Hello, " + name);';
  
  const [code, setCode] = useState<string>(defaultCode);
  const [language, setLanguage] = useState<Language>(LANGUAGES[1]); // Default to JavaScript
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [runtimeError, setRuntimeError] = useState<string | null>(null);
  const [executionTime, setExecutionTime] = useState<number | null>(null);
  const [stdin, setStdin] = useState<string>('World');
  const [contextMenu, setContextMenu] = useState<{ show: boolean; x: number; y: number }>({ show: false, x: 0, y: 0 });


  const handleRunAndAnalyze = useCallback(async () => {
    setIsLoading(true);
    setApiError(null);
    setAnalysisResult(null);
    setConsoleOutput([]);
    setRuntimeError(null);
    setExecutionTime(null);

    let capturedError: string | null = null;
    let startTime = 0;
    let endTime = 0;

    if (language.value === 'javascript' || language.value === 'typescript') {
      const logs: string[] = [];
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        logs.push(args.map(arg => typeof arg === 'string' ? arg : JSON.stringify(arg, null, 2)).join(' '));
      };

      const inputLines = stdin.split('\n').reverse();
      const originalPrompt = window.prompt;
      window.prompt = (message?: string) => {
        if (message) {
          logs.push(`(prompt) ${message}`);
        }
        if (inputLines.length > 0) {
            return inputLines.pop()!;
        }
        return null;
      };

      try {
        startTime = performance.now();
        new Function(code)();
      } catch (err) {
        if (err instanceof Error) {
          capturedError = `${err.name}: ${err.message}`;
          setRuntimeError(capturedError);
        }
      } finally {
        endTime = performance.now();
        console.log = originalConsoleLog;
        window.prompt = originalPrompt;
        setConsoleOutput(logs);
        setExecutionTime(endTime - startTime);
      }
    } else {
      setConsoleOutput([`Simulating execution for ${language.label}...`]);
      try {
        startTime = performance.now();
        const simulation = await simulateExecution(code, language.value, stdin);
        endTime = performance.now();

        if (simulation.error) {
          capturedError = simulation.error;
          setRuntimeError(capturedError);
          setConsoleOutput([]);
        } else {
          setConsoleOutput(simulation.output ? simulation.output.split('\n') : []);
        }
        setExecutionTime(endTime - startTime);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "An unknown error occurred during simulation.";
        setRuntimeError(errorMessage);
        setConsoleOutput([]);
        setIsLoading(false);
        return;
      }
    }

    try {
      const result = await analyzeCode(code, language.value, capturedError, stdin);
      setAnalysisResult(result);
    } catch (err) {
      console.error(err);
      setApiError(err instanceof Error ? err.message : "An unknown error occurred during analysis.");
    } finally {
      setIsLoading(false);
    }
  }, [code, language, stdin]);
  
  const handleClearConsole = useCallback(() => {
    setConsoleOutput([]);
    setRuntimeError(null);
    setExecutionTime(null);
  }, []);

  const handleResetCode = useCallback(() => {
    setCode(defaultCode);
  }, [defaultCode]);

  const handleCopyExplanation = useCallback(() => {
    if (analysisResult?.explanation) {
      navigator.clipboard.writeText(analysisResult.explanation).catch(err => console.error("Failed to copy text:", err));
    }
  }, [analysisResult]);

  const handleContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setContextMenu({ show: true, x: e.clientX, y: e.clientY });
  };

  const closeContextMenu = () => {
    setContextMenu(p => ({ ...p, show: false }));
  };

  const menuItems: MenuItem[] = [
    { label: 'Run & Analyze Code', action: handleRunAndAnalyze, icon: PlayIcon, disabled: isLoading },
    { label: 'Clear Console', action: handleClearConsole, icon: TrashIcon },
    { label: 'Reset Code', action: handleResetCode, icon: ArrowPathIcon },
    { isSeparator: true, label: 'sep1', action: () => {}, icon: () => null },
    { label: 'Copy AI Explanation', action: handleCopyExplanation, icon: ClipboardIcon, disabled: !analysisResult?.explanation },
  ];

  return (
    <div className="h-screen w-screen text-gray-800 dark:text-gray-200 font-sans p-4 lg:p-6 transition-colors duration-300" onContextMenu={handleContextMenu}>
      <main className="w-full h-full flex flex-col lg:flex-row gap-4 lg:gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2 h-full">
          <Window title="Code Editor" className="flex-grow" actions={<ThemeToggle />}>
            <div className="h-full w-full flex flex-col">
              <div className="px-2 pt-2 flex-shrink-0">
                <LanguageSelector selected={language} onChange={setLanguage} />
              </div>
              <div className="flex-grow pt-2">
                <Editor
                  language={language.value}
                  value={code}
                  onChange={setCode}
                />
              </div>
            </div>
          </Window>
          <div className="flex-shrink-0">
            <ActionButton onClick={handleRunAndAnalyze} isLoading={isLoading}>
              <PlayIcon />
              Run & Analyze Code
            </ActionButton>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2 h-full">
          <Window title="Console & Input" className="flex-grow min-h-0">
            <InteractiveConsole
              output={consoleOutput}
              error={runtimeError}
              executionTime={executionTime}
              stdin={stdin}
              onStdinChange={setStdin}
              isLoading={isLoading}
            />
          </Window>
          <Window title="AI Analysis" className="flex-grow min-h-0">
            <OutputDisplay
              result={analysisResult}
              isLoading={isLoading}
              error={apiError}
            />
          </Window>
        </div>
      </main>
      <ContextMenu x={contextMenu.x} y={contextMenu.y} show={contextMenu.show} onClose={closeContextMenu} items={menuItems} />
      <Footer />
    </div>
  );
};

export default App;
