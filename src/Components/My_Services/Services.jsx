import React from 'react'
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from '../../assets/services_data';

const Services = () => {
  return (
    <div id='services' className="text-white flex justify-center flex-col gap-16 items-center">

     <div className="relative mb-10 text-white">
        <h1 className="text-7xl font-semibold z-10 relative max-sm:text-6xl">My Services</h1>
        <img
          src={theme_pattern}
          className="w-4/6 absolute top-5 -right-6"
          alt="ICON"
        />
      </div>
        <div className="flex flex-wrap gap-5 w-5/6 transition-all justify-center items-center ">
            {Services_Data.map((service, i) => (
                <div className='p-10 bg-gradient-to-br w-[20rem] h-[25rem] hover:scale-110 hover:border-pink-700 transition-all duration-500 from-orange-900 to-pink-800 border-2 border-white rounded-lg '>
                    <div key={i} className="flex gap-4 items-center justify-center">
                        <div className="text-3xl font-semibold">{service.s_no}</div>
                        <div>
                            <h1 className="text-3xl font-semibold bg-gradient-to-r from-5% from-orange-500 to-10% to-pink-500 text-transparent bg-clip-text">{service.s_name}</h1>
                            <p className="text-lg ">{service.s_desc}</p>
                        </div>
                    </div>
                </div>
            ))}
            </div>
    </div>
  )
}

export default Services