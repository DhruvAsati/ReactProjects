import React from "react";
import expimg from "../images/express.png";
import reactImg from "../images/react.png";
import nodeImg from "../images/node.png";
import pythonImg from "../images/python.png";
import javaImg from "../images/java.png";

const Portfolio = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-5" id="Portfolio">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <p className="underline font-bold">FeaturedProjects</p>
        <div className="flex flex-wrap gap-16 my-10 justify-center">
          <div className="w-[350px] h-[250] p-5 flex flex-col border border-slate-400 rounded-2xl hover:scale-110 duration-700 ease-in-out">
            <img
              src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"
              alt="MongoDb"
              className="w-32 h-32 rounded-full border hover:scale-105"
            />
            <div className="flex flex-col justify-start">
              <h3 className="font-bold my-2 text-2xl">MongoDB</h3>
              <p className="text-justify text-lg font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="m-2 space-x-3">
                <button className="px-2 py-5 bg-green-400 text-white rounded-lg hover:bg-green-700">
                  View Project
                </button>
                <button className="px-2 py-5 bg-blue-400 text-white rounded-lg hover:bg-blue-700">
                  Source Code
                </button>
              </div>
            </div>
          </div>

          <div className="w-[350px] h-[250] p-5 flex flex-col border border-slate-400 rounded-2xl hover:scale-110 duration-700 ease-in-out">
            <img
              src={expimg}
              alt="express"
              className="w-[200px] h-[120px] rounded-full hover:scale-105"
            />
            <div className="flex flex-col justify-start">
              <h3 className="font-bold my-2 text-2xl">Express</h3>
              <p className="text-justify text-lg font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="m-2 space-x-3">
                <button className="px-2 py-5 bg-green-400 text-white rounded-lg hover:bg-green-700">
                  View Project
                </button>
                <button className="px-2 py-5 bg-blue-400 text-white rounded-lg hover:bg-blue-700">
                  Source Code
                </button>
              </div>
            </div>
          </div>

          <div className="w-[350px] h-[250] p-5 flex flex-col border border-slate-400 rounded-2xl hover:scale-110 duration-700 ease-in-out">
            <img
              src={reactImg}
              alt="React"
              className="w-32 h-32 rounded-full border hover:scale-105"
            />
            <div className="flex flex-col justify-start">
              <h3 className="font-bold my-2 text-2xl">React</h3>
              <p className="text-justify text-lg font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="m-2 space-x-3">
                <button className="px-2 py-5 bg-green-400 text-white rounded-lg hover:bg-green-700">
                  View Project
                </button>
                <button className="px-2 py-5 bg-blue-400 text-white rounded-lg hover:bg-blue-700">
                  Source Code
                </button>
              </div>
            </div>
          </div>

          <div className="w-[350px] h-[250] p-5 flex flex-col border border-slate-400 rounded-2xl hover:scale-110 duration-700 ease-in-out">
            <img
              src={nodeImg}
              alt="React"
              className="w-32 h-32 rounded-full border hover:scale-105"
            />
            <div className="flex flex-col justify-start">
              <h3 className="font-bold my-2 text-2xl">Node Js</h3>
              <p className="text-justify text-lg font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="m-2 space-x-3">
                <button className="px-2 py-5 bg-green-400 text-white rounded-lg hover:bg-green-700">
                  View Project
                </button>
                <button className="px-2 py-5 bg-blue-400 text-white rounded-lg hover:bg-blue-700">
                  Source Code
                </button>
              </div>
            </div>
          </div>

          <div className="w-[350px] h-[250] p-5 flex flex-col border border-slate-400 rounded-2xl hover:scale-110 duration-700 ease-in-out">
            <img
              src={pythonImg}
              alt="React"
              className="w-32 h-32 rounded-full border hover:scale-105"
            />
            <div className="flex flex-col justify-start">
              <h3 className="font-bold my-2 text-2xl">Python</h3>
              <p className="text-justify text-lg font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="m-2 space-x-3">
                <button className="px-2 py-5 bg-green-400 text-white rounded-lg hover:bg-green-700">
                  View Project
                </button>
                <button className="px-2 py-5 bg-blue-400 text-white rounded-lg hover:bg-blue-700">
                  Source Code
                </button>
              </div>
            </div>
          </div>

          <div className="w-[350px] h-[250] p-5 flex flex-col border border-slate-400 rounded-2xl hover:scale-110 duration-700 ease-in-out">
            <img
              src={javaImg}
              alt="React"
              className="w-32 h-32 rounded-full border hover:scale-105"
            />
            <div className="flex flex-col justify-start">
              <h3 className="font-bold my-2 text-2xl">Java</h3>
              <p className="text-justify text-lg font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="m-2 space-x-3">
                <button className="px-2 py-5 bg-green-400 text-white rounded-lg hover:bg-green-700">
                  View Project
                </button>
                <button className="px-2 py-5 bg-blue-400 text-white rounded-lg hover:bg-blue-700">
                  Source Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Portfolio;
