import React from "react";
import expimg from "../images/express.png";
import reactImg from "../images/react.png";
import nodeImg from "../images/node.png";
import pythonImg from "../images/python.png";
import javaImg from "../images/java.png";
import htmlImg from "../images/html.png";
import css3Img from "../images/css3.png";
import jsImg from "../images/js.png";

const Experience = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-8" id="Experience">
        <h1 className="text-3xl font-bold my-5">My Experience</h1>
        <p>
          As a fresher in web development, I bring 1 year and 8 months of
          experience from my time at Tech Mahindra in a chat process role. This
          experience has honed my communication skills and taught me the
          importance of user-centric solutions. Transitioning into web
          development, I’m excited to apply my technical skills and
          problem-solving abilities to create engaging and efficient web
          applications. I’m eager to learn and grow in this dynamic field,
          leveraging my background to enhance user experiences.
        </p>
        <div>
          <h2 className="text-xl font-semibold my-5">Technical Skills</h2>
          <div className="flex flex-wrap gap-8 justify-center text-xl cursor-pointer my-3 items-center">
            <img
              src={htmlImg}
              alt="HTML"hover:shadow-2xl
              className="h-52 w-52 rounded-full hover:scale-105 border border-slate-400 hover:shadow-2xl"
            />
            <img
              src={css3Img}
              alt="CSS3"
              className="h-52 w-52 rounded-full hover:scale-105 border border-slate-400 hover:shadow-2xl"
            />
            <img
              src={jsImg}
              alt="JavaScript"
              className="h-52 w-52 rounded-full hover:scale-105  border border-slate-400 hover:shadow-2xl"
            />
            <img
              src={expimg}
              alt="Express"
              className="h-52 w-52 rounded-full hover:scale-105 border border-slate-400 hover:shadow-2xl"
            />
            <img
              src={reactImg}
              alt="React"
              className="h-52 w-52 rounded-full hover:scale-105 border border-slate-400 hover:shadow-2xl"
            />
            <img
              src={nodeImg}
              alt="Node.js"
              className="h-52 w-52 rounded-full hover:scale-105 border border-slate-400 hover:shadow-2xl"
            />
            <img
              src={pythonImg}
              alt="Python"
              className="h-52 w-52 rounded-full hover:scale-105 border border-slate-400 hover:shadow-2xl"
            />
            <img
              src={javaImg}
              alt="Java"
              className="h-52 w-52 rounded-full hover:scale-105 border border-slate-400 hover:shadow-2xl"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Experience;
