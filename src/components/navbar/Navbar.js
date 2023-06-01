import React from "react";
import { logo } from "../../assets/assetsIndex";
import { navLinksdata } from "../../constants/constantsIndex";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="z-20 w-full h-24 sticky top-0 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logo} alt="logo" width="70" className="rounded-full" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
          {navLinksdata.map(({_id, title, link}) => (
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
      </div>
    </div>
  );
};

export default Navbar;
