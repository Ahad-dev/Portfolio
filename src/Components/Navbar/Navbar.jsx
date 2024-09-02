import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import nav_underline from "../../assets/nav_underline.svg";
import { motion } from "framer-motion";

const navItems = [
  { id: "#home", label: "Home" },
  { id: "#aboutme", label: "About Me" },
  { id: "#services", label: "Services" },
  { id: "#skills", label: "Skills" },
  { id: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("#home");

  return (
    <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-white sticky top-0 bg-[#252525] z-50 flex py-6 justify-around items-center   ">
      <motion.img
        initial={{ x: -100,opacity:0 }}
        animate={{ x: 0 ,opacity:1}}
        transition={{ duration: 0.5, delay: 0.5 }}
      src={logo} alt="LOGO" />
      <ul className="flex items-center gap-10 max-md:hidden">
        {navItems.map((item,index) => (
          <motion.li 
          whileHover={{ scale: 1.2 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2*index }}


          key={item.id}>
            <AnchorLink onClick={() => setActive(item.id)} href={item.id}>
              {item.label}
            </AnchorLink>
            {active === item.id && <img src={nav_underline} alt="" />}
          </motion.li>
        ))}
      </ul>
      <motion.div
      initial={{ x: 100,opacity:0 }}
      animate={{ x: 0 ,opacity:1}}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="w-44">
        <AnchorLink
          href="#contact"
          className="bg-gradient-to-r from-orange-500 to-pink-500 p-4   rounded-full hover:scale-105 transition-all duration-500 "
        >
          Connect With Me
        </AnchorLink>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
