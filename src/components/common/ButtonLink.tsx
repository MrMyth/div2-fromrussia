
import React from "react";
import { Button } from "../ui/button";

interface ButtonLinkProps {
  href: string;
  className?: string;
  icon?: React.ComponentType<any>;
  children: React.ReactNode;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ href, className, icon: Icon, children }) => {
  const handleClick = () => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      className={className}
      onClick={handleClick}
    >
      {Icon && <Icon className="w-5 h-5 mr-2" />}
      {children}
    </Button>
  );
};

export default ButtonLink;
