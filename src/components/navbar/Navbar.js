import React, { useState } from "react";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
import resume from "./Binish Rawal Resume.pdf";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="flex">
        <img className="h-12 w-12 rounded-full" src={logo} alt="logo" />
        <h1 className="flex justify-center mx-4 font-bold text-lg md:text-2xl items-center">
          Binish Rawal
        </h1>
      </div>
      <div className="flex">
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex">
          <div className="flex">
            <a href={resume} target="_blank" rel="noreferrer">
              <button className="flex items-center justify-center md:w-40 md:h-12 md:font-normal md:text-base w-24 h-10 text-xs bg-designColor mx-6 text-white rounded-xl">
                Download Resume
              </button>
            </a>
          </div>
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            <FiMenu />
          </span>
        </div>
        {showMenu && (
          <div className="w-full h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div className="flex flex-col items-center justify-center">
                <img className="w-32 rounded-full" src={logo} alt="logo" />
              </div>
              <ul className="flex flex-col items-center gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
