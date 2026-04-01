import { useEffect, useRef } from "react";
import ieeelogo from "../assets/ieeelogo.jpg";

const images = [
  ieeelogo,
  ieeelogo,
  ieeelogo,
  ieeelogo,
];

export default function AutoManualImageScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationId: number;
    const imageWidth = window.innerWidth;

    const autoScroll = () => {
      container.scrollBy({
        left: imageWidth,
        behavior: "smooth",
      });

      // loop back to start
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      }

      animationId = window.setTimeout(autoScroll, 3000); // 3 sec per image
    };

    animationId = window.setTimeout(autoScroll, 3000);

    return () => window.clearTimeout(animationId);
  }, []);

  return (
    <div
      ref={containerRef}
      className="
        flex overflow-x-auto
        snap-x snap-mandatory
        scrollbar-hide
        w-screen h-screen
      "
    >
      {images.map((img, index) => (
        <div
          key={index}
          className="w-screen h-screen snap-center flex-shrink-0"
        >
          <img
            src={img}
            alt={`image-${index}`}
            className="w-full h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
