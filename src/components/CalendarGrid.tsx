import React from 'react';
import { Holiday } from '../types/types';
import { CheckCircle } from "lucide-react";

interface CalendarGridProps {
  days: number[];
  holidays: Holiday[];
  currentMonth: number;
}

export function CalendarGrid({ days, holidays, currentMonth }: CalendarGridProps) {
  const getHolidayColor = (holidayName: string) => {
    if (holidayName === 'Last Day of Term') return 'bg-red-50 text-red-600';
    if (holidayName === 'Graduation Day') return 'bg-[#fdaf17] bg-opacity-20 text-[#fdaf17]';
    return 'bg-[#0083cb] bg-opacity-10 text-[#0083cb]';
  };

  const getBadgeColor = (holidayName: string) => {
    if (holidayName === 'Last Day of Term') return 'bg-red-100 text-red-700';
    if (holidayName === 'Graduation Day') return 'bg-[#fdaf17] bg-opacity-20 text-[#fdaf17]';
    return 'bg-[#0083cb] bg-opacity-20 text-[#0083cb]';
  };

  // Obtenha o dia e mês atuais
  const today = new Date();
  const isCurrentMonth = today.getMonth() === currentMonth;
  const currentDay = today.getDate();

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
      <div className="grid grid-cols-7 bg-blue-500 text-white">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div
            key={day}
            className="p-4 text-center font-semibold border-r border-blue-400 last:border-r-0"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {days.map((day, index) => {
          const holiday = holidays.find(
            (h) => h.month === currentMonth && h.day === day
          );
          const isToday = isCurrentMonth && day === currentDay;

          return (
            <div
              key={index}
              className={`min-h-[100px] p-3 border-r border-b border-gray-200 transition-colors relative ${
                holiday ? getHolidayColor(holiday.name) : ''
              } ${isToday ? 'ring-2 ring-green-500 bg-green-50' : ''}`}
            >
              <div className="flex justify-between items-start">
                <span
                  className={`text-lg ${
                    holiday ? 'font-semibold' : 'text-black'
                  } flex items-center gap-1`}
                >
                  {day || ''}
                  {isToday && (
                    <CheckCircle className="inline-block w-4 h-4 text-green-500 ml-1" />
                  )}
                </span>
                {holiday && (
                  <span className={`text-xs px-2 py-1 rounded-full ${getBadgeColor(holiday.name)}`}>
                    Holiday
                  </span>
                )}
              </div>
              {holiday && (
                <p className="text-sm mt-1">{holiday.name}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}