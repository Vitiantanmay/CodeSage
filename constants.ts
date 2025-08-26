
import type { Language } from './types';
import { TypeScriptIcon, JavaScriptIcon, PythonIcon, JavaIcon, CIcon, CppIcon } from './components/Icons';

export const LANGUAGES: Language[] = [
  { value: 'typescript', label: 'TypeScript', icon: TypeScriptIcon },
  { value: 'javascript', label: 'JavaScript', icon: JavaScriptIcon },
  { value: 'python', label: 'Python', icon: PythonIcon },
  { value: 'java', label: 'Java', icon: JavaIcon },
  { value: 'c', label: 'C', icon: CIcon },
  { value: 'cpp', label: 'C++', icon: CppIcon },
];