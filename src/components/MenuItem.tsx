
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
      className="group flex items-center space-x-2 text-sm text-gray-200 hover:text-[#F97316] transition-all duration-300 relative px-3 py-2 rounded-lg hover:bg-[#F97316]/10 border border-transparent hover:border-[#F97316]/30"
    >
      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
      <span className="font-medium tracking-wide">{text}</span>
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#F97316] to-yellow-500 group-hover:w-full transition-all duration-300" />
    </a>
  );
};
