import React from "react";
import logo from "../../assets/logo.svg";
import { Social_Links } from "../../assets/SocialLinks";

const Footer = () => {
  return (
    <div className="text-white w-5/6 flex flex-col  m-auto gap-5 justify-around items-center">
      <div className="flex justify-between w-full">
        <img src={logo} alt="LOGO" />
        <div className="space-x-5 max-md:hidden">
          <input
            type="text"
            className="p-4 bg-gray-500 text-gray-200 outline-none rounded-full"
            placeholder="Enter Your Email"
          />
          <button className="bg-gradient-to-r from-orange-500 to-pink-500 p-3 px-12 text-xl transition-all duration-500 hover:scale-110 rounded-full text-center">
            Subscribe
          </button>
        </div>
      </div>
      <hr className="h-1 w-full" />
      <div className="flex justify-between w-full">
        <p className="mb-10">© 2024 M Ahad. All rights reserved.</p>
        <div className="flex gap-5">
          {Social_Links.map((link, i) => {
            const Icon = link.icon;
            return (
              <a key={i} className="hover:scale-110 transition-all duration-300" href={link.link}>
                {<Icon size={30}/>}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
