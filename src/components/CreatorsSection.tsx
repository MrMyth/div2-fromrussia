import React from 'react';
import { Button } from "./ui/button";
import { Youtube } from "lucide-react";

const CreatorsSection = () => {
  return (
    <div className="mt-16">
      <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
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
                <Youtube className="w-5 h-5" />
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
                <Youtube className="w-5 h-5" />
                YouTube
              </Button>
              <Button
                variant="default"
                className="bg-[#0077FF] hover:bg-[#0077FF]/90 text-white rounded-lg flex items-center gap-2"
                onClick={() => window.open('https://vk.com/mrmyth92ds', '_blank')}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2ZM18.15 16.27H16.69C16.14 16.27 15.97 15.82 14.86 14.72C13.86 13.77 13.46 13.67 13.24 13.67C12.93 13.67 12.84 13.76 12.84 14.18V15.77C12.84 16.09 12.72 16.27 11.82 16.27C10.1 16.27 8.19 15.2 6.81 13.17C4.81 10.28 4.19 8.11 4.19 7.76C4.19 7.55 4.28 7.36 4.67 7.36H6.13C6.46 7.36 6.59 7.52 6.72 7.89C7.43 9.94 8.67 11.77 9.23 11.77C9.42 11.77 9.51 11.68 9.51 11.21V9.07C9.46 8.13 8.96 8.06 8.96 7.74C8.96 7.58 9.09 7.36 9.29 7.36H11.75C12.04 7.36 12.15 7.52 12.15 7.89V10.81C12.15 11.1 12.29 11.21 12.39 11.21C12.57 11.21 12.75 11.1 13.08 10.77C14.31 9.41 15.18 7.4 15.18 7.4C15.27 7.21 15.42 7.03 15.78 7.03H17.24C17.67 7.03 17.77 7.24 17.67 7.61C17.43 8.47 15.58 11.16 15.58 11.16C15.41 11.44 15.34 11.55 15.58 11.86C15.76 12.11 16.31 12.61 16.69 13.04C17.39 13.82 17.91 14.47 18.06 14.91C18.21 15.34 18 15.54 17.58 15.54L18.15 16.27Z"/>
                </svg>
                VK
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorsSection;