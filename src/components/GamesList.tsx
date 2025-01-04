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
    <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-primary text-center mb-8">Игры</h2>
      <ul className="space-y-4 max-w-2xl mx-auto">
        {games.map((game, index) => (
          <li 
            key={index}
            className="flex items-center space-x-4 p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <span className="text-primary font-medium">{index + 1}.</span>
            <span className="text-foreground">{game}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GamesList;