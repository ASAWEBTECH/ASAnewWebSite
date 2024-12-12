import React from 'react';
import { GalleryImage } from './GalleryData';

interface GallerySlideProps {
  image: GalleryImage;
  isActive: boolean;
}

const GallerySlide = ({ image, isActive }: GallerySlideProps) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 absolute w-full h-full transition-all duration-500 ease-in-out ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
    >
      <div className="relative h-full">
        <img
          src={image.url}
          alt={image.caption}
          className="w-full h-full object-cover rounded-l-2xl"
        />
      </div>
      
      <div className="hidden md:flex flex-col justify-center p-8 bg-white rounded-r-2xl">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          {image.caption}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Experience the power of {image.caption.toLowerCase()} in our dynamic educational environment. 
          Our students engage in meaningful activities that foster growth, creativity, and excellence.
        </p>
        <div className="mt-6">
          <button className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
            Learn more about {image.caption.toLowerCase()}
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14m-7-7l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GallerySlide;