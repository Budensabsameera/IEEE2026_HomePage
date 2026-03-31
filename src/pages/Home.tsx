import PrincipalSection from "../components/PrincipalSection";
import StatsSection from "../components/StatsSection";
import ResourcesSection from "../components/ResourcesSection";
import Societies from "../components/ui/Societies";
import FAQSection from "../components/FAQSection";

function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="hero-shell relative isolate min-h-[560px] overflow-hidden bg-slate-950 pt-[72px] sm:min-h-[720px]">
        <div className="absolute inset-0 overflow-hidden">
          <iframe
            className="pointer-events-none absolute left-1/2 top-1/2 h-[195vw] w-[350vw] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-[1.12] saturate-[0.9] sm:h-[56.25vw] sm:w-[177.78vh] sm:scale-[1.08]"
            src="https://www.youtube-nocookie.com/embed/itQQCkA87Hs?autoplay=1&mute=1&loop=1&playlist=itQQCkA87Hs&controls=0&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&disablekb=1&fs=0"
            title="IEEE Hero Video"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            loading="eager"
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(2,6,23,0.94)_8%,rgba(2,6,23,0.7)_42%,rgba(2,6,23,0.88)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_30%,rgba(34,211,238,0.22),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.18),transparent_22%),radial-gradient(circle_at_72%_78%,rgba(14,165,233,0.14),transparent_24%)]" />
        <div className="absolute left-[-6rem] top-28 h-56 w-56 rounded-full bg-cyan-400/12 blur-3xl" />
        <div className="absolute bottom-10 right-[-4rem] h-64 w-64 rounded-full bg-sky-500/12 blur-3xl" />

        <div className="relative z-10 mx-auto flex min-h-[560px] w-full max-w-7xl items-center px-4 py-12 sm:min-h-[720px] sm:px-6 sm:py-16 lg:px-8">
          <div className="textonvideo max-w-3xl text-center text-white sm:text-left">
            <p className="font-urbanist mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-cyan-100 backdrop-blur-md sm:mb-5 sm:text-[11px]">
              IEEE Student Branch
            </p>

            <h1 className="punchline-one">Connecting to the Future,</h1>
            <h1 className="punchline-two">One Node at a Time.</h1>

            <p className="punchline-define">
              IEEE is a global community of innovators dedicated to advancing
              technology for humanity. With a strong network of professionals,
              it drives cutting-edge research, collaboration, and breakthroughs
              in engineering and technology.
            </p>

            <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <a
                href="https://services10.ieee.org/as/authorization.oauth2?response_type=code&client_id=PF_AS_FOR_PA&redirect_uri=https%3A%2F%2Fwww.ieee.org%2Fpa%2Foidc%2Fcb&state=eyJ6aXAiOiJERUYiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2Iiwia2lkIjoiZGkzeU10QkNGYnNvcUFMTVpvakhQV1daUGVVIiwic3VmZml4IjoiSlpId0h2LjE3NDA5OTMxNDIifQ..PgmNZCkThztPCjUPfaCTnA.a-yswFJeTbtgZyAXAMLc2tf7zHxKof4lfOvpN4v7whGBY0HDiGWRCqpZMOtUa--iJbwC_ebGUiWbPw8O6UZ4j6wSmkGiF29eYLqxmetQG71B1XeqVgnFTUCdpm60Z3_A.E7TsELwI3HVc9_-7Lt2YxQ&nonce=Nfr_SyefJht9ii4hm6-oDNvj8VSbqOZy6-g5_mGH3To&acr_values=msp%20sts%20stm%20prf%20crt%20col%20otk%20cmc%20cmp%20spe&scope=openid%20profile%20address%20email%20phone&vnd_pi_requested_resource=https%3A%2F%2Fwww.ieee.org%2Fmembership-application%2Fjoin.html%3Fgrade%3DStudent&vnd_pi_application_name=MembershipApplication"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_34px_rgba(14,165,233,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_40px_rgba(14,165,233,0.36)] sm:w-auto sm:px-7 sm:text-base"
              >
                Join as a Student
              </a>

              <div className="rounded-full border border-white/15 bg-slate-950/35 px-4 py-3 text-sm text-slate-100 backdrop-blur-md">
                Innovation. Community. Leadership.
              </div>
            </div>
          </div>
        </div>
      </section>

      <PrincipalSection />
      <StatsSection />
      <Societies />
      <ResourcesSection />
      <FAQSection />
    </div>
  );
}

export default Home;
