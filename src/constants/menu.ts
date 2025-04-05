
import { MessageSquare, Youtube, BookOpen, Gamepad, HelpCircle, Link } from "lucide-react";

export const MENU_ITEMS = [
  { icon: MessageSquare, text: "Discord сервер", href: "#discord" },
  { icon: Gamepad, text: "Наши игры", href: "#games" },
  { icon: Youtube, text: "Наши каналы", href: "#channels" },
  { icon: Link, text: "Полезные ресурсы", href: "#resources" },
  { icon: BookOpen, text: "Азбуки рейдов", href: "#raids" },
  { icon: HelpCircle, text: "Жалоба на игрока", href: "#complaint" }
] as const;
