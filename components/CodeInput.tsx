
import React from 'react';
import MonacoEditor from '@monaco-editor/react';
import { useTheme } from '../contexts/ThemeContext';

interface EditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ language, value, onChange }) => {
  const { theme } = useTheme();

  return (
    <div className="h-full w-full rounded-b-lg overflow-hidden relative">
      <div className="absolute inset-0">
        <MonacoEditor
          height="100%"
          language={language}
          value={value}
          onChange={(val) => onChange(val || '')}
          theme={theme === 'dark' ? 'vs-dark' : 'light'}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            insertSpaces: true,
            padding: {
              top: 10,
            },
            lineNumbers: 'on',
            renderLineHighlight: 'none',
            scrollbar: {
              vertical: 'auto',
              horizontal: 'auto'
            },
            overviewRulerLanes: 0,
            hideCursorInOverviewRuler: true,
            overviewRulerBorder: false,
          }}
        />
      </div>
    </div>
  );
};

export default Editor;