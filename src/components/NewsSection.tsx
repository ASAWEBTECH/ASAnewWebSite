import React, { useState, useEffect } from 'react';
import { Bell } from 'lucide-react';
import { announcements } from '../data/announcements';
import { NewsCard } from './NewsCard';
import { NewsControls } from './NewsControls';

export function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextAnnouncement = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  const prevAnnouncement = () => {
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  return (
    <div className="bg-gray-50 shadow-lg rounded-lg max-w-4xl mx-auto p-8 my-8">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="text-blue-600 w-6 h-6" />
        <h2 className="text-2xl font-bold text-gray-800">School News</h2>
      </div>
      
      <div className="relative">
        <div className="overflow-hidden">
          <div className="transition-all duration-500 ease-in-out">
            <NewsCard announcement={announcements[currentIndex]} />
          </div>
        </div>

        <NewsControls
          onPrev={prevAnnouncement}
          onNext={nextAnnouncement}
          currentIndex={currentIndex}
          total={announcements.length}
        />
      </div>
    </div>
  );
}