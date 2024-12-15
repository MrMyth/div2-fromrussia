import { Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-10" />
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://i.ibb.co/8BBx0F0/19201080.png"
        >
          <source
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/256810065/movie480_vp9.webm"
            type="video/webm"
          />
        </video>
      </div>

      {/* Header Content */}
      <div className="relative z-20 container mx-auto px-4">
        <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8">
          <Shield className="w-24 h-24 text-primary animate-pulse" />
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
            Russian Elite Division
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-semibold">
            Сила в единстве • Strength in Unity
          </p>
          <div className="flex gap-4 mt-8">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md transition-colors">
              Join Now
            </button>
            <button className="border border-primary/50 hover:bg-primary/10 text-white px-8 py-3 rounded-md transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-1 h-16 rounded-full bg-gradient-to-b from-primary to-transparent" />
      </div>
    </div>
  );
};

export default HeroSection;