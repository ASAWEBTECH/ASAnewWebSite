import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  total: number;
}

export function NewsControls({ onPrev, onNext, currentIndex, total }: NewsControlsProps) {
  return (
    <>
      <button 
        onClick={onPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
        aria-label="Previous announcement"
      >
        <ChevronLeft className="w-5 h-5 text-gray-600" />
      </button>

      <button 
        onClick={onNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-colors"
        aria-label="Next announcement"
      >
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </button>

      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            onClick={() => index !== currentIndex && onNext()}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`Go to announcement ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}