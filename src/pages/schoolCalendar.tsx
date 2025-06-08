import React, { useState } from 'react';
import { CalendarHeader } from '../components/CalendarHeader';
import { CalendarNavigation } from '../components/CalendarNavigation';
import { CalendarGrid } from '../components/CalendarGrid';
import { Legend } from '../components/Legend';
import { months, holidays } from '../data/calendar';
import { Header } from '../components/Header';
import Footer from '../components/Footer';

function SchoolCalendar() {
  // Inicializa o mês atual do sistema
  const today = new Date();
  const initialMonth = today.getMonth(); // 0 = Janeiro, 4 = Maio, etc.
  const [currentMonth, setCurrentMonth] = useState(initialMonth);

  const nextMonth = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
  };

  const prevMonth = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
  };

  return (
    <div style={{width: "100%", marginTop: "150px"}}>
        <Header/>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        <CalendarHeader/>
        <CalendarNavigation
          currentMonth={currentMonth}
          onPrevMonth={prevMonth}
          onNextMonth={nextMonth}
          monthName={months[currentMonth].name}
        />
         <Legend />
        <CalendarGrid
          days={months[currentMonth].days}
          holidays={holidays}
          currentMonth={currentMonth}
        />
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default SchoolCalendar;