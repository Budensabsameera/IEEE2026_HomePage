import { useMemo, type CSSProperties } from "react";
import "./AboutPage.css";
import SvcePages from "./svcepages";
import Mission from "./mission";
import JoinIEEE from "./JoinIEEE";

const heroTags = ["Innovation", "Leadership", "Research", "Community Impact"];

const valueCards = [
  {
    title: "Technical Excellence",
    body: "We build strong engineering fundamentals through projects, peer learning, and hands-on practice.",
  },
  {
    title: "Global Mindset",
    body: "IEEE connects students with global standards, mentors, and collaborative opportunities.",
  },
  {
    title: "Service Through Technology",
    body: "We encourage solutions that are socially relevant, sustainable, and useful to real communities.",
  },
];

function AboutPage() {
  const stars = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => {
        const seed = (i + 11) * 59;
        const tail = 4 + (seed % 22) / 10;
        const top = (seed * 5) % 100;
        const duration = 7 + (seed % 30) / 10;
        const delay = (seed % 80) / 10;
        return {
          id: `star-${i}`,
          style: {
            ["--star-tail-length" as string]: `${tail}em`,
            ["--top-offset" as string]: `${top}vh`,
            ["--fall-duration" as string]: `${duration}s`,
            ["--fall-delay" as string]: `${delay}s`,
          } as CSSProperties,
        };
      }),
    []
  );

  return (
    <div>
      <section className="about-page">
        <div className="about-stars" aria-hidden="true">
          {stars.map((star) => (
            <span key={star.id} className="about-star" style={star.style} />
          ))}
        </div>

        <div className="about-orb about-orb-one" aria-hidden="true" />
        <div className="about-orb about-orb-two" aria-hidden="true" />

        <div className="about-shell">
          <div className="about-copy">
            <p className="about-eyebrow">About IEEE SVCE</p>
            <h1 className="about-title">
              A Student Branch Built for
              <span> Future Engineers</span>
            </h1>
            <p className="about-lead">
              IEEE at SVCE is a community where students learn by building,
              collaborate across domains, and grow into professionals ready for
              real-world impact.
            </p>

            <div className="about-tags" role="list" aria-label="Branch focus areas">
              {heroTags.map((tag) => (
                <span key={tag} className="about-tag" role="listitem">
                  {tag}
                </span>
              ))}
            </div>

            <div className="about-metrics" aria-label="IEEE branch highlights">
              <article className="about-metric">
                <p className="about-metric-value">9+</p>
                <p className="about-metric-label">Society Focus Areas</p>
              </article>
              <article className="about-metric">
                <p className="about-metric-value">100+</p>
                <p className="about-metric-label">Student Participants</p>
              </article>
              <article className="about-metric">
                <p className="about-metric-value">Year-Round</p>
                <p className="about-metric-label">Events & Initiatives</p>
              </article>
            </div>
          </div>

          <aside className="about-panel" aria-label="About page highlight">
            <h2 className="about-panel-title">What Defines Our Branch</h2>
            <ul className="about-panel-list">
              <li>Mentor-guided workshops and practical technical sessions.</li>
              <li>Cross-domain exposure across computing, electronics, and innovation tracks.</li>
              <li>Leadership pathways through events, volunteering, and team projects.</li>
            </ul>
            <p className="about-panel-quote">
              "Learn deeply, build consistently, and contribute responsibly."
            </p>
          </aside>
        </div>
      </section>

      <section className="about-values" aria-label="Core values of IEEE SVCE">
        <div className="about-values-inner">
          {valueCards.map((card) => (
            <article key={card.title} className="about-value-card">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <SvcePages />
      <Mission />
      <JoinIEEE />
    </div>
  );
}

export default AboutPage;

