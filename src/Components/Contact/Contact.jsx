import React, { useState } from "react";
import theme_pattern from "../../assets/theme_pattern.svg";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6c05cced-f990-4ed2-b996-58d4db81287c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className="text-white flex justify-center flex-col gap-16 items-center  "
    >
      <div className="relative mb-10">
        <h1 className="text-7xl font-semibold z-10 relative max-sm:text-5xl">Get in Touch</h1>
        <img
          src={theme_pattern}
          className="w-4/6 absolute top-5 -right-6"
          alt="ICON"
        />
      </div>
      <div className="flex gap-16  w-9/12 max-md:flex-col">
        <section className="w-[60%] space-y-10 max-sm:w-full">
          <h1 className="text-6xl  font-semibold bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 text-transparent">
            Let's Talk
          </h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="flex gap-5 items-center ">
            <IoMail size={30} />
            <span>muhammadahad211126@gmail.com</span>
          </div>
          <div className="flex gap-5  items-center">
            <FaPhone size={30} />
            <span>+923210222939</span>
          </div>
          <div className="flex gap-5  items-center">
            <FaLocationDot size={30} />
            <span>Faisalabad,Pakistan</span>
          </div>
        </section>
        <section className="w-5/6 max-sm:w-full ">
          <form onSubmit={onSubmit} className="flex flex-col w-full justify-center gap-5">
            <p>Your Name</p>
            <input
            name="name"
              type="text"
              className="p-5  bg-gray-800/70 rounded-lg text-gray-400 outline-none"
              placeholder="Enter Your Name"
            />
            <p>Your Email</p>
            <input
            name="email"
              type="text"
              className="p-5  bg-gray-800/70 rounded-lg text-gray-400 outline-none"
              placeholder="Enter Your Email"
            />
            <p>Write Your Message Here</p>
            <textarea
            name="message"
              cols="30"
              rows="10"
              placeholder="Enter Your Message"
              className="p-5 bg-gray-800/70 rounded-lg text-gray-400 outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-pink-500 p-5 px-16 text-xl transition-all duration-500 hover:scale-110 rounded-full text-center m-auto"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
