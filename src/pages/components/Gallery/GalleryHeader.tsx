import React from 'react';
import { Camera } from 'lucide-react';

const GalleryHeader = () => {
  return (
    <>
      <div className="flex items-center justify-center mb-8">
        <Camera className="w-8 h-8 text-indigo-600 mr-3" />
        <h2 className="text-4xl font-bold text-gray-800">Gallery</h2>
      </div>
      
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Welcome to our gallery! Here, you'll find unique captures showcasing the moments of learning, 
        creativity, and growth of our students. Each photo tells a story, celebrates achievements, 
        and reflects the talent and dedication we nurture every day. Explore and get inspired by 
        these unforgettable moments!
      </p>
    </>
  );
};

export default GalleryHeader;