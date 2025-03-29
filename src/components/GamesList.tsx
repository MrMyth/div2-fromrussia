import React from 'react';

const GamesList = () => {
  const games = [
    "Tom Clancy's The Division 2",
    "Tom Clancy's The Division 2 (Китайская версия)",
    "Tom Clancy's The Division 1",
    "Tom Clancy's Ghost Recon: Wildlands",
    "Tom Clancy's Ghost Recon Breakpoint"
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-[#F97316] text-center mb-8">Игры</h2>
      <ul className="space-y-4 max-w-2xl mx-auto">
        {games.map((game, index) => (
          <li 
            key={index}
            className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="text-[#F97316] font-medium">{index + 1}.</span>
            <span className="text-gray-800">{game}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 w-full text-center">
        <h3 className="text-xl font-semibold text-[#F97316] text-center mb-4">Как купить китайскую версию игры?</h3>
        <p className="text-gray-800">
          Чтобы получить инструкцию по покупке китайской The Division 2 вам нужно:<br/>
          1) Зайти на наш Discord сервер.<br/>
          2) Связаться с MrMyth92 на нашем сервере и запросить инструкцию.<br/>
          <br/>
          Цена инструкции: 750 рублей.
        </p>
      </div>
	    <div className="mt-8 w-full text-center">
        <h3 className="text-xl font-semibold text-[#F97316] text-center mb-4">Как купить китайскую версию игры?</h3>
        <p className="text-gray-800">
          Чтобы получить инструкцию по покупке китайской The Division 2 вам нужно:<br/>
          1) Зайти на наш Discord сервер.<br/>
          2) Связаться с MrMyth92 на нашем сервере и запросить инструкцию.<br/>
          <br/>
          Цена инструкции: 750 рублей.
        </p>
      </div> 
    </div>
  );
};

export default GamesList;