import { Button } from "./ui/button";
import { RESOURCES } from "@/constants/resources";

const ResourcesList = () => {
  return (
    <div className="mt-16">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h3 className="text-xl font-bold text-[#F97316] text-center mb-2">Полезные ресурсы</h3>
        <p className="text-gray-600 text-center mb-8">Различные ресурсы по игре, не связанные с нашим кланом.</p>
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
          {RESOURCES.map((resource, index) => (
            <Button
              key={index}
              variant="default"
              className="bg-[#F97316] hover:bg-[#F97316]/90 text-white w-full rounded-lg"
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