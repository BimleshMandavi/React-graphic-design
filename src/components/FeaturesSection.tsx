
import { motion } from "framer-motion";

function FeaturesSection() {
  const features = [
    {
      title: "Punctuality Meets Perfection ⏰",
      description:
        "We deliver creatives, precise designs on schedule, ensuring excellence for your brand every time.",
      icon: "/assets/punctual.png",
    },
    {
      title: "Showcase Your Brand’s Personality 🌟",
      description:
        "Whether it’s minimalist elegance or bold statements, we tailor designs that resonate with your audience.",
      icon: "/assets/watch.svg",
    },
    {
      title: "Engage with Strategic Visuals 📈",
      description:
        "From social media posts to digital ads, our graphics are crafted to drive engagement and action.",
      icon: "/assets/grap.svg",
    },
  ];

  return (
    <motion.section
      id="features"
      className="bg-[#070324] text-white py-12 sm:py-16 px-4 sm:px-8 lg:px-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-2xl sm:text-4xl lg:text-6xl font-bold text-center mb-10 sm:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Engaging Visual Creatives That Drive Results
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#1c1c29] p-6 sm:p-8 rounded-lg flex flex-col items-center text-center shadow-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12 sm:w-16 sm:h-16 mb-4"
              />
              <h3 className="text-lg sm:text-2xl lg:text-3xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default FeaturesSection;
