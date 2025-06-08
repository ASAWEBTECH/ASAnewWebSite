import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedButton } from "./AnimatedButton";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
  interval?: number;
  title: string;
  description: string;
}

export function ImageSlider({
  images,
  interval = 5000,
  title,
  description,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  };
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-[750px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Imagem de fundo com Next.js Image */}
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority={index === 0}
          />
          {/* Gradiente sobre a imagem */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#221f52]/90 to-[#2e2b70]/20" />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute inset-0 flex items-center justify-center md:justify-start">
        <div className="text-left text-white max-w-4xl px-4 mt-16 pl-6 md:pl-40 flex flex-col items-start w-full">
          {/* Title with slide-in from left animation */}
          <h1
            className={`font-bold font-poppins mb-6 leading-tight transition-all duration-1000 ease-out
      text-2xl sm:text-4xl md:text-5xl max-w-2xl
      ${
        isLoaded
          ? "opacity-100 translate-x-0 translate-y-0"
          : "opacity-0 -translate-x-20 translate-y-4"
      }`}
            style={{
              transitionDelay: "200ms",
            }}
          >
            {title}
          </h1>

          {/* Description with slide-in from left animation (delayed) */}
          <p
            className={`transition-all font-poppins duration-1000 ease-out
      text-base sm:text-lg md:text-xl max-w-xl
      ${
        isLoaded
          ? "opacity-100 translate-x-0 translate-y-0"
          : "opacity-0 -translate-x-16 translate-y-3"
      }`}
            style={{
              transitionDelay: "500ms",
            }}
          >
            {description}
          </p>

          {/* Buttons container with fade-in and slide-up animation */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full items-stretch sm:items-center sm:justify-start">
            <div
              className={`flex gap-4 transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: "800ms",
              }}
            >
              <AnimatedButton />
            </div>
            <button
              className="px-6 py-3 bg-transparent border-2 border-white font-poppins text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 transform hover:scale-105 backdrop-blur-lg mt-2 sm:mt-0"
              onClick={() => (window.location.href = "/about")}
            >
              Get to Know Us
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Social Media Icons and Contact Info - agora acima dos indicadores, mas escondidos no mobile */}
      <div
        className={`hidden sm:block absolute left-1/2 bottom-36 sm:bottom-36 -translate-x-1/2 sm:left-auto sm:right-12 sm:translate-x-0 transition-all duration-1200 ease-out ${
          isLoaded
            ? "opacity-100 translate-x-0 translate-y-0 scale-100"
            : "opacity-0 translate-x-8 translate-y-12 scale-95"
        }`}
        style={{
          transitionDelay: "1100ms",
        }}
      >
        <div className="p-1 flex flex-col items-center gap-1">
          {/* Contact info */}
          <div
            className={`flex items-center gap-1 text-white text-xs font-medium transition-all duration-800 ease-out ${
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: "1300ms",
            }}
          >
            <span>+244 923 456 789</span>
            <span className="h-3 border-l border-[#ff9f00] mx-1"></span>
            <span>admissions@asangola.com</span>
          </div>
          {/* Social media icons */}
          <div className="flex flex-row gap-2 mt-1">
            {[
              {
                href: "https://www.linkedin.com/company/asangolaofficial/posts/?feedView=all",
                label: "LinkedIn",
                delay: "1500ms",
                path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
              },
              {
                href: "https://www.instagram.com/asangola/",
                label: "Instagram",
                delay: "1600ms",
                path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
              },
              {
                href: "https://www.facebook.com/ASAngola?locale=pt_BR",
                label: "Facebook",
                delay: "1700ms",
                path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
              },
              {
                href: "https://www.youtube.com/@asangola_official",
                label: "YouTube",
                delay: "1800ms",
                path: "M23.498 6.186a2.993 2.993 0 0 0-2.107-2.117C19.204 3.5 12 3.5 12 3.5s-7.204 0-9.391.569A2.993 2.993 0 0 0 .502 6.186C0 8.373 0 12 0 12s0 3.627.502 5.814a2.993 2.993 0 0 0 2.107 2.117C4.796 20.5 12 20.5 12 20.5s7.204 0 9.391-.569a2.993 2.993 0 0 0 2.107-2.117C24 15.627 24 12 24 12s0-3.627-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-7 h-7 sm:w-10 sm:h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-700 ease-out transform hover:scale-110 ${
                  isLoaded
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-6 scale-90"
                }`}
                style={{
                  transitionDelay: social.delay,
                }}
                aria-label={social.label}
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Indicadores de slides */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-[#ff9f00]" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}