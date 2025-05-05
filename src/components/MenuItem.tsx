
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
      className="flex items-center space-x-2 text-sm text-zinc-300 hover:text-[#F97316] transition-all duration-200 font-medium tracking-wide"
    >
      <Icon className="w-[18px] h-[18px]" />
      <span>{text}</span>
    </a>
  );
};
