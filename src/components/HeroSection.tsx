import { motion } from 'framer-motion';

import { SiAdobe } from "react-icons/si";

 function HeroSection() {
  return (
    <motion.section
      id="hero"
      
      className="bg-[#070324] text-white py-16 relative sm:px-19"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      
      <div className="container sm:ml-20  sm:px-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-7xl  mb-6 space-y-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
           <p>Driving Sales</p> <p> and Capturing</p> Attention Through <div className="text-yellow-400">Graphic Designs</div>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6 ml-4 text-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >

           <li> On-board the Top 1% Design Talent.</li> <li> Communicate your brand’s story.</li> <li>Impactful Marketing Collateral.</li>
          </motion.p>
          <motion.button
            className="bg-[#1600ea] hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Book a Demo
          </motion.button>
        </div>
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center sm:ml-36"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className=' '>
          <img className='sm:w-[800px] sm:h-[600px]' src="/pic-01.png" alt="Hero Image" />
          
           <div className='flex items-center gap-2 px-14 text-lg sm:ml-96 '><SiAdobe  /> Adobe</div>
           </div>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default HeroSection