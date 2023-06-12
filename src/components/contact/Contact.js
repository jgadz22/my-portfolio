import React from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { Link } from "react-scroll";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black px-4"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" desc="Reach me out anytime" />
      </div>
      <div className="w-full mb-20">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <ContactRight />
        </div>
      </div>
      <div className="flex justify-center py-12">
        <Link 
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        >
          <div className="rounded-full p-5 hover:border-[1px] bg-[#141518] text-base text-gray-400 tracking-wider uppercase hover:text-white hover:border-designColor border-transparent duration-300 hover:animate-pulse">
            <HiOutlineChevronDoubleUp className="text-green-700 cursor-pointer" size={30} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
