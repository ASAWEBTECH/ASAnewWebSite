import React, { useState } from 'react';
import { ChevronLeft, ChevronRight} from 'lucide-react';
import Image from 'next/image';

const images = [
  {
    url: "/im1.jpg",
    caption: "Collaborative Learning"
  },
  {
    url: "/im2.jpg",
    caption: "Creative Workshop"
  },
  {
    url: "/im3.jpg",
    caption: "Student Projects"
  },
  {
    url: "/im4.jpg",
    caption: "Team Building"
  }
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
      <div className="container mx-auto px-4 mt-5">
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <div 
              className="relative h-[600px] transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <div className="absolute top-0 left-0 w-full h-full flex">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="min-w-full h-full relative flex-shrink-0 transition-opacity duration-500"
                    style={{ opacity: index === currentIndex ? 1 : 0.5 }}
                  >
                    <Image
                      src={image.url.startsWith('/') ? image.url : image.url.replace('./', '/')}                      alt={image.caption}
                      className="w-full h-full object-cover"
                      fill
                      sizes="(max-width: 768px) 100vw, 700px"
                      priority={index === 0}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-white text-xl font-semibold">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-indigo-600 w-4' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
  );
};

export default Gallery;