import { Button } from "./ui/button";
import { RESOURCES } from "@/constants/resources";
import { splitArray } from "@/lib/utils";

const ResourcesList = () => {
  // Разделяем ресурсы на 2 колонки
  const [firstColumn, secondColumn] = splitArray(RESOURCES, Math.ceil(RESOURCES.length / 2));

  return (
    <div className="space-y-6">
      <p className="text-gray-600 text-center max-w-2xl mx-auto">
        Различные ресурсы по игре, не связанные с нашим кланом
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
        {/* Колонки рендерятся динамически */}
        {[firstColumn, secondColumn].map((column, colIndex) => (
          <div key={`column-${colIndex}`} className="space-y-3">
            {column.map((resource) => (
              <ResourceButton 
                key={resource.name}
                resource={resource}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

// Вынесенный компонент кнопки ресурса
const ResourceButton = ({ resource }: { resource: typeof RESOURCES[0] }) => {
  const Icon = resource.icon;
  
  return (
    <Button
      variant="default"
      className="group bg-[#F97316] hover:bg-[#F97316]/90 text-white w-full rounded-lg py-6 transition-all"
      onClick={() => window.open(resource.url, '_blank')}
    >
      <div className="flex items-center gap-3 w-full">
        <div className="p-1.5 bg-white/20 group-hover:bg-white/30 rounded-lg transition-colors">
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-left flex-1">{resource.name}</span>
      </div>
    </Button>
  );
};

export default ResourcesList;