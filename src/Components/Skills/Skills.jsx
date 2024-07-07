import React from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import { Skills_set } from "../../assets/Skills";
// import javascript from "../../assets/javascript.svg";z
const Skills = () => {
  return (
    <div id="skills" className="text-white flex justify-center flex-col gap-16 items-center">
      <div className="relative mb-10">
        <h1 className="text-7xl font-semibold z-10 relative">My Skills</h1>
        <img
          src={theme_pattern}
          className="w-4/6 absolute top-5 -right-6"
          alt="ICON"
        />
      </div>
      <div className="flex flex-wrap gap-5 justify-center items-center w-11/12">

      {Skills_set.map((skill, index) => {
        const IconComponent = skill.icon;
        return (
          <div key={index} className="px-16 py-12 bg-transparent rounded-lg border-2 border-white/50 flex flex-col gap-8 hover:bg-gradient-to-r from-orange-800 to-pink-800 transition-color duration-500 hover:scale-110 hover:border-pink-700 ">
            <div className="skill">
              <IconComponent size={100} />
              <h3 className="text-2xl text-center">{skill.title}</h3>
            </div>
          </div>
        );
      })}
      </div>

    </div>
  );
};

export default Skills;
