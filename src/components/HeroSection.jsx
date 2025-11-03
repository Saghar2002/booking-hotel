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

        {/* header content */}

        <header className='relative z-10 flex justify-between items-center px-5 py-6 text-white'>
          <div className='font bold px-4'>October Hotel</div>
          <nav className='space-x-6 px-5'>
            <a href="#" className='inline-block px-4 py-2 text-center font-semibold transition-all duration-200 hover:drop-shadow hover:bg-white/10 rounded'>Home</a>
            <a href="#" className='inline-block px-4 py-2 text-center font-semibold transition-all duration-200 hover:drop-shadow hover:bg-white/10 rounded'>Hotel</a>
            <a href="#" className='inline-block px-4 py-2 text-center font-semibold transition-all duration-200 hover:drop-shadow hover:bg-white/10 rounded'>Offer</a>
            <a href="#" className='inline-block px-4 py-2 text-center font-semibold transition-all duration-200 hover:drop-shadow hover:bg-white/10 rounded'>Contact</a>
          </nav>
        </header>


        {/* hero section */}
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
