import "./mission.css";

function Vision() {
  return (
    <div className="vision-card">
      <p className="mv-title">VISION</p>
      <p className="mv-subtitle">STATEMENT</p>
      <div className="mv-line" aria-hidden="true" />
      <div className="mv-box">
        <p className="mv-body">
          A single sentence that defines the{" "}
          <span className="mv-highlight">desired image</span> or{" "}
          <span className="mv-highlight">legacy</span> of an organisation at a
          point,{" "}
          <span className="mv-highlight">far into the future</span>.
        </p>
      </div>
    </div>
  );
}

export default Vision;
