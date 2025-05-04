
import React from "react";
import ButtonLink from "../common/ButtonLink";
import { RESOURCES } from "@/constants/resources";

const ResourcesList: React.FC = () => {
  const firstColumn = RESOURCES.slice(0, Math.ceil(RESOURCES.length / 2));
  const secondColumn = RESOURCES.slice(Math.ceil(RESOURCES.length / 2));

  const ResourceButton: React.FC<{resource: typeof RESOURCES[0]}> = ({ resource }) => {
    // Check if it's a Lucide icon or a React-icon based on display name
    const iconName = resource.icon.displayName || resource.icon.name || '';
    const isFaIcon = iconName.startsWith('Fa');
    
    const IconComponent = isFaIcon ? 
      (props: any) => <resource.icon {...props} /> : 
      resource.icon;

    return (
      <ButtonLink
        key={resource.name}
        href={resource.url}
        icon={IconComponent}
        className="bg-[#F97316] hover:bg-[#F97316]/90 text-white w-full md:w-96 rounded-full py-6 text-lg font-medium"
      >
        {resource.name}
      </ButtonLink>
    );
  };

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
