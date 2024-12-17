import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const GameSlideshow = () => {
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

  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <img
                  src={image}
                  alt={`Game screenshot ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default GameSlideshow;