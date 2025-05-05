
import React from "react";
import { Calendar as CalendarIcon } from "lucide-react";

const CalendarSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-[#F97316] text-center mb-8 flex items-center justify-center">
            <CalendarIcon className="w-6 h-6 mr-2 text-[#F97316]" />
            Календарь событий игры
          </h2>
          <div className="flex justify-center overflow-auto">
            <iframe 
              src="https://calendar.google.com/calendar/embed?src=8cd069aaf6834506834c0d18ac1df8a404bee7c92fa55d5a8cc190dd05729638%40group.calendar.google.com&ctz=Europe%2FMoscow" 
              style={{ border: 0 }} 
              width="800" 
              height="600" 
              frameBorder="0" 
              scrolling="no"
              title="Game Events Calendar"
              className="max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
