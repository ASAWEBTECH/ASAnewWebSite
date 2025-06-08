import React from 'react';

interface AnimatedButtonProps {
  className?: string;
  onClick?: () => void;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  className = '',
  onClick,
}) => {
  return (
    <a href="https://asangola.openapply.com/parents/sign_up" target="_blank" rel="noopener noreferrer">
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden group
        px-6 py-3 rounded-lg
        bg-[#22B14C] hover:bg-[#1a8f3d]
        transition-all duration-300 ease-in-out
        min-w-[200px] h-[52px]
        ${className}
      `}
    >
      {/* Shine effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shine_0.5s_ease-in-out] bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-15" />
      </div>

      {/* Button text */}
      <span className="absolute inset-0 flex items-center justify-center w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full opacity-100 group-hover:opacity-0 text-white font-semibold">
        Enroll now
      </span>
      <span className="absolute inset-0 flex items-center justify-center w-full transition-all duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 text-white font-semibold">
        Let&apos;s go
      </span>
    </button>
    </a>
  );
};