import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";

const Contact = () => {
  return (
    <section
      id="contacts"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="w-full flex flex-col items-center py-10">
        <div className="w-[370px] h-[550px] md:w-[580px] md:h-[350px] rounded-xl flex flex-col md:flex-row items-center justify-center gap-4 bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne">
          <div>
            <img className="w-52 rounded-full" src={logo} alt="logo" />
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col h-full items-center gap-4">
              <h3 className="text-3xl font-bold text-white">Binish Rawal</h3>
              <p className="text-lg font-normal text-gray-200">
                Frontend Developer/MERN Stack Developer
              </p>
              <p className="text-base text-gray-400 gap-2">
                Phone:{" "}
                <a href="tel:+919004108162" className="text-lightText">
                  +91 9004108162
                </a>
              </p>
              <p className="text-base text-gray-400 gap-2">
                Alternate-Phone:{" "}
                <a href="https://wa.me/919326671226" className="text-lightText">
                  +91 9326671226
                </a>
              </p>
              <p className="text-base text-gray-400  gap-2">
                Email:{" "}
                <a
                  href="mailto:binish.rawal30@gmail.com"
                  className="text-lightText"
                >
                  binish.rawal30@gmail.com
                </a>
              </p>
            </div>

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
        </div>
      </div>
    </section>
  );
};

export default Contact;