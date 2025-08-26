
export interface Language {
  value: string;
  label: string;
  icon: React.FC<{ className?: string }>;
}

export interface Suggestion {
  title: string;
  diff: string;
}

export interface Optimization {
  title: string;
  description: string;
  diff: string;
}

export interface AnalysisResult {
  explanation: string;
  suggestions: Suggestion[];
  optimizations: Optimization[];
}

export interface SimulationResult {
  output: string;
  error: string; // Will be an empty string if no error
}