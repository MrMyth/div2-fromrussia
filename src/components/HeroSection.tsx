import { Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative h-[50vh] flex flex-col">
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
        <div className="flex flex-col items-center justify-center h-[50vh] text-center space-y-4">
          <img 
            src="https://i.ibb.co/bLnHTds/42da929679073452.png" 
            alt="Division Logo" 
            className="w-12 h-12"
          />
          <h1 className="catchphrase">
            [RUS] FROM RUSSIA
          </h1>
          <p className="subheading">
            Игровой Discord сервер
          </p>
          <div className="flex gap-4 mt-2">
            <button className="bg-[#F97316] hover:bg-[#F97316]/90 text-white px-4 py-1.5 rounded-md transition-colors">
              Join Now
            </button>
            <button className="border border-[#F97316]/50 hover:bg-[#F97316]/10 text-white px-4 py-1.5 rounded-md transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-1 h-8 rounded-full bg-gradient-to-b from-[#F97316] to-transparent" />
      </div>
    </div>
  );
};

export default HeroSection;