import React from "react";
import {motion,useInView} from 'framer-motion'

const Info = ({title,icon,detail}) => {

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });


  return (
    <div className="flex justify-center items-center gap-10">
      <div className="relative">
        <div className="p-10 w-10 h-10 rounded-full bg-gray-500 absolute -left-9 -top-8">{icon}</div>
        <div className="bg-[#c23ab1] w-2 h-[12rem] max-sm:h-[18rem]"></div>
      </div>
      <motion.div 
      ref={ref}
      initial={{opacity:0,x:150}}
      animate={isInView ? {opacity:1,x:0} : {}}
      transition={{duration:0.5}}
      className="space-y-5 w-2/3 max-lg:w-full ">
        <h3 className="text-4xl font-semibold">{title}</h3>
        <p className="text-slate-500/60 ml-10">
          {detail}
        </p>
      </motion.div>
    </div>
  );
};

export default Info;
