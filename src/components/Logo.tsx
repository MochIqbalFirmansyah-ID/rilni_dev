import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="relative h-16 w-16 animate-float">
      <div className="absolute inset-0 bg-black rounded-full border-2 border-neon-purple shadow-neon-purple"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-neon-purple press-start">🌕</div>
    </div>
  );
};

export default Logo;