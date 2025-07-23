import React from 'react';
import { ChevronDown } from 'lucide-react';

interface ScrollDownButtonProps {
  targetId?: string;
  className?: string;
}

const ScrollDownButton: React.FC<ScrollDownButtonProps> = ({ 
  targetId = 'about', 
  className = '' 
}) => {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className={`flex justify-center ${className}`}>
      <button
        onClick={handleClick}
        className="group relative w-16 h-16 rounded-full border-2 border-gray-900 dark:border-white bg-transparent hover:bg-gray-900 dark:hover:bg-white transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-900/20 dark:focus:ring-white/20"
        aria-label="Scroll down to next section"
      >
        {/* Arrow Icon */}
        <ChevronDown 
          size={24} 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-900 dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300"
        />
        
        {/* Animated pulse effect */}
        <div className="absolute inset-0 rounded-full border-2 border-gray-900 dark:border-white animate-ping opacity-20"></div>
      </button>
    </div>
  );
};

export default ScrollDownButton;