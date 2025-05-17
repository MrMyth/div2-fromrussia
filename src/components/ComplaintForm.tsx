import React from 'react';
import { MessageSquare } from 'lucide-react';

const ComplaintForm = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-center px-4 pb-2">
        <div className="w-full max-w-2xl border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeyhEk7FC95iPaHFvHxNlRNIEh4D_qV7tQVM1Ic8DdpocXXBQ/viewform?embedded=true" 
            width="100%"
            height="650"
            frameBorder="0"
            className="block border-0" // Удалена внутренняя граница
            title="Форма жалобы на игрока"
          >
            Загрузка…
          </iframe>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h3 className="text-xl font-bold text-[#F97316] text-center mb-8 flex items-center justify-center">
          <MessageSquare className="w-6 h-6 mr-2 text-[#F97316]" />
          Форма обратной связи для бота
        </h3>
        <div className="border-0 rounded-lg overflow-hidden"> {/* Новый контейнер без границы */}
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeXCr_WqmXhcxxHBPdqfj_goal6uwsmn64DVcRUtbpFf1FHYg/viewform?embedded=true" 
            width="100%" 
            height="1754" 
            frameBorder="0" 
            marginHeight="0" 
            marginWidth="0"
            className="block border-0" // Удалена внутренняя граница
            title="Форма обратной связи для бота"
          >
            Загрузка…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default ComplaintForm;