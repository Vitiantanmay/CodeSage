
import React from 'react';

export const SparklesIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L11 12l2.293 2.293a1 1 0 010 1.414L11 18m0-12l2.293-2.293a1 1 0 011.414 0L17 8m-6 4l2.293 2.293a1 1 0 010 1.414L11 18" />
  </svg>
);

export const BugIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-3-5v5m-3-8v8M9 9h.01M15 9h.01M4.93 19.07l1.414-1.414M17.657 6.343l1.414-1.414M4 12h16" />
  </svg>
);

export const FileCodeIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export const LightbulbIcon: React.FC<{className?: string}> = ({ className="h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

export const WrenchIcon: React.FC<{className?: string}> = ({ className="h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const ZapIcon: React.FC<{className?: string}> = ({ className="h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

export const PlayIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const ClockIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const ClipboardIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

export const TrashIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
);

export const ArrowPathIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-4.991-2.696L7.985 5.644m0 0l3.182 3.182m0-3.182l4.991 4.99" />
    </svg>
);


// Language Icons
export const TypeScriptIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="https://www.svgrepo.com/show/374146/typescript-official.svg"><rect width="128" height="128" rx="32" fill="#3178C6"></rect><path d="M93.3421 82.2618V76.9211H78.8354V51.723H84.1761V46.3823H70.0711V51.723H75.4118V82.2618H62.6641V87.6025H93.3421V82.2618Z" fill="white"></path><path d="M60.1824 46.3824H44.1011L43.8587 52.8879C45.8943 51.5303 48.0201 50.8403 50.2361 50.8193C52.9298 50.8193 54.9126 51.7196 56.1709 53.8095C57.4507 55.8784 58.0906 58.8285 58.0906 62.6598V82.2619H52.75V63.0336C52.75 60.1045 52.2334 58.0689 51.1999 56.9268C50.1878 55.7637 48.783 55.1822 46.9854 55.1822C45.2307 55.1822 43.7663 55.7162 42.5922 56.7842C41.4395 57.8312 40.7828 59.2008 40.6186 60.893V82.2619H35.2778V40.9231H40.6186V50.1517L41.3176 46.3824H60.1824Z" fill="white"></path></svg>
);
export const JavaScriptIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="https://www.svgrepo.com/show/349419/javascript.svg"><rect width="128" height="128" rx="32" fill="#F7DF1E"></rect><path d="M59.2393 84.6989C62.5855 87.8967 66.9744 89.9197 72.406 89.9197C77.4998 89.9197 80.793 87.6319 80.793 84.2857C80.793 81.3527 78.891 79.6975 74.5021 77.6215C69.1558 75.1323 66.868 73.1093 66.868 69.1558C66.868 65.3082 70.0658 62.4282 74.8893 62.4282C79.0999 62.4282 82.5924 63.82 85.0816 66.6009L80.6867 70.0934C78.838 67.9234 76.883 66.7558 74.8893 66.7558C72.9486 66.7558 71.491 67.8174 71.491 69.4726C71.491 71.9618 73.567 72.9174 78.4964 75.3385C83.5372 77.7066 85.6075 79.8025 85.6075 83.8718C85.6075 88.0824 82.2048 91.2272 76.9201 91.2272C70.368 91.2272 65.0217 88.514 62.0887 85.3162L59.2393 84.6989Z" fill="black"></path><path d="M37 90.3897H42.3462V70.6698C42.3462 67.4206 43.6444 65.8184 46.5833 65.8184C49.5222 65.8184 50.7674 67.4206 50.7674 70.6698V90.3897H56.1136V69.7619C56.1136 64.9384 53.0747 62.1575 48.6858 62.1575C44.2969 62.1575 41.5317 64.3275 40.5761 66.3505H40.2889L40.4825 62.7747H37V90.3897Z" fill="black"></path></svg>
);
export const PythonIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="https://www.svgrepo.com/show/374016/python.svg"><rect width="128" height="128" rx="32" fill="#3776AB"></rect><path d="M72.2989 36H55.1584V56.6341H42V42.0194C42 38.6946 44.6946 36 48.0194 36H72.2989V47.5146C72.2989 51.8394 68.8394 55.2989 64.5146 55.2989H55.1584V64.3537H72.2989V75.8683C72.2989 80.1931 68.8394 83.6526 64.5146 83.6526H42V72.138H55.1584V83.6526H42V92H55.1584C69.0494 92 80.0829 80.9665 80.0829 67.0829V47.5146C80.0829 41.1636 76.7479 36 72.2989 36Z" fill="#FFD43B"></path></svg>
);
export const JavaIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 128 128" xmlns="https://www.svgrepo.com/show/452234/java.svg"><rect width="128" height="128" rx="32" fill="#0D2E4E"></rect><g fill="#E88224"><path d="M49,79.5c0,0-1.2-12.8,11.5-16.1c0,0,10.2-1.3,10.2,10.1c0,0,1.5,13.2-12,14.6 C58.7,88.1,49,86.2,49,79.5z"></path><path d="M73.4,70.3c0,0-6.1-13-16.1-7.7c0,0-13,6.3,1.3,18.9L73.4,70.3z"></path></g><g fill="#5382A1"><path d="M40,56.1c0,0,14-8.8,25.8-1.5S74,68.9,74,68.9l-13,9.5L40,56.1z"></path><path d="M78.6,39c0,0,13.2,16-3.8,28.8S42.1,84,42.1,84L32,68.9L78.6,39z"></path></g><g fill="#FFFFFF"><path d="M89.3,51.8c0,0-15.3,13.1-1.5,25.8s18.2,3.8,18.2,3.8l9.4-15.3L89.3,51.8z"></path></g></svg>
);
export const CIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="https://www.svgrepo.com/show/373483/c2.svg"><rect width="128" height="128" rx="32" fill="#5C6BC0"></rect><path d="M78.083 91.0002C70.6663 94.4168 62.4163 95.7502 54.4997 94.7502C46.583 93.7502 39.4163 90.5002 33.6663 85.3335C27.9163 80.1668 23.833 73.4168 21.833 65.8335C19.833 58.2502 20.083 50.1668 22.583 42.8335C25.083 35.5002 29.7497 29.2502 35.9163 24.9168C42.083 20.5835 49.583 18.4168 57.4163 18.7502C65.2497 19.0835 72.9163 21.9168 79.2497 26.8335C85.583 31.7502 90.2497 38.5002 92.583 46.2502L81.083 51.0002C79.4997 45.9168 76.4163 41.5835 72.1663 38.5002C67.9163 35.4168 62.7497 33.7502 57.4163 33.7502C52.4163 33.7502 47.7497 34.9168 43.7497 37.1668C39.7497 39.4168 36.6663 42.6668 34.833 46.5835C32.9997 50.5002 32.4997 54.8335 33.4163 59.2502C34.333 63.6668 36.6663 67.8335 40.083 71.2502C43.4997 74.6668 47.9163 77.0835 52.833 78.1668C57.7497 79.2502 62.9163 78.9168 67.583 77.2502C72.2497 75.5835 76.1663 72.6668 78.833 68.8335L89.4163 74.0835C86.4163 80.0002 82.583 85.0835 78.083 5.0002Z" fill="white"></path></svg>
);
export const CppIcon: React.FC<{className?: string}> = ({ className }) => (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="https://www.svgrepo.com/show/373527/cpp2.svg"><rect width="128" height="128" rx="32" fill="#00599C"></rect><path d="M60.083 91.0002C52.6663 94.4168 44.4163 95.7502 36.4997 94.7502C28.583 93.7502 21.4163 90.5002 15.6663 85.3335C9.91634 80.1668 5.83301 73.4168 3.83301 65.8335C1.83301 58.2502 2.08301 50.1668 4.58301 42.8335C7.08301 35.5002 11.7497 29.2502 17.9163 24.9168C24.083 20.5835 31.583 18.4168 39.4163 18.7502C47.2497 19.0835 54.9163 21.9168 61.2497 26.8335C67.583 31.7502 72.2497 38.5002 74.583 46.2502L63.083 51.0002C61.4997 45.9168 58.4163 41.5835 54.1663 38.5002C49.9163 35.4168 44.7497 33.7502 39.4163 33.7502C34.4163 33.7502 29.7497 34.9168 25.7497 37.1668C21.7497 39.4168 18.6663 42.6668 16.833 46.5835C14.9997 50.5002 14.4997 54.8335 15.4163 59.2502C16.333 63.6668 18.6663 67.8335 22.083 71.2502C25.4997 74.6668 29.9163 77.0835 34.833 78.1668C39.7497 79.2502 44.9163 78.9168 49.583 77.2502C54.2497 75.5835 58.1663 72.6668 60.833 68.8335L71.4163 74.0835C68.4163 80.0002 64.583 85.0835 60.083 91.0002Z" fill="white"></path><path d="M96 54.2502V43.7502H85.5V33.2502H75V43.7502H64.5V54.2502H75V64.7502H85.5V54.2502H96Z" fill="white"></path><path d="M124.5 54.2502V43.7502H114V33.2502H103.5V43.7502H93V54.2502H103.5V64.7502H114V54.2502H124.5Z" fill="white"></path></svg>
);

export const SunIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

export const MoonIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);
