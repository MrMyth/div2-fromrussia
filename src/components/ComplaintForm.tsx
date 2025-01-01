import React from 'react';

const ComplaintForm = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-[#F97316] text-center mb-8">Жалоба на игрока</h3>
      <div className="flex justify-center">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSeyhEk7FC95iPaHFvHxNlRNIEh4D_qV7tQVM1Ic8DdpocXXBQ/viewform?embedded=true" 
          width={640}
          height={150}
          frameBorder={0}
          className="max-w-full"
          title="Форма жалобы на игрока"
        >
          Загрузка…
        </iframe>
      </div>
    </div>
  );
};

export default ComplaintForm;