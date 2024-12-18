import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const GameSlideshow = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://i.ibb.co/4p3Lgk2/01.jpg",
    "https://i.ibb.co/gFQ7wtY/02.jpg",
    "https://i.ibb.co/dc3cBPQ/03.jpg",
    "https://i.ibb.co/NVnYTN8/04.jpg",
    "https://i.ibb.co/3S95Ht9/05.jpg",
    "https://i.ibb.co/cYXTVPq/06.jpg",
    "https://i.ibb.co/XFfJSLz/07.jpg",
    "https://i.ibb.co/LryQSx9/08.jpg",
    "https://i.ibb.co/WPBnfJX/09.jpg",
    "https://i.ibb.co/fNzkvtL/10.jpg",
    "https://i.ibb.co/G9JyyPk/11.jpg",
    "https://i.ibb.co/WyqbK9m/12.jpg",
    "https://i.ibb.co/Brs2Lzm/13.jpg",
    "https://i.ibb.co/CQzXz7r/14.jpg",
    "https://i.ibb.co/fnmHNZF/15.jpg",
    "https://i.ibb.co/Kbp0Kqc/16.jpg",
    "https://i.ibb.co/rQdnRGC/17.jpg",
    "https://i.ibb.co/bJn7K89/18.jpg",
    "https://i.ibb.co/4SYLBXD/19.jpg",
    "https://i.ibb.co/1RMtn1m/20.jpg",
    "https://i.ibb.co/b6pvP0s/21.jpg",
    "https://i.ibb.co/12xWfqQ/22.jpg",
    "https://i.ibb.co/RPFs901/23.jpg",
    "https://i.ibb.co/9G4XPFD/24.jpg",
    "https://i.ibb.co/3kGwg7r/25.jpg",
    "https://i.ibb.co/hFFMZL6/26.jpg",
    "https://i.ibb.co/7QJTZL8/26-2.jpg",
    "https://i.ibb.co/zP9Zpmt/27.jpg",
    "https://i.ibb.co/QjkBP0q/28.jpg",
    "https://i.ibb.co/Sxzvyfh/29.jpg",
    "https://i.ibb.co/Rh447TP/30.jpg",
    "https://i.ibb.co/56tTFwy/31.jpg",
    "https://i.ibb.co/JBH0p64/32.jpg",
    "https://i.ibb.co/K2JSpkB/33.jpg",
    "https://i.ibb.co/mTwNPjs/34.jpg",
    "https://i.ibb.co/MsrkBvY/35.jpg",
    "https://i.ibb.co/CbzfJB9/36.jpg",
    "https://i.ibb.co/N70595j/37.jpg",
    "https://i.ibb.co/d45mrCc/39.jpg",
    "https://i.ibb.co/L8MXwY2/40.jpg",
    "https://i.ibb.co/p1KP4Tt/41.jpg"
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isFullscreen) {
        if (e.key === "ArrowLeft") {
          setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
        } else if (e.key === "ArrowRight") {
          setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        } else if (e.key === "Escape") {
          setIsFullscreen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullscreen, images.length]);

  return (
    <>
      <div className="w-full mt-12">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="basis-full">
                <div className="p-1">
                  <img
                    src={image}
                    alt={`Game screenshot ${index + 1}`}
                    className="w-full h-[600px] object-contain rounded-lg cursor-pointer"
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsFullscreen(true);
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>

      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
          <div className="relative">
            <img
              src={images[currentIndex]}
              alt={`Game screenshot ${currentIndex + 1}`}
              className="w-full h-[90vh] object-contain"
            />
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
            >
              ←
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
              onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
            >
              →
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GameSlideshow;