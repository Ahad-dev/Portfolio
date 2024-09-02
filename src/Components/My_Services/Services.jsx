import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import { delay, motion, stagger, useInView } from "framer-motion";

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
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.2 } },
};

const Services = () => {
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const isInView1 = useInView(ref1, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
      id="services"
      className="text-white flex justify-center flex-col gap-16 items-center"
    >
      <div className="relative mb-10 text-white">
        <h1 className="text-7xl font-semibold z-10 relative max-sm:text-6xl">
          My Services
        </h1>
        <img
          src={theme_pattern}
          className="w-4/6 absolute top-5 -right-6"
          alt="ICON"
        />
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView1 ? "visible" : "hidden"}
        ref={ref1}
        className="flex flex-wrap gap-5 w-5/6 transition-all justify-center items-center "
      >
        {Services_Data.map((service, i) => (
          <motion.div
            variants={childVariants}
            whileHover={{ scale: 1.1 }}

            className="p-10 bg-gradient-to-br w-[20rem] h-[25rem] hover:scale-110 hover:border-pink-700 transition-all duration-500 from-orange-900 to-pink-800 border-2 border-white rounded-lg "
          >
            <div key={i} className="flex gap-4 items-center justify-center">
              <div className="text-3xl font-semibold">{service.s_no}</div>
              <div>
                <h1 className="text-3xl font-semibold bg-gradient-to-r from-5% from-orange-500 to-10% to-pink-500 text-transparent bg-clip-text">
                  {service.s_name}
                </h1>
                <p className="text-lg ">{service.s_desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
