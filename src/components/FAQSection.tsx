import { useMemo, useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is IEEE Student Branch?",
    answer:
      "IEEE Student Branch is a student-led professional community that helps members explore technology, leadership, research, networking, and hands-on learning beyond the classroom.",
  },
  {
    question: "Who can join IEEE as a student member?",
    answer:
      "Any eligible student with an interest in engineering, computing, innovation, or technology can apply for IEEE student membership and become part of the global network.",
  },
  {
    question: "What kind of activities does our chapter conduct?",
    answer:
      "Our chapter organizes workshops, technical talks, competitions, collaborative projects, networking opportunities, and society-based events that help students grow practically and professionally.",
  },
  {
    question: "Do I need prior experience to participate?",
    answer:
      "No. Many events are designed for beginners as well as advanced learners, so students can start at their own level and grow with guidance from peers, mentors, and faculty support.",
  },
  {
    question: "How do IEEE societies help students?",
    answer:
      "IEEE societies give students a focused way to explore areas like computing, communications, robotics, power systems, and electronics through specialized learning and community interaction.",
  },
  {
    question: "How can I stay updated with chapter events?",
    answer:
      "You can stay connected through the chapter website, social platforms, announcements from coordinators, and IEEE community updates shared by the student branch.",
  },
  {
    question: "What are the benefits of joining IEEE societies?",
    answer:
      "IEEE societies help students go deeper into specific domains through focused technical sessions, peer communities, expert insights, and exposure to specialized career paths.",
  },
];

function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([0]);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return faqs;

    const terms = query.split(/\s+/).filter(Boolean);

    return faqs.filter((faq) => {
      const haystack = `${faq.question} ${faq.answer}`.toLowerCase();
      return terms.some((term) => haystack.includes(term));
    });
  }, [searchTerm]);

  const toggleItem = (index: number) => {
    setOpenItems((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#ecfeff_45%,#f8fafc_100%)] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="absolute left-[-5rem] top-12 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="absolute right-[-4rem] top-32 h-64 w-64 rounded-full bg-sky-300/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-urbanist text-xs uppercase tracking-[0.36em] text-cyan-900/70">
            FAQ
          </p>
          <h2 className="heading-script mt-3 text-3xl text-slate-900 sm:text-5xl md:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="font-urbanist mt-4 text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
            Quick answers about IEEE, student membership, societies, and the
            kind of chapter experiences you can expect here.
          </p>
        </div>

        <div className="mx-auto mt-7 max-w-xl sm:mt-8">
          <label className="relative block">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-4.35-4.35" />
                <circle cx="11" cy="11" r="6" />
              </svg>
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search FAQs..."
              className="w-full rounded-2xl border border-cyan-100 bg-white/90 py-3 pl-12 pr-4 text-sm text-slate-700 shadow-[0_16px_40px_rgba(15,23,42,0.06)] outline-none backdrop-blur-sm transition duration-300 placeholder:text-slate-400 focus:border-cyan-300 focus:ring-4 focus:ring-cyan-100 sm:py-3.5"
            />
          </label>
        </div>

        <div className="mt-8 space-y-3 sm:mt-10 sm:space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div
                key={faq.question}
                className={`faq-card overflow-hidden rounded-[28px] border bg-white/85 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-300 ${
                  isOpen
                    ? "border-cyan-200 shadow-[0_24px_60px_rgba(14,116,144,0.12)]"
                    : "border-white/80 hover:border-cyan-100"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:px-6 sm:py-5"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white transition duration-300 sm:h-10 sm:w-10 sm:text-sm ${
                        isOpen
                          ? "bg-[linear-gradient(135deg,#0891b2,#2563eb)] rotate-6"
                          : "bg-[linear-gradient(135deg,#0f172a,#1e293b)]"
                      }`}
                    >
                      {index + 1}
                    </div>
                    <h3 className="text-[15px] font-semibold leading-6 text-slate-900 sm:text-lg sm:leading-7">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-lg transition duration-300 sm:h-10 sm:w-10 ${
                      isOpen
                        ? "rotate-180 border-cyan-200 bg-cyan-50 text-cyan-700"
                        : "border-slate-200 bg-white text-slate-500"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </div>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                      <div className="mb-3 h-px bg-[linear-gradient(90deg,transparent,rgba(148,163,184,0.45),transparent)] sm:mb-4" />
                      <p className="pl-12 text-sm leading-7 text-slate-600 sm:pl-14 sm:text-base sm:leading-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredFaqs.length === 0 ? (
          <div className="mt-10 rounded-[28px] border border-white/80 bg-white/80 px-6 py-10 text-center shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl">
            <p className="text-lg font-semibold text-slate-900">No FAQs found</p>
            <p className="mt-2 text-sm text-slate-600">
              Try a different keyword to find the answer you need.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default FAQSection;
