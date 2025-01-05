"use client";
// HeroSection.tsx
import { motion } from 'framer-motion';

import { SiAdobe } from "react-icons/si";

 function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="bg-gray-900 text-white py-16 relative px-14"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Driving Sales and Capturing Attention Through <span className="text-yellow-400">Graphic Designs</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >

           <li> On-board the Top 1% Design Talent.</li> <li> Communicate your brand’s story.</li> <li>Impactful Marketing Collateral.</li>
          </motion.p>
          <motion.button
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Book a Demo
          </motion.button>
        </div>
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div>
          <img src="/pic-01.png" alt="Hero Image" />
           <div className='flex items-center gap-2 ml-96'><SiAdobe /> Adobe</div>
           </div>
        </motion.div>
        
      </div>
    </motion.section>
  );
}

export default HeroSection
