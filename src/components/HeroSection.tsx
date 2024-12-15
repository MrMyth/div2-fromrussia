import { Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative h-[60vh] flex items-center justify-center hero-gradient">
      <div className="text-center space-y-6 p-4">
        <Shield className="w-16 h-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Russian Elite Division
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Сила в единстве • Strength in Unity
        </p>
      </div>
    </div>
  );
};

export default HeroSection;