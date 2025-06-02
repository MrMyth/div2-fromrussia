
import React from 'react';
import { Globe, ShoppingCart } from 'lucide-react';

const ChineseVersionSection: React.FC = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-[#F97316] text-center mb-8 flex items-center justify-center">
        <Globe className="w-6 h-6 mr-2 text-[#F97316]" />
        Китайская версия игры
      </h2>
      
      <div className="max-w-3xl mx-auto px-4">
        <section className="rounded-lg">
          <h3 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center justify-center text-center">
            <ShoppingCart className="w-6 h-6 mr-2" />
            Как купить инструкцию по приобретению китайской версию игры?
            <span className="ml-2 px-2 py-1 bg-[#F97316] text-white text-sm rounded-full">750 ₽</span>
          </h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ol className="text-gray-800 space-y-2 pl-5 list-decimal">
              <li>Зайти на наш Discord сервер</li>
              <li>Связаться с MrMyth92 на нашем сервере и запросить инструкцию</li>
            </ol>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChineseVersionSection;
