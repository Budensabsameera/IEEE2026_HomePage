import { useEffect, useState } from "react";

type FadeCarouselProps = {
  images: string[];
  interval?: number;
};

const FadeCarousel = ({ images, interval }: FadeCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const slideInterval =
    interval ??
    ((typeof window !== "undefined" && window.innerWidth >= 1024)
      ? 2000
      : 4000);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, slideInterval);

    return () => clearInterval(timer);
  }, [images.length, paused, slideInterval]);

  return (
    <div
      className="flex flex-col items-center w-full  max-w-5xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image container */}
      <div className="relative w-full h-[260px] sm:h-[360px] lg:h-[560px] overflow-hidden rounded-xl shadow-lg">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out
              ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}
            `}
          />
        ))}
      </div>

      {/* Dots BELOW image */}
      <div className="flex gap-3 mt-4 ">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300
              ${index === currentIndex ? "w-6 bg-gray-900" : "w-2 bg-gray-900"}
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FadeCarousel;
