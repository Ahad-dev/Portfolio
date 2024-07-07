import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from "./Components/Hero/Hero"
import AboutMe from './Components/About_Me/AboutMe'
import Services from './Components/My_Services/Services'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div className='space-y-32'>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Services></Services>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App