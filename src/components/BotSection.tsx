
import React from 'react';
import { Bot, MessageSquare, TowerControl } from 'lucide-react';

const BotSection: React.FC = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-[#F97316] text-center mb-8 flex items-center justify-center">
        <Bot className="w-6 h-6 mr-2 text-[#F97316]" />
        Бот для Саммита
      </h2>
      
      <div className="max-w-3xl mx-auto px-4">
        <section className="rounded-lg">
          <h3 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center justify-center text-center">
            <TowerControl className="w-6 h-6 mr-2" />
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

        <section className="mt-8">
          <h3 className="text-xl font-bold text-[#F97316] text-center mb-6 flex items-center justify-center">
            <MessageSquare className="w-6 h-6 mr-2 text-[#F97316]" />
            Форма обратной связи для бота
          </h3>
          <div className="border-0 rounded-lg overflow-hidden">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSeXCr_WqmXhcxxHBPdqfj_goal6uwsmn64DVcRUtbpFf1FHYg/viewform?embedded=true" 
              width="100%" 
              height="1754" 
              frameBorder="0" 
              marginHeight={0}
              marginWidth={0}
              className="block border-0"
              title="Форма обратной связи для бота"
            >
              Загрузка…
            </iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BotSection;
