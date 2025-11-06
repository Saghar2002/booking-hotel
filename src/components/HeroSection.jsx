import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import BookButton from "./BookButton";

const HeroSection = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navItems = ["Home", "Hotel", "Offer", "Contact"];

  return (
    <>
      <section
        className="relative w-full 
        h-[85vh]         /* موبایل */
        sm:h-[90vh]      /* تبلت */
        md:h-[100vh]     /* دسکتاپ */ 
        bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/HeroSection.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60 "></div>

        {/* header content */}

        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 flex justify-between items-center px-6 md:px-10 py-4 text-white"
        >
          <a
            href="#"
            className="px-4 py-2 font-semibold transition-all duration-200 hover:drop-shadow hover:bg-white/10 rounded"
          >
            October Hotel
          </a>

          {/* Desktop nav */}

          <nav className="hidden md:flex space-x-6 px-5">
            {navItems.map((item, i) => (
              <a href="#" key={i}>
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburgur Menu Icon */}

          <button
            className="md:hidden text-2xl"
            onClick={() => setOpenMenu(!openMenu)}
          >
            ☰
          </button>
        </motion.header>

        {/* mobile menu */}

        <AnimatePresence>
          {openMenu && (
            <>
              {/* background overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-30"
                onClick={() => setOpenMenu(false)}
              ></motion.div>

              {/* sliding menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4 }}
                className="fixed right-0 top-0 w-[70%] h-full bg-white text-black p-6 z-40 flex flex-col space-y-6 text-lg"
              >
                <button
                  className="self-end text-2xl mb-4"
                  onClick={() => setOpenMenu(false)}
                >
                  ✖
                </button>

                {navItems.map((item, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="block hover:text-blue-600"
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* hero section */}

        <div className="relative z-10  flex flex-col justify-center items-center h-full text-center text-white px-4">

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-5xl font-bold sm:font-semibold mb-3"
          >
            Luxury & Comfort, Just a Click Away
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="sm:text-lg md:text-2xl font-light mb-10"
          >
            Best prices, best comfort, all in one place
          </motion.p>
          <BookButton />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
