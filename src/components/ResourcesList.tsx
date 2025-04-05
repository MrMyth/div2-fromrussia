import { Button } from "./ui/button";
import { RESOURCES } from "@/constants/resources";

const ResourcesList = () => {
  // Разделяем ресурсы на две равные колонки
  const column1 = RESOURCES.slice(0, Math.ceil(RESOURCES.length / 2));
  const column2 = RESOURCES.slice(Math.ceil(RESOURCES.length / 2));

  return (
    <div className="space-y-6">
      <p className="text-gray-600 text-center mb-6">
        Различные ресурсы по игре, не связанные с нашим кланом
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
        {/* Первая колонка */}
        <div className="space-y-3">
          {column1.map((resource) => (
            <ResourceButton 
              key={resource.name}
              resource={resource}
            />
          ))}
        </div>
        
        {/* Вторая колонка */}
        <div className="space-y-3">
          {column2.map((resource) => (
            <ResourceButton
              key={resource.name}
              resource={resource}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Вынесенный компонент кнопки ресурса
const ResourceButton = ({ resource }: { resource: typeof RESOURCES[number] }) => {
  const Icon = resource.icon;
  
  return (
    <Button
      variant="default"
      className="w-full bg-[#F97316] hover:bg-[#F97316]/90 text-white rounded-lg py-6"
      onClick={() => window.open(resource.url, '_blank')}
    >
      <div className="flex items-center gap-3 w-full">
        <Icon className="w-5 h-5" />
        <span>{resource.name}</span>
      </div>
    </Button>
  );
};

export default ResourcesList;