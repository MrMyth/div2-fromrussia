import { MessageSquare, Youtube, BookOpen, Gamepad, HelpCircle, Link } from "lucide-react";

export const MENU_ITEMS = [
  { icon: <MessageSquare className="w-5 h-5" />, text: "Discord сервер", href: "#discord" },
  { icon: <Gamepad className="w-5 h-5" />, text: "Наши игры", href: "#games" },
  { icon: <BookOpen className="w-5 h-5" />, text: "Азбуки рейдов", href: "#raids" },
  { icon: <Link className="w-5 h-5" />, text: "Полезные ресурсы", href: "#resources" },
  { icon: <Youtube className="w-5 h-5" />, text: "Наши каналы", href: "#channels" },
  { icon: <HelpCircle className="w-5 h-5" />, text: "Жалоба на игрока", href: "#complaint" }
] as const;