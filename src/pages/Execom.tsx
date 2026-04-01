type CommitteeMember = {
  name: string;
  role: string;
  focus: string;
  initials: string;
  accent: string;
};

const officeBearers: CommitteeMember[] = [
  {
    name: "Aarav Menon",
    role: "Chair",
    focus: "Branch strategy, chapter coordination, and annual planning",
    initials: "AM",
    accent: "from-cyan-400 via-sky-500 to-blue-600",
  },
  {
    name: "Diya Nair",
    role: "Vice Chair",
    focus: "Operations, volunteer enablement, and internal execution",
    initials: "DN",
    accent: "from-emerald-400 via-teal-500 to-cyan-600",
  },
  {
    name: "Rahul Krishnan",
    role: "Secretary",
    focus: "Documentation, meeting records, and team communication",
    initials: "RK",
    accent: "from-indigo-400 via-blue-500 to-cyan-500",
  },
  {
    name: "Meera Joseph",
    role: "Treasurer",
    focus: "Budget planning, sponsorship coordination, and reporting",
    initials: "MJ",
    accent: "from-amber-400 via-orange-500 to-rose-500",
  },
];

const teamLeads: CommitteeMember[] = [
  {
    name: "Nikhil Varma",
    role: "Events Lead",
    focus: "Hackathons, flagship events, and workshop logistics",
    initials: "NV",
    accent: "from-violet-400 via-indigo-500 to-blue-600",
  },
  {
    name: "Ananya Thomas",
    role: "Technical Lead",
    focus: "Project circles, coding sessions, and innovation challenges",
    initials: "AT",
    accent: "from-cyan-400 via-sky-500 to-indigo-600",
  },
  {
    name: "Fathima Noor",
    role: "Design & Media Lead",
    focus: "Brand visuals, social media storytelling, and content design",
    initials: "FN",
    accent: "from-pink-400 via-rose-500 to-orange-500",
  },
  {
    name: "Sanjay Pillai",
    role: "Membership Lead",
    focus: "Onboarding, engagement, and member retention programs",
    initials: "SP",
    accent: "from-lime-400 via-emerald-500 to-teal-600",
  },
];

function MemberCard({ member }: { member: CommitteeMember }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_70px_rgba(14,165,233,0.16)]">
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

      <div className="flex items-start gap-4">
        <div
          className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-[24px] bg-gradient-to-br ${member.accent} text-2xl font-extrabold tracking-[0.12em] text-white shadow-lg shadow-slate-300/50`}
        >
          {member.initials}
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">
            {member.role}
          </p>
          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            {member.name}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {member.focus}
          </p>
        </div>
      </div>
    </article>
  );
}

function Execom() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fbff_0%,#eef6ff_42%,#f8fafc_100%)]">
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-slate-950 px-4 pb-18 pt-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.24),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(59,130,246,0.18),transparent_25%),linear-gradient(120deg,rgba(15,23,42,0.96),rgba(2,6,23,0.98))]" />
        <div className="absolute left-[-4rem] top-24 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-[-2rem] h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-cyan-100 backdrop-blur">
              IEEE Execom 2026
            </p>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              The team shaping our branch momentum.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Meet the executive committee driving technical programs,
              student engagement, and chapter growth across the IEEE student
              branch.
            </p>
          </div>

          <div className="grid w-full max-w-xl grid-cols-3 gap-4">
            <div className="rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur-md">
              <p className="text-3xl font-extrabold text-cyan-200">08</p>
              <p className="mt-2 text-sm text-slate-200">Core leaders</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur-md">
              <p className="text-3xl font-extrabold text-cyan-200">20+</p>
              <p className="mt-2 text-sm text-slate-200">Branch initiatives</p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur-md">
              <p className="text-3xl font-extrabold text-cyan-200">1</p>
              <p className="mt-2 text-sm text-slate-200">Shared vision</p>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <section>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">
                Office Bearers
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Core branch leadership
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              These members oversee the branch direction, governance,
              documentation, and program continuity throughout the academic
              year.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {officeBearers.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-700">
                Team Leads
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Committees that turn plans into action
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              From events to outreach, these leads keep the chapter active,
              visible, and deeply useful to student members.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {teamLeads.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Execom;
