"use client";

import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="flex items-center justify-center h-80 bg-blue-600">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-8 px-60">
          Unlock your Potential to get noticed among Top 1% ventures!
        </h1>
        <div className="flex justify-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-yellow-500 text-black px-6 py-3 rounded font-medium"
          >
            Book a Demo
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="hover:bg-white border-white text-white hover:text-black px-6 py-3 rounded font-medium border-2 "
          >
            Sign up
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
