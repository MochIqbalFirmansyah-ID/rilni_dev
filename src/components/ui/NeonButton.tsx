import React from 'react';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  color?: 'purple' | 'blue' | 'green';
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  color = 'purple'
}) => {
  const colorClasses = {
    purple: 'bg-neon-purple/10 hover:bg-neon-purple/20 border-neon-purple text-neon-purple shadow-neon-purple',
    blue: 'bg-electric-blue/10 hover:bg-electric-blue/20 border-electric-blue text-electric-blue shadow-neon-blue',
    green: 'bg-toxic-green/10 hover:bg-toxic-green/20 border-toxic-green text-toxic-green shadow-neon-green',
  };

  return (
    <button
      onClick={onClick}
      className={`neon-button px-6 py-3 border-2 rounded-md font-bold transition-all duration-300 ${colorClasses[color]} ${className}`}
    >
      {children}
    </button>
  );
};

export default NeonButton;