import { LucideIcon } from "lucide-react";

interface MenuItemProps {
  icon: LucideIcon;
  text: string;
  href: string;
}

export const MenuItem = ({ icon: Icon, text, href }: MenuItemProps) => {
  return (
    <a
      href={href}
      className="flex items-center space-x-2 text-sm text-gray-200 hover:text-primary transition-colors"
    >
      <Icon className="w-5 h-5" />
      <span>{text}</span>
    </a>
  );
};