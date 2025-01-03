import React from 'react';
import { Button } from "./ui/button";
import { Store, AlertOctagon, Map, Clock } from "lucide-react";

const ResourcesList = () => {
  const resources = [
    { name: "Товары недели", url: "https://division.inot.pro/", icon: Store },
    { name: "Известные ошибки игры (английский)", url: "https://trello.com/b/F2RU9ia9/the-division-2-known-issues", icon: AlertOctagon },
    { name: "Известные ошибки (русский)", url: "https://ru.yougile.com/board/zyy6vkmc28pb", icon: AlertOctagon },
    { name: "Интерактивная карта игры", url: "https://division2map.com/", icon: Map },
    { name: "Таймеры игры", url: "https://divisiontimers.com/#/", icon: Clock }
  ];

  return (
    <div className="mt-16">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h3 className="text-xl font-bold text-[#F97316] text-center mb-8">Полезные ресурсы</h3>
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
          {resources.map((resource, index) => (
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