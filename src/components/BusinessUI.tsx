"use client";
import { motion } from "framer-motion";

 function BusinessUI() {
  return (
    <div className="bg-gray-900 text-white font-sans px-16">
      <section className="text-center py-12">
        <h1 className="text-6xl font-bold mb-4">
          How we are best for your business.
        </h1>
        <div className="flex justify-center gap-8 text-xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold">$10M+</h2>
            <p>Revenue for Clients</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">1500+</h2>
            <p>Projects Delivered</p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">10k+</h2>
            <p>Expert Designers</p>
          </div>
        </div>
      </section>

      <section className="text-center m-5 py-12">
        <h2 className="text-3xl font-bold mb-8">
          Explore Perfect needs with us.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-16">
          {[
            {
              title: "Campaign Planning",
              img: "/pic-05.png", // Replace with the actual path
            },
            {
              title: "UX/UI Design",
              img: "/pic-06.png", // Replace with the actual path
            },
            {
              title: "Advertising",
              img: "/pic-07.png", // Replace with the actual path
            },
            {
              title: "Rebranding",
              img: "/pic-08.png", // Replace with the actual path
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-4  bg-gray-800 rounded-lg "
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-30 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BusinessUI