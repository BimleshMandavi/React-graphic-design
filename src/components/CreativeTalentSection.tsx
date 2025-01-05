"use client";
import { motion } from "framer-motion";

const CreativeTalentSection = () => {
  return (
    <section className="py-12 bg-gray-50 md:ml-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center md:ml-20">
        {/* Left Section */}
        <motion.div
          className="lg:w-1/2 px-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex space-x-6 mb-4">
            <span className="text-blue-600 font-bold cursor-pointer border-b-2 border-blue-600">
              For Candidates
            </span>
            <span className="text-gray-500 cursor-pointer">
              For Enterprises
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-black leading-tight">
            Scale your Teams Faster by Hiring the{" "}
            <span className="text-blue-600">Top 1%</span> Skilled Creative
            Talent.
          </h1>
          <p className="text-gray-700 mb-6">
            Join an exclusive talent pool and connect with leading brands
            searching for top creative professionals. Showcase your expertise,
            land your dream role, and redefine your career with endless
            opportunities.
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Get Placed with Top Brands Like Google and Amazon.</li>
            <li>Showcase Your Creative Talent to the World.</li>
            <li>Get Hired for Projects That Elevate Your Career.</li>
          </ul>
          <button className="px-6 py-3 bg-[#1600ea] text-white font-semibold rounded-md hover:bg-blue-700">
            Become Talent
          </button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="lg:w-1/2 mt-12 lg:mt-0 px-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative md:h-[500px] md:w-[500px] bg-white rounded-lg shadow-lg p-6">
            <img className="w-full h-full"  src="/pic-09.png" alt="Arjun Mehta" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeTalentSection;
