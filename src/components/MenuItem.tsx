
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
      className="group flex items-center space-x-2 text-gray-700 hover:text-[#F97316] transition-colors duration-200 font-medium"
    >
      <Icon className="w-4 h-4" />
      <span>{text}</span>
    </a>
  );
};
