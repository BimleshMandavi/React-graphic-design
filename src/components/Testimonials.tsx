


"use client";
import { motion } from "framer-motion";


const Testimonials = () => {
  return (
    <section className=" px-20 bg-white md:mt-8">
      <div className="container mx-auto text-center ">
        <h2 className="text-6xl text-black  mb-8">
          Clients are Pitching about us.
        </h2>
        <div className="flex justify-center items-center mb-8">
          <button className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-200 text-black mr-4">
            &#8592;
          </button>
          <button className="w-10 h-10 flex justify-center items-center rounded-full bg-black text-white">
            &#8594;
          </button>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {[...Array(9)].map((_, index) => (
            <motion.div
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-gray-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center justify-center mb-2">
                {[...Array(9)].map((_, starIndex) => (
                  <span key={starIndex} className="text-[#1600ea]">
                    &#9733;
                  </span>
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4">
                "Text"
              </p>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-2"></div>
                <div className="text-left">
                  <p className="text-sm font-bold">Ank Jain</p>
                  <p className="text-xs text-gray-500">Designer</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
