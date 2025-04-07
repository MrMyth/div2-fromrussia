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
import { Store, AlertOctagon, Map, Clock, Package, MessageCircle, Video, Youtube, MessageSquare, Link } from "lucide-react";

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
    url: "https://ru.yougile.com/board/zyy6vkmc28pb", 
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
    name: "Набор фаната серии (Google Диск)", 
    url: "https://drive.google.com/drive/folders/16-yBPXnZiM_d6QtBy_UBUVsQRxYpc9Ga?usp=sharing", 
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
    icon: MessageCircle 
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