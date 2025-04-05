
import { Button } from "./ui/button";
import { RESOURCES } from "@/constants/resources";

const ResourcesList = () => {
  // Разделяем ресурсы на две части для двух столбцов
  const firstColumn = RESOURCES.slice(0, 8);
  const secondColumn = RESOURCES.slice(8, 16);

  return (
    <div>
      <p className="text-gray-600 text-center mb-8">Различные ресурсы по игре, не связанные с нашим кланом.</p>
      
      <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
        {/* Первый столбец */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          {firstColumn.map((resource, index) => (
            <Button
              key={index}
              variant="default"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white w-full md:w-96 rounded-lg"
              onClick={() => window.open(resource.url, '_blank')}
            >
              <resource.icon className="w-5 h-5" />
              {resource.name}
            </Button>
          ))}
        </div>
        
        {/* Второй столбец */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          {secondColumn.map((resource, index) => (
            <Button
              key={index + 8}
              variant="default"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white w-full md:w-96 rounded-lg"
              onClick={() => window.open(resource.url, '_blank')}
            >
              <resource.icon className="w-5 h-5" />
              {resource.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesList;
