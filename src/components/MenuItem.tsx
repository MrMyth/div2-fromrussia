
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
      className="group flex items-center space-x-3 px-4 py-2 text-sm font-medium text-gray-300 hover:text-[#F97316] transition-all duration-300 relative overflow-hidden rounded-lg border border-transparent hover:border-[#F97316]/30 hover:bg-[#F97316]/10"
    >
      {/* Gaming hover effect background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F97316]/0 via-[#F97316]/5 to-[#F97316]/0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      
      {/* Icon with glow effect */}
      <Icon className="w-5 h-5 relative z-10 group-hover:drop-shadow-lg group-hover:scale-110 transition-all duration-300" />
      
      {/* Text with underline effect */}
      <span className="relative z-10 group-hover:font-semibold transition-all duration-300">
        {text}
        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F97316] group-hover:w-full transition-all duration-300" />
      </span>
    </a>
  );
};
