
import React from 'react';
import { GAMES_LIST, INSTRUCTIONS } from '@/constants/games';

// Components
const PriceTag: React.FC<{ value: number }> = ({ value }) => (
  <span className="ml-2 px-2 py-1 bg-[#F97316] text-white text-sm rounded-full">
    {value} ₽
  </span>
);

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

const InstructionSection: React.FC<typeof INSTRUCTIONS[keyof typeof INSTRUCTIONS]> = ({ title, icon: Icon, steps, price }) => (
  <section className="mt-6 rounded-lg">
    <h3 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center justify-center text-center">
      <Icon className="w-6 h-6 mr-2" />
      {title}
      {price && <PriceTag value={price} />}
    </h3>
    <div className="bg-gray-50 p-6 rounded-lg">
      <ol className="text-gray-800 space-y-2 pl-5 list-decimal">
        {steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  </section>
);

// Main component
const GamesList: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <ul className="space-y-3">
        {GAMES_LIST.map((game, index) => (
          <GameListItem key={game.title} index={index} game={game} />
        ))}
      </ul>

      <InstructionSection {...INSTRUCTIONS.chineseVersion} />
      <InstructionSection {...INSTRUCTIONS.summitBot} />
    </div>
  );
};

export default GamesList;
