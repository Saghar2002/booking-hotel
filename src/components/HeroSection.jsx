import React from "react";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative w-full md:h-[100vh] sm:h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/HeroSection.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 "></div>
        <div className="relative z-10  flex flex-col justify-center items-center h-full text-center text-white px-4">
          <h1 className="sm:text-2xl md:text-4xl font-bold mb-4">
            Luxury & Comfort, Just a Click Away
          </h1>
          <p className="sm:text-lg md:text-2xl font-light">
            Best prices, best comfort, all in one place
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
