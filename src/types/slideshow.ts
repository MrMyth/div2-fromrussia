export interface SlideshowImage {
  url: string;
  alt?: string;
}

export interface SlideshowProps {
  images: SlideshowImage[];
  title?: string;
}