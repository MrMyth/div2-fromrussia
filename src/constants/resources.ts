import { 
  Store, 
  AlertOctagon, 
  Map, 
  Clock, 
  Package, 
  Youtube,
  MessageSquare,
  Gift,
  Sword,
  Users,
  MessageCircle,
  Calendar,
  FileText,
  Shield
} from "lucide-react";
import { FaVk, FaDiscord, FaReddit, FaTwitch, FaTelegram } from "react-icons/fa";

type Resource = {
  name: string;
  url: string;
  icon: React.ComponentType<any>;
};

export const RESOURCES: Resource[] = [
  { 
    name: "Товары недели", 
    url: "https://division.inot.pro/", 
    icon: Store 
  },
  { 
    name: "Известные ошибки игры (английский)", 
    url: "https://trello.com/b/F2RU9ia9/the-division-2-known-issues", 
    icon: AlertOctagon 
  },
  { 
    name: "Известные ошибки игры (русский)", 
    url: "https://trello.com/b/olF64uYk/the-division-2-%D0%B8%D0%B7%D0%B2%D0%B5%D1%81%D1%82%D0%BD%D1%8B%D0%B5-%D0%BE%D1%88%D0%B8%D0%B1%D0%BA%D0%B8", 
    icon: AlertOctagon 
  },
  { 
    name: "Интерактивная карта игры", 
    url: "https://division2map.com/", 
    icon: Map 
  },
  { 
    name: "Таймеры игры", 
    url: "https://divisiontimers.com/#/", 
    icon: Clock 
  },
  { 
    name: "Набор фаната серии (Dropbox)", 
    url: "https://www.dropbox.com/scl/fo/nqqr4fjdpkyldkir6tgu3/AP6EwQpr12k999_iJPhvw9U?rlkey=2b9wgs6mowgixl2c6cwy4j3jy&dl=0", 
    icon: Package 
  },
  { 
    name: "Сообщество игры в VK", 
    url: "https://vk.com/game_thedivision", 
    icon: FaVk 
  },
  { 
    name: "Сообщество игры в Telegram", 
    url: "https://t.me/divisiongame", 
    icon: FaTelegram 
  },
  { 
    name: "Чаты по игре в Telegram", 
    url: "https://t.me/divisiongame_chat", 
    icon: FaTelegram 
  },
  { 
    name: "Twitch канал разработчиков", 
    url: "https://www.twitch.tv/thedivisiongame", 
    icon: FaTwitch 
  },
  { 
    name: "Официальный канал Ubisoft на Youtube", 
    url: "https://www.youtube.com/@Ubisoft/featured", 
    icon: Youtube 
  },
  { 
    name: "Реферальная программа The Division 2", 
    url: "https://referral.ubisoft.com/the-division-2-referral/ru-RU", 
    icon: Gift 
  },
  { 
    name: "Онлайн конструктор билдов (английский)", 
    url: "https://mxswat.github.io/mx-division-builds/#/", 
    icon: Sword 
  },
  { 
    name: "Сообщество игры на платформе Reddit", 
    url: "https://www.reddit.com/r/Division2/", 
    icon: FaReddit 
  },
  { 
    name: "Discord сервер Ubisoft", 
    url: "https://discord.gg/ubisoftofficial", 
    icon: FaDiscord 
  },
  { 
    name: "Discord сервер The Division 2", 
    url: "https://discord.gg/thedivisiongame", 
    icon: FaDiscord 
  }
];