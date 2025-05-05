
import { MessageSquare, Youtube, BookOpen, Gamepad, HelpCircle, Link, Calendar } from "lucide-react";

export const MENU_ITEMS = [
  { icon: MessageSquare, text: "Discord сервер", href: "#discord" },
  { icon: Gamepad, text: "Наши игры", href: "#games" },
  { icon: Calendar, text: "Календарь", href: "#calendar" },
  { icon: BookOpen, text: "Азбуки рейдов", href: "#raids" },
  { icon: Youtube, text: "Наши каналы", href: "#channels" },
  { icon: HelpCircle, text: "Жалоба на игрока", href: "#complaint" },
  { icon: Link, text: "Полезные ресурсы", href: "#resources" }
] as const;
