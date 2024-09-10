import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedinIn, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Frontend Developer.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">Welcome to my world</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Binish Rawal</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          🚀 Hey there! I'm your tech-savvy partner in crafting innovative
          software solutions! Whether it's building sleek web applications with
          ReactJS, NodeJS, and MongoDB, I’m all about turning complex challenges
          into seamless, user-friendly experiences.
          <br />
          <br />
          With a background that spans from India's tech giants to Germany's
          cutting-edge companies, I’ve developed a keen eye for optimizing
          performance and delivering solid, reliable results. Need someone who
          can spot bugs quickly and streamline your operations? Look no further!
          <br />
          <br />
          I'm all about collaboration and bringing ideas to life. Let’s team up
          and create software that’s not just functional but truly impactful.
          Ready to make some tech waves? 🌊💻
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Find Me</h2>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/binish-rawal-274514158/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>

            <a
              href="https://github.com/Binish30"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">Skills</h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;