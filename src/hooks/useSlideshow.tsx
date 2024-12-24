import { useState, useEffect } from "react";
import type { SlideshowImage } from "@/types/slideshow";

export const useSlideshow = (images: SlideshowImage[]) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return {
    isFullscreen,
    setIsFullscreen,
    currentIndex,
    setCurrentIndex,
  };
};