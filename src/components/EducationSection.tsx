import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap} from 'lucide-react';
import Image from 'next/image';

interface EducationSectionProps {
  title?: string;
  description?: string;
  mainImage?: string;
  galleryImages?: string[];
}

export default function EducationSection({ 
  title = "Advanced Web Development Course",
  description = "Master modern web development with our comprehensive course covering React, Node.js, and full-stack development. Learn from industry experts and build real-world projects that will enhance your portfolio and career prospects.",
  mainImage = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  galleryImages = [
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  ]
}: EducationSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header with Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-3 mb-6 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <GraduationCap className="w-8 h-8 text-blue-600 animate-bounce" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Be Extraordinary</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Enhanced Main Image Section */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative group">
              <div className="absolute -inset-4  rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative h-[500px] overflow-hidden rounded-2xl bg-white p-2">
                <Image 
                  src={mainImage} 
                  alt={title}
                  fill
                  className="absolute w-full h-full object-contain rounded-xl transform group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 500px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className={`flex flex-col justify-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {description}
              </p>

              {/* Enhanced CTA Button */}
              <div className="flex gap-4 pt-4">
                <button className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  <span className="relative z-10">Enroll Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Gallery with Carousel Effect */}
        <div className={`transition-all duration-1000 delay-900 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Course Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative h-80 overflow-hidden rounded-2xl cursor-pointer"
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-all duration-500 ${
                  currentSlide === index ? 'opacity-50' : ''
                }`}></div>
                <div className="relative h-full bg-white p-1 rounded-2xl">
                  <Image 
                    src={image} 
                    alt={`${title} Gallery ${index + 1}`}
                    fill
                    className={`w-full h-full object-cover rounded-xl transform transition-all duration-700 ${
                      hoveredImage === index ? 'scale-110' : 'scale-100'
                    } ${currentSlide === index ? 'scale-105' : ''}`}
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl transition-opacity duration-500 ${
                    hoveredImage === index ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                  {/* Hover Content */}
                  <div className={`absolute bottom-4 left-4 right-4 text-white transform transition-all duration-500 ${
                    hoveredImage === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <h4 className="font-semibold mb-1">Learning Environment</h4>
                    <p className="text-sm text-gray-200">Interactive sessions with expert instructors</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>

      <style jsx>{`
        @keyframes tilt {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
      `}</style>
    </section>
  );
}