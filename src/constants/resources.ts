
import { 
  Store, 
  AlertOctagon, 
  Map, 
  Clock, 
  Package, 
  Video, 
  Youtube, 
  MessageSquare, 
  Link, 
  UserRound 
} from "lucide-react";

// Custom VK icon component
const VkIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M7 10h10M7 14h10" />
    <circle cx="12" cy="12" r="9" />
    <path d="M13 7.5c1.5 0 3 .5 3 2.5 0 1.5-1 2.5-2 3-2 1-4 1-4 1 1 1 2 1.5 3 1.5 1 0 2.5-.5 3-.5" />
  </svg>
);

// Custom Discord icon component
const DiscordIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="9" cy="12" r="1" />
    <circle cx="15" cy="12" r="1" />
    <path d="M7.5 7.5C10.5 6.5 13.5 6.5 16.5 7.5" />
    <path d="M7.5 16.5c3 1 6 1 9 0" />
    <path d="M16 16c1-3 1-6 0-9" />
    <path d="M8 16c-1-3-1-6 0-9" />
  </svg>
);

// Custom Reddit icon component
const RedditIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="9" cy="9" r="1.5" />
    <circle cx="15" cy="9" r="1.5" />
    <path d="M12 14c2 0 3-1 3-1" />
    <path d="M9 14s1 1 3 1" />
  </svg>
);

// Custom Twitch icon component
const TwitchIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
  </svg>
);

export const RESOURCES = [
  { name: "Товары недели", url: "https://division.inot.pro/", icon: Store },
  { name: "Известные ошибки игры (английский)", url: "https://trello.com/b/F2RU9ia9/the-division-2-known-issues", icon: AlertOctagon },
  { name: "Известные ошибки игры (русский)", url: "https://ru.yougile.com/board/zyy6vkmc28pb", icon: AlertOctagon },
  { name: "Интерактивная карта игры", url: "https://division2map.com/", icon: Map },
  { name: "Таймеры игры", url: "https://divisiontimers.com/#/", icon: Clock },
  { name: "Набор фаната серии (Google Диск)", url: "https://drive.google.com/drive/folders/16-yBPXnZiM_d6QtBy_UBUVsQRxYpc9Ga?usp=sharing", icon: Package },
  { name: "Сообщество игры в VK", url: "https://vk.com/game_thedivision", icon: VkIcon },
  { name: "Сообщество игры в Telegram", url: "https://t.me/divisiongame", icon: MessageSquare },
  { name: "Чаты по игре в Telegram", url: "https://t.me/divisiongame_chat", icon: MessageSquare },
  { name: "Twitch канал разработчиков", url: "https://www.twitch.tv/thedivisiongame", icon: TwitchIcon },
  { name: "Официальный канал Ubisoft на Youtube", url: "https://www.youtube.com/@Ubisoft/featured", icon: Youtube },
  { name: "Реферальная программа The Division 2", url: "https://referral.ubisoft.com/the-division-2-referral/ru-RU", icon: Link },
  { name: "Онлайн конструктор билдов (английский)", url: "https://mxswat.github.io/mx-division-builds/#/", icon: UserRound },
  { name: "Сообщество игры на платформе Reddit", url: "https://www.reddit.com/r/Division2/", icon: RedditIcon },
  { name: "Discord сервер Ubisoft", url: "https://discord.gg/ubisoftofficial", icon: DiscordIcon },
  { name: "Discord сервер The Division 2", url: "https://discord.gg/thedivisiongame", icon: DiscordIcon }
] as const;
