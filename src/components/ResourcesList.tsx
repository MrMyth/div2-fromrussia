
import { Button } from "./ui/button";
import { RESOURCES } from "@/constants/resources";
import React from "react";
import { IconType } from "react-icons";

const ResourcesList = () => {
  const firstColumn = RESOURCES.slice(0, 8);
  const secondColumn = RESOURCES.slice(8, 16);

  // Helper function to render icon correctly
  const renderIcon = (icon: any) => {
    // Check if it's a React component (from Lucide)
    if (typeof icon === 'function') {
      // Check if it's from react-icons (has render method)
      if (icon.render) {
        const IconComponent = icon;
        return <IconComponent className="w-5 h-5 mr-2" />;
      }
      
      // It's a Lucide icon component
      const LucideIcon = icon;
      return <LucideIcon className="w-5 h-5 mr-2" />;
    }
    
    // If it's already an element, return it directly
    return icon;
  };

  return (
    <div>
      <p className="text-gray-600 text-center mb-8">Различные ресурсы по игре, не связанные с нашим кланом.</p>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
        {/* Первый столбец */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          {firstColumn.map((resource, index) => (
            <Button
              key={index}
              size="lg"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white w-full md:w-96 rounded-full py-6 text-lg font-medium"
              onClick={() => window.open(resource.url, '_blank')}
            >
              {renderIcon(resource.icon)}
              {resource.name}
            </Button>
          ))}
        </div>
        
        {/* Второй столбец */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          {secondColumn.map((resource, index) => (
            <Button
              key={index + 8}
              size="lg"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white w-full md:w-96 rounded-full py-6 text-lg font-medium"
              onClick={() => window.open(resource.url, '_blank')}
            >
              {renderIcon(resource.icon)}
              {resource.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesList;
