import React from "react";
import My from "../../assets/my.png";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="home"
      className="text-white flex flex-col justify-center items-center w-3/5 m-auto text-center gap-10"
    >
      <motion.div variants={itemVariants} className="w-60 h-60 bg-black rounded-full overflow-hidden">
        <img src={My} className="object-cover" alt="Profile" />
      </motion.div>
      <motion.h1 variants={itemVariants} className="text-7xl font-semibold">
        <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text ">
          I'm Ahad,{" "}
        </span>
        the Full Stack Developer from Pakistan
      </motion.h1>
      <motion.p variants={itemVariants}>
        Hey! I'm Ahad, a Full Stack Developer from Pakistan. I create
        professional websites and web applications for businesses and
        individuals. I love to work with modern technologies and frameworks to
        build high-quality products.
      </motion.p>
      <motion.div variants={itemVariants} className="flex gap-6 justify-center items-center max-md:flex-col">
        <button className="bg-gradient-to-r from-orange-500 to-pink-500 py-5 px-10 rounded-full hover:scale-105 transition-all duration-500 ">
          Contact With Me
        </button>
        <button className="bg-transparent border-[1px] border-white py-5 px-10 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-500 ">
          My Resume
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
