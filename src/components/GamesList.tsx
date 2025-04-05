import React from 'react';
import { 
  ShoppingCart, 
  TowerControl, 
  Gamepad, 
  Globe, 
  Shield, 
  Skull,
  Crosshair 
} from "lucide-react";

// Типы для TypeScript
type GameItem = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
};

type InstructionItem = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  steps: string[];
  price?: number;
};

// Константы
const GAMES_LIST: GameItem[] = [
  {
    title: "Tom Clancy's The Division 2",
    icon: Gamepad
  },
  {
    title: "Tom Clancy's The Division 2 (Китайская версия)",
    icon: Globe
  },
  {
    title: "Tom Clancy's The Division 1",
    icon: Shield
  },
  {
    title: "Tom Clancy's Ghost Recon: Wildlands",
    icon: Crosshair // Используем Crosshair вместо Pistol
  },
  {
    title: "Tom Clancy's Ghost Recon Breakpoint",
    icon: Skull
  }
];

const INSTRUCTIONS = {
  chineseVersion: {
    title: "Как купить инструкцию по приобретению китайской версию игры?",
    icon: ShoppingCart,
    steps: [
      "Зайти на наш Discord сервер",
      "Связаться с MrMyth92 на нашем сервере и запросить инструкцию"
    ],
    price: 750
  },
  summitBot: {
    title: "Интересует наш бот для 'Саммита'?",
    icon: TowerControl,
    steps: [
      "Зайти на наш Discord сервер",
      "Выбрать роли на сервере",
      "Открыть канал сервера 'бот-100-й-этаж' и воспользоваться инструкцией по боту"
    ]
  }
};

// Компоненты
const PriceTag = ({ value }: { value: number }) => (
  <span className="ml-2 px-2 py-1 bg-[#F97316] text-white text-sm rounded-full">
    {value} ₽
  </span>
);

const GameListItem = ({ index, game }: { index: number; game: GameItem }) => {
  const Icon = game.icon;
  return (
    <li className="flex items-center p-3 gap-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
      <span className="text-[#F97316] font-medium w-6">{index + 1}.</span>
      <Icon className="w-5 h-5 text-gray-500" />
      <span className="text-gray-800 flex-1">{game.title}</span>
    </li>
  );
};

const InstructionSection = ({ title, icon: Icon, steps, price }: InstructionItem) => (
  <section className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
    <h3 className="text-xl font-semibold text-[#F97316] mb-4 flex items-center justify-center">
      <Icon className="w-6 h-6 mr-2" />
      {title}
      {price && <PriceTag value={price} />}
    </h3>
    <ul className="text-gray-800 space-y-2 pl-5 list-decimal">
      {steps.map((step, i) => (
        <li key={i}>{step}</li>
      ))}
    </ul>
  </section>
);

// Основной компонент
const GamesList = () => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <ul className="space-y-3">
        {GAMES_LIST.map((game, index) => (
          <GameListItem 
            key={game.title} 
            index={index} 
            game={game} 
          />
        ))}
      </ul>

      <InstructionSection {...INSTRUCTIONS.chineseVersion} />
      <InstructionSection {...INSTRUCTIONS.summitBot} />
    </div>
  );
};

export default GamesList;