import React, { useState } from "react";
import { logo } from "../../assets/assetsIndex";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { navLinksdata } from "../../constants/constantsIndex";
import { Link } from "react-scroll";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="z-20 w-full h-24 sticky top-0 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="px-4">
        <img src={logo} alt="logo" width="70" className="rounded-full" />
      </div>
      <div className="px-4">
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
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-12 h-12 inline-flex items-center justify-center rounded-full cursor-pointer group"
        >
          <FiMenu className="group-hover:scale-110 ease-in duration-300 text-white hover:text-designColor  " />
        </span>
        <div
        className={
          showMenu ? "mdl:hidden fixed left-0 top-0 w-[80%] md-[60%]  h-screen" : ""
        }
      >
        {showMenu && (
          <div className="w-[80%] md-[60%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div>
              <div>
                <img
                  src={logo}
                  alt="logo"
                  width="70"
                  className="rounded-full"
                />
                <p className="text-md text-gray-400 mt-2 text-justify p-2">
                  Embracing the Artistry of Front-End Development, Crafting
                  Immersive User Journeys with Meticulous Code, Stunning
                  Visuals, and SeamlessInteractions.
                </p>
              </div>
              <ul className="flex flex-col gap-6 p-2 mt-2">
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
                      onClick={() => setShowMenu(false)}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <a href="https://www.facebook.com/joseph.gadiaza/">
                      <FaFacebookF />
                    </a>
                  </span>
                  <span className="bannerIcon">
                    <a href="https://www.github.com/jgadz22">
                      <FaGithub />
                    </a>
                  </span>
                  <span className="bannerIcon">
                    <a href="https://www.linkedin.com/in/joseph-gadiaza-31b7311a1/">
                      <FaLinkedinIn />
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setShowMenu(false)}
              className="absolute top-6 right-4 text-gray-400 hover:text-designColor flex items-center justify-center cursor-pointer duration-300 text-3xl hover:scale-110 ease-in bg-black rounded-full p-2"
            >
              <MdClose />
            </span>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
