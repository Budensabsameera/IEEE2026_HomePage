import { LandingAccordionItem } from "../components/Event_2ndcomponent";
import AchievementsCardGrid from "../components/Event_cards";
import ImageCarousel from "../components/ImageCourosel";

function Events() {
  const images = [
    "/event1.jpeg",
    "/event2.jpeg",
    "/event3.jpg",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  ];

  return (
    <div className="bg-transparent text-white">
      <main>
        <div className="flex justify-center pt-16">
          <ImageCarousel images={images} interval={3500} />
        </div>

        <div className="mt-10">
          <LandingAccordionItem />
        </div>

        <div className="mt-10">
          <AchievementsCardGrid />
        </div>
      </main>
    </div>
  );
}

export default Events;
