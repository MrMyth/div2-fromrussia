
import React from 'react';
import { Bot } from 'lucide-react';

const BotSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div id="bot">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#F97316] text-center mb-8 flex items-center justify-center">
              <Bot className="w-6 h-6 mr-2 text-[#F97316]" />
              Бот для Саммита
            </h2>
            
            <div className="max-w-3xl mx-auto px-4">
              <section className="mt-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center justify-center text-center">
                  Интересует наш бот для 'Саммита'?
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ol className="text-gray-800 space-y-2 pl-5 list-decimal">
                    <li>Зайти на наш Discord сервер</li>
                    <li>Выбрать роли на сервере</li>
                    <li>Открыть канал сервера 'бот-100-й-этаж' и воспользоваться инструкцией по боту</li>
                  </ol>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotSection;
