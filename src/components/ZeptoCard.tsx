
"use client";
import { motion } from "framer-motion";

export default function ZeptoCard() {
  return (
    <div className="flex items-center justify-center h-80 bg-[#FAF6F0] mt-20 mx-24">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10 p-6  rounded-lg max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Section */}
        <div className="flex flex-col items-center  md:items-start w-full ">
          <div className="bg-[#4B1868] text-white font-bold text-lg px-6 py-3  rounded-lg">
            zepto
          </div>
          <div className="mt-4 text-center md:text-left ">
            <p className="font-medium text-gray-700">Sanskruti Verma</p>
            <p className="text-sm text-gray-500">Visual Design Manager</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-gray-700 text-center md:text-left  bg-white p-6 shadow-lg rounded-lg max-w-4xl">
          <p>
            Zepto has partnered with us to enhance our brand’s visual identity
            through expert graphic design. This collaboration drives revenue
            growth by creating high-quality, engaging designs that resonate with
            our audience. Together, we’re scaling our brand and staying ahead in
            a competitive market.
          </p>
          <a
            href="#"
            className="inline-block mt-4 text-[#1600ea] hover:underline flex items-center"
          >
            View Portfolio <span className="ml-2">→</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}


