import React, { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ 
  message, 
  type, 
  isVisible, 
  onClose, 
  duration = 5000 
}) => {
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsAnimatingOut(true);
        setTimeout(onClose, 300); // Wait for animation to complete
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  const bgColor = type === 'success' ? 'bg-success-green' : 'bg-red-500';
  const icon = type === 'success' ? '✓' : '!';

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className={`
        ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px] max-w-[400px]
        transform transition-all duration-300 ease-in-out
        ${isAnimatingOut ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}
        ${isVisible && !isAnimatingOut ? 'animate-in slide-in-from-right' : ''}
      `}>
        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="font-bold text-sm">{icon}</span>
        </div>
        <div className="flex-1">
          <p className="font-medium text-sm">{message}</p>
        </div>
        <button 
          onClick={() => {
            setIsAnimatingOut(true);
            setTimeout(onClose, 300);
          }}
          className="w-6 h-6 flex items-center justify-center hover:bg-white/20 rounded-full transition-colors duration-200"
        >
          <span className="text-lg leading-none">×</span>
        </button>
      </div>
    </div>
  );
};