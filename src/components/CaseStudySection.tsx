"use client";

import { motion } from "framer-motion";

const CaseStudySection = () => {
  return (
    <section className="bg-gray-900 py-8 sm:py-16 px-4 sm:px-6 lg:px-8 text-white mt-20">
      <div className="max-w-7xl mt-8 mx-auto">
        {/* Logos Section */}
        <div className="flex flex-wrap justify-center items-center gap-16 mb-8 sm:mb-12">
          <img
            src="/assets/park+.png"
            alt="Park+"
          
            className="w-24 sm:w-28"
          />
          <img
            src="/assets/piramal-new.svg"
            alt="Piramal"
            
            className="w-24 sm:w-28"
          />
          <img
            src="/assets/adani_logo.png"
            alt="Adani"
         
            className="w-24 sm:w-28"
          />
          <img
            src="/assets/Screenshot 2025-01-04 145058.png"
            alt="RVshare"
            
            className="w-24 sm:w-28"
          />
          <img
            src="/assets/apollo247.svg"
            alt="Apollo 247"
           
            className="w-24 sm:w-28"
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 text-center md:text-left"
          >
            <p className="text-yellow-400 text-xs sm:text-sm font-semibold uppercase tracking-widest">
              Featured Case Study
            </p>
            <h3 className="text-xl sm:text-6xl lg:text-6xl  leading-snug space-x-8">
              "Reimagining a Legacy: Redefining Top's India Brand Identity and
              Strategy for the Modern Consumer"
            </h3>
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 justify-center md:justify-start">
              <div>
                <p className="text-3xl sm:text-6xl font-bold text-green-400">
                  250%
                </p>
                <p className="text-xs sm:text-sm text-gray-300">
                  Increase in Click Rate
                </p>
              </div>
              <div>
                <p className="text-3xl sm:text-6xl font-bold text-green-400">
                  192k+
                </p>
                <p className="text-xs sm:text-sm text-gray-300">
                  Leads Generated with Creatives
                </p>
              </div>
            </div>
            <a
              href="/case-studies/tops"
              className="inline-flex items-center text-yellow-400 font-semibold mt-4 hover:underline"
            >
              Read Case Study <span className="ml-2">&rarr;</span>
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="/pic-10.png"
              alt="Tops Case Study"
              className="  rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
