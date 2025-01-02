import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useSlideshow } from "@/hooks/useSlideshow";
import type { SlideshowProps } from "@/types/slideshow";

const BaseSlideshow = ({ images, title }: SlideshowProps) => {
  const { isFullscreen, setIsFullscreen, currentIndex, setCurrentIndex } = useSlideshow(images);

  return (
    <>
      {title && (
        <div className="text-center mt-12">
          <h4 className="text-lg font-semibold text-[#F97316] mb-4">{title}</h4>
        </div>
      )}
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
                    src={image.url}
                    alt={image.alt || `Game screenshot ${index + 1}`}
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
          <CarouselPrevious className="left-4 bg-transparent hover:bg-transparent text-[#F97316] hover:text-[#F97316] border-none font-bold" />
          <CarouselNext className="right-4 bg-transparent hover:bg-transparent text-[#F97316] hover:text-[#F97316] border-none font-bold" />
        </Carousel>
      </div>

      <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
          <div className="relative">
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].alt || `Game screenshot ${currentIndex + 1}`}
              className="w-full h-[90vh] object-contain"
            />
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent text-[#F97316] p-2 rounded-full font-bold text-xl"
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
            >
              ←
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-[#F97316] p-2 rounded-full font-bold text-xl"
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

export default BaseSlideshow;