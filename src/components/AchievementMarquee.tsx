type MarqueeItem = {
  image: string;
};

const firstRow: MarqueeItem[] = [
  {
    image: "/ach1.jpg",
  },
  {
    image: "/ach2.jpg",
  },
  {
    image: "/ach3.jpg",
  },
  {
    image: "/ach4.jpg",
  },
  {
    image: "/ach5.jpg",
  },
];

const secondRow: MarqueeItem[] = [
  {
    image: "/ach5.jpg",
  },
  {
    image: "/ach4.jpg",
  },
  {
    image: "/ach3.jpg",
  },
  {
    image: "/ach2.jpg",
  },
  {
    image: "/ach1.jpg",
  },
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: MarqueeItem[];
  reverse?: boolean;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="marquee-fade relative overflow-hidden">
      <div
        className={`marquee-track flex w-max gap-4 py-2 ${
          reverse ? "marquee-reverse" : ""
        }`}
      >
        {duplicated.map((item, index) => (
          <article
            key={`${item.image}-${index}`}
            className="min-w-[280px] overflow-hidden rounded-2xl border border-cyan-300/20 bg-white/10 backdrop-blur-md shadow-[0_16px_40px_rgba(15,23,42,0.22)]"
          >
            <div className="relative h-72 overflow-hidden">
              <img
                src={item.image}
                alt="Achievement"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

const AchievementMarquee = () => {
  return (
    <section className="bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900 px-4 pb-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/5 px-5 py-10 shadow-[0_30px_80px_rgba(2,6,23,0.35)] backdrop-blur-sm md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Achievement Highlights
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Recognition that keeps moving forward
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-200 md:text-base">
            A continuous snapshot of awards, ambassador roles, funding wins,
            and academic opportunities earned by the IEEE SVCE community.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          <MarqueeRow items={firstRow} />
          <MarqueeRow items={secondRow} reverse />
        </div>
      </div>
    </section>
  );
};

export default AchievementMarquee;
