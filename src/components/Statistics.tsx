
"use client";

import { motion } from 'framer-motion';


export default function BenefitSection() {
  return (
    <div className="bg-blue-900 text-white py-16 px-8">
  
      {/* Benefit Section */}
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-6xl ">How we will benefit you.</h2>
      </div>

      {/* Grid Section */}
      <div className=" md:grid-cols-2 lg:grid-cols-3 gap-8 md:p-20">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black  rounded-lg shadow-lg sm:flex sm:justify-between md:gap-10"
        >
          <div className='w-[40%] p-6'>
          <h3 className="text-4xl font-bold mb-2">Hire Us or On-board Top 1% Creative Talent ✨</h3>
          <p className="text-xl mb-4">
            Collaborate with our expert team for tailored, high-quality
designs aligned with your brand’s goals, or onboard top
creative talent for fresh perspectives. Our flexible approach
ensures impactful, client-focused solutions that resonate
with your audience.
          </p>
           <a href="#" className="text-blue-500 font-medium">Hire Designers →</a>
           </div>
           <div className="text-center">
            <img
                src="/pic-02.png"
                alt="Arjun Mehta"
                
              />
              
            </div>
         
        </motion.div>

        {/* Card 2 */}
        <div className='flex justify-evenly mt-12 w-full gap-5 md:gap-10'>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black  rounded-lg shadow-lg"
        >
          <div className='p-6'>
          <h3 className="text-4xl font-bold mb-2">Creatives that Drives Revenue 💰</h3>
          <p className="text-xl mb-4">
            Strategically crafted concepts that captivate engagement and boost conversions to maximize profitability.
          </p>
          <a href="#" className="text-blue-500 font-medium"> Know More →</a>
          </div>
          <div className="text-center mt-5">
            <img
                src="/pic-03.png"
                alt="Arjun Mehta"
               
              
              />
              
            </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black rounded-lg shadow-lg"
        >
          <div className='p-6'>
          <h3 className="text-4xl font-bold mb-2">Top-notch quality, consistently delivered with excellence 🤩</h3>
          <p className="text-xl mb-4">
            Scale your content with precisely crafted visuals that ensure consistency
and lasting impact, seamlessly aligning with your brand to create engaging,
resonant results.
          </p>
          <a href="#" className="text-blue-500 font-medium">Know More →</a>
          </div>
          <div className="text-center mt-36">
            <img className='h-full'
                src="/pic-04.png"
                alt="Arjun Mehta"
                
              
              />
              
            </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
}

