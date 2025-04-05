import { Button } from "./ui/button";
import { RESOURCES } from "@/constants/resources";

const ResourcesList = () => {
  // Calculate midpoint for balanced columns
  const midPoint = Math.ceil(RESOURCES.length / 2);

  return (
    <div className="space-y-6 px-4">
      <p className="text-gray-600 text-center mb-6 max-w-2xl mx-auto text-sm md:text-base">
        Различные ресурсы по игре, не связанные с нашим кланом
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
        {[RESOURCES.slice(0, midPoint), RESOURCES.slice(midPoint)].map(
          (column, colIndex) => (
          <div key={`col-${colIndex}`} className="space-y-3">
            {column.map((resource) => (
              <Button
                key={resource.name}
                variant="default"
                className="group bg-[#F97316] hover:bg-[#F97316]/90 text-white w-full rounded-lg h-14 transition-colors"
                onClick={() => window.open(resource.url, '_blank')}
              >
                <div className="flex items-center gap-3 w-full px-4">
                  <div className="p-1 bg-white/20 rounded-md group-hover:bg-white/30 transition-colors">
                    <resource.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <span className="text-sm md:text-base text-left truncate">
                    {resource.name}
                  </span>
                </div>
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesList;