
import { MessageSquare, Youtube, BookOpen, Gamepad, HelpCircle, Link, Calendar, Globe } from "lucide-react";

export const MENU_ITEMS = [
  { icon: MessageSquare, text: "Discord сервер", href: "#discord" },
  { icon: Gamepad, text: "Наши игры", href: "#games" },
  { icon: Globe, text: "Китайская версия", href: "#chinese-version" },
  { icon: BookOpen, text: "Азбуки рейдов", href: "#raids" },
  { icon: Youtube, text: "Наши каналы", href: "#channels" },
  { icon: HelpCircle, text: "Обратная связь", href: "#complaint" },
  { icon: Link, text: "Полезные ресурсы", href: "#resources" },
  { icon: Calendar, text: "Календарь", href: "#calendar" }
] as const;
