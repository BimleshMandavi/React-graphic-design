
"use client";

import { motion } from 'framer-motion';

export default function BenefitSection() {
  return (
    <div className="bg-[#1600ea] text-white py-16 px-4 sm:px-8 lg:px-20">
  
      {/* Benefit Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl">How we will benefit you.</h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:p-20">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black rounded-lg shadow-lg flex flex-col sm:flex-row sm:justify-between md:gap-10"
        >
          <div className='w-full sm:w-[40%] p-6'>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Hire Us or On-board Top 1% Creative Talent ✨</h3>
            <p className="text-lg sm:text-xl mb-4">
              Collaborate with our expert team for tailored, high-quality
              designs aligned with your brand’s goals, or onboard top
              creative talent for fresh perspectives. Our flexible approach
              ensures impactful, client-focused solutions that resonate
              with your audience.
            </p>
            <a href="#" className="text-[#1600ea] font-medium">Hire Designers →</a>
          </div>
          <div className="text-center pt-6 sm:pt-10 pl-0 sm:pl-20">
            <img
              src="/pic-15.png"
              alt="Arjun Mehta"
              className="w-full sm:w-64 mx-auto"
            />
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black rounded-lg shadow-lg flex flex-col sm:w-full"
        >
          <div className="p-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Creatives that Drive Revenue 💰</h3>
            <p className="text-lg sm:text-xl mb-4">
              Strategically crafted concepts that captivate engagement and boost conversions to maximize profitability.
            </p>
            <a href="#" className="text-[#1600ea] font-medium">Know More →</a>
          </div>
          <div className="text-center">
            <img
              className="w-full sm:w-64 px-8 pt-2 mt-6 sm:mt-10"
              src="/pic-03.png"
              alt="Arjun Mehta"
            />
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black rounded-lg shadow-lg flex flex-col sm:w-full"
        >
          <div className="p-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Top-notch quality, consistently delivered with excellence 🤩</h3>
            <p className="text-lg sm:text-xl mb-4">
              Scale your content with precisely crafted visuals that ensure consistency
              and lasting impact, seamlessly aligning with your brand to create engaging,
              resonant results.
            </p>
            <a href="#" className="text-[#1600ea] font-medium">Know More →</a>
          </div>
          <div className="text-center mt-6 sm:mt-10">
            <img
              className="w-full sm:w-64 px-8 pt-2 mt-6 sm:mt-10"
              src="/pic-17.png"
              alt="Arjun Mehta"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}


