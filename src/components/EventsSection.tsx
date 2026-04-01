import { motion } from "framer-motion";

interface IEEEEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
}

const events: IEEEEvent[] = [
  {
    id: "ieee-tech-summit",
    title: "IEEE Technical Summit 2026",
    description: "Keynotes and technical tracks on AI systems and smart engineering.",
    date: "March 12, 2025",
    image:
      "https://images.unsplash.com/photo-1540575467063-178f50002c4b?w=900&h=550&fit=crop",
  },
  {
    id: "robotics-workshop",
    title: "Robotics Hands-On Workshop",
    description: "Build and program autonomous prototypes with faculty mentors.",
    date: "April 08, 2026",
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6dcef4ed?w=900&h=550&fit=crop",
  },
  {
    id: "industry-conclave",
    title: "Industry Collaboration Conclave",
    description: "Bridge academics and industry through panels and networking.",
    date: "May 21, 2026",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&h=550&fit=crop",
  },
];

function EventsSection() {
  return (
    <section id="activities" className="bg-gradient-to-b from-[#f3f9ff] to-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            IEEE Events & Activities
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Discover technical sessions, workshops, and collaborative experiences
            organized by IEEE SVCE.
          </p>
          <a
            href="/activities.html"
            className="mt-5 inline-flex rounded-xl bg-[#00629B] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-[#005286]"
          >
            Open Activities Page
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {events.map((event) => (
            <motion.a
              key={event.id}
              href={`/activities.html#${event.id}`}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="block overflow-hidden rounded-2xl border border-[#00629B]/15 bg-white text-left shadow-lg shadow-[#0b3f63]/10"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-52 w-full object-cover"
              />
              <div className="p-5">
                <p className="mb-2 text-sm font-semibold text-[#00629B]">{event.date}</p>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">{event.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {event.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default EventsSection;
