import React from 'react';

const FloatingHearts: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-30">
      {/* Manually creating a few floating elements with inline styles for random positions would be messy, 
          so using Tailwind classes for a few static decorative elements that float */}
      <div className="absolute top-[10%] left-[10%] text-romantic-primary/20 text-6xl animate-float" style={{ animationDelay: '0s' }}>♥</div>
      <div className="absolute top-[50%] left-[80%] text-romantic-primary/20 text-4xl animate-float" style={{ animationDelay: '2s' }}>♥</div>
      <div className="absolute top-[80%] left-[20%] text-romantic-primary/20 text-8xl animate-float" style={{ animationDelay: '4s' }}>♥</div>
      <div className="absolute top-[30%] left-[60%] text-romantic-primary/10 text-5xl animate-float" style={{ animationDelay: '1s' }}>♥</div>
    </div>
  );
};

export default FloatingHearts;