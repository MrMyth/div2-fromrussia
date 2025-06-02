
import React, { useState, useEffect } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";
import { ru } from "date-fns/locale";

const CalendarSection: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  // Format the current time for Moscow timezone
  // Changed format to show day of week, date and time
  const moscowTime = formatInTimeZone(
    currentTime,
    "Europe/Moscow",
    "EEEE, dd MMMM yyyy, HH:mm:ss",
    { locale: ru }
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#F97316] text-center mb-4 flex items-center justify-center">
            <CalendarIcon className="w-6 h-6 mr-2 text-[#F97316]" />
            Календарь событий игры
          </h2>
          
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Здесь вы можете ознакомиться с расписанием предстоящих игровых событий, 
            рейдов и совместных активностей нашего сервера. Присоединяйтесь к нам в указанное время!
          </p>
          
          <div className="flex justify-center overflow-auto">
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=53272d225301bdd02152ac6f3fdc83e6a14e0b43db44338abc018d124fe3056c%40group.calendar.google.com&ctz=Europe%2FMoscow" 
              style={{ border: 0 }} 
              width="1600"
              height="600" 
              frameBorder="0" 
              scrolling="no"
              title="Game Events Calendar"
              className="max-w-full"
            />
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-lg font-medium text-gray-800">
              Текущая дата и время по Москве: <span className="text-[#F97316] font-bold">{moscowTime}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
