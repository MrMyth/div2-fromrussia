import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const GameSlideshow2 = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://i.ibb.co/NpXXw0V/01.jpg",
    "https://i.ibb.co/DCcb9T2/02.jpg",
    "https://i.ibb.co/kQ7nqc2/03.jpg",
    "https://i.ibb.co/9WYhGXL/04.jpg",
    "https://i.ibb.co/G5J7Kw1/05.jpg",
    "https://i.ibb.co/Bwj5Fbq/06.jpg",
    "https://i.ibb.co/crFpJRK/07-1.jpg",
    "https://i.ibb.co/YT95VND/07-2.jpg",
    "https://i.ibb.co/ChWK5w2/07-3.jpg",
    "https://i.ibb.co/t871SdM/08.jpg",
    "https://i.ibb.co/m5wRgpy/09.jpg",
    "https://i.ibb.co/Gk6Fq52/10.jpg",
    "https://i.ibb.co/m6GxZqY/11.jpg",
    "https://i.ibb.co/3Yw1hZD/12.jpg",
    "https://i.ibb.co/881fMGf/13.jpg",
    "https://i.ibb.co/LYNrGgr/14.jpg",
    "https://i.ibb.co/zx5Fsqh/15.jpg",
    "https://i.ibb.co/GJ7yYfW/16.jpg",
    "https://i.ibb.co/DzrpgY2/17.jpg",
    "https://i.ibb.co/kDvPD4s/18.jpg",
    "https://i.ibb.co/Z6L4G6q/19.jpg",
    "https://i.ibb.co/wprtZYw/20.jpg",
    "https://i.ibb.co/4fcmJrz/21.jpg"
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

export default GameSlideshow2;