import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryControlsProps {
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalImages: number;
  onDotClick: (index: number) => void;
}

const GalleryControls = ({ 
  onPrev, 
  onNext, 
  currentIndex, 
  totalImages,
  onDotClick 
}: GalleryControlsProps) => {
  return (
    <>
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 z-10"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200 z-10"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalImages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-indigo-600 w-4' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default GalleryControls;