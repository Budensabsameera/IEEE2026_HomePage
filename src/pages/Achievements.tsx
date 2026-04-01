import EventHero from "../components/Achievement_Hero";
import AchievementMarquee from "../components/AchievementMarquee";
import Milestones from "../components/milestone";

function Achievements() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <EventHero />
        <Milestones />
        <AchievementMarquee />
      </main>
    </div>
  );
}

export default Achievements;
