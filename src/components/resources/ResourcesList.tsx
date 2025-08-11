
import React from "react";
import ButtonLink from "../common/ButtonLink";
import { RESOURCES } from "@/constants/resources";

const ResourcesList: React.FC = () => {
  const regularResources = RESOURCES.filter(resource => !resource.warning);
  const warningResources = RESOURCES.filter(resource => resource.warning);
  
  const firstColumn = regularResources.slice(0, Math.ceil(regularResources.length / 2));
  const secondColumn = regularResources.slice(Math.ceil(regularResources.length / 2));

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

      {warningResources.length > 0 && (
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-[#F97316] text-center mb-6">
            Неофициальные ресурсы
          </h3>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
            {warningResources.map((resource) => (
              <div key={resource.name} className="text-center">
                <div className="mb-4">
                  <ResourceButton resource={resource} />
                </div>
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                  <p className="text-sm text-yellow-800 font-medium">
                    ⚠️ {resource.warning}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesList;
