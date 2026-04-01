import React from "react";

type Card = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const cards: Card[] = [
  
  {
    id: 1,
    title: "Inaugural",
    description: "Empowering innovation and collaboration through IEEE inaugural event.",
    image: "/inaugural_event.png",
  },
  {
    id: 2,
    title: "VLsI Workshop",
    description: "Front-End to Back-End: A Complete VLSI Design Flow",
    image: "/vls1_event.jpg",
  },
  {
    id: 3,
    title: "Workshop",
    description: "Hands-on workshops on emerging technologies.",
    image: "/ach3.jpg",
  },
  {
    id: 4,
    title: "Guest Lecture",
    description: "Industry experts sharing real-world experience.",
    image: "/ach4.jpg",
  },
  {
    id: 5,
    title: "Tech Symposium",
    description: "A national-level technical symposium with expert sessions.",
    image: "/ach1.jpg",
  },
  {
    id: 6,
    title: "Hackathon",
    description: "24-hour hackathon focused on innovation and teamwork.",
    image: "/ach2.jpg",
  },
  {
    id: 7,
    title: "Workshop",
    description: "Hands-on workshops on emerging technologies.",
    image: "/ach3.jpg",
  },
  {
    id: 8,
    title: "Guest Lecture",
    description: "Industry experts sharing real-world experience.",
    image: "/ach4.jpg",
  },
];

const AchievementsCardGrid: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-4 ">
      <h2 className="mb-12 text-center text-3xl font-bold text-cyan-700">
        Previous year Events
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4  ">
        {cards.map((card) => (
          <div
            key={card.id}
            tabIndex={0} // 👈 enables tap on mobile
            className="group relative h-80 overflow-hidden rounded-2xl shadow-xl focus:outline-none "
          >
            {/* IMAGE (STATIC) */}
            <img
              src={card.image}
              alt={card.title}
              className="h-full w-full object-cover"
            />

            {/* TEXT OVERLAY */}
            <div
              className="
                absolute bottom-0 h-1/2 w-full
                translate-y-full
                bg-black/70 p-4 text-white
                transition-transform duration-500
                group-hover:translate-y-0
                group-focus-within:translate-y-0
              "
            >
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm opacity-90">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsCardGrid;
