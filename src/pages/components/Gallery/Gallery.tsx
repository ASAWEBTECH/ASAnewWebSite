import React, { useState } from 'react';
import { galleryImages } from './GalleryData';
import GalleryHeader from './GalleryHeader';
import GalleryControls from './GalleryControls';
import GallerySlide from './GallerySlide';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <GalleryHeader />
        
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-xl bg-white">
            <div className="relative h-[600px]">
              {galleryImages.map((image, index) => (
                <GallerySlide
                  key={index}
                  image={image}
                  isActive={index === currentIndex}
                />
              ))}
            </div>
          </div>

          <GalleryControls
            onPrev={prevSlide}
            onNext={nextSlide}
            currentIndex={currentIndex}
            totalImages={galleryImages.length}
            onDotClick={setCurrentIndex}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;