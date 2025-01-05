
"use client";
import { motion } from "framer-motion";


const ExpertToolsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
    hover: { scale: 1.2 },
  };

  return (
    <motion.section
      className="bg-[#f2ebdf] text-center py-6 sm:py-10 lg:py-14 px-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="text-xl md:text-6xl lg:text-6xl  text-black mb-4 sm:mb-6 lg:mb-8"
        variants={itemVariants}
      >
        Expertly Crafted with <br /> the Latest Tools
      </motion.h2>
      <motion.div
        // className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 ml-10 justify-center"
        className="flex gap-4 sm:gap-8 pt-10  m-5 justify-center"
        variants={containerVariants}
      >
        {[
          { src: "/assets/Adobe-Photoshop-24px.svg", alt: "Lightroom" },
          { src: "/assets/AI.svg", alt: "Adobe Illustrator" },
          { src: "/assets/indesign.svg", alt: "Photoshop" },
          { src: "/assets/animate.svg", alt: "After Effects" },
          { src: "/assets/Adobe-Lightroom-24px.svg", alt: "Invision" },
          { src: "/assets/adobe-express-logo-24px.svg", alt: "Figma" },
          { src: "/assets/after-effects.svg", alt: "Notion" },
          { src: "/assets/Adobe-Acrobat-24px.svg", alt: "Craft" },
          { src: "/assets/incopy.svg", alt: "Other Tool" },
        ].map((tool, index) => (
          <motion.div
            key={index}
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-black flex items-center justify-center gap-6"
            variants={itemVariants}
            whileHover="hover"
          >
            <img className="h-20 w-20 gap-8" src={tool.src} alt={tool.alt} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default ExpertToolsSection;
