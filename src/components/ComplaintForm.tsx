import React from 'react';

const ComplaintForm = () => {
  return (
    <div className="flex justify-center px-4 pb-2">
      <div className="w-full max-w-2xl border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <iframe 
          width="100%"
          height="650"
          src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__cxv-yNUNk9PQ1lEU1hWUDVFTUU1OEcwUVA0QVFZWi4u&embed=true" 
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          className="border-none max-w-full max-h-screen"
          title="Форма жалобы на игрока"
          allowFullScreen 
          webkitallowfullscreen="true" 
          mozallowfullscreen="true" 
          msallowfullscreen="true"
        >
          Загрузка…
        </iframe>
      </div>
    </div>
  );
};

export default ComplaintForm;