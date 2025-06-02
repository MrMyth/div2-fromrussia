
import React from 'react';
import { GAMES_LIST } from '@/constants/games';

// Components
const GameListItem: React.FC<{ index: number; game: typeof GAMES_LIST[0] }> = ({ index, game }) => {
  const Icon = game.icon;
  return (
    <li className="flex items-center p-3 gap-3 rounded-lg hover:bg-gray-100 transition-colors">
      <span className="text-[#F97316] font-medium w-6">{index + 1}.</span>
      <Icon className="w-5 h-5 text-gray-500" />
      <span className="text-gray-800 flex-1">{game.title}</span>
    </li>
  );
};

// Main component
const GamesList: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <ul className="space-y-3">
        {GAMES_LIST.map((game, index) => (
          <GameListItem key={game.title} index={index} game={game} />
        ))}
      </ul>
    </div>
  );
};

export default GamesList;
