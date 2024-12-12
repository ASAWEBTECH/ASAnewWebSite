import React from 'react';
import { Announcement } from '../types/announcement';

interface NewsCardProps {
  announcement: Announcement;
}

export function NewsCard({ announcement }: NewsCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <div className="relative h-48">
        <img 
          src={announcement.image} 
          alt={announcement.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute bottom-4 left-4 text-white text-sm">
          {new Date(announcement.date).toLocaleDateString()}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {announcement.title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {announcement.content}
        </p>
      </div>
    </div>
  );
}