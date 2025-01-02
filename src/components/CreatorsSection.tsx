import React from 'react';
import { Button } from "./ui/button";

const CreatorsSection = () => {
  return (
    <div className="mt-16">
      <h2 className="catchphrase text-center mb-8">Наши каналы</h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Left Column - MuRomeZ */}
        <div className="space-y-4 p-6 rounded-lg">
          <h3 className="subheading text-center">MuRomeZ</h3>
          <div className="flex justify-center">
            <Button
              variant="default"
              className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white rounded-lg flex items-center gap-2"
              onClick={() => window.open('https://www.youtube.com/@MuRomeZ977', '_blank')}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" className="w-5 h-5" />
              YouTube
            </Button>
          </div>
        </div>

        {/* Right Column - MrMyth92 */}
        <div className="space-y-4 p-6 rounded-lg">
          <h3 className="subheading text-center">MrMyth92</h3>
          <div className="flex justify-center gap-4">
            <Button
              variant="default"
              className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-white rounded-lg flex items-center gap-2"
              onClick={() => window.open('https://www.youtube.com/@MrMyth92/', '_blank')}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" className="w-5 h-5" />
              YouTube
            </Button>
            <Button
              variant="default"
              className="bg-[#0077FF] hover:bg-[#0077FF]/90 text-white rounded-lg flex items-center gap-2"
              onClick={() => window.open('https://vk.com/mrmyth92ds', '_blank')}
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg" alt="VK" className="w-5 h-5" />
              VK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorsSection;