import { motion } from "framer-motion";

const BookButton = ({ text = "Book Now", onClick }) => {
  return (
    <motion.button
      onClick={onClick || (() => {})}
      whileHover={{ y: -5, boxShadow: "0px 10px 25px rgba(255,255,255,0.2)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.35,
        type: "spring",
        stiffness: 200,
        damping: 14,
      }}
      className="
          group relative overflow-hidden
          text-white font-medium
          bg-white/10 backdrop-blur-md border border-white/20
          rounded-full
      
          px-5 py-2 text-sm     /* موبایل */
      
          sm:px-7 sm:py-3 sm:text-base   /* تبلت */
          md:px-9 md:py-4 md:text-lg     /* دسکتاپ */

        //   md:initial-y-[40px]  /* فقط دسکتاپ */
      
          mt-6 flex items-center gap-2
          transition-all duration-300
        "
    >
      {text}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </motion.button>
  );
};

export default BookButton;
