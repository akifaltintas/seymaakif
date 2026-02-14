import React from 'react';

interface ProgressBarProps {
  total: number;
  current: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ total, current }) => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 px-2 pt-4 pb-2 flex gap-[1.5px]">
      {Array.from({ length: total }).map((_, index) => (
        <div 
          key={index} 
          className="h-1.5 flex-1 bg-gray-300/50 rounded-full overflow-hidden backdrop-blur-sm"
        >
          <div 
            className={`h-full bg-romantic-accent shadow-[0_0_4px_rgba(255,107,107,0.8)] transition-all duration-300 ease-out ${
              index < current 
                ? 'w-full opacity-100' 
                : index === current 
                  ? 'w-full opacity-100 animate-pulse' 
                  : 'w-0 opacity-0'
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;