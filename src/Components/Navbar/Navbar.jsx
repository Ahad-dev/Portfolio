import React,{useState} from 'react'
import logo from '../../assets/logo.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import nav_underline from "../../assets/nav_underline.svg";
const Navbar = () => {
  const [active, setActive] = useState("#home")

  return (
    <nav className='text-white flex mt-6 justify-around items-center   '>
        <img src={logo} alt="LOGO" />
        <ul className='flex items-center gap-10 max-md:hidden'>
            <li><AnchorLink onClick={()=>setActive("#home")} href="#home">Home</AnchorLink>{active == "#home" &&<img src={nav_underline} alt="" />}</li>
            <li className=''><AnchorLink onClick={()=>setActive("#aboutme")} href="#aboutme">About Me</AnchorLink>{active == "#aboutme" &&<img src={nav_underline} alt="" />}</li>
            <li className=''><AnchorLink onClick={()=>setActive("#services")} href="#services">Services</AnchorLink>{active == "#services" &&<img src={nav_underline} alt="" />}</li>
            <li className=''><AnchorLink onClick={()=>setActive("#skills")} href="#skills">Skills</AnchorLink>{active == "#skills" &&<img src={nav_underline} alt="" />}</li>
            <li className=''><AnchorLink onClick={()=>setActive("#contact")} href="#contact">Contact</AnchorLink>{active == "#contact" &&<img src={nav_underline} alt="" />}</li>
        </ul>
        <div className='w-44'>
        <AnchorLink href="#contact" className='bg-gradient-to-r from-orange-500 to-pink-500 p-4   rounded-full hover:scale-105 transition-all duration-500 '>Connect With Me</AnchorLink>
        </div>
    </nav>
  )
}

export default Navbar