
import { SlideshowImage } from "@/types/slideshow";
import BaseSlideshow from "./BaseSlideshow";

interface RaidSlideshowProps {
  images: SlideshowImage[];
  title?: string;
}

const RaidSlideshow = ({ images, title }: RaidSlideshowProps) => {
  return <BaseSlideshow images={images} title={title} />;
};

export default RaidSlideshow;
