import { useState } from "react";

type AccordionItemData = {
  id: number;
  imageUrl: string;
  title: string;
};

type AccordionItemProps = {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
};

const accordionItems = [
  { id: 1, imageUrl: "/principal_inaugural.png", title: "Tech Symposium" },
  { id: 2, imageUrl: "/principal_inaugural.png", title: "Hackathon" },
  { id: 3, imageUrl: "/ach3.jpg", title: "Workshop" },
  { id: 4, imageUrl: "/ach4.jpg", title: "Guest Lecture" },
  { id: 5, imageUrl: "/ach5.jpg", title: "Project Expo" },
];

const AccordionItem = ({ item, isActive, onMouseEnter }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative h-[450px] rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-[400px]' : 'w-[60px]'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(event) => {
          const image = event.currentTarget;
          image.onerror = null;
          image.src = "https://placehold.co/400x450/2d3748/ffffff?text=Image+Error";
        }}
      />
      {/* Dark overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out
          ${
            isActive
              ? 'bottom-6 left-1/2 -translate-x-1/2 rotate-0' // Active state: horizontal, bottom-center
              // Inactive state: vertical, positioned at the bottom, for all screen sizes
              : 'w-auto text-left bottom-24 left-1/2 -translate-x-1/2 rotate-90'
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(4);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="bg-white font-sans">
      <section className="container mx-auto px-4 py-4 md:py-2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left Side: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-cyan-700 leading-tight tracking-tighter">
              Moments of learning and collaboration.
            </h1>
            <p className="mt-6 text-lg text-gray-900 max-w-xl mx-auto md:mx-0">
             Showcasing workshops, guest lectures, and technical sessions conducted to enhance knowledge and skills
              </p>
           
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-1/2">
            {/* Changed flex-col to flex-row to keep the layout consistent */}
            <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
