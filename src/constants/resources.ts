import { Store, AlertOctagon, Map, Clock, Package } from "lucide-react";

export const RESOURCES = [
  { name: "Товары недели", url: "https://division.inot.pro/", icon: Store },
  { name: "Известные ошибки игры (английский)", url: "https://trello.com/b/F2RU9ia9/the-division-2-known-issues", icon: AlertOctagon },
  { name: "Известные ошибки (русский)", url: "https://ru.yougile.com/board/zyy6vkmc28pb", icon: AlertOctagon },
  { name: "Интерактивная карта игры", url: "https://division2map.com/", icon: Map },
  { name: "Таймеры игры", url: "https://divisiontimers.com/#/", icon: Clock },
  { name: "Набор фаната серии", url: "https://drive.google.com/drive/folders/16-yBPXnZiM_d6QtBy_UBUVsQRxYpc9Ga?usp=sharing", icon: Package }
] as const;