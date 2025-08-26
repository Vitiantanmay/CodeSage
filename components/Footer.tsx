
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 p-4 z-50 pointer-events-none">
      <div className="text-xs text-black/50 dark:text-white/40">
        <p>&copy; {new Date().getFullYear()} Tanmay Galav. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
