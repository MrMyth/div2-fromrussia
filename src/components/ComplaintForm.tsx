import React from 'react';

const ComplaintForm = () => {
  return (
    <div className="flex justify-center px-4 pb-2">
      <div className="w-full max-w-2xl border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSeyhEk7FC95iPaHFvHxNlRNIEh4D_qV7tQVM1Ic8DdpocXXBQ/viewform?embedded=true" 
          width="100%"
          height="650"
          frameBorder="0"
          className="block"
          title="Форма жалобы на игрока"
        >
          Загрузка…
        </iframe>
      </div>
    </div>
  );
};

export default ComplaintForm;