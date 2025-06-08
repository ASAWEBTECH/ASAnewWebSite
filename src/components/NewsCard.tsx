import React from "react";
import { Announcement } from "../types/announcement";
import Image from "next/image";

interface NewsCardProps {
  announcement: Announcement;
}

export function NewsCard({ announcement }: NewsCardProps) {
  return (
    <div className="bg-[#ffac1e] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-80">
        <Image
          src={announcement.image}
          alt={announcement.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 100vw"
          priority
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
        <p className="text-gray-600 leading-relaxed">{announcement.content}</p>
      </div>
      <div className="p-4 flex justify-end">
        <button
          onClick={() => window.location.href = "../News"}
          className="
            relative overflow-hidden group
            px-6 py-3 rounded-lg
            bg-[#ffac1e] hover:bg-[#c4860c]
            transition-all duration-300 ease-in-out
            min-w-[200px] h-[52px]
            border border-white
            text-white font-semibold
          "
        >
          <span className="absolute inset-0 flex items-center justify-center transition-transform transform group-hover:translate-y-full">
            View more
          </span>
          <span className="absolute inset-0 flex items-center justify-center transition-transform transform -translate-y-full group-hover:translate-y-0">
            Let&apos;s go
          </span>
        </button>
      </div>
    </div>
  );
}
