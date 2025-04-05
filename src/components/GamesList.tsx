import React from 'react';
import { 
  ShoppingCart, 
  TowerControl, 
  Gamepad, 
  Globe, 
  Shield, 
  Skull,
  Pistol 
} from "lucide-react";

// Обновлённый список игр с заменённой иконкой
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
    icon: Pistol  // Заменили Skull на Pistol
  },
  {
    title: "Tom Clancy's Ghost Recon Breakpoint",
    icon: Skull
  }
];

// ... (остальной код остаётся без изменений)

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

// ... (остальной код без изменений)