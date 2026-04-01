import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FaAtom,
  FaComputer,
  FaIndustry,
  FaLightbulb,
  FaMagnifyingGlass,
  FaMicrochip,
  FaRobot,
  FaSatellite,
  FaSignal,
  FaWaveSquare,
} from "react-icons/fa6";

interface Society {
  id: string;
  name: string;
  description: string;
  icon: IconType;
}

const societies: Society[] = [
  {
    id: "computer",
    name: "IEEE Computer Society",
    description: "Computing systems, software engineering, and digital innovation.",
    icon: FaComputer,
  },
  {
    id: "power",
    name: "IEEE Power & Energy Society",
    description: "Power systems, smart grids, and sustainable energy solutions.",
    icon: FaLightbulb,
  },
  {
    id: "communications",
    name: "IEEE Communications Society",
    description: "Wireless networks, telecom systems, and communication standards.",
    icon: FaSignal,
  },
  {
    id: "robotics",
    name: "IEEE Robotics & Automation Society",
    description: "Robotics intelligence, automation systems, and applied control.",
    icon: FaRobot,
  },
  {
    id: "nano",
    name: "IEEE Nanotechnology Council",
    description: "Nanoelectronics, advanced materials, and nanoscale engineering.",
    icon: FaAtom,
  },
  {
    id: "signal",
    name: "IEEE Signal Processing Society",
    description: "Audio, image, and data signal analysis and processing.",
    icon: FaWaveSquare,
  },
  {
    id: "industrial",
    name: "IEEE Industrial Electronics Society",
    description: "Industrial automation, intelligent machines, and electronics.",
    icon: FaIndustry,
  },
  {
    id: "devices",
    name: "IEEE Electron Devices Society",
    description: "Semiconductor devices, circuits, and emerging hardware.",
    icon: FaMicrochip,
  },
  {
    id: "aerospace",
    name: "IEEE Aerospace & Electronic Systems Society",
    description: "Aerospace electronics, avionics, and mission-critical systems.",
    icon: FaSatellite,
  },
];

function SocietiesSection() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () =>
      societies.filter((society) => {
        const term = query.toLowerCase();
        return (
          society.name.toLowerCase().includes(term) ||
          society.description.toLowerCase().includes(term)
        );
      }),
    [query]
  );

  return (
    <section id="societies" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            IEEE Professional Societies
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600">
            Explore the nine IEEE societies shaping the future of engineering and
            technology.
          </p>
          <a
            href="/societies.html"
            className="mt-5 inline-flex rounded-xl bg-[#00629B] px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-105 hover:bg-[#005286]"
          >
            Open Societies Page
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-10 max-w-2xl"
        >
          <label htmlFor="society-search" className="sr-only">
            Search IEEE societies
          </label>
          <div className="relative">
            <FaMagnifyingGlass className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#00629B]" />
            <input
              id="society-search"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search IEEE societies..."
              className="w-full rounded-2xl border border-[#00629B]/30 bg-[#f4f9fe] py-3 pl-11 pr-4 text-slate-900 outline-none transition focus:border-[#00629B] focus:ring-2 focus:ring-[#00629B]/20"
            />
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="rounded-2xl border border-dashed border-[#00629B]/30 bg-[#f6fbff] py-16 text-center text-slate-600"
            >
              No societies found
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((society, index) => {
                const Icon = society.icon;
                return (
                  <motion.a
                    key={society.id}
                    href={`/societies.html#${society.id}`}
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    whileHover={{ y: -8, scale: 1.015 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/50 bg-white/40 p-6 shadow-lg backdrop-blur-xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00629B]/20 to-transparent opacity-0 transition group-hover:opacity-100" />
                    <div className="relative z-10">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#00629B] to-[#004b77] text-white shadow-lg shadow-[#00629B]/30">
                        <Icon className="text-xl" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-slate-900">
                        {society.name}
                      </h3>
                      <p className="text-sm leading-relaxed text-slate-600">
                        {society.description}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default SocietiesSection;
