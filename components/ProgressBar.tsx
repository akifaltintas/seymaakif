import React from 'react';

interface ProgressBarProps {
  total: number;
  current: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ total, current }) => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 p-2 flex gap-0.5">
      {Array.from({ length: total }).map((_, index) => (
        <div 
          key={index} 
          className="h-1 flex-1 bg-white/30 rounded-full overflow-hidden"
        >
          <div 
            className={`h-full bg-white transition-all duration-500 ease-out ${
              index < current ? 'w-full' : index === current ? 'w-full animate-pulse' : 'w-0'
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;