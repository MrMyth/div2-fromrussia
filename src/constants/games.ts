
import { 
  ShoppingCart, 
  Gamepad, 
  Globe, 
  Shield, 
  Skull,
  Crosshair 
} from "lucide-react";
import { ComponentType } from "react";

// Types
export type GameItem = {
  title: string;
  icon: ComponentType<{ className?: string }>;
};

export type InstructionItem = {
  title: string;
  icon: ComponentType<{ className?: string }>;
  steps: string[];
  price?: number;
};

// Game data
export const GAMES_LIST: GameItem[] = [
  { title: "Tom Clancy's The Division 2", icon: Gamepad },
  { title: "Tom Clancy's The Division 2 (Китайская версия)", icon: Globe },
  { title: "Tom Clancy's The Division 1", icon: Shield },
  { title: "Tom Clancy's Ghost Recon: Wildlands", icon: Crosshair },
  { title: "Tom Clancy's Ghost Recon Breakpoint", icon: Skull }
];

export const INSTRUCTIONS: Record<string, InstructionItem> = {
  chineseVersion: {
    title: "Как купить инструкцию по приобретению китайской версию игры?",
    icon: ShoppingCart,
    steps: [
      "Зайти на наш Discord сервер",
      "Связаться с MrMyth92 на нашем сервере и запросить инструкцию"
    ],
    price: 750
  }
};
