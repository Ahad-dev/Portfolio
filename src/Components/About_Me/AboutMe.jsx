import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import Info from "../personal_info/Info";
import { About_Me } from "../../assets/About_Me";
import {
  IoInformationCircle,
  IoSchoolSharp,
  IoBriefcaseSharp,
  IoCodeSlashSharp,
  IoRocketSharp,
  IoRibbonSharp,
} from "react-icons/io5";
import About_info from "../About_info/info";

const iconMap = {
  IoInformationCircle: (
    <IoInformationCircle size={50} className="absolute top-4 left-4 " />
  ),
  IoSchoolSharp: <IoSchoolSharp size={50} className="absolute top-4 left-4 " />,
  IoBriefcaseSharp: (
    <IoBriefcaseSharp size={50} className="absolute top-4 left-4 " />
  ),
  IoCodeSlashSharp: (
    <IoCodeSlashSharp size={50} className="absolute top-4 left-4 " />
  ),
  IoRocketSharp: <IoRocketSharp size={50} className="absolute top-4 left-4 " />,
  IoRibbonSharp: <IoRibbonSharp size={50} className="absolute top-4 left-4 " />,
};

const AboutMe = () => {
  return (
    <div id="aboutme" className="text-white flex justify-center flex-col gap-16 items-center">
      <div className="relative mb-10">
        <h1 className="text-7xl font-semibold z-10 relative">About Me</h1>
        <img
          src={theme_pattern}
          className="w-4/6 absolute top-5 -right-6"
          alt="ICON"
        />
      </div>
      <div className="flex w-5/6">
        <div className="">
          {About_Me.map((info, i) => (
            <Info
            key={i}
              title={info.title}
              detail={info.detail}
              icon={iconMap[info.icon]}
            ></Info>
          ))}
        </div>
      </div>
      <div className="flex gap-24 items-center justify-around max-md:flex-col max-md:gap-3">
        <About_info heading= "2+" desp="Years Of Experience"/> 
        <div className="bg-white/50 w-[1px] h-24"></div>
        <About_info heading= "30+" desp="Practical Projects"/> 
        <div className="bg-white/50 w-[1px] h-24"></div>
        <About_info heading= "10+" desp="Skills"/> 
      </div>
    </div>
  );
};

export default AboutMe;
