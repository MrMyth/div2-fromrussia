import { Users, Target, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  { icon: Users, label: "Active Members", value: "50+" },
  { icon: Target, label: "Missions Complete", value: "1000+" },
  { icon: Trophy, label: "Achievements", value: "25+" },
];

const StatsSection = () => {
  return (
    <div className="py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 text-center card-hover bg-secondary">
            <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-2">{stat.value}</h3>
            <p className="text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;