import "./ieeeabout.css";

function IeeeAbout() {
  const photoItems = [
    {
      src: "https://image-upload.getmycollege.com/new-uploads/college/gallery/svce-tirupati1-gallery-image-549.jpg",
      alt: "SVCE campus block view",
      className: "ieee-photo-frame ieee-photo-top",
    },
    {
      src: "https://image-upload.getmycollege.com/new-uploads/college/gallery/svce-tirupati2-gallery-image-223.jpg",
      alt: "SVCE campus lawn and building",
      className: "ieee-photo-frame ieee-photo-left",
    },
    {
      src: "https://image-upload.getmycollege.com/new-uploads/college/gallery/svce-tirupati4-gallery-image-991.jpg",
      alt: "SVCE campus event view",
      className: "ieee-photo-frame ieee-photo-right",
    },
    {
      src: "https://image-upload.getmycollege.com/new-uploads/college/gallery/svce-tirupati3-gallery-image-966.jpg",
      alt: "SVCE infrastructure panorama",
      className: "ieee-photo-frame ieee-photo-bottom",
    },
  ];

  return (
    <section className="ieee-about">
      <div className="ieee-about-inner">
        <div className="ieee-collage" aria-hidden="true">
          {photoItems.map((photo) => (
            <figure key={photo.alt} className={photo.className}>
              <img src={photo.src} alt={photo.alt} className="ieee-photo" />
            </figure>
          ))}
        </div>

        <div className="ieee-about-copy">
          <p className="ieee-about-eyebrow">About IEEE</p>
          <h2 className="ieee-about-title">
            Institute of Electrical and Electronics Engineers (IEEE)
          </h2>
          <p className="ieee-about-body">
            IEEE at SVCE serves as a strong technical platform where students
            connect academic learning with practical engineering exposure. The
            student branch encourages active participation in workshops,
            seminars, and technical sessions that build confidence and domain
            awareness from early semesters.
          </p>
          <p className="ieee-about-body">
            Through society chapters such as Computer, ComSoc, Signal
            Processing, Sensors, Power, WIE, Nanotechnology, and Education,
            IEEE SVCE creates opportunities for skill development, paper
            presentations, project discussions, and collaborative learning
            across multiple engineering areas.
          </p>
          <p className="ieee-about-body">
            With support from faculty mentors and student volunteers, IEEE SVCE
            helps members improve technical communication, leadership, and
            professional readiness. It also strengthens networking through
            branch events and conference participation, preparing students for
            higher studies, research, and industry careers.
          </p>
          <p className="ieee-about-body">
            IEEE SVCE also promotes a culture of consistency, discipline, and
            collaborative growth where students learn to represent their ideas
            confidently in technical and professional environments.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IeeeAbout;
