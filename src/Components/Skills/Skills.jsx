import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import { Skills_set } from "../../assets/Skills";
import { motion,useInView } from "framer-motion";
// import javascript from "../../assets/javascript.svg";z


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: 100, scale: 0 },
  visible: { opacity: 1, x: 0, scale:1 , transition: { duration: 0.2 } },
};
const Skills = () => {

  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView1 = useInView(ref1, { once: true });
  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 100 }}
    animate={isInView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay: 0.3 }} id="skills" className="text-white flex justify-center flex-col gap-16 items-center">
      <div className="relative mb-10">
        <h1 className="text-7xl font-semibold z-10 relative">My Skills</h1>
        <img
          src={theme_pattern}
          className="w-4/6 absolute top-5 -right-6"
          alt="ICON"
        />
      </div>
      <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView1 ? "visible" : "hidden"} className="flex flex-wrap gap-5 justify-center items-center w-11/12">

      {Skills_set.map((skill, index) => {
        const IconComponent = skill.icon;
        return (
          <motion.div
          variants={childVariants}
          ref={ref1} key={index} className="px-16 py-12 bg-transparent rounded-lg border-2 border-white/50 flex flex-col gap-8 hover:bg-gradient-to-r from-orange-800 to-pink-800 transition-color duration-500 hover:scale-110 hover:border-pink-700 ">
            <div className="skill">
              <IconComponent size={100} />
              <h3 className="text-2xl text-center">{skill.title}</h3>
            </div>
          </motion.div>
        );
      })}
      </motion.div>

    </motion.div>
  );
};

export default Skills;
