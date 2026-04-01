
const EventHero = () => {
  return (
    <section className="relative flex w-full items-center justify-center bg-black">
      
      <div className="relative h-[500px] w-full overflow-hidden rounded-none md:h-[720px] md:rounded-2xl">
        
        {/* Background Image */}
        <img
          src="/trophy.jpg"
          alt="Achievement Trophy"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Gradient Overlay (better for readability) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30"></div>

        {/* Content */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 md:justify-start md:px-12">
          
          <div className="achievement-hero-text max-w-xl text-center text-white md:text-left">
            <h1 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              “Success is not final,
              <br />
              failure is not fatal —
              <br />
              it is the courage to continue that counts.”
            </h1>

            <p className="mt-4 text-sm opacity-90 sm:text-base md:text-xl">
              Keep pushing forward. Your achievements define your journey.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EventHero;
