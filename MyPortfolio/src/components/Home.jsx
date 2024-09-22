import React from "react";
import logo from "../images/logo.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-5" id="Home">
        <div className="flex justify-between flex-col-reverse md:flex-row w-50">
          <div className="md:w-1/2 mt-2 md:mt-24 space-y-2">
            <h3 className="text-2xl font-semibold py-2 z-0">Welcome In My Feed</h3>
           <div className="inline-block">
              <h1 className="text-4xl font-medium py-3 ">
                  Hello, i'm a &nbsp;
              </h1>
              <span className="text-red-700"></span>
            </div>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                1000,
                "Web Designer",
                1000,
                "Programmer",
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2.5em', display: 'inline-block', fontWeight: 'bold', color: 'red'}}
              repeat={Infinity}
            />
            <p className="text-justify md:text-md text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Quisquam, recusandae consequatur. Accusamus sint libero eligendi
              laborum fuga repudiandae? Asperiores tempore eos animi dolores
              corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio
              cum delectus sit voluptatum aut ratione quaerat veniam aperiam!
            </p>
            <div className="flex flex-col justify-between items-center md:flex-row">
              <div className="flex flex-col">
                <h2 className="text-xl font-medium my-2">Available on</h2>
                <ul className="flex space-x-3 text-xl cursor-pointer my-3">
                  <li className="hover:text-green-600 cursor-pointer text-2xl">
                    <a href="https://www.facebook.com/" target="_blank">
                    <FaSquareFacebook/></a></li>
                  <li className="hover:text-green-600 cursor-pointer text-2xl">
                  <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedin /></a>
                  </li>
                  <li className="hover:text-green-600 cursor-pointer text-2xl">
                  <a href="https://www.youtube.com/" target="_blank">
                  <FaYoutube /></a>
                  </li>
                  <li className="hover:text-green-600 cursor-pointer text-2xl">
                  <a href="https://www.telegram.com/" target="_blank">
                  <FaTelegram /></a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl font-medium my-2">Currently working on</h2>
                <ul className="flex space-x-5 text-xl cursor-pointer my-3">
                  <li className="hover:text-green-600 cursor-pointer text-2xl">
                    <SiMongodb />
                  </li>
                  <li className="hover:text-green-600 cursor-pointer text-2xl">
                    <SiExpress />
                  </li>
                  <li className="hover:text-green-600 cursor-pointer text-2xl">
                    <FaReact />
                  </li>
                 <li className="hover:text-green-600 cursor-pointer text-2xl">
                 <FaNodeJs />
                 </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:mt-20 md:ml-40 mt-8">
            <img
              src={logo}
              alt="Developer"
              className="w-[450px] h-[450px] rounded-full -px-16 md:mx-16"
            />
          </div>
        </div>
      </div>
      <hr />


    </>
  );
};

export default Home;
