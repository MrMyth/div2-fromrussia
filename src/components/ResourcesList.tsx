
import { Button } from "./ui/button";
import { RESOURCES } from "@/constants/resources";
import React from "react";

const ResourcesList: React.FC = () => {
  const firstColumn = RESOURCES.slice(0, Math.ceil(RESOURCES.length / 2));
  const secondColumn = RESOURCES.slice(Math.ceil(RESOURCES.length / 2));

  const renderIcon = (Icon: React.ComponentType<any>) => {
    if (!Icon) return null;
    
    // Check if it's a Lucide icon or a React-icon based on display name
    const iconName = Icon.displayName || Icon.name || '';
    const isFaIcon = iconName.startsWith('Fa');
    
    return isFaIcon ? 
      <Icon className="w-5 h-5 mr-2" /> : 
      <Icon className="w-5 h-5 mr-2" stroke="currentColor" />;
  };

  const handleResourceClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const ResourceButton: React.FC<{resource: typeof RESOURCES[0]}> = ({ resource }) => (
    <Button
      key={resource.name}
      size="lg"
      className="bg-[#F97316] hover:bg-[#F97316]/90 text-white w-full md:w-96 rounded-full py-6 text-lg font-medium flex items-center justify-center"
      onClick={() => handleResourceClick(resource.url)}
    >
      {renderIcon(resource.icon)}
      <span>{resource.name}</span>
    </Button>
  );

  return (
    <div>
      <p className="text-gray-600 text-center mb-8">Различные ресурсы по игре, не связанные с нашим кланом.</p>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
        <div className="flex flex-col gap-4 w-full md:w-auto">
          {firstColumn.map((resource) => (
            <ResourceButton key={resource.name} resource={resource} />
          ))}
        </div>
        
        <div className="flex flex-col gap-4 w-full md:w-auto">
          {secondColumn.map((resource) => (
            <ResourceButton key={resource.name} resource={resource} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesList;
