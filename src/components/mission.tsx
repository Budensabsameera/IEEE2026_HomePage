import "./mission.css";
import { useEffect, useRef } from "react";
import Vision from "./vision";

function Mission() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add("in-view");
          } else {
            section.classList.remove("in-view");
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="mission-vision" ref={sectionRef}>
      <div className="mission-card">
        <p className="mv-title">MISSION</p>
        <p className="mv-subtitle">STATEMENT</p>
        <div className="mv-line" aria-hidden="true" />
        <div className="mv-box">
          <p className="mv-body">
            A single sentence or very short paragraph that is used by an
            organisation to{" "}
            <span className="mv-highlight">explain its existence</span>,{" "}
            <span className="mv-highlight">what it does</span> and{" "}
            <span className="mv-highlight">for whom</span>.
          </p>
        </div>
      </div>
      <Vision />
    </section>
  );
}

export default Mission;
