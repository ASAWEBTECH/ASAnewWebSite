import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarNavigationProps {
  currentMonth: number;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  monthName: string;
}

export function CalendarNavigation({ 
  onPrevMonth, 
  onNextMonth, 
  monthName 
}: CalendarNavigationProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <button
        onClick={onPrevMonth}
        className="p-2 rounded-full hover:bg-blue-100 transition-colors"
      >
        <ChevronLeft className="w-6 h-6 text-blue-600" />
      </button>
      <h2 className="text-2xl font-semibold text-blue-800">{monthName}</h2>
      <button
        onClick={onNextMonth}
        className="p-2 rounded-full hover:bg-blue-100 transition-colors"
      >
        <ChevronRight className="w-6 h-6 text-blue-600" />
      </button>
    </div>
  );
}